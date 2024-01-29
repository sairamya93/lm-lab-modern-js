// Instructions can be found in rest_parameters.md

// Add rest parameters here!
// export function add(a, b) {
//   // Add a loop here
//   return a + b;
// }

// add(1, 2, 3, 4, 5);

export function add(...numbers) {
  // Add a loop here
  return numbers.reduce((sum,n) => sum+n)
  }


console.log(add(1, 2, 3, 4, 5));
