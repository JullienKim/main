import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./theme";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
