const connect = require('connect');
const url = require('url');

// Function used to calculate the number that provides in the url with method 

function cal(req, res) {
    // Getting query string from the URL
    const query = url.parse(req.url, true).query;
    // Method to identify implementation
    const method = query.method;
    // Getting first number
    const x = parseFloat(query.x);
    // Getting second number
    const y = parseFloat(query.y);
 
    let result;
    // Using switch method to identify the method and assigning the value to result

    switch (method) {
        case 'add':
            result = x + y;
            break;
        case 'subtract':
            result = x - y;
            break;
        case 'multiply':
            result = x * y;
            break;
        case 'divide':
            result = x / y;
            break;
        default:
            return res.end('Invalid method. Please use add, subtract, multiply, or divide.');
    }
    // Making a string that contain the final value 
    const output = `${x} ${method} ${y} = ${result}`;
    res.end(output);
}

const app = connect();

app.use(cal);
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});