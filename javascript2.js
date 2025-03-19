//1 - BETWEEN TWO SETS
function getTotalX(a, b) {
    let aux = 0;
    let A = a[0];
    let B = b[0];

    for (let i = 1; i < a.length; i++) {
        if (a[i] > A) {
            A = a[i];
        }
    }

    for (let i = 1; i < b.length; i++) {
        if (b[i] < B) {
            B = b[i];
        }
    }

    for (let x = A; x <= B; x++) {
        let divisaoA = true;
        let divisaoB = true;

        for (let i = 0; i < a.length; i++) {
            if (x % a[i] !== 0) {
                divisaoA = false; 
                break;
            }
        }

        for (let i = 0; i < b.length; i++) {
            if (b[i] % x !== 0) {
                divisaoB = false;
                break;
            }
        }

        if (divisaoA && divisaoB) {
            aux++;
        }
    }

    return aux;
}


//2 - GRADING STUDENTS
function gradingStudents(grades) {
 let notaNova = [];

    for (let i = 0; i < grades.length; i++) {
        let aux = grades[i];

        if (grades[i] < 38) {
            notaNova.push(grades[i]);
        } else {
            while (aux % 5 !== 0) {
                aux++;
            }

            if (aux - grades[i] < 3) {
                notaNova.push(aux);
            } else {
                notaNova.push(grades[i]);
            }
        }
    }

    return notaNova;
}

//3 - BREAKING THE RECORDS
function breakingRecords(scores) {
    if (scores.length == 0) return [0, 0];

    let min = scores[0];
    let max = scores[0];
    let contagemMin = 0;
    let contagemMax = 0;

    for (let i = 1; i < scores.length; i++) {
        if (scores[i] < min) {
            min = scores[i];
            contagemMin++;
        }
        if (scores[i] > max) {
            max = scores[i];
            contagemMax++;
        }
    }

    return [contagemMax, contagemMin];
}

//4 - DIAGONAL DIFFERENCE
function diagonalDifference(arr) {
    let aux = arr.length;
    let esq = 0;
    let dir = 0;

    for (let i = 0; i < aux; i++) {
        esq += arr[i][i];
        dir += arr[i][aux - 1 - i];
    }

    return Math.abs(esq - dir);
}

//5 - CATS AND A MOUSE
function catAndMouse(x, y, z) {
    let distA = x > z ? x - z : z - x; 
    let distB = y > z ? y - z : z - y;

    if (distA < distB) {
        return 'Cat A';
    } else if (distB < distA) {
        return 'Cat B';
    } else {
        return 'Mouse C';
    }
}