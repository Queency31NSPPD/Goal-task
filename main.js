document.getElementById("goalNumber").textContent = 7000

let count=0
console.log(count)

let myCodes = 40
console.log(myCodes)

let teamOne = 4
let teamTwo = 7
let totalGoals = teamOne + teamTwo
console.log(totalGoals)

let myWin = 9
let matchesPlayed = 11
let pointsData = myWin * matchesPlayed
console.log(pointsData)

let bonusPoints = 3
console.log(bonusPoints)

bonusPoints = bonusPoints + 4
console.log(bonusPoints)

bonusPoints = bonusPoints + 3
console.log(bonusPoints)


let extraPoints = 50
console.log(extraPoints)

extraPoints = extraPoints + 50
console.log(extraPoints)

extraPoints = extraPoints - 75
console.log(extraPoints)

extraPoints = extraPoints + 45
console.log(extraPoints)

function countdown(){
console.log(5)
console.log(4)
console.log(3)
console.log(2)
console.log(1)
}
countdown()

function assumption() {
console.log("Bridget Nnenna")
console.log(20 + "years old")
console.log("Ebonyi State")
console.log(42)
} 
assumption()

let lap1 = 34
let lap2 = 33
let lap3 = 36

function laptimes(){
    console.log(lap1 + lap2 + lap3)
}
laptimes()

let lapsCompleted = 0

function lapIcrease(){
    lapsCompleted = lapsCompleted + 1
}

lapIcrease()
lapIcrease()
lapIcrease()

console.log(lapsCompleted)

/*document.getElementById*/

let goalHolder = document.getElementById("goalNumber")
let incrementBtn = 0

function increment(){
incrementBtn = incrementBtn + 1
 goalHolder.innerText = incrementBtn
}

increment()

/**/

let doubleHolder = document.getElementById("add-Double")
let doubleContainer = 0

function doubleIncrease(){
    doubleContainer = doubleContainer + 2
    doubleHolder.innerText = doubleContainer
}

doubleIncrease()
