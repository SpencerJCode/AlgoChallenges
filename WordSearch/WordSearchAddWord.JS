// Today's function will add a word to an already existing WordSearch.
// Write a function that receives two parameters: The first is a string
// variable that represents the word to be added, and the Second is a 
// boolean value that determines whether or not the new word gets added
// to the bottom or to the right side of the grid. For example, if the
// boolean is true, add the new word to the bottom row of the grid, and
// if it is false, add the new word to the right-most column of the grid.
// Your function should return the new grid. Use the same puzzle variable
// from the previous days.

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

function WordSearchAddWord(grid, newWord, addToBottom){
    if (addToBottom) {
        let startIndex = Math.floor(Math.random()*(grid[0].length - newWord.length))
        for (let i=0; i<newWord.length; i++){
        grid[grid.length-1][startIndex] = newWord[i]
        startIndex++
        }
        return grid
    } else {
        let startIndex = Math.floor(Math.random()*(grid.length - newWord.length))
        for (let i=0; i<newWord.length; i++){
            grid[startIndex][grid[0].length-1] = newWord[i]
            startIndex++
        }
        return grid
    }
}