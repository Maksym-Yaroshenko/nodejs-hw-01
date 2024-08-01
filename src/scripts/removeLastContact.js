import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    const json = JSON.parse(data);
    const countContacts = JSON.parse(data).length;
    // console.log(json[countContacts - 1]);
    if (countContacts < 1) {
      console.log('Немає жодного контакту.');
      return;
    }
    json.splice(countContacts - 1, 1);
    // console.log(json);
    try {
      await fs.writeFile(PATH_DB, JSON.stringify(json), { encoding: 'utf-8' });
      console.log('Контакт успішно видалений.');
    } catch (err) {
      console.error('Помилка запису у файл:', err);
    }
  } catch (error) {
    console.error('Помилка читання файлу:', error);
  }
};

removeLastContact();
