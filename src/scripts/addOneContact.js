import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {};
try {
  const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
  const json = JSON.parse(data);
  json.push(createFakeContact());
  //   console.log(json);
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(json), {
      encoding: 'utf-8',
    });
    console.log('Дані успішно записані у файл.');
  } catch (err) {
    console.error('Помилка запису у файл:', err);
  }
} catch (error) {
  console.error('Помилка читання файлу:', error);
}

addOneContact();
