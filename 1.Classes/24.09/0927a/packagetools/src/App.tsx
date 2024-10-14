import { motion } from "framer-motion";
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
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

function App = () => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        // <Box transition={{duration: 3}} animate={{borderRadius: "100px"}}/>
        <Box 
          // transition={{duration: 3, type:"spring", damping: 1}} 
          transition={{duration: 3, type:"spring", mass: 10}} 
          initial={{scale:0}} 
          animate={{scale: 1, rotateZ: 360}}
        />
      </Wrapper>
    </>
  );
}

export default App;