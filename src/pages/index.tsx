import type { NextPage } from "next";
import { InlineMath } from "react-katex";

const Home: NextPage = () => {
  return (
    <div>
      <div className="text-red-500">Hello world</div>
      <InlineMath>\int_0^\infty x^2 dx</InlineMath>
    </div>
  );
};

export default Home;
