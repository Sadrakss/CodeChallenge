//Square Every Digit

function SquareDigits(num) {
   let createArray = CreateArray(num);
   return ArrayPower(createArray);
}

function ArrayPower(Array) {
   let arraySize = Array.length;
   let array = Array;

   let string = [];
   for (i = 0; i < arraySize; i++) {
      string += parseInt(array[i] * array[i])
   }
   return parseInt(string);
}

function CreateArray(num) {
   let string = [];
   let cont = 0;
   while (num > 0) {
      string[cont] = parseInt(num % 10);
      num = parseInt(num / 10);
      cont++;
   }
   return string.reverse();
}

