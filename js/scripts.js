//BACK END LOGIC
function vowelCheck(currentChar){
  var isVowel = false;
  var vowel = "aeiou";
  var tempVowel = vowel.indexOf(currentChar);
  if ( tempVowel >= 0 ) {
    isVowel = true;
    return isVowel;
  }
  else if (tempVowel < 0 ) {
    isVowel = false;
    return isVowel;
  }
}


function wordBuilder(splitWord, tempArray, suffix) {
  console.log("tempArray", tempArray);
    if (tempArray) {
      var wordFinal = splitWord.join("") + tempArray.join("") + suffix;
      console.log(wordFinal);

    }
}

function wordParse(userInput){
  userInput = userInput.toLowerCase();
  var tempArray = [];
  var splitWord = userInput.split("");


// IF FIRST CHAR IS VOWEL
  if (vowelCheck(splitWord[0])) {
      console.log("1st char is vowel ", splitWord);
      var suffix = "way";
      wordBuilder(splitWord, tempArray, suffix);
    }
// IF FIRST CHAR IS CONST
  else {
    var i = 0
    console.log("1st char is consont", splitWord);
    // 1. pop off now-first char, vowelcheck
      tempArray[i] = splitWord[0];
      splitWord.shift();
      console.log(tempArray[i], splitWord);
      var suffix = "ay"
      wordBuilder(splitWord, tempArray, suffix);

  }
}

// SECOND CASE - consonant starts
// elseif firstchar in splitWord is NOT vowel
    //
    // var i = 0;
    // //   1. pop firstchar off to tempArray
    // tempArray[i] = splitWord.shift();
    // //   2. if nextchar IS a vowel, -> goto ConstructPigLatin
    // if (splitWord[0] )
    // i+=1;
    // }


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
