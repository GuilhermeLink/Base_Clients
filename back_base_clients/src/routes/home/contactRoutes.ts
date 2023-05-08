// Rota para criar um novo contato vinculado a um cliente
import { Router } from "express";
import { validateSchemaMiddleware } from "../../middlewares/validated";
import { createContactController } from "../../controllers/contact/create";
import { listContactsByClientIdController } from "../../controllers/contact/list";
import { getContactByIdController } from "../../controllers/contact/listId";
import { updateContactController } from "../../controllers/contact/update";
import { deleteContactController } from "../../controllers/contact/delete";
import { schemaCreateContact, schemaUpdateContact } from "../../schemas/contact";


export const contactRoutes = Router();

contactRoutes.post(
"/clients/:clientId/contatos",
validateSchemaMiddleware(schemaCreateContact),
createContactController
);
  
  
contactRoutes.get(
"/clients/:clientId/contatos",
listContactsByClientIdController
);


contactRoutes.get(
"/clients/:clientId/contatos/:contactId",
getContactByIdController
);


contactRoutes.patch(
"/clients/:clientId/contatos/:contactId",
validateSchemaMiddleware(schemaUpdateContact),
updateContactController
);


contactRoutes.delete(
"/clients/:clientId/contatos/:contactId",
deleteContactController
);
  