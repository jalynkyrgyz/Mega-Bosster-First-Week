function someReversedWords(txt) {

    let sentence = "";
    let separate = txt.split(" ");
    
    for (let i = 0; i < separate.length; i++) {
      if (sentence) sentence += ' ';
      if (separate[i].length >= 5) {
        sentence += separate[i].split("").reverse().join("");
      } else {
        sentence += separate[i];
      }
    }
    return sentence;
  }

  const sentenceWord = document.getElementById("sentence");

  sentenceWord.innerText = "Hey fellow warriors => " + someReversedWords("Hey fellow warriors");
  
  console.log(someReversedWords("Hey fellow warriors"));