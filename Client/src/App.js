import "./App.css";
import { useState, useEffect } from "react";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";

function App() {
  const [characters, setCharacters] = useState([]);

  const { pathname } = useLocation(); //!Hacemos destructuring para saber en que ruta esta el user

  const [access, setAccess] = useState(false);

  const navigate = useNavigate();

  const EMAIL = "e@e.com";
  const PASSWORD = "123";

  const onSearch = (id) => {
    if (characters.find((character) => character.id === +id))
      return window.alert("Este Pj Ya EstA PaaAÄ");
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  };
  const onClose = (id) => {
    const filtrarCharacters = characters.filter(
      (characters) => characters.id !== id
    );
    setCharacters(filtrarCharacters);
  };
  const login = (userData) => {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  };
  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  
  return (
    <div className="App">
      {pathname !== "/" && <Nav onSearch={onSearch} setAccess={setAccess} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />

        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
