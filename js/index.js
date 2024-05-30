// 1-masala

// function moth() {
//   let a = 10;
//   switch (a) {
//     case 1:
//       console.log("yanvar");
//       break;
//     case 2:
//       console.log("fevral");
//       break;
//     case 3:
//       console.log("mart");
//       break;
//     case 4:
//       console.log("aprel");
//       break;
//     case 5:
//       console.log("may");
//       break;
//     case 6:
//       console.log("iyun");
//       break;
//     case 7:
//       console.log("iyul");
//       break;
//     case 8:
//       console.log("avgust");
//       break;
//     case 9:
//       console.log("sentabr");
//       break;
//     case 10:
//       console.log("oktabr");
//       break;
//     case 11:
//       console.log("noyabr");
//       break;
//     case 12:
//       console.log("dekabr");
//       break;
//       default:
//           console.log("bunday oy yuq");
//       break;
//   }
// }

// moth();

// 2-masala

// function baholash(ball) {
//   let res;

//   switch (true) {
//     case ball >= 90 && ball <= 100:
//       res = "A";
//       break;
//     case ball >= 80 && ball < 90:
//       res = "B";
//       break;
//     case ball >= 70 && ball < 80:
//       res = "C";
//       break;
//     case ball >= 60 && ball < 70:
//       res = "D";
//       break;
//     case ball >= 0 && ball < 60:
//       res = "F";
//       break;
//     default:
//       res = "bunday ball yuq";
//   }

//   return res;
// }

// let ball = 75;
// console.log(baholash(ball));

// 3-masala

// function getGreeting() {
//   let soat = 21;
//   switch (true) {
//     case soat >= 5 && soat < 12:
//       console.log("Xayrli tong");
//       break;
//     case soat >= 12 && soat < 17:
//       console.log("Xayrli kun");
//       break;
//     case soat >= 17 && soat < 21:
//       console.log("Xayrli kech");
//       break;
//     case (soat >= 21 && soat <= 23) || (soat >= 0 && soat < 5):
//       console.log("Xayrli tun");
//       break;
//     default:
//       console.log("bunday vaqt yo'q");
//   }
// }

// getGreeting();

// 4-masala

// (fuul-stek o'qiganimda yasagan edik) <-- <-- <-- <-- <-- <- <- <- <- <- <- <- <- <- <- <- <- <-

// function taxminOyini() {
//   const r = Math.floor(Math.random() * 100);
//   let a;
//   console.log("0 dan 100 gacha bo'lgan sonni kiriting:");

//   const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });

//   function savolBerish() {
//     readline.question("", (input) => {
//       a = parseInt(input);
//       if (a > r) {
//         console.log("Siz kattaroq son kiritdingiz");
//         savolBerish();
//       } else if (a < r) {
//         console.log("Siz kichikroq son kiritdingiz");
//         savolBerish();
//       } else {
//         console.log("Tabriklaymiz, siz topdingiz!");
//         readline.close();
//       }
//     });
//   }

//   savolBerish();
// }

// taxminOyini();

// 5-masala

// function juft() {
//   let i = 0;
//   while (i <= 20) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//     i++;
//   }
// }

// juft();

// function juft() {
//   let i = 0;
//   do {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//     i++;
//   } while (i <= 20);
// }

// juft();

// 6-masala

// function stop_t() {
//   let i;
//   while (true) {
//     i = prompt("boshqa so'z kriting");
//     if (i === "stop") {
//       break;
//     }
//   }
//   console.log("topildi");
// }

// stop_t();


