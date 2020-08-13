const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function count_groups(friend_pairs) {
  let [numFriendPair, numElementsOfElment, ...numOfArray] = friend_pairs.trim().split("\n");
  numFriendPair = parseInt(numFriendPair);
  if (numFriendPair !== numOfArray.length) {
    throw new Error(`The length of the friendPairs array is not equal to ${numFriendPair}`);
  }
  let formatedArr = [];
  for (let i = 0; i < numFriendPair; i++) {
    const [idA, idB] = numOfArray[i].trim().split(' ');
    formatedArr.push([idA, idB]);
  }
  let newArr = [[...formatedArr[0]]];
  for (let i = 1; i < formatedArr.length; i++) {
    const [idA, idB] = formatedArr[i];
    let isMatch = false;
    let indexMatch;
    for (let x = 0; x < newArr.length; x++) {
      if (!isMatch) {
        if (newArr[x] && newArr[x].includes(idA)) {
          newArr[x].push(idB);
          isMatch = true;
          indexMatch = x;
        } else if (newArr[x] && newArr[x].includes(idB))  {
          newArr[x].push(idA);
          isMatch = true;
          indexMatch = x;
        }
      } else {
        newArr[indexMatch].push(idA);
        newArr[indexMatch].push(idB);
        delete newArr[x];
      }
    }
    if (!isMatch) {
      newArr.push([idA, idB]);
    }
    
  }
  newArr = newArr.filter(i => i.length);
  return newArr.length;
}

rl.prompt();

const input = [];
console.log('Enter the data (Ctrl + C to finish input)');
rl.on('line', function (cmd) {
    input.push(cmd);
});

rl.on('close', function (cmd) {
    console.log(`Found ${count_groups(input.join('\n'))} groups`);
    process.exit(0);
});
