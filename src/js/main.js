// Business Logic

// Export example
// export default function Example()


// Coin Values
export function counter(input) {
  if (isNaN(input)) {
    return "Please Enter a Number"
  };
  const changeInput = input * 100;
  const quarter = 25;
  const dime = 10;
  const nickel = 5;
  const penny = 1;
  if (input <= 0){
    return "Please enter a number greater than 0";
  } 
  else if (changeInput/quarter >= 1 ) {
    const quarterResult = Math.floor(changeInput / quarter);
    const remainder = (changeInput % quarter).toFixed(2);
    if (remainder !=0 ){
      return `Quarters: ${quarterResult} ` + counter(remainder/100);
    }
    return `Quarters: ${quarterResult} Change: ${remainder} `;
  } else if (changeInput / dime >= 1) {
    const dimeResult = Math.floor(changeInput / dime);
    const dimeRemainder = (changeInput % dime).toFixed(2);
    if (dimeRemainder != 0){
      return `Dimes: ${dimeResult} ` + counter(dimeRemainder/100);
    }
    return `Dimes: ${dimeResult} Change: ${dimeRemainder} `;
  } else if (changeInput / nickel >= 1){
    const nickelResult = Math.floor(changeInput / nickel);
    const nickelRemainder = (changeInput % nickel).toFixed(2);
    if (nickelRemainder != 0) {
      return `Nickels: ${nickelResult} ` + counter(nickelRemainder/100);
    }
    return `Nickels: ${nickelResult} `;
  } else {
    const pennyResult = changeInput / penny;
    return `Pennies: ${pennyResult}`
  }
}
  

// const quarterCounter = (input) => {
//   const quarter = 25;
//   const result = Math.floor(input / quarter);
//   const remainder = ()
// }

export function checkout(name) {
  return function(input) {
    if (isNaN(input)) {
      return "Please Enter a Number"
    };
    const changeInput = input * 100;
    const quarter = 25;
    const dime = 10;
    const nickel = 5;
    const penny = 1;
    if (input <= 0){
      return "Please enter a number greater than 0";
    } 
    else if (changeInput/quarter >= 1 ) {
      const quarterResult = Math.floor(changeInput / quarter);
      const remainder = (changeInput % quarter).toFixed(2);
      if (remainder !=0 ){
        return `${name}, your change is - Quarters: ${quarterResult} ` + counter(remainder/100);
      }
      return `Quarters: ${quarterResult} Change: ${remainder} `;
    } else if (changeInput / dime >= 1) {
      const dimeResult = Math.floor(changeInput / dime);
      const dimeRemainder = (changeInput % dime).toFixed(2);
      if (dimeRemainder != 0){
        return `Dimes: ${dimeResult} ` + counter(dimeRemainder/100);
      }
      return `Dimes: ${dimeResult} Change: ${dimeRemainder} `;
    } else if (changeInput / nickel >= 1){
      const nickelResult = Math.floor(changeInput / nickel);
      const nickelRemainder = (changeInput % nickel).toFixed(2);
      if (nickelRemainder != 0) {
        return `Nickels: ${nickelResult} ` + counter(nickelRemainder/100);
      }
      return `Nickels: ${nickelResult} `;
    } else {
      const pennyResult = changeInput / penny;
      return `Pennies: ${pennyResult}`
    }
    
  }
}

// change input to cents (divide by 100)

// check % to see how many coins of each one
// 499 if input % quarter === 0 then quarter 

// export const coinCounter = (num) => {
//   if (isNaN(num)) {
//     return "Please enter a number."
//   };
//   if (num === 0) {
//     return "";
//   } else if (num/25 >= 1) {
//     const quarters = Math.floor(num/25);
//     return `${quarters} quarters ` + coinCounter(num - quarters*25);
//   } else if (num/10 >= 1) {
//     const dimes = Math.floor(num/10);
//     return `${dimes} dimes ` + coinCounter(num - dimes*10);
//   } else if (num/5 >= 1) {
//     const nickels = Math.floor(num/5);
//     return `${nickels} nickels ` + coinCounter(num - nickels*5);
//   } else {
//     const pennies = num
//     return `${pennies} pennies ` + coinCounter(0);
//   };
// }