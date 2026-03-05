const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Hola Daniel, este es mi primer servidor backend 🚀");
  res.end();
});

server.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});