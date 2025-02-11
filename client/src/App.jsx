import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./views/HomePage";
import BaseLayout from "./views/BaseLayout";
export default function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route element={<BaseLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

