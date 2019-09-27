function convertToRoman(num) {
 let finalStr = '';
 let roman = {
     M:1000,
     CM:900,
     D:500,
     CD:400,
     C:100,
     XC:90,
     L:50,
     XL:40,
     X:10,
     IX:9,
     V:5,
     IV:4,
     I:1
 }
 for (let i in roman) {
    while (num >= roman[i]) {
        finalStr += i;
        num -= roman[i];
    }
 }
 console.log(finalStr);
 return finalStr;
}

convertToRoman(500);