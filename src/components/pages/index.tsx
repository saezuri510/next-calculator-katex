import clsx from "clsx";
import type { NextPage } from "next";
import { useState } from "react";
import { FaEraser } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { IoArrowRedoSharp, IoSettingsSharp } from "react-icons/io5";
import { TbMathFunction, TbMathIntegral, TbMathSymbols } from "react-icons/tb";
import { InlineMath } from "react-katex";

import "katex/dist/katex.min.css";
import { SettingsModal } from "../../features/root/components/SettingsModal";
import { Func2Keypad } from "../../features/root/components/keypads/Func2Keypad";
import { FuncKeypad } from "../../features/root/components/keypads/FuncKeypad";
import { MainKeypad } from "../../features/root/components/keypads/MainKeypad";
import { useEquation } from "../../features/root/hooks/useEquation";
import { KeypadCategory } from "../../features/root/types/KeypadCategory";
import { useInactiveVisibility } from "../../hooks/useInactiveVisibility";
import { useResponsiveSize } from "../../hooks/useResponsiveSize";
import { useWindowScroll } from "../../hooks/useWindowScroll";
import { SimpleButton } from "../ui/domain/SimpleButton";

export const IndexPage: NextPage = () => {
  const [calculationResults, setCalculationResults] = useState<string[]>([]);
  const [currentKeypad, setCurrentKeypad] = useState<KeypadCategory>("main");
  const [isKeypadActive, setIsKeypadActive] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { equation, equationControllers, setEquation } = useEquation("");
  const { ResponsiveSize } = useResponsiveSize();
  // TODO: テストコードなので削除する.
  // const { data, error, loading } = useQuery(AllUsersDocument);
  const { isElementShown, setIsElementShown } = useWindowScroll(true);
  const { isVisible, resetTimer } = useInactiveVisibility();

  const isMenuShown = !isKeypadActive && (isElementShown || isVisible);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //式を受け取り計算
    setCalculationResults((prev) => [...prev, equation]);
    equationControllers.reset();
  };

  const handleClick = () => {
    setIsElementShown(false);
    resetTimer();
  };

  // TODO: テスト用だから削除する.
  // if (error) {
  //   return <p>{error.message}</p>;
  // }

  // if (loading) {
  //   return <p>loading...</p>;
  // }

  return (
    <div>
      {isMenuShown && (
        <div>
          <div className="fixed bottom-[64px] right-[64px]">
            <SimpleButton className="h-auto rounded-full p-[16px]" onClick={() => setIsOpen(true)}>
              <IoSettingsSharp className="h-[48px] w-[48px]" />
            </SimpleButton>
          </div>
          <div className="fixed bottom-[120px] right-[56px]">
            <SimpleButton className="rounded-full bg-gray-300 p-[8px]" onClick={handleClick}>
              <ImCross />
            </SimpleButton>
          </div>
        </div>
      )}
      <div className={clsx({ "h-screen overflow-scroll pb-[256px]": isKeypadActive })}>
        {/* TODO: テストコードなので削除する. */}
        {/* <ul>
          {data?.users.map((user, idx) => {
            return (
              <li key={idx}>
                <p>{user?.name}</p>
              </li>
            );
          })}
        </ul> */}
        <div id="capture">
          {calculationResults.map((result, idx) => (
            <div key={idx} className="flex">
              <InlineMath>{String.raw`${result}`}</InlineMath>
            </div>
          ))}
        </div>
      </div>
      {isKeypadActive && (
        <form className="fixed bottom-0 h-fit w-full bg-slate-300" onSubmit={handleSubmit}>
          <input
            className="h-[32px] w-full cursor-pointer rounded border border-red-500 font-roboto-medium font-medium"
            onChange={(e) => setEquation(e.target.value)}
            type="text"
            value={equation}
          />
          <div className="h-[64px] w-full rounded border border-green-500 bg-white">
            <InlineMath>{String.raw`${equation}`}</InlineMath>
          </div>
          <div className="flex">
            <FuncKeypad {...equationControllers} currentKeypad={currentKeypad} />
            <Func2Keypad {...equationControllers} currentKeypad={currentKeypad} />
            <MainKeypad {...equationControllers} currentKeypad={currentKeypad} />
          </div>
          <div className="grid grid-cols-6 grid-rows-1">
            {(() => {
              if (ResponsiveSize === "sm") {
                switch (currentKeypad) {
                  case "main":
                    return (
                      <SimpleButton onClick={() => setCurrentKeypad("func")}>
                        <TbMathFunction />
                      </SimpleButton>
                    );
                  case "func":
                    return (
                      <SimpleButton onClick={() => setCurrentKeypad("func2")}>
                        <TbMathIntegral />
                      </SimpleButton>
                    );
                  case "func2":
                    return (
                      <SimpleButton onClick={() => setCurrentKeypad("main")}>
                        <TbMathSymbols />
                      </SimpleButton>
                    );
                }
              } else {
                return currentKeypad !== "func2" ? (
                  <SimpleButton onClick={() => setCurrentKeypad("func2")}>
                    <TbMathIntegral />
                  </SimpleButton>
                ) : (
                  <SimpleButton onClick={() => setCurrentKeypad("func")}>
                    <TbMathFunction />
                  </SimpleButton>
                );
              }
            })()}
            <SimpleButton onClick={() => setCalculationResults([])}>
              <FaEraser />
            </SimpleButton>
            <SimpleButton onClick={() => setIsOpen(true)}>
              <IoSettingsSharp />
            </SimpleButton>
            <SimpleButton onClick={() => setEquation((prev) => prev.slice(0, -1))}>
              DEL
            </SimpleButton>
            <SimpleButton onClick={equationControllers.reset}>AC</SimpleButton>
            <SimpleButton className="bg-blue-500" type="submit">
              <IoArrowRedoSharp />
            </SimpleButton>
          </div>
        </form>
      )}
      <SettingsModal
        isKeypadActive={isKeypadActive}
        isOpen={isOpen}
        setIsKeypadActive={setIsKeypadActive}
        setIsOpen={setIsOpen}
      />
    </div>
  );
};
