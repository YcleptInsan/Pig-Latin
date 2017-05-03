//BACK END LOGIC

function wordParse(userInput){
  userInput = userInput.toLowerCase();
  var tempArray = [];
  var splitWord = userInput.split("");
  var suffix = "";

  i = 0;




while (i < splitWord.length ) {
  currentChar = splitWord[i];
  var vowel = "aeiou";
  var tempVowel = vowel.indexOf(currentChar);
  var isVowel = false;
  debugger
  console.log(splitWord, splitWord.length)
  console.log("i = ", i);
  if ( tempVowel >= 0 ) {
    isVowel = true;
    if ( i >= 1)  {
          suffix = "ay"
          wordBuilder(splitWord, tempArray, suffix);
          break;
        }
      else {
          suffix = "way"
          wordBuilder(splitWord, tempArray, suffix);
          // break;
          }
  }

  else {
    isVowel = false;
    tempArray[i] = splitWord[i];
    splitWord.shift();
    i=1;
  }

}
// IS VOWEL? YES
//  IS FIRST RUN?  YES -> WordBuilder w  suffix="way"
//  IS FIRST RUN? NO  -?  WordBuilder w  suffix="ay"
// IS VOWEL? NO
//  -> shift, tempArray store, reloop

function wordBuilder(splitWord, tempArray, suffix) {
  console.log("tempArray", tempArray);
    if (tempArray) {
      var wordFinal = splitWord.join("") + tempArray.join("") + suffix;
      console.log(wordFinal);
    }
  }
};



//
// // IF FIRST CHAR IS VOWEL
//   if (vowelCheck(splitWord[0])) {
//       console.log("1st char is vowel ", splitWord);
//       var suffix = "way";
//       wordBuilder(splitWord, tempArray, suffix);
//     }
// // IF FIRST CHAR IS CONST
//   else {
//     var i = 0
//     console.log("1st char is consont", splitWord);
//       tempArray[i] = splitWord[0];
//       splitWord.shift();
//



// ==========================
//FRONT END LOGIC
$(document).ready(function(){
  $("form#globalForm").submit(function(event){
    event.preventDefault();
    var userInput = $("input#words").val();

    wordParse(userInput);

    // $("p#result").append(output);



  });
});
