const arr=[
['zone-1','zone-2'],
['zone-3','zone-4'],
['zone-5','zone-6'],
['zone-7',['zone-8','zone-9'],]]


const flatarr=arr.reduce((accum,curval)=>{
return accum.concat(curval);

})

console.log(flatarr);


//after  es 2020
const arr_1=[
    ['zone-1','zone-2'],
    ['zone-3','zone-4'],
    ['zone-5','zone-6'],
    ['zone-7',['zone-8','zone-9'],]]
    
console.log(arr_1.flat());