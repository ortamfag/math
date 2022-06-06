
const relation1 = [
    [1,0,1,1],
    [1,1,0,0],
    [0,0,0,0],
    [0,0,0,1]
];

function checkIfRelationIsReflexive(r) {
  let relation = JSON.parse(JSON.stringify(r));
  let size = relation.length;

  for (let i = 0; i < size; i++) {
    if (+relation[i][i] === 0) {
      return false; 
    }
  }

  console.log(`Отношение ${r} рефлексивное`)
  return true; 
}

function checkIfRelationIsAntireflexive(r) {
  let relation = JSON.parse(JSON.stringify(r));
  let size = relation.length;

  for (let i = 0; i < size; i++) {
    if (+relation[i][i] === 1) {
      return false; // Если элемент диагонали равен нулю, отношение антирефлексивное
    }
  }

  console.log(`Отношение ${r} антирефлексивное`)
  return true; // Если вся диагональ в единицах, отношение рефлексивное
}

function checkIfRelationIsSymmetric(r) {
  let relation = JSON.parse(JSON.stringify(r));
  let size = relation.length;
  for (let i = 0; i < size; i++) {
    for (let j = i + 1; j < size; j++) {
      if (+relation[i][j] !== +relation[j][i]) return false;
    }
  }

  console.log(`${r} симметричное`)
  return true;
}

function checkIfRelationIsAntiSymmetric(r) {
  let relation = JSON.parse(JSON.stringify(r));
  let size = relation.length;
  for (let i = 0; i < size; i++) {
    for (let j = i + 1; j < size; j++) {
      if (+relation[i][j] * +relation[j][i] === 1) return false;
    }
  }

  console.log(`Отношение ${r} антисимметричное`)
  return true;
}

function checkIfRelationIsAsymmetric(r) {
  let relation = JSON.parse(JSON.stringify(r));
  let size = relation.length;
  for (let i = 0; i < size; i++) {
    for (let j = i + 1; j < size; j++) {
      if (+relation[i][j] * +relation[j][i] === 1 ||
          +relation[i][i] === 1) return false;
    }
  }
  console.log(`Отношение ${r} асимметричное`)
  return true;
}

function getTransitiveClosure(r) {
  let relation = JSON.parse(JSON.stringify(r));
  let size = relation.length;

  // Рассматриваем все внедиагональные (i ≠ j) элементы матрицы. Если
  // mij = 1, то i-ю строку заменяем дизъюнкцией i-й и j-й строк

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (relation[i][j] === 1 && i !== j) {
        for (let k = 0; k < size; k++) {
          relation[i][k] = (+relation[i][k] === 1 || +relation[j][k] === 1) ? 1 : 0; // i строка заменяется поэлементной
          // дизъюнкцией i и j строки
        }
      }
    }
  }

  console.log(`Матрица транзитивного замыкания отношения`, `:`, relation)
  return relation;
}


checkIfRelationIsReflexive(relation1);
checkIfRelationIsAntireflexive(relation1);
checkIfRelationIsSymmetric(relation1);
checkIfRelationIsAntiSymmetric(relation1);
checkIfRelationIsAsymmetric(relation1);

getTransitiveClosure(relation1);
