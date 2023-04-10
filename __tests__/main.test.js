// Example import
// import example from './../src/js/main.js';








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