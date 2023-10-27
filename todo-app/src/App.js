import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/home";
import NotFound from "./components/Not-Found/NotFound";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
