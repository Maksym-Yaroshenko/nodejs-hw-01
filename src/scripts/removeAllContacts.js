import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify([]), { encoding: 'utf-8' });
    console.log('Дані успішно видалилися.');
  } catch (err) {
    console.error('Помилка запису у файл:', err);
  }
};

removeAllContacts();
