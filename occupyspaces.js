function torchic(n, oggi, domani) {
  let same = 0;
  let todaysplit = oggi.split("");
  let yessplit = domani.split("");
  if (n < 0 || n % 1 != 0) {
    return;
  } else {
    for (i = 0; i <= n; i++) {
      if (todaysplit[i] === "C" && yessplit[i] === "C") {
        same += 1;
      }
    }
    return same;
  }
}
let oggi = "C.CC..";
let domani = ".CC.C";
let n = 5;
console.log(torchic(n, oggi, domani));

//n = cars in lot
// oggi = string that represents either C or .
