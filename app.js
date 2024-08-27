let myArray=[1,1,3,4,5,3,7,'world','planets','stars',true,'world',3,7,];
 

myArray.map((element)=>{
    let count=0;
    myArray.map((value)=>{if(value===element){
        count++;
    }})
    console.log(`${element} ---> ${count} times`);
})
//-----------------------------------------------------------------------

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
//-----------------------------------------------------------------------


