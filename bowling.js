let arr = [1,4,4,5,6,4,5,5,10,0,0,1,7,3,6,4,10,0,2,8,6];
function bowl(arr){
  let totalScore = 0;

  while (arr.length > 1) {

    let frameScore = arr[0] + arr[1];
    if (arr[0] === 10){
      totalScore += 10;
      totalScore += arr[1];
      totalScore += arr[2];
      totalScore += arr[3];

      arr.shift();
      arr.shift();
    } else if (frameScore === 10){
      totalScore += arr[2];
      totalScore += frameScore;
      arr.shift();
      arr.shift();
    } else {
      totalScore += frameScore;
      arr.shift();
      arr.shift();
    }
     
  }
  return totalScore;
}

console.log(bowl(arr));
