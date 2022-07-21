                                                                                            //SoloLearn Js darslari

//document.write("<h1>Salom dunyo</h1>") ;// htmlda yozish uchun
// console.log('Salom dunyo'); //consolga yozish uchun

//                                                      VAR
// var x =10;
// console.log(x); //har doim ; bulishi kk

/* This code 
   creates an 
   alert box */

//alert("This is an alert box!");
// var sayhi = 'salom  \'men zurman\' '

//Boolean 
 /*
 zero(0),empty string,null =false;
 true
 */

 // if, else if , else
//  var a=15;
//  var b=20;
//  if (a===b){
//      console.log(a+' '+b+'ga tengu');
//  }else if (a>b){
//      console.log(a+' '+b+' dan kichik yoki teng');
//  }else{
//      console.log('Teng emas bular');
//  }










 //////////////////////////////////////////////////////////////////////////////////////////////////////           SOLOLEARN           //////////////////////////////////////////////////////////////////

//////////////////////////////////////////            OPERATIONS
/*
== teng
=== data type ham teng
!= teeng emas
!== data typr teng emas\
>
<
<=
>=
LOGICAL Operation
&& -return true if both are true (and)
|| - Return true if one is true(or)
! -Return true if operend is false
*/
// var age = 22;
// var isKata = (age < 18) ? 'Yosh juda':'Qaba qari';
// console.log(isKata); //Qaba qari

//////////////////////////////////////////             IF , ELSE IF , ELSE
// var num1 = 7;
// var num2 = 10;
// if (num1<num2){
//     alert('JS osonda')
// }

//////////////////////////////////////////            SWITCH CASE
// var rang='sariq';
// switch (rang) {
//     case 'kuk':
//         document.write('bu kuk');
//         break;
//     case 'oq':
//         document.write('Bu oq');
//         break; //har doim break quyiladi
//     default: // agar birirta case tushmasa defaultga keladi
//         console.log('Bu sariq edi va defaultga keldi')
//         break;
// }



//////////////////////////////////////////             For ,while,do while, foreach

//1
// var i =0;//0 dan 9gacga boradi
// for (;i<10; ){
//     console.log(i)
//     i++
// }

//2
// for (let i = 0; i < 5; i++) {
//     const element = i;
//     console.log(element)
    
// }


//////////////////////////////////////////               WHILE
// var i = 0;
// while (i<10) {
//     console.log(i);
//     i++;
// }


//////////////////////////////////////////               DO While
// var i =20;
// do {
//     console.log(i);
//     i++;
// } while (i<=25);


//////////////////////////////////////////               FUNCTIONS
// function FunctionNames(){
//     console.log('Fuknsiya ichida kod')
// }
// FunctionNames(); //funkisya caqiriladi

//2 Varable olishi
// function Ismi(name) {
//     console.log('Salomlar bulsin! '+ name);    
// }
// Ismi('Firdavs');

//3 RETURN
// function top(x,y) {
//     return x*y;
// }
// console.log(top(21,45))

//////////////////////////////////////////               PROMT
// var user = prompt('Ismiz nima');
// alert(user) // alert holatdan userdan inpute qabul qilish

//////////////////////////////////////////               Confirm
//Tasdiqlash
// var res = confirm('saytdan chiqmoqchimisiz?');
// if (res==true) {
//     alert('Xayr so bulin')
// }else{
//     alert('Biz bilan qolganizdan hursandmiz')
// }

//////////////////////////////////////////               DICTINARY
// Luxat hosil qiilish
// var person = {
//     name:'david',age:31,
//     rangi:'qizl',uzunligi:175
// };
// console.log(person.age)
// console.log(person.rangi)

//////////////////////////////////////////               OBJECT FUNCTION
//object yasash uchun
// function person(name,age,color) {
//     this.name=name;
//     this.age = age;
//     this.color=color;
// }
// // OBYECT olish - p1
// var p1 = new person('Davron',19,'oq');
// var p2 = new person('Fidya',20,'qora');
// // malumotlari
// console.log(p1.age)
// console.log(p2.name)

//////////////////////////////////////////               OBJECT VAR
// OBYECT yashash var bilan
// var David = {
//     name:'Davron',
//     age:21
// };
// document.write(David.age)

//////////////////////////////////////////               OBJECT FUNCTION METHOD
//object yasash uchun
// function person(name,age,color) {
//     this.name=name;
//     this.age = age;
//     this.color=color;
    
//         //funkisya meethodi
//     this.ChangeName = function (name){
//         this.name = name; //update name
//     }
// }
// //obyect olish
// var p2 = new person('Fidya',20,'qora');
// p2.ChangeName('Firdavs')
// document.write(p2.name)

// 2
//object yasash uchun
// function person(name,age) {
//     this.name=name;
//     this.age = age;
//     this.yearborn = bornYear
// }
// function bornYear(){
//     return 2021-this.age;
// }
// var p2 = new person('Fidya',20);
// document.write('<h1>Sen tugugan yil bu - '+p2.yearborn()+'</h1>');//yearborn()

//////////////////////////////////////////               ARRAYS
//  1
// var cources = new Array('JS','CSS','Java');
// var cource_indx = cources[0]//index 0dan bowlanadi [] - orqali olinadi index berilib
// cources[1] = 'C++'; //change 2nd element

// 2
// var cources = new Array(3);
// cources[0] = 'HTML'
// cources[1] = 'js'
// cources[2] = 'wd'
// document.write(cources[2])

// 3
// var cources = ['html','css','js'];
// document.write(cources[2]);

// // Array uzunligi length
// document.write(cources.length)    


//////////////////////////////////////////              ARRAY CONCAT
// @ta arrayni birlashtirsh uchun ishlatamiz concat
// var cources = ['html','css','js'];
// var cources2 = ['java','r','py'];
// var all = cources.concat(cources2);
// document.write(all)

//////////////////////////////////////////               MATH Lib
// document.write(Math.PI) // 3.14

//////////////////////////////////////////               setInterval
// parametr 1chi funksiyamiz nomi sung millisecunda shu funksiyani ishlatib turish
// function myAlert(){
//     alert('Salomchae');
// }
// setInterval(myAlert,2000);

///////////////////////////////////////////            DATE 
// var d = new Date();
// console.log(d) //2021-10-29T09:03:50.089Z
// console.log(d.getDate())

//////////////////////////////////////////               DOM - Doccument Object model
//1
// var salomlar = document.getElementById("salomlar");
// salomlar.innerHTML = 'salom meni ismim davron';
// document.body.innerHTML = 'Salom Jsca'
//2
// var arr = document.getElementsByTagName('p');
// for (var x =0;x<arr.length;x++){
//    arr[x].innerHTML = 'Hi there';
// }
//3
// var a = document.getElementById('demo');
// var arr = a.childNodes;
// for(var x = 0;x<arr.length;x++){
//    arr[x].innerHTML = 'New text';
// }
//4 change image src
// var el = document.getElementById('myIMG');
// el.src = 'apple.png';
//5 change style
// var t = document.getElementById('text');
// t.style.color = '6600FF';
// t.style.width = '100px';
//////////////////////////////////////////               Handling Events
// function show(){
//    alert('salom');;
// }

//////////////////////////////////////////               Listener Events
// window.onload = function(){
//    //take id button
//    var btn = document.getElementById('btn');
//    //clik bulganda
//    btn.addEventListener('click',myFunction);

//    function myFunction(){
//        alert(Math.random());
//        // clikni uchiramiz
//        btn.removeEventListener('click',myFunction);
//    }
// };

//////////////////////////////////////////               EPAM Script
// let name = 'David';
// let msg = `Welcome ${name}!`; // ` ` qushtirnoq ichida yoziladi
// console.log(msg)

//2
// let list = ['x','y','z'];
// for (let val of list){
//    console.log(val);//x y z
// }

//3
// const add = (x,y)=>{
//    let sum = x+y;
//    console.log(sum);
// }
// add(2,5);

//4                                   FOREACH
// const arr = [2,3,4,5,6]
// arr.forEach(v=>{
//    console.log(v*2);
// });

//5                                      DEFAULT VARABLE
// function test(a,b=2,c=5){
//    return a+b+c;
// }
// console.log(test(5));
/////////////////////////////////////////////                Class

// class Rectangle {
//    constructor(height,width){
//       this.height = height;
//       this.width = width;
//    }
//    get area(){
//       return this.calcArea();
//    }
//    calcArea(){
//       return this.height*this.width;
//    }
// }
// const squear = new Rectangle(5,5);
// console.log(squear.area);

///////////////////////////////////////////////            Inherainse Vorislik olish  clasdan
// Ota class
// class Animal{
//    constructor(name,sex){
//       this.name=name;
//       this.sex =sex;
//    }
//    speak(){
//       console.log(this.name + 'Makes noise');
//    }
// }
// // cat uchun animaldan vorislik olish
// class Cat extends Animal{
//    constructor(name,sex){
//       super(name);// super ota classdagi malumot
//       this.sex = sex;
//    }
//    speak(){
//       console.log(this.name+' myov');
//    }
// }
// let cat = new Cat('Mosh','er');
// cat.speak();
///////////////////////////////////////////////                SET
// let set = new Set([1,2,3,3,4,45,5,5,6,3,3,3,3,3,3,3,3,3,3]); // Set listda 2ta birxilikga quymaydi dont dublicate
// console.log(set.size)
// add
// let newset = new Set();
// newset.add(5).add(3).add(22);
// console.log(newset.has(3))

// FILTER
let lists= [1,3,5,4,6,7,2].filter(function(x){
   return x>3;
})[0]//bu list qaytaradi index bilan ishlab olishimiz mumkin
console.log(lists)

//2
let li = [1,3,5,2,5,6,2,5,7].find(x => x > 3);
console.log(li)

console.log('foo'.repeat(3)); //foofoofoo
