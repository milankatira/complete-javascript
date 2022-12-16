function* simpleGenerator ()
{
  console.log("function called");
  yield "first step";
  let x = 40;
  yield x;
  yield "last step";
}

let sG = simpleGenerator();
console.log(sG.next());
console.log(sG.next());
console.log(sG.next());
console.log(sG.next());
