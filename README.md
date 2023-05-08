# Base_Clients 💻

> É uma APi voltada ao controle de clientes, onde é feito um pequeno cadastro de clientes com vínculo de contatos.

O projeto está dividido em uma pasta de backend(back_base_clients) e uma de frontend(base_clients).

* Para acessar o conteudo do frontend utilizar comando:
yarn start.

* Para testar o conteudo do backend utilizar comando:
yarn run dev.

No futuro novas funcionalidades serão implementadas.

## TECHS E BIBLIOTECAS

|   TECHS    |     BIBLIOTECAS      |
| :--------: | :------------------: |
| Typescript |        axios         |
|   NodeJS   |        react         |
|   Shell    |      react-dom       |
|   React    |    react-hook-form   |
|            |      react-icons     |
|            |   styled-components  |
|            |       typeorm        |
|            |         yup          |
|            |   react-router-dom   |
|            |    react-toastify    |
|            |                      |
|            |                      |
|            |                      |
|            |                      |

## ROTA USER

> **Cadastro/registro de usuário**

```
POST - /user

> envio

{
 "name":teste,
 "email":"test@gmail.com",
 "phone":"0000000000",
 "password":"123456"
}

> retorno

{
	"name": "teste",
	"email": "test@gmail.com",
	"phone": "0000000000",
	"deletedAt": null,
	"isAdm": false,
	"isActive": true,
	"createdAt": "2023-05-04T16:07:05.362Z",
	"updatedAt": "2023-05-04T16:07:05.362Z",
	"id": "e90668f8-db12-43f8-a841-8ed6c1b41815"
}

status - 201

> erro

status - 409

{

 message: "Email already used"

}
```

> **Dados do usuario**

```
GET - /user

retorno

status - 200

{
	"isAdm": false,
	"isActive": true,
	"createdAt": "2023-05-04T16:07:05.362Z",
	"updatedAt": "2023-05-04T16:07:05.362Z",
	"id": "e90668f8-db12-43f8-a841-8ed6c1b41815"
}

> erro

status - 401

{

 message: "Invalid token"

}
```

> **Atualização de usuário**

```
PATCH - /user

> envio

{
    "name":teste1,
    "email":"test@gmail.com",
    "phone":"0000000000",
    "password":"123456"
}

> resposta

status - 200
{
	"name": "teste1",
	"email": "test@gmail.com",
	"phone": "0000000000",
	"deletedAt": null,
	"isAdm": false,
	"isActive": true,
	"createdAt": "2023-05-04T16:07:05.362Z",
	"updatedAt": "2023-05-04T16:07:05.362Z",
	"id": "e90668f8-db12-43f8-a841-8ed6c1b41815"
}

> erro

status - 401

{

 message: "Invalid token"

}

```

> **deleção de usuário**

```
DELETE - /user

retorno

status 200 - sem body no response

> erro

status - 401

{

 message: "Invalid token"

}

status - 400

{

 message: "User is not active"

}

```

---

> **Login do usuário**

## ROTA LOGIN

```
POST - /login

> envio

{
  "email": "teste@gmail.com",
  "password":"123456"
}

> resposta

status - 200

{
	"token": {
		"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQzYmIyYzNiLWY5NDAtNDZkNC1iMzM5LTJlNzAyYjkwNjgzZCIsImFkbWluIjpmYWxzZSwidXNlciI6eyJuYW1lIjoiUGF1bG8iLCJlbWFpbCI6InBhdWxvQG1haWwuY29tIiwicGhvbmUiOiIxMTkyMzQ1NjU1OSIsImlzQWRtIjpmYWxzZSwiaXNBY3RpdmUiOnRydWUsImNyZWF0ZWRBdCI6IjIwMjMtMDUtMDVUMDk6Mjc6MDUuOTMxWiIsInVwZGF0ZWRBdCI6IjIwMjMtMDUtMDVUMDk6Mjc6MDUuOTMxWiIsImRlbGV0ZWRBdCI6bnVsbCwiaWQiOiJkM2JiMmMzYi1mOTQwLTQ2ZDQtYjMzOS0yZTcwMmI5MDY4M2QifSwiaWF0IjoxNjgzMjc4ODM0LCJleHAiOjE2ODMyODI0MzQsInN1YiI6ImQzYmIyYzNiLWY5NDAtNDZkNC1iMzM5LTJlNzAyYjkwNjgzZCJ9.Z2ogK17Lq6VUI6VvBtSEB1vUea9lqHTkBugdCxfo92I",
		"admin": false,
		"id": "d3bb2c3b-f940-46d4-b339-2e702b90683d",
		"user": {
			"name": "teste",
			"email": "teste@mail.com",
			"phone": "0000000000",
			"isAdm": false,
			"isActive": true,
			"createdAt": "2023-05-05T09:27:05.931Z",
			"updatedAt": "2023-05-05T09:27:05.931Z",
			"deletedAt": null,
			"id": "d3bb2c3b-f940-46d4-b339-2e702b90683d"
		}
	}
}

> erro

status - 403

{
	"message": "User or password invalid!"
}

status - 400

{
    "message": "User or password invalid!"
}

```

> **Homepage**

## ROTA CLIENTES

```
GET /clientes     // Retorna todos os clientes
GET /clientes/:id // Retorna um cliente específico
POST /clientes    // Cria um novo cliente
PUT /clientes/:id // Atualiza um cliente existente
DELETE /clientes/:id // Deleta um cliente existente

A rota de clientes irá interagir com o modelo Cliente, que será responsável por lidar com as operações no banco de dados relacionadas aos clientes.


...
---
