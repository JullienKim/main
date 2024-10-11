import { useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";
import { createGlobalStyle, styled } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`

${reset}

@import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');

*{
margin: 0px;
padding:0px;
box-sizing: border-box;
}

body{
font-family: "Source Sans 3", sans-serif;
background: linear-gradient(135deg, #e09, #d0e)
}

ul, li{
list-style: none;
}

a{
  text-decoration: none;
  color: inherit;
}
`;

const Wrapper = styled(motion.div)`
  width: 100%;
  height: 200vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background: #fff;
  border-radius: 30px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

const App4 = () => {
  const x = useMotionValue(0);
  const { scrollY, scrollYProgress } = useScroll();
  useEffect(() => {
    scrollY.on("change", () => {
      console.log(scrollY.get(), scrollYProgress.get());
    });
  }, [scrollY, scrollYProgress]);
  // const transformer = useTransform(x, [-800, 0, 800], [2, 1, 0.1]);
  // const scale = useTransform(x, [-800, 0, 800], [2, 1, 0.1]);
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const gradient = useTransform(
    x,
    [-800, 0, 800],
    [
      "linear-gradient(135deg, rgb(0, 210, 238),rgb(0,83, 238))",
      "linear-gradient(135deg, rgb(238,0,153), rgb(221,0, 238))",
      "linear-gradient(135deg, rgb(0, 238,155), rgb(238,173, 0))",
    ]
  );
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);
  useEffect(() => {
    // x.onChange(() => {}) //구문법
    scale.on("change", () => console.log(scale.get()));
  }, [x]);
  return (
    <>
      <GlobalStyles />
      <Wrapper style={{ background: gradient }}>
        {/* <button onClick={() => x.set(200)}>Click Me</button> */}
        {/* <Box style={{ x, scale: transformer }} drag="x" dragSnapToOrigin /> */}
        <Box
          style={{ x, scale, rotateZ }}
          drag="x"
          dragSnapToOrigin
        />
      </Wrapper>
    </>
  );
};

export default App4;
