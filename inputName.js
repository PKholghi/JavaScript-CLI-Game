import promptSync from 'prompt-sync';
let prompt = promptSync({sigint: true});
 
 
let characterName = prompt('Please Enter your Character Name: ');
console.log(`Hey there ${characterName}`);

export {characterName}
