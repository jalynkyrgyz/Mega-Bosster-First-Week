const str = prompt("Please insert your numbers");

const numStr = str.split('').map(
    function(item){
        return +item;        
    }
);

const orderedArr = numStr.sort(
    function(a, b) {
        return b - a;
    }
)

const bigNumber = orderedArr.join("");

let getBigNumber = document.getElementById("number");
getBigNumber.innerHTML = "You inserted: " + str + " => So the biggest number will be: " + bigNumber;