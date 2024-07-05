export function catchError(error) {
  switch (error.code) {
    case "auth/invalid-credential":
      return "Credenciales invalidas";

    case "auth/invalid-email":
      return "Mail invalido";

    default:
      return "Ocurrio un error";
  }
}
