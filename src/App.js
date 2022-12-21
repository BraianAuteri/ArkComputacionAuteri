import "./App.css";
import Navbar from './components/NavBar';
import List from "./components/List";
import Description from "./components/Description";
import data from "./productos.json";
import { Route, Routes } from "react-router-dom";



const App = function () {
  const { notebooks, perifericos } = data;
  return (
    <div className="App">
      <Navbar/>
      <ul>
        <Routes>
            <Route path="/" element={<p>Bienvenidos al sitio web de ...</p>} />
            <Route path="/notebooks" element={<List list={notebooks} />} />
            <Route path="/notebooks/:modelo" element={<Description data={data} />} />
            <Route path="/perifericos" element={<List list={perifericos} />} />
            <Route path="/perifericos/:modelo" element={<Description data={data} />} />
        </Routes>
        </ul>
    </div>
  );
}

export default App;


