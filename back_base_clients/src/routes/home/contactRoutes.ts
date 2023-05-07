// Rota para criar um novo contato vinculado a um cliente
import { Router } from "express";
import { validateSchemaMiddleware } from "../../middlewares/validated";


export const contactRoutes = Router();

contactRoutes.post(
    "/clientes/:clientId/contatos",
    validateSchemaMiddleware(schemaCreateContact),
    createContactController
  );
  
  // Rota para listar todos os contatos de um cliente específico pelo ID
  contactRoutes.get(
    "/clientes/:clientId/contatos",
    listContactsByClientIdController
  );
  
  // Rota para buscar um contato específico de um cliente pelo ID
  contactRoutes.get(
    "/clientes/:clientId/contatos/:contactId",
    getContactByIdController
  );
  
  // Rota para atualizar um contato de um cliente pelo ID
  contactRoutes.put(
    "/clientes/:clientId/contatos/:contactId",
    validateSchemaMiddleware(schemaUpdateContact),
    updateContactController
  );
  
  // Rota para deletar um contato de um cliente pelo ID
  contactRoutes.delete(
    "/clientes/:clientId/contatos/:contactId",
    deleteContactController
  );
  