import { TContact } from './contact.interface';
import { Contact } from './contact.model';

const addMessageIndoDB = async (payload: TContact) => {
  const result = await Contact.create(payload);
  return result;
};

const getAllMessageDataFromDB = async () => {
  const result = await Contact.find();
  return result;
};

export const ContactServices = {
  addMessageIndoDB,
  getAllMessageDataFromDB
};
