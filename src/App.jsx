import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css'
import PokemonDetailsPage from "./Pages/PokemonDetailsPage";
import TypesPage from "./Pages/TypesPage";
import GenerationPage from "./Pages/GenerationPage";
import GameVersionPage from "./Pages/GameVersionPage";
import HabitatPage from "./Pages/HabitatPage";

const App = () => {
  return <>
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true, }}>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>} ></Route>
        <Route path='/pokemon/:id' element={<PokemonDetailsPage></PokemonDetailsPage>}></Route>
        <Route path='/type/:id' element={<TypesPage></TypesPage>}></Route>
        <Route path='/generation/:id' element={<GenerationPage></GenerationPage>}></Route>
        <Route path='/gameVersion/:id' element={<GameVersionPage></GameVersionPage>}></Route>
        <Route path='/habitat/:name' element={<HabitatPage></HabitatPage>}></Route>
      </Routes>
    </BrowserRouter>
  </>;
}

export default App;
