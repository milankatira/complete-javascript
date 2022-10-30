let count = 0;

const updateCount = () => {
  count++;
};

updateCount(); //1
updateCount(); //2
updateCount(); //3

count = 5;
updateCount(); //6
console.log(count);

//!Problem ==> now the problem is we want to count property private currently it is changing from anywhere

//TODO :SOLUTION ex-1

const updateCountwrapper = () => {
  let _count = 0; //it is private
  return function updateCount() {
    _count++;
    console.log(_count);
  };
};
const updatedCount = updateCountwrapper(); //it will return function

updatedCount(); //1
updatedCount(); //2
updatedCount(); //3
updatedCount(); //4

//todo:ex-2

const CardCounter = () => {
  let _count = 0;
  function _updateCount(val) {
    _count += val;
  }
  function _updateCount(val) {
    _count += val;
  }
  return {
    increment() {
      _updateCount(1);
    },
    decrement() {
      _updateCount(-1);
    },
    value() {
      return _count;
    },
  };
};

const MyCardCounter = CardCounter();
MyCardCounter.increment(); //+1
MyCardCounter.increment(); //+1
console.log(MyCardCounter.value()); //2
