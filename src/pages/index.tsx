import type { NextPage } from "next";
import { useState } from "react";
import { BlockMath, InlineMath } from "react-katex";
import { MathKeypad } from "../components/templates/MathKeypad";
import "katex/dist/katex.min.css";

const Home: NextPage = () => {
  const [equation, setEquation] = useState<string>("");
  const [Results, SetResults] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEquation(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //式を受け取り計算
    SetResults((prev) => [...prev, equation]);
    setEquation("");
  };

  return (
    <div>
      <div>
        {Results.map((result, idx) => (
          <div key={idx} className="flex">
            <InlineMath>{result}</InlineMath>
          </div>
        ))}
      </div>
      <form
        className="fixed bottom-0 w-full bg-slate-300"
        onSubmit={handleSubmit}
      >
        <input
          className="h-[32px] w-full cursor-pointer rounded border border-red-500 font-medium"
          type="text"
          value={equation}
          onChange={handleChange}
        />
        <div className="h-[24px] w-full rounded border  border-green-500 bg-white">
          <InlineMath>{String.raw`${equation}`}</InlineMath>
        </div>
        <MathKeypad setEquation={setEquation} SetResults={SetResults} />
      </form>
    </div>
  );
};

export default Home;
