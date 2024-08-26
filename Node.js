const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware para analisar o corpo da solicitação
app.use(bodyParser.json());

// Rota de autenticação
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Aqui você faria a verificação das credenciais contra o AD ou um banco de dados
    // Para este exemplo, vamos apenas verificar se o username e password são "usuario" e "senha"
    if (username === 'usuario' && password === 'senha') {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

// Servindo arquivos estáticos
app.use(express.static('public'));

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
