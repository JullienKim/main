import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import { auth } from "./firebase";
import reset from "styled-reset";
import Layout from "./components/Layout";
import Home from "./routes/Home";
import Profile from "./routes/Profile";
import Login from "./routes/Login";
import CreateAccount from "./routes/CreateAccount";
import LoadingScreen from "./components/LoadingScreen";
import ProtectedRoute from "./components/ProtectedRoute";

const user = auth.currentUser;

if (user) {
  console.log("User's display name: ", user.displayName);
} else {
  console.log("No user is signed in.");
}


const router = createBrowserRouter([
  {
    path: "/",
    element: (<ProtectedRoute><Layout /></ProtectedRoute>),
    children: [
      {
        path: "",
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/create-account",
    element: <CreateAccount />,
  },
]);

const GlobalStyles = createGlobalStyle`
${reset}
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

body{
  background: #000;
  color: #fff;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}
`;

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const init = async () => {
    // awaitfirebase Authentication
    // setTimeout(() => setIsLoading(false), 2000);
    await auth.authStateReady();
    await setIsLoading(false);
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <>
      <GlobalStyles />
      {isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}
    </>
  );
}

export default App;
