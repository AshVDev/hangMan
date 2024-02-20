// let str = "Avinash Kumar Akash Kumar dfjsdjkfhskjfhs";
// function reverseStr(str) {
//   let strArr = str.split(" ");
//   let eachStrArr = strArr.map((e) => e.split("").reverse());
//   strArr = strArr.reverse();
//   //   return strArr.join("");
//   return eachStrArr.map((e) => e.join("")).join(" ");
// }

// console.log(reverseStr(str));

// function longestStr(str) {
// //   let strArr = str.split(" ");
// //   let lenArr = strArr.map((e) => e.length);
// //   let sortArr = lenArr.sort((a, b) => b - a);
// //   return strArr.filter((x) => x.length === sortArr[0])[0];
// // let strLen=0;
// // for(let i=0; i<str.length; i++){
// // if(str[i]!==' '){
// //     strLen++;
// // }
// // else{

// // }
// // }

// }

// function uniqArr(arr) {
//   let empArr = [];
//   arr.forEach((element) => {
//     if (!empArr.includes(element)) {
//       empArr.push(element);
//     }
//   });
//   console.log(empArr);
// }
// uniqArr([1, 2, 43542, 1, 32, 342, , 1334, 2, 4342]);
// function isAnagram(str1, str2) {
//   if (!str1 || !str2) return "Enter Valid Strng";
//   let sortedStr1 = str1?.toLowerCase()?.split("")?.sort()?.join("");
//   let sortedStr2 = str2?.toLowerCase()?.split("")?.sort()?.join("");
//   if (sortedStr1 === sortedStr2) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isAnagram("listen", "netsil"));

// function factorial(num) {
//   if (num === 1) {
//     return 1;
//   }

//   return num * factorial(num - 1);
// }

// console.log(factorial(5));

// console.log(
//   "   djfkdj kdsjfdfiuh dnfkdskf   dsfhkdjshflds kdfskd"
//     .split("")
//     .filter((x) => x !== " ")
//     .join("")
// );

// function fibonaci(num) {
//   if (num <= 1) {
//     return num;
//   }

//   return fibonaci(num - 1) + fibonaci(num - 2);
// }

// for (let i = 0; i <= 10; i++) {
//   console.log(fibonaci(i));
// }

// const a = 5;
// const b = 2;

// console.log(a << b);

// let randInt = Math.floor(Math.random() * 99) + 1;

// while (true) {
//   let inp = +prompt("enter Number");
//   if (inp === randInt) {
//     alert("You Guessed it Right");
//     break;
//   } else if (inp < randInt) {
//     alert("You answer is less then Number");
//   } else if (inp > randInt) {
//     alert("You answer is Greater then Number");
//   } else if (Math.abs(randInt - inp) < 5) {
//     alert("You are Close");
//   }
// }

const categoriesWithItems = [
  {
    fruits: [
      "orange",
      "lemon",
      "lime",
      "strawberry",
      "blueberry",
      "raspberry",
      "pineapple",
      "banana",
      "mango",
    ],
  },
  {
    vegetables: [
      "carrot",
      "potato",
      "beetroot",
      "spinach",
      "kale",
      "lettuce",
      "broccoli",
      "cauliflower",
      "cabbage",
    ],
  },
  {
    animals: [
      "dog",
      "cat",
      "elephant",
      "parrot",
      "eagle",
      "ostrich",
      "turtle",
      "snake",
      "lizard",
    ],
  },
  {
    transportation: [
      "car",
      "bicycle",
      "train",
      "airplane",
      "helicopter",
      "hot air balloon",
      "boat",
      "ship",
      "submarine",
    ],
  },
  {
    colors: [
      "red",
      "blue",
      "green",
      "yellow",
      "purple",
      "orange",
      "pink",
      "brown",
      "black",
    ],
  },
  {
    countries: [
      "USA",
      "Canada",
      "UK",
      "Australia",
      "Japan",
      "France",
      "Germany",
      "Brazil",
      "India",
    ],
  },
  {
    planets: [
      "Mercury",
      "Venus",
      "Earth",
      "Mars",
      "Jupiter",
      "Saturn",
      "Uranus",
      "Neptune",
      "Pluto",
    ],
  },
];

let n = 8;
function randIndex(array) {
  return Math.floor(Math.random() * array.length);
}

let randomItemObj = categoriesWithItems[randIndex(categoriesWithItems)];
let randomItemArray = Object.values(randomItemObj).flat();
let randomItemString = randomItemArray[randIndex(randomItemArray)];
const qType = Object.keys(randomItemObj).flat()[0];
console.log(Object.keys(randomItemObj).flat()[0], randomItemString);
const alreadyUSedWords = [];

const empty = document.querySelector("div[data-key=empty]");
const categoryTag = document.createElement("h1");
categoryTag.textContent = `${qType.toUpperCase()}`;
empty.appendChild(categoryTag);
const divForWords = document.createElement("div");
divForWords.setAttribute("style", "display:flex; gap:4px;");
for (let i = 0; i < randomItemString.length; i++) {
  const containerEmpty = document.createElement("div");
  containerEmpty.setAttribute("data-input", `${i}`);
  containerEmpty.classList.add("blank-container");
  divForWords.appendChild(containerEmpty);
}
empty.appendChild(divForWords);
console.log(empty);

const container = document.querySelector(".container");
container.addEventListener("click", (event) => {
  let enterValue = event.target.textContent;
  if (
    randomItemString.toLowerCase().includes(enterValue.toLowerCase())
    //  && !alreadyUSedWords.includes(enterValue.toLowerCase())
  ) {
    let charInds = randomItemString
      .split("")
      .map((e, i) => (e.toLowerCase() === enterValue.toLowerCase() ? i : null))
      .filter((x) => x !== null);
    const blankContainer = document.querySelectorAll(".blank-container");
    charInds.forEach((charInd) => {
      emptyString.splice(charInd, 1, enterValue);
      blankContainer.forEach((e, i) => {
        if (i === charInd) {
          e.textContent = enterValue;
        }
      });
    });
    event.target.textContent = "❌";
  } else {
    n--;
    event.target.textContent = "❌";
  }

  console.log(event.target.textContent, n);
  if (n <= 0) {
    alert("You Lose");
    window.location.reload();
  }
});

let emptyString = randomItemString.split("").map((e, i) => (e = " _ "));

// while (n > 0) {
//   if (emptyString.join("") === randomItemString) {
//     break;
//   }
//   const enterValue = prompt(
//     `Guess The ${qType} You Have ${n} Chances Used Chars:${alreadyUSedWords.join(
//       ","
//     )} Ans: ${emptyString.join("")}`
//   );

//   if (
//     randomItemString.toLowerCase().includes(enterValue.toLowerCase()) &&
//     !alreadyUSedWords.includes(enterValue.toLowerCase())
//   ) {
//     let charInds = randomItemString
//       .split("")
//       .map((e, i) => (e === enterValue ? i : null))
//       .filter((x) => x !== null);
//     charInds.forEach((charInd) => {
//       emptyString.splice(charInd, 1, enterValue);
//       const fillingData = document.querySelector(`div[data-input=${charInd}]`);
//       fillingData.textContent = enterValue.toUpperCase();
//     });
//   } else {
//     if (!alreadyUSedWords.includes(enterValue.toLowerCase())) {
//       n--;
//     }
//   }
//   if (!alreadyUSedWords.includes(enterValue.toLowerCase())) {
//     alreadyUSedWords.push(enterValue.toLowerCase());
//   }
// }

// if (emptyString.join("") === randomItemString) {
//   alert("You Win");
// }
