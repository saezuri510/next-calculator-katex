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

const IndexPage: NextPage = () => {
  const [calculationResults, setCalculationResults] = useState<string[]>([]);
  const [currentKeypad, setCurrentKeypad] = useState<KeypadCategory>("main");

  const [equation, setEquation, equationController] = useEquation("");
  const modal = useModalController(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //式を受け取り計算
    setCalculationResults((prev) => [...prev, equation]);
    equationController.reset();
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
          {currentKeypad === "main" && (
            <MainKeypad
              {...equationController}
              setEquation={setEquation}
              setCalculationResults={setCalculationResults}
              setCurrentKeypad={setCurrentKeypad}
              open={modal.open}
            />
          )}
          {currentKeypad === "func" && (
            <FuncKeypad
              {...equationController}
              setCalculationResults={setCalculationResults}
              setCurrentKeypad={setCurrentKeypad}
              open={modal.open}
            />
          )}
        </form>
      </div>
      <SettingsModal {...modal} />
    </div>
  );
};

export default IndexPage;
