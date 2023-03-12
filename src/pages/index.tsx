import type { NextPage } from "next";
import { useState } from "react";
import { InlineMath } from "react-katex";
import { MainKeypad } from "../components/templates/keypads/MainKeypad";
import type { KeypadCategory } from "../types/KeypadCategory";
import "katex/dist/katex.min.css";
import { FuncKeypad } from "../components/templates/keypads/FuncKeypad";
import { useModalControll } from "../hooks/useModalControll";
import { SettingsModal } from "../components/templates/modals/SettingsModal";

const IndexPage: NextPage = () => {
  const [equation, setEquation] = useState<string>("");
  const [CalculationResults, SetCalculationResults] = useState<string[]>([]);
  const [currentKeypad, setCurrentKeypad] = useState<KeypadCategory>("main");
  const modal = useModalControll(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEquation(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //式を受け取り計算
    SetCalculationResults((prev) => [...prev, equation]);
    setEquation("");
  };

  return (
    <div>
      <div>
        <div>
          {CalculationResults.map((result, idx) => (
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
            onChange={handleChange}
          />
          <div className="h-[24px] w-full rounded border  border-green-500 bg-white">
            <InlineMath>{String.raw`${equation}`}</InlineMath>
          </div>
          {currentKeypad === "main" && (
            <MainKeypad
              setEquation={setEquation}
              SetCalculationResults={SetCalculationResults}
              setCurrentKeypad={setCurrentKeypad}
              open={modal.open}
            />
          )}
          {currentKeypad === "func" && (
            <FuncKeypad
              setEquation={setEquation}
              SetCalculationResults={SetCalculationResults}
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
