import { Router } from "express";
import { validateSchemaMiddleware } from "../../middlewares/validated";


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
clientRoutes.put(
  "/clientes/:id",
  validateSchemaMiddleware(schemaUpdateClient),
  updateClientController
);

// Rota para deletar um cliente pelo ID
clientRoutes.delete(
  "/clientes/:id",
  deleteClientController
);