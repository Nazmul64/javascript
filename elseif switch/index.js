// print a even number and odd number

// let number =6;
// if(number%2==0){
//     document.write("Even Number");
// }else{
//      document.write("odd Number");
// }

// let number =6;
// if(number%2!=0){
//     document.write("Even Number");
// }else{
//      document.write("odd Number");
// }


// print positive number and negative number 

// let num =prompt("Enter A Positive Number  ");

// if(num>0){
//     document.write('Positive Number  ');
// }else{
//     document.write('Negative Number');
// }

// let marks = prompt("Enter Your Marks");
// marks = Number(marks);

// if (marks >= 90 && marks <= 100) {
//     document.write("Your Grade is A+");
// } else if (marks >= 80 && marks < 90) {
//     document.write("Your Grade is A");
// } else if (marks >= 70 && marks < 80) {
//     document.write("Your Grade is A-");
// } else if (marks >= 60 && marks < 70) {
//     document.write("Your Grade is B");
// } else if (marks >= 50 && marks < 60) {
//     document.write("Your Grade is C");
// } else if (marks >= 40 && marks < 50) {
//     document.write("Your Grade is D");
// } else if (marks >= 0 && marks < 40) {
//     document.write("Your Grade is Fail");
// } else {
//     document.write("Invalid marks entered. Please enter a number between 0 and 100."); 
// }

// let marks = prompt("Enter Your Marks");
// marks = Number(marks);

// switch (true) {
//     case(marks>=100 || marks<0):
//     document.write("Invalid Number");
//     break;
//     case (marks >= 90 && marks <= 100):
//         document.write("Your Grade is A+");
//         break;
//     case (marks >= 80 && marks < 90):
//         document.write("Your Grade is A");
//         break;
//     case (marks >= 70 && marks < 80):
//         document.write("Your Grade is A-");
//         break;
//     case (marks >= 60 && marks < 70):
//         document.write("Your Grade is B");
//         break;
//     case (marks >= 50 && marks < 60):
//         document.write("Your Grade is C");
//         break;
//     case (marks >= 40 && marks < 50):
//         document.write("Your Grade is D");
//         break;
//     case (marks >= 0 && marks < 40):
//         document.write("Your Grade is Fail");
//         break;
//     default:
//         document.write("Invalid marks entered. Please enter a number between 0 and 100.");
// }

// Find the largest number of three numbers 

// let number1 =prompt("Enter Your First Number = ");
// let number2 =prompt("Enter Your Two Number = ");
// let number3 =prompt("Enter Your Tree Number = ");
// if(number1>number2 && number1>number3){
//     document.write("Number1 is largest Number"+number1); 
// }else if(number2>number1 && number2>number3){
// document.write("Number2 is largest Number"+number2); 
// }else{
//     document.write("Number3 is largest Number"+number3); 
// }


// fint the vowel and consonet number 

// let latter =prompt("Enter Your Later");
// latter=latter.toLocaleLowerCase();
// if(latter=="a" || latter=="e" || latter=="i"|| latter=="o"||latter=="u"){
//     document.write("Voels Number");
// }else{
//     document.write("Consonent Number");
// }



// let digit =prompt("Enter Your Digite");
//   if(digit==0){
//     document.write("zero");
//   }else if(digit==1){
//     document.write("One");
//   }else if(digit==2){
//     document.write("two");
//   }else if(digit==3){
//     document.write("tree");
//   }else if(digit==4){
//     document.write("four");
//   }else if(digit==5){
//     document.write("five");
//   }else if(digit==6){
//     document.write("six");
//   }else if(digit==7){
//     document.write("seven");
//   }else if(digit==8){
//     document.write("eight");
//   }else if(digit==9){
//     document.write("Nine");
//   }else{
//     document.write('Invalid Number');
//   }

// let digit =prompt("Enter Your Digite");
// digit=Number(digit);
// switch(digit){
//     case (digit==0):
//     document.write('Zero');
//     break;
//     case (digit==1):
//     document.write('1');
//     break;
//     case (digit==2):
//     document.write('two');
//     break;
//     case (digit==3):
//     document.write('tree');
//     break;
//     case (digit==4):
//     document.write('four');
//     break;
//     case (digit==5):
//     document.write('five');
//     break;
//     case (digit==6):
//     document.write('six');
//     break;
//     case (digit==7):
//     document.write('seven');
//     break;
//     case (digit==8):
//     document.write('eight');
//     break;
//     case (digit==9):
//     document.write('nine');
//     break;
//     case (digit==10):
//     document.write('tene');
//     break;
//     default:
//     document.write('invalid number');    
// }

let latter =prompt("Enter Voels Number = ");
latter=latter.toLocaleLowerCase();
switch(latter){
    case "a":
    case "e":
    case "i":
    case "o": 
    case "u":
    document.write("Voewls");
    break;
    default:
    document.write('consonent');
}
