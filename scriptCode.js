// console.log('hello')

// let foo = 93
// console.log(foo)

// let foodArray = ["pizza pie", "pasta", "salad"]
// console.log(foodArray)

// let foodItem = foodArray[1]
// console.log(foodItem)

// let objectVariable = {
//     key: "value",
//     foods: foodArray
// }
// console.log(objectVariable)

// let foods = objectVariable['foods']
// console.log('foods:', foods)

// function AddTwoNumbers(num1, num2){
//     let sum = num1 + num2
//     return sum
// }

// let mySum = AddTwoNumbers(9, 17)
// console.log('mySum:', mySum)


let breakfastElement = document.getElementById("breakfast")
let lunchElement = document.getElementById("lunch")

function breakfastClicked(){
    console.log('breakfast element was clicked')
    let breakfastfoodsDiv = document.getElementById("breakfastFoods")
    breakfastfoodsDiv.style.display = 'flex'
    let lunchfoodsDiv = document.getElementById('lunchFoods')
    lunchfoodsDiv.style.display = 'none'
}

function lunchClicked(){
    console.log('lunch element was clicked')
    let breakfastfoodsDiv = document.getElementById("breakfastFoods")
    breakfastfoodsDiv.style.display = 'none'
    let lunchfoodsDiv = document.getElementById('lunchFoods')
    lunchfoodsDiv.style.display = 'flex'
}


// comment stuff with ctrl + / btw or just double //

breakfastElement.addEventListener("click", () => breakfastClicked())
lunchElement.addEventListener("click", () => lunchClicked())


