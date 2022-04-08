import logo from "./logo.svg";
import "./App.css";
import CharactersList from "./pages/CharactersList/CharactersList";
import Character from "./pages/Character/Character";
import Search from "./pages/Search/Search";

import { Route, Routes } from "react-router";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CharactersList />} />
        <Route path="/search" element={<Search />} />
        <Route path="/:id" element={<Character />} />
        {/* <CharactersList/> */}
      </Routes>
    </div>
  );
}

export default App;
