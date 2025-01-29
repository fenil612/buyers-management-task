import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import AddBuyer from "./components/pages/AddBuyer";
import BuyersList from "./components/pages/BuyersList";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AddBuyer />} />
          <Route path="/buyers" element={<BuyersList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
