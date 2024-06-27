import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./About/About";
import "./App.css";
import Blog from "./Blog/Blog";
import MainContainer from "./components/MainContainer";
import Gallery from "./Gallery/Gallery";
import Home from "./Home/Home";
import Service from "./Service/Service";
import Contact from "./Contact/Contact";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainContainer />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "gallery", element: <Gallery /> },
      { path: "service", element: <Service /> },
      { path: "blog", element: <Blog /> },
      { path: "contact", element: <Contact /> },
    ],
    // errorElement: <Error/>
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
