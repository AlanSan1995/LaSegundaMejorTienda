export function catchError(error) {
  switch (error.code) {
    case "auth/invalid-credential":
      return "Credenciales invalidas";

    case "auth/invalid-email":
      return "Mail invalido";

    case "auth/account-exists-with-different-credential":
      return "erro de validacion";

    default:
      return "Ocurrio un error";
  }
}
