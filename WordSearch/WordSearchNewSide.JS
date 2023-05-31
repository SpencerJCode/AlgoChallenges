// Yesterday, you wrote code that solves a WordSearch puzzle. Today, write
// a new function that takes in that puzzle grid and either adds to it a
// brand new row (making it taller) or a brand new row (making it wider).
// If the puzzle grid is not square already, add either a row or column
// such that the grid is more square than before (If the grid is taller
// than it is wide, make it wider). If it IS a square already, make it
// taller. The spaces in the grid should have a randomized capital letter
// inserted by the function.Your function should return the updated grid.

// *Bonus: Don't randomize a number between 1 and 26 and then if-statement
// yourself to death. Is there another way to associate letters of the
// alphabet with numbers??

const Puzzle = [
    ['O','R','A','N','G','E','L','R','M','K','Y','W'],
    ['N','W','N','T','A','P','E','S','A','R','S','A'],
    ['Y','E','L','E','L','K','A','L','I','M','E','S'],
    ['Y','W','L','P','O','I','A','P','K','L','T','E'],
    ['E','W','W','A','N','W','W','M','A','R','O','B'],
    ['Y','A','O','O','P','I','E','R','A','Y','L','P'],
    ['U','T','M','R','O','A','Y','W','B','U','A','Y'],
    ['U','E','B','R','A','B','B','I','E','P','E','W'],
    ['L','R','A','M','E','E','A','B','I','S','P','P'],
    ['B','M','Y','P','R','M','E','N','A','B','A','E'],
    ['E','E','G','R','P','R','B','O','A','R','R','A'],
    ['A','L','Y','R','R','L','Y','O','R','N','G','E'],
    ['L','O','A','Y','R','R','E','B','P','S','A','R'],
    ['A','N','B','L','A','C','K','B','E','R','R','Y']
]

function WordSearchNewSide(grid){
    let randInt = 0;
    let newLetter = ""
    if (grid[0].length >= grid.length){
        console.log("Making the grid taller")
        let stop = grid.length
        grid.push([])
        for (let i=0; i<stop; i++){
            randInt = Math.ceil(Math.random()*26) + 64
            newLetter = String.fromCharCode(randInt)
            grid[stop].push(newLetter)
        }
    } else {
        console.log("Making the grid wider")
        let stop = grid[0].length
        for (let i=0; i<grid.length; i++){
            randInt = Math.ceil(Math.random()*26) + 64
            newLetter = String.fromCharCode(randInt)
            grid[i][stop]=newLetter
        }
    }
    return grid
}

let newPuzzle = WordSearchNewSide(Puzzle)