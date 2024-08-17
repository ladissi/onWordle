import { database } from './firebaseConfig.js';
import { ref, set } from 'firebase/database';
import { words } from './wordList.js';

async function uploadWords() {
  const wordsRef = ref(database, 'words');
  try {
    await set(wordsRef, words);
    console.log('Words uploaded successfully');
  } catch (error) {
    console.error('Error uploading words:', error);
  }
}

uploadWords();     

// import { database } from './firebaseConfig.js';
// import { ref, set } from 'firebase/database';
// import { words } from './wordList.js';

// async function uploadWords() {
//   const wordsRef = ref(database, 'words');
//   try {
//     await set(wordsRef, words);
//     console.log('Words uploaded successfully');
//   } catch (error) {
//     console.error('Error uploading words:', error);
//   }
// }

// uploadWords();     