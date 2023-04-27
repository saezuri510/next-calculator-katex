import type { NextPage } from "next";
import { useState } from "react";
import { FaEraser } from "react-icons/fa";
import { IoArrowRedoSharp } from "react-icons/io5";
import { TbMathFunction, TbMathIntegral, TbMathSymbols } from "react-icons/tb";
import { InlineMath } from "react-katex";

import { Func2Keypad } from "../components/keypads/Func2Keypad";
import { FuncKeypad } from "../components/keypads/FuncKeypad";
import { MainKeypad } from "../components/keypads/MainKeypad";
import "katex/dist/katex.min.css";
import { SettingsModal } from "../components/modals/SettingsModal";
import { Button } from "../components/ui/Button";
import { useEquation } from "../hooks/useEquation";
import { useWindowWidth } from "../hooks/useWindowWidth";
import type { KeypadCategory } from "../types/KeypadCategory";
import { captureElement } from "../utils/captureElement";

const IndexPage: NextPage = () => {
  const [calculationResults, setCalculationResults] = useState<string[]>([]);
  const [currentKeypad, setCurrentKeypad] = useState<KeypadCategory>("main");
  const [isKeypadActive, setIsKeypadActive] = useState<boolean>(true);

  const { equation, equationControllers, setEquation } = useEquation("");
  const { windowWidth } = useWindowWidth();

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
          <Button onClick={() => captureElement("#capture")}>screenshot</Button>
          <div id="capture">
            {calculationResults.map((result, idx) => (
              <div key={idx} className="flex">
                <InlineMath>{String.raw`${result}`}</InlineMath>
              </div>
            ))}
          </div>
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
              <Func2Keypad {...equationControllers} currentKeypad={currentKeypad} />
              <MainKeypad {...equationControllers} currentKeypad={currentKeypad} />
            </div>
            <div className="grid grid-cols-6 grid-rows-1">
              {(() => {
                if (windowWidth === "sm") {
                  switch (currentKeypad) {
                    case "main":
                      return (
                        <Button onClick={() => setCurrentKeypad("func")}>
                          <TbMathFunction />
                        </Button>
                      );
                    case "func":
                      return (
                        <Button onClick={() => setCurrentKeypad("func2")}>
                          <TbMathIntegral />
                        </Button>
                      );
                    case "func2":
                      return (
                        <Button onClick={() => setCurrentKeypad("main")}>
                          <TbMathSymbols />
                        </Button>
                      );
                  }
                } else {
                  return currentKeypad !== "func2" ? (
                    <Button onClick={() => setCurrentKeypad("func2")}>
                      <TbMathIntegral />
                    </Button>
                  ) : (
                    <Button onClick={() => setCurrentKeypad("func")}>
                      <TbMathFunction />
                    </Button>
                  );
                }
              })()}

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
