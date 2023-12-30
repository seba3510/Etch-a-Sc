/**
 * This script creates a sketchpad with functionality similar to an Etch-and-Sketch.
 * It allows for drawing and sketching on a grid-like surface.
 * 
 * @author Sebastian Corporan Berrios
 */

//=========================================================================================================================


/**
 * Represents the container element for the grid.
 * @type {HTMLElement}
 */
const containerRef = document.getElementById("container");

/**
 * Represents the rows of the grid.
 * @type {HTMLCollectionOf<Element>}
 */
let rowsRef = document.getElementsByClassName("row");

/**
 * Represents the cells of the grid.
 * @type {HTMLCollectionOf<Element>}
 */
let cellsRef = document.getElementsByClassName("cell");

//=========================================================================================================================


/**
 * Creates a default grid with 16 rows and 16 columns.
 */
function defaultGrid() {
    makeRows(16);
    makeColumns(16);
} // defaultGrid()

//=========================================================================================================================


/**
 * Creates  rows in the grid.
 *
 * @param {number} numRows - The number of rows to create.
 */
function makeRows(numRows) {

    // Iterate over each row to be created
    for (let i = 0; i < numRows; i++) {

        /**
         * Represents the new row to be added into the grid.
         * @type {HTMLDivElement}
         */
        let newRow = document.createElement("div");

        /**
         * Adds the created row inside the container element
         * It then assigns it  the css class 'row' to style the row 
         */
        containerRef.appendChild(newRow).className = "row";
    } // for()
} // makeRows()


//=========================================================================================================================


/**
 * Creates columns in the grid by adding cells to each row.
 *
 * @param {number} numCells - The number of cells to create in each row.
 */
function makeColumns(numCells) {

    /**
     * Since the DOM treats every element retrieved by certain methods
     * (e.g., getElementsByClassName) as a collection, we use 'rowsRef'
     * to represent the rows in the grid.
     */
    let n = rowsRef.length;

    // Iterate over each row
    for (let i = 0; i < n; i++) {
        // Create the specified number of cells in the current row
        for (let j = 0; j < numCells; j++) {
            // Represents a cell in the grid
            let newCell = document.createElement("div");

            /**
             * Append the new cell to the current row.  This row
             * will be assigned the css class 'cell'
             */
            rowsRef[i].appendChild(newCell).className = "cell";
        } // for()
    } // for()
} // makeColumns()



//=========================================================================================================================


// Call the defaultGrid function to create the initial grid
defaultGrid();
