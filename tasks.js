// ===========================================================================================
// ===========================================================================================
// ===========================================================================================

//  QUESTION 1:
// Input:
// a = 9, b= 7

// Şərt
// 3 deyishen olmamalidi

// Output:
// b=9, a= 7

// Solution:
let a = 3;
let b = 5;

[a, b] = [b, a];

console.log(a, b); // a = 5, b = 3

// ===========================================================================================
// ===========================================================================================
// ===========================================================================================

//  QUESTION 2:
// Input:
// a = [9,8,7,6,5]
// b = [6,5,9,7]

// Şərt
// function istifade elemek olmaz
// 1  dene for istifade elemek olar
// 1 dene if istifade elemek olar

// Output:
// 8

// Solution:
let a = [9, 8, 7, 6, 5];
let b = [6, 5, 9, 7];
let sumA = 0;
let sumB = 0;

for (let i = 0; i < a.length; i++) {
  sumA += a[i];
  if (i < b.length) {
    sumB += b[i];
  }
}
console.log(sumA - sumB); //8

// README: Bu kod sadəcə length-i o birindən 1 artıq olan array üzərində işləyir. 
// 2 arrayin cəmini alıb bir-birindən çıxıram. Bütün növ array-lərdə işləyən bir alqoritm yazmalıyam? 
// Yoxsa sadəcə verilmiş array üzərində?
// 1 for və 1 if ilə ancaq belə yaza bildim açığı

// ===========================================================================================
// ===========================================================================================
// ===========================================================================================

//  QUESTION 3:
// Input:
// 1 2 3 4 5
// 6 7 8 9 10
// 11 12 13 14 15
// 16 17 18 19 20
// 21 22 23 24 25

// Şərt
// 1 dene for
// if istifade elemek olmaz
// function istifade elemek olmaz

// Output:
// 1 2 3 4 5 10 9 8 7 6  11 12 13 14 15 20 19 18 17 16 21 22 23 24 25

// Solution:
let bool = true;
let a = [1, 2, 3, 4, 5,
    6, 7, 8, 9, 10,
    11, 12, 13, 14, 15,
    16, 17, 18, 19, 20,
    21, 22, 23, 24, 25]

// Statik, sadece ishlesin deye yazdim
for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
  if (a[i] % 5 == 0) {
    let b = a[i] + 5;
    for (let j = b; j > b - 5; j--) {
      console.log(j);
      if (j == 6) {
        let q = j + 5;
        for (let c = q; c < q + 5; c++) {
          console.log(c);
          if (c == 15) {
            let u = c + 5;
            for (let z = u; z > u - 5; z--) {
              console.log(z);
              if (z == 16) {
                let p = z + 5;
                for (let s = p; s < p + 5; s++) {
                  console.log(s);
                }
              }
            }
          }
        }
      }
    }
    break;
  }
}
// Statik, sadece ishlesin deye yazdim

// Dinamik yazilan amma ishlemeyen hisse.
for (let i = 0; i < a.length;) {
  console.log(a[i]);
  if (bool) {
    i++;
  } else {
    i--;
  }
  if ((a[i] % 5) % 2 == 0) {
    bool = false;
  } else {
    bool = true;
  }
}
console.log(a);
// Dinamik yazilan amma ishlemeyen hisse.

// Last update
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
let f = (a=[]) => {
    let res = [];
    for(let i = 0; i < a.length; i++){
        let currentFifth = Math.ceil((i+1)/5);
        console.log(currentFifth, "currentFifth");
        let totalFifthCount = Math.ceil(a.length / 5);
        console.log(totalFifthCount, "totalFifthCount");
        let currentFifthResidue = (currentFifth % 2) - 1;
        console.log(currentFifthResidue, "currentFifthResidue");

        res.push(arr[((i*(currentFifth%2)) +(currentFifthResidue * (currentFifth*5)) * (currentFifth%2)) 
        + (a.length - (5 * (totalFifthCount - currentFifth)) - (i%5)-1) * Math.abs(currentFifthResidue)]);
    }
    return res;
}
console.log(f(arr))
// Last update

// README: Mən hələ, belə google search etməmişdim :)

// ===========================================================================================
// ===========================================================================================
// ===========================================================================================

