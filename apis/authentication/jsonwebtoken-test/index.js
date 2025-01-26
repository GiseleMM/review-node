const jwt = require("jsonwebtoken");
const express = require("express");
require("dotenv").config();
// console.log(process.env);

//creo servidor
const app = express();
app.use(express.json()); //Este middleware permite que la aplicación entienda y analice datos JSON en las solicitudes.
//rutas
app.get("/", function (req, res) {
  res.send("Hello World");
});
//creo ruta q creara token
app.post("/auth", (req, res) => {
  const { user = null, pass = null } = req.body;

  if (!user || !pass) {
    return res.status(401).json({ message: "Authentication failed" });
  }

  // Si el usuario es válido
  const usuarioValido = { username: user, password: pass };
  const token = generarToken(usuarioValido);
  //retorno json con cabezera authorization (el frontend lo guardara en una cookie y la enviara el la futuras solicitudes )
  return res
    .header("authorization", token)
    .json({ message: "usuario autenticado", token: token });
});

//creo ruta con acceso protegido GET http://localhost:3000/protegida
//Authorization: token suministrado en la cabecera
app.get("/protegida", validarToken, (req, res) => {
  return res.status(200).json({ message: "You have access" });
});

app.listen(3000, () => console.log("Server runs🤓"));

function generarToken(user) {
  //creamo palabra secreto en .env SECRET="clave"
  return jwt.sign(user, process.env.SECRET, { expiresIn: "1m" });
}

//como middelware
function validarToken(req, res, next) {
  const accessToken = req.headers["authorization"] || req.query.accessToken;

  if (!accessToken)
    return res.status(401).json({ message: "Token not provied" });

  jwt.verify(accessToken, process.env.SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Token not valid ", error: err });
    } else {
      req.user = user; //si pasa la validacion lo guardo en una propiedad de request
      req.username = user;
      next();
    }
  });
}
