const input = require('sync-input');

const gifts = [
    {name: "Teddy Bear", cost: "10", id: 1},
    {name: "Big Red Ball", cost: "5", id: 2},
    {name: "Huge Bear", cost: "50", id: 3},
    {name: "Candy", cost: "8", id: 4},
    {name: "Stuffed Tiger", cost: "15", id: 5},
    {name: "Stuffed Dragon", cost: "30", id: 6},
    {name: "Skateboard", cost: "100", id: 7},
    {name: "Toy Car", cost: "25", id: 8},
    {name: "Basketball", cost: "20", id: 9},
    {name: "Scary Mask", cost: "75", id: 10}
]

let totalTickets = 0;

console.log(`WELCOME TO THE CARNIVAL GIFT SHOP!
Hello friend! Thank you for visiting the carnival!`)

showGiftList();

while (true) {
    console.log();
    console.log("What do you want to do?");
    console.log("1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop");
    let choice = Number(input());

    if (choice === 1 || choice === 2 || choice === 3 || choice === 3 || choice === 4 || choice === 5) {
        switch (choice) {
            case 1:
                buyGift();
                break;
            case 2:
                addTickets();
                break;
            case 3:
                checkTickets();
                break;
            case 4:
                showGiftList();
                break;
            case 5:
                console.log("Have a nice day!")
                return;
            default:
                console.log('Something went wrong!')
        }
    } else {
        console.log("Please enter a valid number!")
    }
}

//***********************************************************************************************************
function showGiftList() {
    console.log("Here's the list of gifts:\n")

    if (gifts.length === 0) {
        console.log("Wow! There are no gifts to buy.");
        return;
    }

    for (let i = 0; i < gifts.length; i++) {
        console.log(`${gifts[i].id}- ${gifts[i].name}, Cost: ${gifts[i].cost} tickets`)
    }
}

function buyGift() {
    if (gifts.length === 0) {
        console.log("Wow! There are no gifts to buy.");
        return;
    }

    let giftNumber2 = input("Enter the number of the gift you want to get: ");

    if (!(/\d+/.test(giftNumber2))) {
        console.log("Please enter a valid number!")
        return;
    }

    let giftNumber = Number(giftNumber2);

    if (giftNumber > 10) {
        console.log("There is no gift with that number!");
        return;
    }

    let chosenGift = gifts.find(e => e.id === giftNumber);

    if (totalTickets < Number(chosenGift.cost)) {
        console.log("You don't have enough tickets to buy this gift.")
        return;
    }

    console.log(`Here you go, one ${chosenGift.name}!`);
    totalTickets -= chosenGift.cost;
    let index = gifts.findIndex(e => e.id === chosenGift.id);
    gifts.splice(index, 1);
    checkTickets();
}

function addTickets() {
    let ticketsNew = input("Enter the ticket amount: ");
    let ticketsNewNum = Number(ticketsNew);

    if (!(/\d+/.test(ticketsNew)) || (ticketsNewNum < 0 || ticketsNewNum > 1000)) {
        console.log("Please enter a valid number between 0 and 1000.")
        return;
    }

    totalTickets += ticketsNewNum;
    checkTickets();
}
function checkTickets() {
    console.log("Total tickets: " + totalTickets);
}