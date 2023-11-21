import { useEffect, useState } from "react";
import B from "./components/B";
import C from "./components/C";
import D from "./components/D";
import Header from "./components/Header";

const App = () => {
  const [isHidden, setIsHidden] = useState(false);
  //
  const scrollEvent = () => {
    if (window.scrollY > 1000) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  };

  //event listener를 건다: 처음 실행될 때 = 유즈이펙트
  useEffect(() => {
    const watchScroll = () => window.addEventListener("scroll", scrollEvent); //window는 웹브라우저 지칭

    watchScroll();

    return () => window.removeEventListener("scroll", scrollEvent); // compo 파괴 시 실행할 것. 없으면 재렌더링시 스크롤이벤트 두 개 생성됨
  }, []);

  return (
    <>
      <Header isHidden={isHidden} />
      <B />
      <C />
      <D />
    </>
  );
};

export default App;
