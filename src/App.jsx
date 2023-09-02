import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Lottie from "react-lottie";

import "./App.css";
import About from "./components/About";
import Events from "./components/Events";
import Home from "./components/Home";
import Stall from "./components/Stall";
import RootLayout from "./pages/Root";
import * as kuru from "./lottie/Kuru_Kuru.json";
import { useEffect, useState } from "react";

const defaultOption1 = {
  loop: true,
  autoplay: true,
  animationData: kuru.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Home />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/events", element: <Events /> },
      { path: "/stalls", element: <Stall /> },
    ],
  },
]);

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(undefined);
  const [completed, setCompleted] = useState(undefined);
  useEffect(() => {
    setTimeout(() => {
      fetch("")
        .then((response) => response.ok)
        .then((outBuff) => {
          setData(outBuff);
          setLoading(true);
          setTimeout(() => {
            setCompleted(true);
          }, 1100);
        });
    }, 2000);
  }, [data]);

  return (
    <div>
      {!completed && !loading ? (
        <Lottie
          options={defaultOption1}
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          height={300}
          width={300}   
        />
      ) : (
        <RouterProvider router={router} />
      )}
    </div>
  );
}

export default App;
