import express from "express";
import mysql from "mysql";

const app = express();
const port = 3000;

const connection = mysql.createConnection({
  database: "backend",
  host: "localhost",
  user: "matheus",
  password: "1234",
});

connection.connect((error) => {
  if (error) {
    console.error("Erro na conexão com banco de dados", error);
    return;
  }
  console.log("conexão bem sucedida");
});

app.use(express.json());

app.post("/api/users", (request, response) => {
  const { name, age, address, bio } = request.body;
  const newUser = { name, age, address, bio };
  connection.query("INSERT INTO users SET ?", newUser, (error, results) => {
    if (error) {
      console.log("Erro ao inserir usuário!", error);
      response.status(400).json({ error: "Erro ao inserir usuário!" });
      return;
    }
    console.log("Usuário inserido com sucesso");
    response.status(201).json({ message: "Usuário inserido com sucesso" });
  });
});

app.get("/api/users", (request, response) => {
  connection.query("SELECT * FROM users", (error, results, fields) => {
    if (error) {
      console.log("Erro ao localizar dados", error);
      response.status(404).json({ error: "Erro ao localizar dados" });
      return;
    }
    console.log("Usuário encontrado com sucesso");
    response.status(200).json({ message: "Usuário encontrado com sucesso" });
    console.log(results);
    console.log(fields);
  });
});

app.put("/api/users", (request, response) => {
  const { id, name, age, address, bio } = request.body;
  const newData = { id, name, age, address, bio };
  connection.query(
    "REPLACE INTO users SET ?",
    newData,
    (error, results, fields) => {
      if (error) {
        console.log("Erro ao atualizar usuário!", error);
        response.status(400).json({ error: "Erro ao atualizar usuário!" });
        return;
      }
      console.log("Usuário atualizado com sucesso");
      response.status(201).json({ message: "Usuário atualizado com sucesso" });
    }
  );
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
