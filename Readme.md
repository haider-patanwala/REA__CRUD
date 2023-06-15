#### Revision :

##### Conversion of strings to array 

- Use `.split()`

##### Conversion of array to a string 

- Use `join()`

##### To access some property of the object inside an array 

- Use `findIndex()`
  - This method executes a function for each array element.
  - returns the index (position) of the first element that passes a test
  - returns -1 if no match is found
  - does not change the original array
- Or use `filter()`
  - creates a new array filled with elements that pass a test provided by a function.
  - does not change the original array

##### To sum of some properties of objects of an array

- Use `map()` first 
- And then `reduce()` on it or directly reduce
  - reducer accepts an function with accumulator and current value.
  - Need to give an initialization value
- Or just chain the reduce() with the map()

## NPM NODE

1. Creating package.json by `nom init`
2. Installing packages (mocha for testing)
```
npm install express

npm install mocha --save-dev
```
3. We write `"scripts"` in package.json to execute the line upon `npm run start`

## NodeJS REPL

- Read-Eval-Print-Loop
- When write `node` on terminal, a nodejs console is opened which is a REPL
- It is a command line interface(CLI)
- useful for testing out small pieces of code
- Interviewer can ask to write code on REPL 

## API

- API just takes i/p and provides o/p without getting into the details of how the things are processing behind the scenes
- It is interface between applications to share info

### JS server

- Created a JS server
- Only `Browser` hits a favicon request
- My default everything is treated as GET

### Web server and client

- Data is sent in `string`/`buffer` form from client to server

1. request url
2. request header
3. request body

## Building a CRUD API without any external library in NodeJS

1. The `createServer` function takes a callback as an argument. This callback takes `Request` and `Response` objects as arguments for further processing.
2. The `response.write` will reply the client with text provided when a request is recieved.
3. The `server.listen` takes a port number to run on and a callback function to handle it.

---

- Spread operator makes a new object.
- For eg `{...obj}` will be a new obj1 and not the og `obj`
- It works like call by value and not reference
```
const obj = { 
    name : "tony",
    alter_ego : "iron man", 
    age: 50,
}

const obj1 = { 
    name : "tony stark"
}

const newObj = {...obj, ...obj1}

>> {name: 'tony stark', alter_ego: 'iron man', age: 50}
```
- So the key with same names will be replaced by the recent one. 
  - Here both objects getting destructured has same key `names`. So the latest key `name` in the obj1 with value "tony stark" will replace the old one with name "tony"