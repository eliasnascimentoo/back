const express = require("express");
const cors = require("cors");

const app = express();

var corsOpcoes = {
    origin: "*"
}

app.use(cors(corsOpcoes));

app.use(express.json());

app.use(express.urlencoded({extendend: true}));

app.get("/", (req, res) => {
res.json({mensagem:'o backend está rodando'})
});

const sql = require("./bd.js");

app.post("/api/cursos", (req, res ) =>{
    let insert = "insert into cursos (nome, valor) values" + 
            "('" + req.body.nome + "'," + req.body.valor + ")";
            sql.query(insert , (err, res) =>{
                if (err) {
                    console.log("error: ", err);
                    return;
                }
                console.log("criado: ", {id: res.insertID});
            });
    
    res.json({mensagem: "Cadastrado com sucesso!"});
});

app.get("/api/cursos", (req, res)=>{
    let select = "SELECT * FROM cursos";
    var vetor = [];
    let obj = {};
    sql.query(select, (err, result) => {
        if (err){
            console.log("error: ", err);
            result(null. err);
            return;
        }
        console.log("cursos: ", result);
        for (var i = 0; i < result.length; i++){
            obj = {};
            obj['id'] = result[i].id;
            obj['nome'] = result[i].nome;
            vetor.push(obj);
        }
        res.json(JSON.parse(JSON.stringify(vetor)));
    });
    console.log(vetor);
});

app.get ("/api/aluno", (req, res)=>{
    let select = "SELECT * FROM aluno";
    var vetor = [];
    let obj = {};
    sql.query(select, (err, result) => {
        if (err){
            console.log("error: ", err);
            result(null. err);
            return;
        }
        console.log("aluno: ", result);
        for (var i = 0; i < result.length; i++){
            obj = {};
            obj['id'] = result[i].id;
            obj['nome'] = result[i].nome;
            obj['email'] = result[i].email;
            obj['telefone'] = result[i].telefone;
            vetor.push(obj);
    }
    res.json(JSON.parse(JSON.stringify(vetor)));
});

console.log(vetor);
    });

    


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log("A parte do Backend está ligada.")
});
