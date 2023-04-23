import type { NextPage } from "next";
import { useState } from "react";
import { FaEraser } from "react-icons/fa";
import { IoArrowRedoSharp } from "react-icons/io5";
import { TbMathFunction } from "react-icons/tb";
import { InlineMath } from "react-katex";

import { FuncKeypad } from "../components/keypads/FuncKeypad";
import { MainKeypad } from "../components/keypads/MainKeypad";
import "katex/dist/katex.min.css";
import { SettingsModal } from "../components/modals/SettingsModal";
import { Button } from "../components/ui/Button";
import { useEquation } from "../hooks/useEquation";
import type { KeypadCategory } from "../types/KeypadCategory";

const IndexPage: NextPage = () => {
  const [calculationResults, setCalculationResults] = useState<string[]>([]);
  const [currentKeypad, setCurrentKeypad] = useState<KeypadCategory>("main");
  const [isKeypadActive, setIsKeypadActive] = useState<boolean>(true);

  const { equation, equationControllers, setEquation } = useEquation("");

  const handleScreenShot = async () => {
    const res = await fetch("/api/screenshot", {
      body: "localhost:3000",
      method: "GET",
    });

    console.log(res);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //式を受け取り計算
    setCalculationResults((prev) => [...prev, equation]);
    equationControllers.reset();
  };

  return (
    <div>
      <div>
        <div>
          <Button onClick={() => handleScreenShot()}>screenshot</Button>
          {calculationResults.map((result, idx) => (
            <div key={idx} className="flex">
              <InlineMath>{String.raw`${result}`}</InlineMath>
            </div>
          ))}
        </div>
        {isKeypadActive && (
          <form className="fixed bottom-0 w-full bg-slate-300" onSubmit={handleSubmit}>
            <input
              className="h-[32px] w-full cursor-pointer rounded border border-red-500 font-roboto-medium font-medium"
              onChange={(e) => setEquation(e.target.value)}
              type="text"
              value={equation}
            />
            <div className="h-[64px] w-full rounded border  border-green-500 bg-white">
              <InlineMath>{String.raw`${equation}`}</InlineMath>
            </div>
            <div className="flex">
              <FuncKeypad {...equationControllers} currentKeypad={currentKeypad} />
              <MainKeypad {...equationControllers} currentKeypad={currentKeypad} />
            </div>
            <div className="grid grid-cols-6 grid-rows-1">
              <Button onClick={() => setCurrentKeypad("func")}>
                <TbMathFunction />
              </Button>
              <Button onClick={() => setCalculationResults([])}>
                <FaEraser />
              </Button>
              <SettingsModal setIsKeypadActive={setIsKeypadActive} />
              <Button onClick={() => setEquation((prev) => prev.slice(0, -1))}>DEL</Button>
              <Button onClick={equationControllers.reset}>AC</Button>
              <Button color={"blue"} type={"submit"}>
                <IoArrowRedoSharp />
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default IndexPage;
