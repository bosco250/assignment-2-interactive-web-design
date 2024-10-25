//question1
function sumOf20Element() {
  let myp = document.querySelector(".answer1");
  let array1 = [
    12, 45, 67, 23, 89, 34, 56, 78, 90, 11, 22, 33, 44, 55, 66, 77, 88, 99, 100,
    1,
  ];
  let sum1 = 0;
  for (let i = 0; i < array1.length; i++) {
    sum1 += array1[i];
  }
  myp.innerHTML = `Sum= ${sum1}`;
  // console.log(sum1);
}
sumOf20Element();

// answer 2
function FindGreatestinArr(array2) {
  let largest = array2[0];
  for (let i = 0; i < array2.length; i++) {
    if (array2[i] > largest) {
      largest = array2[i];
    }
  }
  return largest;
}
const myNumbers = [
  12, 45, 67, 23, 89, 34, 56, 78, 90, 11, 22, 33, 44, 55, 66, 77, 88, 99, 100,
  1,
];
const largestNumber = FindGreatestinArr(myNumbers);
let p2 = document.querySelector(".answer2");
p2.innerHTML = `the greatest element in [12, 45, 67, 23, 89, 34, 56, 78, 90, 11, 22, 33, 44, 55, 66, 77, 88, 99, 100, 1] is equal to :  ${largestNumber}`;

//answer3
function SortingElememntOfArray(array3) {
  return array3.sort((a, b) => a - b);
}
let p3 = document.getElementById("answer3");
p3.innerHTML = `sorted array of${myNumbers} <br/> is ${SortingElememntOfArray(
  myNumbers
)}`;

//answer4
function ReverseArray(arr) {
  return arr.reverse();
}
let p4 = document.getElementById("answer4");
p4.innerHTML = `the reverse of ${myNumbers} is <br/> ${ReverseArray(
  myNumbers
)}`;

//answer5
function EvenNumbers(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
let p5 = document.getElementById("answer5");
p5.innerHTML = `The Even Number in ${myNumbers} is <br/> ${EvenNumbers(
  myNumbers
)}`;

//answer6
function OddNumbers(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
let p6 = document.getElementById("answer6");
p6.innerHTML = `The Odd Number in ${myNumbers} is <br/> ${OddNumbers(
  myNumbers
)}`;

//answer7
function averageofElement(arr) {
  let average = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  average = sum / arr.length;
  return average;
}
let p7 = document.getElementById("answer7");
p7.innerHTML = `The average of  ${myNumbers} is <br/> ${averageofElement(
  myNumbers
)}`;

//answer8
function RemoveDuplicate(arr) {
  return Array.from(new Set(arr));
}
let numbers = [
  12, 45, 12, 55, 89, 34, 55, 78, 90, 11, 22, 34, 45, 55, 66, 67, 89, 90, 12,
  12,
];
let p8 = document.getElementById("answer8");
p8.innerHTML = `when you remove duplicated element from ${numbers}  <br/> you get ${RemoveDuplicate(
  numbers
)}`;

//answer9
function findMedian(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  const midIndex = sortedArr.length / 2;
  const median = (sortedArr[midIndex - 1] + sortedArr[midIndex]) / 2;
  return median;
}
let p9 = document.getElementById("answer9");
p9.innerHTML = `The median Of ${myNumbers}  <br/> is ${findMedian(numbers)}`;

//answer10
function Multiplyedby2(arr) {
  return arr.map((a) => a * 2);
}
let p10 = document.getElementById("answer10");
p10.innerHTML = `Original Array ${myNumbers}  <br/> New array multiplayed by 2: ${Multiplyedby2(
  myNumbers
)}`;

//answer11
function PrintElement(arr) {
  let results = "";
  arr.forEach((element) => {
    results += element + "<br/>";
  });
  return results;
}
const names = [
  "Edward",
  "Fiona",
  "George",
  "Hannah",
  "Ian",
  "Julia",
  "Kevin",
  "Laura",
  "Michael",
  "Nina",
  "Oscar",
  "Paula",
  "Quentin",
  "Rachel",
  "Steve",
  "Tina",
  "Alice",
  "Charlie",
  "Diana",
  "Bob",
];
let p11 = document.getElementById("answer11");
p11.innerHTML = `${PrintElement(names)}`;

//answer 12
function SortArray(arr) {
  return arr.sort((a, b) => a.localeCompare(b));
}
let p12 = document.getElementById("answer12");
p12.innerHTML = `${SortArray(names)}`;

//answer13
function searchName(arr, name) {
  if (arr.includes(name)) {
    alert(`The name of__ ${name} __is included in my Array`);
  } else alert("There is no match name available");
}
let p13 = document.getElementById("answer13");
p13.innerHTML = ` Original Array is :${names}`;

let inputEl = document.getElementById("SeachEl");
let MyButton = document.getElementById("searchBut");

MyButton.addEventListener("click", () => {
  let nameEl = inputEl.value;
  searchName(names, nameEl.trim());
});

//answer 14
function largestName(arr){
  let largest=""
  arr.forEach((element)=>{
    if(element.length>largest.length){
      largest=element
    }
  })
  return largest;
}
let p14 = document.getElementById("answer14");
p14.innerHTML = `Original Arrayis: ${names} <br/> while largest name in my array is: ${largestName(names)}`;

//answer15
function findStartWithLetter(arr,letter){
  let lowerLetter=letter.toLowerCase();
  return arr.filter((name) => {
    return name.toLowerCase().startsWith(lowerLetter);
});
}
let p15 = document.getElementById("answer15");
let MylowerLetter="A";
p15.innerHTML = `Original Arrayis: ${names} <br/> while the names starts with letter  A: ${findStartWithLetter(names,MylowerLetter)}`;

//answer 16
function toUpperCaseElement(arr) {
  return arr.map(element => element.toUpperCase()); 
}let p16 = document.getElementById("answer16");

p16.innerHTML = `Original Array is: ${names.join(', ')} <br/> While the names converted to uppercase we have: ${toUpperCaseElement(names).join(', ')}`;

//anzswer 17
function removeName(arr, nameToRemove) {
  return arr.filter(name => name !== nameToRemove); // Create a new array excluding the specified name
}
let p17 = document.getElementById("answer17");
const nameToRemove = "Alice";
p17.innerHTML = `Original Array is: ${names.join(', ')} <br/> Array after removing: ${removeName(names, nameToRemove)}`;

//answer 18
function countNamesWithLetterA(arr) {
  return arr.filter((name)=>name.toLowerCase().includes("a")).length;
}
let p18 = document.getElementById("answer18");
p18.innerHTML = `Original Array is: ${names.join(', ')} <br/>Number of names containing the letter 'a': ${countNamesWithLetterA(names)}`;

//answer 19
function JoinArray(arr){
  return arr.join("_");
}
let p19 = document.getElementById("answer19");
p19.innerHTML = `Original Array is: ${names} <br/>Array after joinned: ${JoinArray(names)}`;

//answer 20
function reverseArray(arr){
  return arr.reverse().join(",")
}
let p20 = document.getElementById("answer20");
p20.innerHTML = `Original Array is: ${names} <br/>Array after Reversed: ${reverseArray(names)}`;

//answer 21
const person={
  name:"Bosco",
  age:"25",
  occupation:"Software Developer"
}
let p21 = document.getElementById("answer21");
p21.innerHTML = `Here with objects:<br/> name:${person.name}<br/> age:${person.age}<br/>Occupation: ${person.occupation}`;

//answer 22
function formatPersonInfo(myperson) {
  return `Name: ${myperson.name}, Age: ${myperson.age}, Occupation: ${myperson.occupation}`;
}
let p22 = document.getElementById("answer22");
p22.innerHTML = `The fomoated data is: ${formatPersonInfo(person)}`;

// answer 23
function addProperty(obj, propertyName, value) {
  obj[propertyName] = value; // Add the new property
}
addProperty(person, 'hobby', 'Reading');
let p23 = document.getElementById("answer23");
p23.innerHTML = `The Initial data is: ${formatPersonInfo(person)} and when you addProperty:name:${person.name} Age: ${person.age}, Occupation: ${person.occupation} Hobby:${person.hobby} `;

//answer 24
function removeProperty(obj, propertyName) {
  delete obj[propertyName]; 
}
const person1 = {
  name: "Alice",
  age: 30,
  occupation: "Software Developer",
  hobby: "Reading"
};

removeProperty(person1,"hobby") 
let p24 = document.getElementById("answer24");
p24.innerHTML = `The Initial data is:Name: ${person1.name}, Age: ${person1.age}, Occupation: ${person1.occupation}, Hobby: ${person1.hobby} <br/> when you addProperty:name:${person1.name} Age: ${person1.age}, Occupation: ${person1.occupation}`;

//answer 25
function listPropertiesAndValues(obj) {
  return Object.entries(obj).map(([key, value]) => `${key}: ${value}`);
}
let p25 = document.getElementById("answer25");
p25.innerHTML = `The properties of object and their values: ${listPropertiesAndValues(person1)}`;

//answer 26
function MergeObject(obj1,obj2){
  return {...obj1,...obj2}
}
function listPropertiesAndValues(obj) {
  return Object.entries(obj)
      .map(([key, value]) => `${key}: ${value}`)
      .join(', ');
}
const person2 = {
  Country: "Rwanda",
  location: "New York"
};
const mergedPerson = MergeObject(person1, person2);

let p26 = document.getElementById("answer26");
p26.innerHTML = `The properties of the merged object and their values: ${listPropertiesAndValues(mergedPerson)}`;

//answer 27
function propertyIsExist(obj,property){
  return obj.hasOwnProperty(property)
}
let p27 = document.getElementById("answer27");
p27.innerHTML = `is person has the property of name?!<br/> ${propertyIsExist(person,"name")}`;

//answer 28
function cloneObject(obj){
  return JSON.parse(JSON.stringify(obj))
}
const original = { name: "Alice", age: 25, location: { city: "New York" } };
const clone = cloneObject(original);

clone.location.city = "Los Angeles"; // Modifying clone does not affect original

let p28 = document.getElementById("answer28");
p28.innerHTML = `object after cloned: ${original.location.city}`;

//answer 29
function printProperty(array,property){
  let results=""
  array.forEach((obj)=>{
    if(obj.hasOwnProperty(property)){
      results+=obj[property]+'<br/>'
    }else
    results+=`Property "${property}" not found in object`, obj
    })
  return results
}
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];

let p29 = document.getElementById("answer29");
p29.innerHTML = `${printProperty(people,"name")}`;

//answer 30
function updateProperty(obj, property, newValue) {
  let results = "";
  if (obj.hasOwnProperty(property)) {
    obj[property] = newValue;
    results += `Updated ${property} to ${newValue}`;
  } else {
    results += `Property "${property}" does not exist on the object`;
  }
  return results;
}

function handleUpdate() {
  const propertyToUpdate = prompt("Enter the property to update:");
  const newValue = prompt("Enter the new value:");
  const result = updateProperty(person, propertyToUpdate, newValue);
  document.getElementById("answer30").innerHTML = result;
}

// answer 31
function reverseString(str){
  return str.split('').reverse().join('');
}
let string1="Dusengimana"

let p31 = document.getElementById("answer31");
p31.innerHTML = `orginal string:"${string1}" after reversed we have<br/> ${reverseString(string1)}`;

//answer 32
function countVowel(str){
  let vowel="aeiuoAUIEO";
  let count=0;
  for (let char of str){
    if(vowel.includes(char)){
      count+=1
    }
  }
  return count;
}
let p32 = document.getElementById("answer32");
p32.innerHTML = `orginal string:"${string1}" <br/> number of vowel in my string: ${countVowel(string1)}`;

//answer 33
function ToUpperCase(str){
  return str.toUpperCase();
}
let p33 = document.getElementById("answer33");
p33.innerHTML = `orginal string:"${string1}" <br/> my string in uppercase: ${ToUpperCase(string1)}`;

//answer 34
function findLength(str){
  let count=0;
  for(let char of str){
    count++
  }
  return count
}
let p34 = document.getElementById("answer34");
p34.innerHTML = `orginal string:"${string1}" <br/>the length of my string without using length method: ${findLength(string1)}`;

//answer 35
function replaceSpace(str){
  return str.split(' ').join("-")
}
let string2="Hello my people"
let p35 = document.getElementById("answer35");
p35.innerHTML = `orginal string:"${string2}" <br/>after string joinned a hyphens: ${replaceSpace(string2)}`;


//answer 36
function first10charcter(str){
  return str.slice(0,10)
}
let p36 = document.getElementById("answer36");
p36.innerHTML = `orginal string:"${string2}" <br/> extract frist 10 character: ${first10charcter(string2)}`;

//answer 37
function replaceWord(str,wordTofind,newWord){
  const regx= new RegExp(`\\b${wordTofind}`,'g')
  return str.replace(regx,newWord)
}
let p37 = document.getElementById("answer37");
p37.innerHTML = `orginal string:"${string2}" <br/> replace people by friends: ${replaceWord(string2,"people","friends")}`;

//answer 8
function SplitString(str){
  return str.split('')
}
let p38 = document.getElementById("answer38");
p38.innerHTML = `orginal string:"${string2}" <br/> the string splited in array : ${SplitString(string2)}`;

//answer 39
function removeNumbers(str){
  return str.replace(/\d+/g, '');
}
let string3="Hello123 World45! This is 2024.";
let p39 = document.getElementById("answer39");
p39.innerHTML = `orginal string:"${string3}" <br/> string after remove a numbers : ${removeNumbers(string3)}`;

//answer 40
function insertString(str,newstr,position){
  if(position>str.length){
    position=str.length
  }
  return str.slice(0,position)+newstr+str.slice(position)
}

let p40 = document.getElementById("answer40");
p40.innerHTML = `orginal string:"${string1}" <br/> insert some string on position of 7 : ${insertString(string1,"kigali",7)}`;

//answer 41
function changeBg(){
  const bodyEl=document.body;
  bodyEl.classList.toggle("bgChanged")
}
//answer 42
function HideName(name){
  name.style.display="none";
}
const p42=document.querySelector(".name")
function handleHide(){
  HideName(p42)
}

//answer 43

function appPragraph(){
  const pragraph=document.createElement('p')
  pragraph.textContent="This is new pragraph added"
  document.querySelector('.receiveChild').appendChild(pragraph)
}
