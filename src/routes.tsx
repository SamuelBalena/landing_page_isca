import { createBrowserRouter } from "react-router-dom";
import { MainContent } from "./pages/Main";
import { ThanksPage } from "./pages/Thanks";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainContent />,
  },
  {
    path: "/obrigado",
    element: <ThanksPage />,
  },
]);
