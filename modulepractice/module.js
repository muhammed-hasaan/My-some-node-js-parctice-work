console.log("This is module.js page")

function numsum(a , b) {
var sum = a + b;
return sum;
}

module.exports = {
    numsum:numsum,
    name:"Muhammed Hasaan",
    class:"X"
};
