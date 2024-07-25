// var num =["Nazmul","Hossain","Ekram","Noyon","Amdadul"];
// num.push("x");
// document.write(num);

// one dimensional array wieh the nummber of elements int the
console.clear();
 function highstScore(scores){
   let max =scores[0];
   for(let x=1;x<scores.length;x++){
     if(max<scores[x]){
        max = scores[x];
     }
 }
  return max;
 }
let scores=[20,18,50,80,100,200,15];
let result=highstScore(scores);
document.write(result);


