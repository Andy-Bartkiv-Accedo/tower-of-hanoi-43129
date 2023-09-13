const testTowers = (arrTowers, moves) => {
  const towersState = {};
  moves.every((step, idx) => {
    const sourceTwr = arrTowers[step[0]];
    const targetTwr = arrTowers[step[1]];
    towersState[idx] = JSON.parse(JSON.stringify(arrTowers));
    if (!sourceTwr || !targetTwr) return false;
    const diskTopSrc = sourceTwr[sourceTwr.length - 1];
    const diskTopTgt = targetTwr[targetTwr.length - 1] || 99999;
    return (diskTopSrc && diskTopSrc < diskTopTgt)
      ? targetTwr.push(sourceTwr.pop())
      : false
  });

  const arrCheckSum = (arr) => 
    arr.length > 0 ? arr.flat().reduce((tot, num) => tot + num) : 0;
  const solved = arrCheckSum(arrTowers) === arrCheckSum(arrTowers[arrTowers.length-1])

  towersState.finish = JSON.parse(JSON.stringify(arrTowers));
  
  return {
    ...towersState,
    solved: solved ? '✅' : '❌'
  };
};

module.exports = testTowers;
