import React, { useState } from "react";
import { validate } from "./validation";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErros] = useState({});

  const handleChange = (event) => {
    //! Generamos un evento el cual nos modifique las propiedades de nuestro userData
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    setErros(
      validate({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };
  return (
    <form>
      <hr />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        placeholder="example@gmail.com"
        name="email"
        value={userData.email}
        onChange={handleChange} //El onChange se queda atento ante un cambio y manda a llamar a handleChange para setear de vuelta nuestro estado
      ></input>
      {errors.email && <p>{errors.email}</p>}

      <hr />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        placeholder="password..."
        name="password"
        value={userData.password}
        onChange={handleChange} //El onChange se queda atento ante un cambio y manda a llamar a handleChange para setear de vuelta nuestro estado
      ></input>
      {errors.password && <p> {errors.password}</p>}

      <hr />

      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};
export default Form;
