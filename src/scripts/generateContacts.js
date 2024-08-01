import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import * as fs from 'node:fs/promises';

const generateContacts = async (number) => {
  try {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    const json = JSON.parse(data);
    for (let i = 0; i < number; i++) {
      json.push(createFakeContact());
    }
    // console.log(json);

    // Перший приклад для власної практики
    // fs.writeFile(PATH_DB, JSON.stringify(json), { encoding: 'utf-8' })
    //   .then(() => console.log('Дані успішно записані у файл.'))
    //   .catch((err) => console.error('Помилка запису у файл:', err));

    try {
      await fs.writeFile(PATH_DB, JSON.stringify(json), { encoding: 'utf-8' });
      console.log('Дані успішно записані у файл.');
    } catch (err) {
      console.error('Помилка запису у файл:', err);
    }
  } catch (error) {
    console.error('Помилка читання файлу:', error);
  }
};

generateContacts(10000);
