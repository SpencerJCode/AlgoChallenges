// Ok, so you have a function that solves a WordSearch, whose return
// includes noting if a word was not found in it.
// You also have a function that adds a new row or column to an 
// existing word search.
// Finally, you have a function that puts a word into a WordSearch
// at either the bottom column, or the last row.

// PUT IT ALL TOGETHER!!
// Re-work your first function such that if it finds that a word in
// the "words" list of strings is not discovered in the WordSearch,
// it creates either a new row or new column, and then adds it in.
// Log that the word was not found, then log where it was added.
// The function should return the updated grid.

const Puzzle = [
    ['O', 'R', 'A', 'N', 'G', 'E', 'L', 'R', 'M', 'K', 'Y', 'W'],
    ['N', 'W', 'N', 'T', 'A', 'P', 'E', 'S', 'A', 'R', 'S', 'A'],
    ['Y', 'E', 'L', 'E', 'L', 'K', 'A', 'L', 'I', 'M', 'E', 'S'],
    ['Y', 'W', 'L', 'P', 'O', 'I', 'A', 'P', 'K', 'L', 'T', 'E'],
    ['E', 'W', 'W', 'A', 'N', 'W', 'W', 'M', 'A', 'R', 'O', 'B'],
    ['Y', 'A', 'O', 'O', 'P', 'I', 'E', 'R', 'A', 'Y', 'L', 'P'],
    ['U', 'T', 'M', 'R', 'O', 'A', 'Y', 'W', 'B', 'U', 'A', 'Y'],
    ['U', 'E', 'B', 'R', 'A', 'B', 'B', 'I', 'E', 'P', 'E', 'W'],
    ['L', 'R', 'A', 'M', 'E', 'E', 'A', 'B', 'I', 'S', 'P', 'P'],
    ['B', 'M', 'Y', 'P', 'R', 'M', 'E', 'N', 'A', 'B', 'A', 'E'],
    ['E', 'E', 'G', 'R', 'P', 'R', 'B', 'O', 'A', 'R', 'R', 'A'],
    ['A', 'L', 'Y', 'R', 'R', 'L', 'Y', 'O', 'R', 'N', 'G', 'E'],
    ['L', 'O', 'A', 'Y', 'R', 'R', 'E', 'B', 'P', 'S', 'A', 'R'],
    ['A', 'N', 'B', 'L', 'A', 'C', 'K', 'B', 'E', 'R', 'R', 'Y']
]

const Words = [
    "APPLE",
    "LEMON",
    "TANGERINE",
    "BANANA",
    "LIME",
    "ORANGE",
    "STARFRUIT",
    "WATERMELON",
    "GRAPE",
    "KIWI",
    "PINEAPPLE",
    "STRAWBERRY",
    "PAPAYA",
    "BLUEBERRY",
    "BLACKBERRY",
    "RASPBERRY",
    "HONEYDEW"
]

function WordSearch(grid, words) {
    //instantiating the size of the grid in two variables to help
    //make less typing later.
    const x = grid[0].length;
    const y = grid.length;

    //move through the list of word and deal with one word at a time
    words.forEach(word => {
        let i = 0;
        let j = 0;
        //strings can be indexed just like an array. Start with the
        //first letter.
        let idxOfWord = 0;
        let found = false;
        //outer while loop logic breaks when i hits the bottom of the grid
        //or the search logic finds the word.
        while (i < y && found == false) {
            //inner while loop logic breaks when j hits the side of the grid
            //or the search logic finds the word.
            while (j < x && found == false) {
                //start the search logic when the first letter of the word is
                //found. i and j are both 0, so we are starting on the upper
                //left and will move right to the end of the row, then down.
                if (grid[i][j] == word[idxOfWord]) {
                    //search logic will move through the grid, but we don't want
                    //to lose our place, so we need two new variables to indicate
                    //where we are in the grid.
                    let a = i
                    let b = j
                    //instantiate a variable to move through the word we are searching
                    //for and compare the letter at that index to the letter found in
                    //the grid.
                    let count = 0
                    //search up. Don't search up if we are at the top of the grid or if
                    //the next letter isn't found there.
                    while (a > -1 && grid[a][b] == word[idxOfWord + count]) {
                        a--
                        count++
                    }
                    //we know we found the word if the count variable equals the length
                    //of the search word.
                    if (count == word.length) {
                        found = true
                        console.log(`Starting location for ${word} is ${[i]},${[j]}, and it goes up.`)
                    }
                    count = 0
                    a = i
                    b = j
                    //search up-right. Identical logic to above, only we need to stop at the
                    //right side of the grid as well. You can parse out the logic for the other
                    //directions.
                    while (a > -1 && b < x && grid[a][b] == word[idxOfWord + count]) {
                        a--
                        b++
                        count++
                    }
                    if (count == word.length) {
                        found = true
                        console.log(`Starting location for ${word} is ${[i]},${[j]}, and it goes up-right.`)
                    }
                    count = 0
                    a = i
                    b = j
                    //search right
                    while (b < x && grid[a][b] == word[idxOfWord + count]) {
                        b++
                        count++
                    }
                    if (count == word.length) {
                        found = true
                        console.log(`Starting location for ${word} is ${[i]},${[j]}, and it goes right.`)
                    }
                    count = 0
                    a = i
                    b = j
                    //search down-right
                    while (a < y && b < x && grid[a][b] == word[idxOfWord + count]) {
                        a++
                        b++
                        count++
                    }
                    if (count == word.length) {
                        found = true
                        console.log(`Starting location for ${word} is ${[i]},${[j]}, and it goes down-right.`)
                    }
                    count = 0
                    a = i
                    b = j
                    //search down
                    while (a < y && grid[a][b] == word[idxOfWord + count]) {
                        a++
                        count++
                    }
                    if (count == word.length) {
                        found = true
                        console.log(`Starting location for ${word} is ${[i]},${[j]}, and it goes down.`)
                    }
                    count = 0
                    a = i
                    b = j
                    //search down-left
                    while (a < y && b > -1 && grid[a][b] == word[idxOfWord + count]) {
                        a++
                        b--
                        count++
                    }
                    if (count == word.length) {
                        found = true
                        console.log(`Starting location for ${word} is ${[i]},${[j]}, and it goes down-left.`)
                    }
                    count = 0
                    a = i
                    b = j
                    //search left
                    while (b > -1 && grid[a][b] == word[idxOfWord + count]) {
                        b--
                        count++
                    }
                    if (count == word.length) {
                        found = true
                        console.log(`Starting location for ${word} is ${[i]},${[j]}, and it goes left.`)
                    }
                    count = 0
                    a = i
                    b = j
                    //search up-left
                    while (a > -1 && b > -1 && grid[a][b] == word[idxOfWord + count]) {
                        a--
                        b--
                        count++
                    }
                    if (count == word.length) {
                        found = true
                        console.log(`Starting location for ${word} is ${[i]},${[j]}, and it goes up-left.`)
                    }
                    count = 0
                    a = i
                    b = j
                }
                j++
            }
            i++
            j = 0
        }
        //Log that we never found the word if after all that, the "found" variable
        //is still false.
        if (!found) {
            console.log(`${word} was not found in the WordSearch.`)
            let taller = true;
            grid = WordSearchNewSide(grid, word, taller)
        }
    })
    ShowGrid(grid);
}

function WordSearchNewSide(grid, word, taller){
    let randInt = 0;
    let newLetter = ""
    if (grid[0].length >= grid.length){
        console.log("Making the grid taller")
        taller = true
        let stop = grid.length
        grid.push([])
        for (let i=0; i<stop; i++){
            randInt = Math.ceil(Math.random()*26) + 64
            newLetter = String.fromCharCode(randInt)
            grid[stop].push(newLetter)
        }
        grid = WordSearchAddWord(grid, word, taller)
    } else {
        console.log("Making the grid wider")
        taller = false
        let stop = grid[0].length
        for (let i=0; i<grid.length; i++){
            randInt = Math.ceil(Math.random()*26) + 64
            newLetter = String.fromCharCode(randInt)
            grid[i][stop]=newLetter
        }
        grid = WordSearchAddWord(grid, word, taller)
    }
    return grid
}

function WordSearchAddWord(grid, newWord, addToBottom){
    if (addToBottom) {
        let startIndex = Math.floor(Math.random()*(grid[0].length - newWord.length))
        console.log(`${newWord} has been added to the puzzle.`)
        console.log(`Starting location for ${newWord} is ${grid.length-1},${startIndex}, and it goes right.`)
        for (let i=0; i<newWord.length; i++){
        grid[grid.length-1][startIndex] = newWord[i]
        startIndex++
        }
        return grid
    } else {
        let startIndex = Math.floor(Math.random()*(grid.length - newWord.length))
        console.log(`${newWord} has been added to the puzzle.`)
        console.log(`Starting location for ${newWord} is ${startIndex},${grid[0].length-1}, and it goes down.`)
        for (let i=0; i<newWord.length; i++){
            grid[startIndex][grid[0].length-1] = newWord[i]
            startIndex++
        }
        return grid
    }
}

function ShowGrid(grid){
    for (let i=0; i<grid.length; i++){
        let row = `${grid[i][0]}`
        for (let j=1; j<grid[i].length; j++){
            row  += `,${grid[i][j]}`
        }
        console.log(row)
    }
}

WordSearch(Puzzle, Words)