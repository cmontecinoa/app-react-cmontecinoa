import "./App.css";
import Navbar from "./Components/Navbar";
import ItemListContainer from "./Components/ItemListContainer";
// import "./Components/Card";

function App() {
  return (
    <div className="App">
      {/* Navegador del sitio */}
      <Navbar/>
      {/* Elementos del sitio */}
      <ItemListContainer bienvenida={"Bienvenidos"}/>

    </div>
  );
}

export default App;
