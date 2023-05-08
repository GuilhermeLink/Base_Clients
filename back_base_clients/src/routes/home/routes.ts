import { Router } from "express";
import { validateSchemaMiddleware } from "../../middlewares/validated";
import { createClientController } from "../../controllers/client/create";
import { listClientsController } from "../../controllers/client/list";
import { getClientByIdController } from "../../controllers/client/listId";
import { updateClientController } from "../../controllers/client/update";
import { deleteClientController } from "../../controllers/client/delete";
import { schemaCreateClient, schemaUpdateClient } from "../../schemas/client";


export const clientRoutes = Router();

// Rota para criar um novo cliente
clientRoutes.post(
  "/clientes",
  validateSchemaMiddleware(schemaCreateClient),
  createClientController
);

// Rota para listar todos os clientes
clientRoutes.get(
  "/clientes",
  listClientsController
);

// Rota para buscar um cliente específico pelo ID
clientRoutes.get(
  "/clientes/:id",
  getClientByIdController
);

// Rota para atualizar um cliente pelo ID
clientRoutes.patch(
  "/clientes/:id",
  validateSchemaMiddleware(schemaUpdateClient),
  updateClientController
);

// Rota para deletar um cliente pelo ID
clientRoutes.delete(
  "/clientes/:id",
  deleteClientController
);