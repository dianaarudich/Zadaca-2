ispisImena ()
function ispisImena(){
console.log("Diana" + " " + "Rudic")
}
//Zadatak 1: ispis imena i prezimena kroz funkciju



var ime2 = "Diana Rudic"
 
imeIPrezime(ime2)
function imeIPrezime(){
console.log("Diana Rudic")
}
//Zadatak 2 



var broj1 = 20
var broj2 = 5 

operacije(broj1,broj2)

function operacije (x,y){
console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)
console.log(x % y)
}
 /*Zadatak 3 odredjivanje zbira, razlike, proizvoda, kolicnika i ostatka kroz funkciju*/  




var prviBroj  = 2
var drugiBroj = 4
var treciBroj = 6
var cetvrtiBroj = 9
var petiBroj = 10

operacije2 (prviBroj, drugiBroj, treciBroj, cetvrtiBroj, petiBroj)

function operacije2(a,b,c,d,e){
console.log(a + b + c + d + e)
console.log(a - b - c - d - e)
console.log(a * b * c * d * e)
}

//Zadatak 4 racunanje zbira, razlike i proizvoda kroz funkciju



var ime = 1
var prezime = 2
imePrezime(ime,prezime)

function imePrezime(){
console.log("Diana" + " " + "Rudic")
}
/*Zadatak 5: ispis imena i prezimena kroz funkciju sa dodatkom razmaka bez promjene varijabli*/




var sedmica = 7

daniUSedmici(sedmica)

function daniUSedmici(p){

if(p == 1){
console.log("Ponedjeljak")
}
else if(p == 2){
console.log("Utorak")
}
else if(p == 3){
console.log("Srijeda")
}
else if(p == 4){
console.log("Cetvrtak")
}
else if(p == 5){
console.log("Petak")
}
else if(p == 6){
console.log("Subota")
}
else if(p == 7){
console.log("Nedjelja")
}
else{
console.log("Greska")
}
}

danUSedmici2(sedmica)

function danUSedmici2 (){


switch(sedmica){
case 1:
console.log("Ponedjeljak")
break
case 2: 
console.log("Utorak")
break
case 3:
console.log("Srijeda")
break
case 4: 
console.log("Cetvrtak")
break
case 5:
console.log("Petak")
break
case 6:
console.log("Subota")
break
case 7:
console.log("Nedjelja")
break
default: 
console.log("Greska")
}
}
//Zadatak 6



var m = 20
parnost(m)

function parnost(x){

if(x % 2 == 0){
console.log(x + " je paran broj!")
}
else{
console.log(x + " je neparan broj!")
}
}
//Zadatak 7: ispitivanje parnosti broja kroz funkciju




function fizz(f){

if(f % 3 == 0 && f % 5 == 0){
console.log(f + " je Fizz Buzz")
}
else if(f % 3 == 0){
console.log(f + " je Fizz")
}
else if(f % 5 == 0){
console.log(f + " je Buzz")
}
else{
console.log("Nije djeljivo ni sa 3 ni sa 5")
}
}
fizz(30)

for(i = 1 ; i < 30 ; i++){
fizz(i)
}
//Zadatak 8



var sekunde = 198750

sekundeMinute(sekunde)

function sekundeMinute (g){

var dani = Math.floor(g / (60 * 60 * 24))
console.log(dani)
var sati = Math.floor((g % (60 * 60 * 24)) / 3600)
console.log(sati)
var minute = Math.floor((g % 3600 ) / 60)
console.log(minute)
var sekunde = Math.floor(g % 60)
console.log(sekunde)
}
//Zadatak 9 