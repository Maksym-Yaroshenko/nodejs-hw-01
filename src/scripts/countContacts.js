import { PATH_DB } from '../constants/contacts.js';
// import * as fs from 'node:fs';
import * as fs from 'node:fs/promises';

export const countContacts = async () => {
  // Я правильно зрозумів, що це не працюватиме, оскільки countContacts повертає результат асинхронної операції в колбеці, і асинхронна функція не дочікується його виконання? Якщо так, то для чого тоді тут можуть використовуватись колбеки? Могли б ви навести приклади?)

  //   fs.readFile(PATH_DB, { encoding: 'utf-8' }, (err, data) => {
  //     if (err) {
  //       console.error('Помилка при читанні файлу: ' + err);
  //       throw err;
  //   }
  //   const countContacts = JSON.parse(data);
  //   console.log(countContacts);
  //     return countContacts.length;
  //   });
  try {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    const countContacts = JSON.parse(data).length;
    // console.log(countContacts);
    return countContacts;
  } catch (error) {
    console.error('Помилка при читанні файлу: ' + error);
  }
};

console.log(await countContacts());
