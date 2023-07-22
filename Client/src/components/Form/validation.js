export const validate = (userData) => {
  const errors = {};
  if (!userData.email) {
    errors.email = "Ingrese un Email";
  }

  if (userData.email.length > 35) {
    errors.email = "El email no puede contarner mas 35 caracteres";
  }
  // const emailRegex = !/\S+@\S+\.\S+/;
  if (!/\S+@\S+\.\S+/.test(userData.email)) {
    errors.email = "El email no es valido";
  }
  ////////////////////////////////////////////////////////////
  if (!userData.password) {
    errors.password = "Ingrese una Password";
  }
  if (userData.password.length < 6 && userData.password.length > 10) {
    errors.password =
      "La constraseña debe tener al menos 6 caracteres y no superar los 10 caracteres";
  }

  // const passRegex = !/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,10}$/;
  if (!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,10}$/.test(userData.password)) {
    errors.password = "La constraseña debe contener al menos 1 numero";
  }
  return errors;
};
