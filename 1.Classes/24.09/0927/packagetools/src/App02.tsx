import { delay, motion } from "framer-motion";
import { createGlobalStyle, styled } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`

${reset}


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

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
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

const boxVariants = {
  hover: { scale: 2, rotateZ: 90 },
  click: { scale: 1, borderRadius: "100px" },
  drag: { backgroundColor: "rgba(44,204,113)", transition: { duration: 5 } },
};

const App2 = () => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Box
          drag
          variants={boxVariants}
          whileHover="hover"
          whileTap="click"
          whileDrag="drag"
        />
        {/* <Box
          whileHover={{ scale: 2, rotateZ: 90 }}
          whileTap={{ scale: 1, borderRadius: "100px" }}
        /> */} 
      </Wrapper>
    </>
  );
};

export default App2;
