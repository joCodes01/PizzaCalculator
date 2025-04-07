
// Programmer name: Joanna Wand 
// Date 06/04/2025
//Purpose of program: To calculate the best price for any combination of pizzas 
// based on the given price for one large pizza, two large pizzas and three large pizzas.


//SET VARIABLES for various pricing and the basis of 3 x pizzas as the best price combination 
// and remaining number of pizzas.
let oneLargePizza = 6.45;
let twoLargePizzas = 12.00;
let threeLargePizzas = 14.00;
let setsOfThreePizzas;
let remainderNumberOfPizzas;
let totalPrice;


let calculate = document.querySelector("#calculate");
calculate.addEventListener("click", discountCalc);

function discountCalc(){
    //get user input value (number of pizzas)
    let numPizzas = document.querySelector("#numpizzas");
    let numberOfPizzas = numPizzas.value
    console.log(typeof(numberOfPizzas));
    testInt = Number(numberOfPizzas);
    console.log(testInt);
    console.log(Number.isInteger(testInt));


    // If the value entered is less than or equal to zero or not a number or a decimal then display "Enter a number of pizzas"
    if (numberOfPizzas <= 0 || !Number(numberOfPizzas) || !Number.isInteger(testInt) ){
        document.querySelector("#price-display").innerText = "Enter a number of pizzas"
    } else {
            // if 1 pizza charge 6.45, if 2 pizzas charge 12.00, if 3 pizzas charge 14.00
            if ( numberOfPizzas == 1 ) {
                totalPrice = oneLargePizza;
                
            }else if ( numberOfPizzas == 2 ) {
                totalPrice = twoLargePizzas;
                
            }else if ( numberOfPizzas == 3 ) {
                totalPrice = threeLargePizzas;
                
            }else {
                // 3 x pizzas give the best discount so calculate in sets of 3 then get the bsst price 
                // for the remaining pizzas.
                // Take the number of pizzas and see how many go into 3 and round the number to an integer.
                setsOfThreePizzas = Math.floor( numberOfPizzas / 3);

                // Get the remaining number of pizzas (modulus) into 3 
                remainderNumberOfPizzas = numberOfPizzas % 3;

                // if there are no remaining pizzas after dividing into 3 then charge by sets of threeLargePizzas
                    if ( remainderNumberOfPizzas == 0 ) {
                        totalPrice = setsOfThreePizzas * threeLargePizzas;

                        //charge for however many sets of threeLargePizzas plus the remainder pizzas at the best price
                    }else if ( remainderNumberOfPizzas == 1 ) {
                        totalPrice = ( setsOfThreePizzas * threeLargePizzas ) + oneLargePizza;
                    }else {
                        totalPrice = ( setsOfThreePizzas * threeLargePizzas ) + twoLargePizzas;
                    }

                    let displayPrice = Number(totalPrice);
                
            }

            
            let displayPrice = totalPrice.toFixed(2);
        
            //display the total price on the page
            document.querySelector("#price-display").innerText = "$" + displayPrice;

        } 
     }

     