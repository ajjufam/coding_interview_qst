function threeGreatCandidate(arr) {
  let setObj = new Set(arr);
  let set = Array.from(setObj);
  console.log(set);

  let len = set.length;
  console.log(len);

  if (len < 3) return false;
  let grate = Number.NEGATIVE_INFINITY;
  console.log(grate);

  let i1;
  let j1;
  let k1;

  if (len === 3) {
    return set[0] * set[1] * set[2];
  }

  for (let i = 0; i < set.length; i++) {
    for (let j = i + 1; j < set.length; j++) {
      for (let k = j + 1; k < set.length; k++) {
        let product = set[i] * set[j] * set[k];
        if (product > grate) {
          [grate, i1, j1, k1] = [product, set[i], set[j], set[k]];
        }
      }
    }
  }
  console.log(i1, j1, k1);

  return {
    product: grate,
    i: i1,
    j: j1,
    k: k1,
  };
}

console.log(threeGreatCandidate([10, 20, 30, 50, 60, 80]));
