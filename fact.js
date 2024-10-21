function factorial(number) {
  if (n < 1) {
    return;
  }
  let sum = 1;
  for (i = 1; i <= number; i++) {
    sum = sum * i;
  }
  return sum;
}

console.log(factorial(7));
