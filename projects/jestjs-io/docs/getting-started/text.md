# Getting Started

Install Jest using your favorite package manager:

```console
npm install --save-dev jest
```

Let's get started by started by writing a test for a hypothetical function that adds two numbers. First, create a sum.js file:

```javascript
function sum(a, b) {
    return a + b;
}
module.exports = sum;
```

Then, create a file named `sum.test.js`. This will contain our actual test:

```javascript
const sum = require('./sum');

test('adds 1+ 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});
```

Add the following section to your `package.json`:

```json
{
    "scripts": {
        "test": "jest"
    }
}
```

Finally, run `npm test` and Jest will print this message:

```console
PASS  ./sum.test.js
✓ adds 1 + 2 to equal 3 (5ms)
```

You just successfully wrote your first test using Jest!

This test used `expect` and `toBe` to test that two values were exactly identical. To learn about the other things that Jset can test, see Using Matchesrs.

## Running from command line

You can run Jest directly from the CLI (if it's globally available in your `PATH`, e.g. by `npm install jest --global`) with a variety of useful optionsl.

Here's hwo to run Jest on files matching `my-test`, `using config.json` as a configuration file and display a native OS notification after the run:

```console
jest my-test --notify --config=config.json
```

If you'd like to learn more about running `jest` through the command line, take a look at the Jest CLI Options page.

## Additional Configuration

### Generate a basic configuration file

based on your project, Jest will ask you a few questions and will create a basic configuration file with a short description for each option:

```console
jest --init
```
