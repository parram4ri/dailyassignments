function randomWords() {
    let words = ['stuff', 'sugar', 'sweet', 'happy', 'money', 'cat', 'make'];
    let index = Math.floor(Math.random() * words.length);
    return words[index];
}

//Random word selected
let theWord = randomWords();

//click run a few times to see this in action then delete this line of code.
console.log(theWord);

//Write your code here.