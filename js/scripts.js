//BACK END LOGIC
function vowelCheck(currentChar){
  console.log(currentChar);
  var isVowel = false;
//  var vowels = ["a","e","i","o","u"];
  var vowel = "aeiou";
  var tempVowel = vowel.indexOf(currentChar);
  console.log(tempVowel);
  if ( tempVowel >= 0 ) {
    isVowel = true;
    return isVowel;
    // some boolean = True; reutrn that boolean
    //yes this is a vowel
  }
}

function wordBuilder(splitWord, tempArray) {
  console.log("tempArray", tempArray);
    if (tempArray) {
      var suffix = "way"
      var wordFinal = splitWord.join() + tempArray.join() + suffix;
      console.log(wordFinal);

    }
    // suffix = "way"
  // needs what's left of original string
  // the initial consonant tempArray
  // the PigLatinate "ay" string
  // concatenate all these
}

function wordParse(userInput){
  userInput = userInput.toLowerCase();
  var tempArray = [];
  var splitWord = userInput.split("");

  // console.log(splitWord[0]);
  // FIRST CASE - vowel starts
  // if firstchar in splitWord is vowel
  //   keep orig userInput? and append -ay -> output
  if (vowelCheck(splitWord[0])) {
      console.log("passed vowelCheck - ", splitWord);
          // userInput.append(rule1);
        wordBuilder(splitWord, tempArray);
    }

// SECOND CASE - consonant starts
// elseif firstchar in splitWord is NOT vowel
  else if(splitWord[0] != "a") {
    var i = 0;
    //   1. pop firstchar off to tempArray
    tempArray[i] = splitWord.shift();
    //   2. if nextchar IS a vowel, -> goto ConstructPigLatin
    if (splitWord[0] )
    i+=1;
    }
  // return output
};




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
