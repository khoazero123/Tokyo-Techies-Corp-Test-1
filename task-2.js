
function count_groups(friend_pairs) {
  let [numFriendPair, numElementsOfElment, ...numOfArray] = friend_pairs.split("\n");
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
setTimeout(() => { // for debug inspect
  console.log(count_groups(`2
  2
  0 1
  2 1`));
  console.log(count_groups(`2
  2
  0 0
  1 1`));
  console.log(count_groups(`5
  2
  0 0
  1 1
  6 5
  1 6
  9 8`));
}, 2000);