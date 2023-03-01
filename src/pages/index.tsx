import type { NextPage } from "next";
import { useState } from "react";
import { InlineMath } from "react-katex";
import { MathKeypad } from "../components/MathKeypad";
import "katex/dist/katex.min.css";

const Home: NextPage = () => {
  const [equation, setEquation] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEquation(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //式を受け取り計算
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={equation} onChange={handleChange} />
        <br />
        <InlineMath>{String.raw`${equation}`}</InlineMath>
        <MathKeypad setEquation={setEquation} />
      </form>
    </div>
  );
};

export default Home;
