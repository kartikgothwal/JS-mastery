console.log("Higher Order Function");
const area = (radius) => {;
    return Math.PI * radius* radius
 };
const circumference = (radius) => {
    return 2 * Math.PI * radius
};
const diameter = (radius) => {
  return  2 *  radius;
};

function calculate(radius, callback) {
    let output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(callback(radius[i]));
    }
    return output
}
console.log(calculate([3, 4, 5, 6], area));
console.log(calculate([3, 4, 5, 6], circumference)); 
console.log(calculate([3, 4, 5, 6], diameter));  