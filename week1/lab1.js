
const sentence = "the quick brown fox"

const words = sentence.split(" ");

for(i = 0; i < words.length; i++){
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);  
}  
console.log(words.join(' '));

