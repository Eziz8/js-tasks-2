let myArray = [1,1,3,4,5,3,7,"world","planets","stars",true,"world",3,7,];

myArray.map((element) => {
  let count = 0;
  myArray.map((value) => {
    if (value === element) {
      count++;
    }
  });
  console.log(`${element} ---> ${count} times`);
});

// ------------------------------------------------------------------------------------------------

let firstArr=[1,2,3,4,5,'course']
let secondArr=[1,2,3,4,5,'course']
let thirdArr=[1,2,3,'course']

let compare=(arrOne,arrTwo)=>{
    if(JSON.stringify(arrOne)==JSON.stringify(arrTwo)){
        console.log(true);
    }
    else{
        console.log(false);
    }
}

compare(firstArr,thirdArr)

//------------------------------------------------------------------------------------------------

let firstScore = [-3, -5, -7, 25, 33, 99, 111,33,55];

let maxIndex=firstScore.indexOf(Math.max(...firstScore))
let minIndex=firstScore.indexOf(Math.min(...firstScore))

firstScore.splice(maxIndex,1)
firstScore.splice(minIndex,1)

let secondMaxNumber=Math.max(...firstScore);
let secondMinNumber=Math.min(...firstScore);

console.log(secondMaxNumber,secondMinNumber);

//------------------------------------------------------------------------------------------------

let mixedNumbers=[1,3,5,7,9,-1,-3,-5,-7,-9,11];
let positiveNumbers=[];
let negativeNumbers=[];

mixedNumbers.map((number)=>{
    number>=0? positiveNumbers.push(number):negativeNumbers.push(number);
})

console.log(positiveNumbers);
console.log(negativeNumbers);

//------------------------------------------------------------------------------------------------

let numbers=[1321,3157,3221,9875,3575,9079,3579,2153,7567];
let limit=3333;
let beyondLimit=[];
let underLimit=[];

numbers.map((num)=>{
num>limit? beyondLimit.push(num):underLimit.push(num)
})

console.log(beyondLimit);
console.log(underLimit);

//------------------------------------------------------------------------------------------------

let mixedArr = [1,1,3,true,5,3,7,"world","planets","stars",true,"world",3,7,];
let pureArr=[];

mixedArr.map((element)=>{
     if(pureArr.includes(element)){
        return
     }else{
        pureArr.push(element)
     }
})

console.log(pureArr);

//------------------------------------------------------------------------------------------------

let result=1;
let array=[5, true, 3, false, 7, true, 5, false];

for(let i=0; i<array.length; i++){
    if(array[i]===true){
        result *=array[i-1]
    }
}

console.log(result);