# Cadastro de Usuário - Backend

Este repositório contém o código-fonte do backend para o sistema de Cadastro de Usuário. O projeto foi desenvolvido com foco em performance, segurança e escalabilidade, utilizando tecnologias modernas para gerenciar dados e fornecer uma API robusta.

## Tecnologias Utilizadas

- **Node.js**
- **Express.js**
- **MongoDB** com Mongoose
- **JWT (JSON Web Token)** para autenticação
- **BCrypt** para hash de senhas

## Funcionalidades

- Cadastro e autenticação de usuários.
- Gerenciamento de sessões seguras com tokens JWT.
- Validação de dados no backend.
- Operações CRUD para gerenciamento de usuários.

## Estrutura do Projeto

```plaintext
src/
├── controllers/       # Lógica dos endpoints
├── models/            # Modelos do banco de dados
├── routes/            # Definição de rotas
├── middlewares/       # Middlewares de autenticação e validação
├── config/            # Configurações da aplicação
└── server.js          # Ponto de entrada da aplicação
```

## Como Rodar o Projeto

1. Clone este repositório:

   ```bash
   git clone https://github.com/ValtemirMartins/Cadastro-de-Usuario-Backend.git
   ```

2. Acesse o diretório do projeto:

   ```bash
   cd Cadastro-de-Usuario-Backend
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Configure as variáveis de ambiente no arquivo `.env`:

   ```env
   PORT=3001
   MONGO_URI=seu_banco_de_dados_mongodb
   JWT_SECRET=sua_chave_secreta
   ```

5. Inicie o servidor:

   ```bash
   npm start
   ```

6. O backend estará disponível no endereço:

   ```
   http://localhost:3001
   ```

## Endpoints Principais

- **POST /auth/register**: Cadastro de usuário.
- **POST /auth/login**: Login e geração de token JWT.
- **GET /users**: Lista todos os usuários (requer autenticação).
- **PUT /users/:id**: Atualiza os dados de um usuário (requer autenticação).
- **DELETE /users/:id**: Remove um usuário (requer autenticação).

## Contribuição

Contribuições são bem-vindas! Siga os passos abaixo para colaborar:



## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais informações.

---

Desenvolvido por [Valtemir Martins](https://github.com/ValtemirMartins).
