const wordInput = document.querySelector('#wordInput');
const capButton = document.querySelector('#capButton');
const result = document.querySelector('#result')

capButton.addEventListener('click', function() {

  const sentence = wordInput.value;
  const sentenceArr = sentence.split(' ');
  const finalSentenceArr = [];
  if (sentenceArr.length < 4) {
    for (let i = 0; i < sentenceArr.length; i++) {
      const convertedSentence = sentenceArr[i].charAt(0).toUpperCase() + sentenceArr[i].substring(1);
      finalSentenceArr.push(convertedSentence)
    }
    result.innerHTML = finalSentenceArr.join(' ')
  } else {
    result.innerHTML = sentence[0].toUpperCase() + sentence.substring(1)
  }
})
