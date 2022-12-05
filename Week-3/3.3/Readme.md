### Exercise 3.3

## What is the output of the below problem and why?

```
function createIncrement() {
  letcount = 0;
  function increment() {
    count++;
  }
  let message = `Count is${count}`;
  function log() {
    console.log(message);
  }
  return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); // What is logged?

```

## Explanation

- The out will be `Count is 0`

- the 3 increment calls increment the counter but the message is initialized to 'count is 0';
- the output would be 'count is 3' if the message variable would have been updated in the increment function.
