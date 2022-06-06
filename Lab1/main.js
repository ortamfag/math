var matrix = document.getElementById('matrix')
var checkMatrix = document.getElementById('checkMatrix')
var matr
var anti = false

matrix.onclick = () => {
    matr = generateRandom()
    console.table(matr)
}

function generateRandom() {
    const size = parseFloat(prompt('Введите размер матрицы'))
    const matr = new Array(size).fill().map(() => new Array(size).fill().map(() => Math.round(Math.random())));
    return matr
    
}

checkMatrix.onclick = () => {
    // Переменные для дальнейших вычислений
    const matrT = _.zip(...matr)
    let asim = true
    let reflexiv = true
    let antireflexiv = true
    console.group('Транспонированная матрица')
    console.table(matrT)
    console.groupEnd()
//
// Проверка на симетрию
//
    const res = matr.every((_,i) => matr[i].every((v, k) => v === matrT[i][k]))
    if (res) { console.log('Данное отношение является симметричным') } 
    else {
        console.log('Данное отношение не является симметричным')
    }
//
// Проверка на антисимметрию
//
    for (let i = 0; i < matr.length; i++) {
        for (let k = 0; k < matr.length; k++) {
            if (k !== i && matr[k][i] === 1 && matr[i][k] === 1) anti = true
        }
    }
    if (anti) {
        console.log('Отношение не антисимметрично')
    }
    else {
        console.log('Отношение антисимметрично');
    }
//
// Проверка на асимметрию
//
if (anti) {
    console.log('Отношение не асимметрично')
} else {
    for (let i = 0; i < matr.length; i++) {
        for (let k = 0; k < matr.length; k++) {
            if (k === i && matr[k][i] === 1) asim = false
        }
    }
    if (asim) {
        console.log('Отношение асимметрично')
    } 
    else {
        console.log('Отношение не асимметрично')
    }
}
//
//Провека на рефликсивность
//
for (let i = 0; i < matr.length; i++) {
    for (let k = 0; k < matr.length; k++) {
        if (k === i && matr[k][i] === 0) reflexiv = false
    }
}
if (reflexiv) {
    console.log('Данная матрица является рефлексивной');
} 
else {
    console.log('Данная матрица не является рефлексивной');
}
//
//Проверка на антирефликтивность
//
for (let i = 0; i < matr.length; i++) {
    for (let k = 0; k < matr.length; k++) {
        if (k === i && matr[k][i] === 1) antireflexiv = false
    }
}
if (antireflexiv) {
    console.log('Отношение обладает антирефлексивностью');
} 
else {
    console.log('Отношение не обладает антирефлексивностью');
}

}

trans.onclick = () => {
    for (let i = 0; i < matr.length; i++) {
        for (let k = 0; k < matr.length; k++) {
            if (matr[i][k] === 1) {
                for (let n = 0; n < matr.length; n++) {
                    matr[i][n] = Number(matr[i][n] || matr[n][k])
                }
            }
        }
    }
    console.group('Матрица транзитивного замыкания')
    console.table(matr)
    console.groupEnd()
}
