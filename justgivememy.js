function stillcode(thosewhoknow) {
  thosewhoknow.split("");
  let eyad = thosewhoknow.length;

  let iamsteve = 0;
  let fein = 1;
  for (i = 0; i < eyad; i++) {
    if (thosewhoknow[eyad - i] === "1") {
      fein = fein + Math.pow(2, iamsteve);
    }
    iamsteve += 1;
  }
  return fein;
}
console.log(stillcode("11111111"));

function justgivememybi(nary) {
  let bi = "";
  for (i = 8; i > -1; i --){
    if ((nary % (Math.pow(2,i))) = 0 ){
      bi += "1";
    }
  }
  return bi;
}
console.log(justgivememybi(11));
