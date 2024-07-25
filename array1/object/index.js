let name ="Nazmul Hossain";
let age =25;
let cgpa =3.92;
let languages = ["English","Hindi","Bangla"]
function Student(name,age,cgpa,languages) {
  this.name=name;
  this.age=age;
  this.cgpa=cgpa;
  this.languages=languages;

  // adding function inside  a constructor
  this.display()=function(){
    document.write(this.name);
    document.write(this.age);
    document.write(this.cgpa);
    document.write(this.languages);
}
let  student1 =new Student('Nzmul Hossain',25,3.92,["English","Hindi","Bangla"]);
let  student2 =new Student('Nzmul Hossain',25,3.92,["English","Hindi","Bangla"]);
}
// document.write(this.languages);
student1.display();