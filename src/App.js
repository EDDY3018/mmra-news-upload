import "./App.css";
import HomePage from "./pages/HomePage";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CreateNews from "./pages/CreateNews";

function App() {
  return (
    <div className="w-3/4 mx-auto">
      <Nav />

      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/createNews" element={<CreateNews />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
