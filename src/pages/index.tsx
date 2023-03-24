import type { NextPage } from "next";
import { useState } from "react";
import { InlineMath } from "react-katex";
import { MainKeypad } from "../components/templates/keypads/MainKeypad";
import type { KeypadCategory } from "../types/KeypadCategory";
import "katex/dist/katex.min.css";
import { FuncKeypad } from "../components/templates/keypads/FuncKeypad";
import { useModalController } from "../hooks/useModalController";
import { SettingsModal } from "../components/templates/modals/SettingsModal";
import { useEquation } from "../hooks/useEquation";
import { Button } from "../components/uiParts/Button";
import { IoArrowRedoSharp, IoSettingsSharp } from "react-icons/io5";
import { FaEraser } from "react-icons/fa";
import { TbMathFunction } from "react-icons/tb";

const IndexPage: NextPage = () => {
  const [calculationResults, setCalculationResults] = useState<string[]>([]);
  const [currentKeypad, setCurrentKeypad] = useState<KeypadCategory>("main");

  const { equation, setEquation, equationControllers } = useEquation("");
  const modal = useModalController(false);

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
          {calculationResults.map((result, idx) => (
            <div key={idx} className="flex">
              <InlineMath>{String.raw`${result}`}</InlineMath>
            </div>
          ))}
        </div>
        <form
          className="fixed bottom-0 w-full bg-slate-300"
          onSubmit={handleSubmit}
        >
          <input
            className="h-[32px] w-full cursor-pointer rounded border border-red-500 font-roboto-medium font-medium"
            type="text"
            value={equation}
            onChange={(e) => setEquation(e.target.value)}
          />
          <div className="h-[24px] w-full rounded border  border-green-500 bg-white">
            <InlineMath>{String.raw`${equation}`}</InlineMath>
          </div>
          <div className="flex">
            <FuncKeypad {...equationControllers} />
            <MainKeypad {...equationControllers} />
          </div>
          <div className="grid grid-cols-6 grid-rows-1">
            <Button onClick={() => setCurrentKeypad("func")}>
              <TbMathFunction />
            </Button>
            <Button onClick={() => setCalculationResults([])}>
              <FaEraser />
            </Button>
            <Button onClick={() => open()}>
              <IoSettingsSharp />
            </Button>
            <Button onClick={() => setEquation((prev) => prev.slice(0, -1))}>
              DEL
            </Button>
            <Button onClick={equationControllers.reset}>AC</Button>
            <Button color={"blue"} type={"submit"}>
              <IoArrowRedoSharp />
            </Button>
          </div>
        </form>
      </div>
      <SettingsModal {...modal} />
    </div>
  );
};

export default IndexPage;
