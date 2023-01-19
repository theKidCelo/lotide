const letterPositions = function(sentence) {
    const results = {};
    const sentenceArray = [...sentence]
  // console.log(sentenceArray[2])
    for(let i = 0; i < sentenceArray.length; i++ ){
        //console.log(   sentenceArray[i] )
        if(!results[sentenceArray[i]]){
            results[sentenceArray[i]] = 0
        }
       results[sentenceArray[i]] = results[sentenceArray[i]]+1
       
    }

    return results
  };

  console.log(letterPositions("yolo"))