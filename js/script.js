let hour = 11;

if (hour < 12){
    console.log("Good Morning");
    hour++;
    console.log(hour);
}
else{
    console.log("Good Afternoon");
}

let numbers = [5, 7, 45, 89, 12, 78, 38, 59, 87, 43, 54, 81];
let even = [];
let odd = [];

for (let i = 0; i < numbers.length; i++){
    if(numbers[i] %2 !=1){
        even.push(numbers[i]);
    }
    else{
        odd.push(numbers[i]);
    }
}

console.log(even);
console.log(odd);

let items=[34, 56, 89, 78, 32, 67];
let sum = 0;

for (let i = 0; i < items.length; i++){
    sum += items[i];
}

console.log(sum);

function tester(){
    if (bool){
        document.getElementById('display'). innerHTML = "true";
    } 
    else {
        document.getElementById('display'). innerHTML = "false";
    }
}