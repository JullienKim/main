import "./App.css";
import Header from "./components/Header";
// import Body from "./components/Body";
import Body2 from "./components/Body2";
import Footer from "./components/Footer";

// function ChildComp() {
//   return <div>child component</div>;
// }

function App() {
  // const name = "David";
  // const BodyProps = {
  //   name: "David",
  //   location: "서울시",
  //   // favorList: ["pasta", "소금빵", "떡볶이"],
  // };
  return (
    <div className="App">
      <Header />
      <Body2 />
      {/* <Body {...BodyProps} /> */}
      {/* <Body name={name} location={"서울시"}/> */}
      <Footer />
    </div>
  );
}

export default App;
