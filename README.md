
# Multiple .env Files in Node.js
This project demonstrates how to use different .env files in a Node.js project to manage different configurations (e.g., development, production, testing) and access the data from them.

### Prerequisites
Before you begin, make sure you have [Node.js](https://nodejs.org/en/download) installed on your system.

### Installation
1. Clone the repository or download the project files.

2. Navigate to the project directory and install the required dependencies:

### Copy code
```
npm install
```
### Usage
1. Create different .env files in the project directory for different configurations, such as .env.development, .env.production, and .env.testing. Add your key-value pairs in each file, following this format(make file):
```
KEY1=value1
KEY2=value2
```
2. In your Node.js script or application, use the dotenv package to load the desired .env file based on your current environment or configuration. For example, to load the .env.development file, do the following:


```
const dotenv = require('dotenv');

// Load the desired .env file
const dotenvPath = '.env.development';
dotenv.config({ path: dotenvPath });

// Access the variables
const key1 = process.env.KEY1;
const key2 = process.env.KEY2;

console.log(`KEY1: ${key1}, KEY2: ${key2}`);
```

To switch between different .env files, simply change the dotenvPath variable to point to the desired file, and the corresponding environment variables will be loaded.

3. Optionally, you can manage multiple configurations more efficiently by creating a config.js file in your project directory:

```
const dotenv = require('dotenv');

class Config {
constructor(envFile) {
dotenv.config({ path: envFile });
this.KEY1 = process.env.KEY1;
this.KEY2 = process.env.KEY2;
}
}

const development = new Config('.env.development');
const production = new Config('.env.production');
const testing = new Config('.env.testing');

module.exports = { development, production, testing };
```
Now, you can import and use the desired configuration in your main application file:

```
const { development, production, testing } = require('./config');

// Use the desired configuration
const config = development; // Change this line to switch between configurations

console.log(`KEY1: ${config.KEY1}, KEY2: ${config.KEY2}`);

```
Adjust the variable names and file paths according to your project structure and requirements.

### Running the Script
To run the script using Node.js, simply execute the following command in your terminal or command prompt from the project directory, replacing your-script.js with the actual name of your script:

```
node your-script.js
```
Make sure to adjust the script name according to your project's file structure and requirements.

## License

[MIT](https://choosealicense.com/licenses/mit/)
