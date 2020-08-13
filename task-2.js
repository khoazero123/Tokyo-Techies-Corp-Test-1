
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
    for (let x = 0; x < newArr.length; x++) {
      if (newArr[x].includes(idA)) {
        newArr[x].push(idB);
        isMatch = true;
      } else if (newArr[x].includes(idB))  {
        newArr[x].push(idA);
        isMatch = true;
      }
    }
    if (!isMatch) {
      newArr.push([idA, idB]);
    }
    
  }

  return newArr.length;
}

console.log(count_groups(`2
2
0 1
2 1`));
console.log(count_groups(`2
2
0 0
1 1`));

