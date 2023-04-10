// Example import
import { counter, checkout }  from './../src/js/main.js';
// import checkout from './../src/js/main.js';


describe('counter', () => {

  test('should return a string for a NaN scenario', () => {
    const input = "hello";
    expect(counter(input)).toEqual("Please Enter a Number");
  });

  test('should return an string for a scenario where the input is <= 0', () => {
    const input = 0;
    expect(counter(input)).toEqual("Please enter a number greater than 0");
  });
  
  test('should return a string where the input is > 0', () => {
    const input = 0.25;
    expect(counter(input)).toEqual("Quarters: 1 Change: 0.00 ");
  });

  test('should return the number of quarters in a given amount plus remainder', () => {
    const input = 0.35;
    expect(counter(input)).toEqual("Quarters: 1 Dimes: 1 Change: 0.00 ");
  });

  test('should return the number of quarters and dimes in a given amount plus remainder', () => {
    const input = 0.36;
    expect(counter(input)).toEqual("Quarters: 1 Dimes: 1 Pennies: 1")
  });

  test('Should return the number of quarters, dimes and nickels in a given amount', () => {
    const input = 0.40;
    expect(counter(input)).toEqual("Quarters: 1 Dimes: 1 Nickels: 1 ")
  });

  test('Should return the number of quarters, dimes, nickels, and pennies in a given amount', () => {
    const input = 0.42;
    expect(counter(input)).toEqual("Quarters: 1 Dimes: 1 Nickels: 1 Pennies: 2")
  });
});

describe('checkout', () => {

  test('Should return a string with given name and amount in the form of change', () => {
    const ourName = "Kake";
    const checkoutKake = checkout(ourName);
    expect(checkoutKake(4.99)).toEqual("Kake, your change is - Quarters: 19 Dimes: 2 Pennies: 4")
  })
})



//Example Tests ----------------------------------------

// describe('Dice', () => {

//    test('should create an object with a number, totalScore, roundScore, and id', () => {
//     const dice = new Dice (0, 0, 0, 1);
//     expect(dice.number).toEqual(0);
//     expect(dice.totalScore).toEqual(0);
//     expect(dice.roundScore).toEqual(0);
//     expect(dice.id).toEqual(1);
//    });
  
//   test('should roll random number between  1 and 6', () => {
//     const dice = new Dice(); //declare new object and call Construct
//     dice.Roll(); // call prototype
//     expect(dice.number).toBeLessThanOrEqual(6); // set guidelines for random number, high limit
//     expect(dice.number).toBeGreaterThanOrEqual(1); // set guidelines for random number, low limit
//   });

//   test('should add numbers 2-6 to roundScore', () => {
//     const dice = new Dice();
//     dice.Roll();
//     dice.PlayRound();
//     expect(dice.roundScore).toBeLessThanOrEqual(6);
//     expect(dice.roundScore).toBeGreaterThan(1);
//     expect(dice.roundScore).toEqual(0);
//   });

//   test('if number === 1 the roundScore is 0', () => {
//     const dice = new Dice();
//     dice.Roll();
//     dice.PlayRound();
//     expect(dice.number).toEqual(1);
//     expect(dice.roundScore).toEqual(0);
//   });

//   test('should add roundScore to the totalScore' , () => {
//     const dice = new Dice();
//     dice.Roll();
//     dice.PlayRound();
//     dice.TotalRound();
//     expect(dice.roundScore).toEqual(0);
//   });
  

// });