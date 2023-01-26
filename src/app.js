// Importações
const express = require("express");
const path = require("path");
const homeRoutes = require("./routes/home");
const adminRouter = require("./routes/admin");

// Variaveis
const app = express();
const port = 4000;

// Configuraçoes //Middlewares
app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));
app.use(express.json());
app.use(express.static(path.resolve("src", "public")));

// Rotas
app.use(homeRoutes);
app.use("/admin", adminRouter);

app.listen(port, () => console.log(`Servidor funcionando na porta ${port}`));
// npm run dev -> nodemon | npm start -> node
