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

//=========================================================================================================================
/**
 * Represents a collection of all elements with the class "cell" in the document.
 * @type {NodeListOf<Element>}
 */
const cells = document.querySelectorAll(".cell");

//=========================================================================================================================

/**
 * Handles mouse hover events on cells and adds a yellow trail.
 * Loops through each cell and adds the hover event listener.
 */
function handleMouseHover() {
    /**
     * The total number of cells in the collection.
     * @type {number}
     */
    let n = cells.length;

    // Iterate over each cell in the collection
    for (let i = 0; i < n; i++) {
        /**
         * Represents an individual cell in the grid.
         * @type {Element}
         */
        let cell = cells[i];

        // Attach the addTrail function to the mouseover event of the cell
        addTrail(cell);
    } //for()
} // handleMouseHover()

//=========================================================================================================================

/**
 * Adds a yellow trail effect to the cell when the mouse hovers over it.
 *
 * @param {Element} cell - The cell element to which the trail is added.
 */
function addTrail(cell) {
    // Add a mouseover event listener to the cell
    cell.addEventListener("mouseover", () => {
        // Change the background color to yellow on mouseover
        cell.style.backgroundColor = "yellow";
    });
} // addTrail()

//=========================================================================================================================

handleMouseHover();

//=========================================================================================================================

/**
 * Prompts the user to enter the number of squares per side for the grid.
 * If the input is valid (less than 100), it clears the existing grid and creates a new grid.
 */
function promptGridSize() {


    // Prompt user for grid size input
    let size = prompt("How many squares per side should your grid be?");

    // Check if the size is valid
    const isValidSize = isSizeValid(size);

    // If the size is valid (less than 100), clear the existing grid and create a new grid
    if ((isValidSize)) {
        clearGrid();
        createGrid(size);
    } // if()


    return; // exit function since user entered an invalid size
} // promptGridSize()

//=========================================================================================================================


/**
 * Checks if the given size is valid for the grid.
 * Displays an alert if the size exceeds 100 pixels.
 * @param {number} size - The size to be checked.
 * @returns {boolean} - True if the size is valid, false otherwise.
 */
function isSizeValid(size) {
    if ((size > 100)) {
        alert("Grid size cannot exceed 100px!");
        return false;
    } // if()

    return true;
} // checkSize()


//=========================================================================================================================


/**
 * Creates a grid with the specified number of squares per side.
 * @param {number} size - The number of squares per side for the grid.
 */
function createGrid(size) {

    makeRows(size);
    makeColumns(size);
} // createGrid()

/**
 * Clears the contents of the grid
 */
function clearGrid() {


    containerRef.innerHTML = "";

} // clearGrid()


//=========================================================================================================================




/**
 * Adds a click event listener to the button with the ID "input-btn."
 * When the button is clicked, it triggers the promptGridSize function.
 *
 * @description
 * This function is responsible for attaching a click event listener to a button,
 * triggering the promptGridSize function when the button is clicked.
 * This functionality is particularly useful for handling user interaction,
 * such as capturing input for grid size.
 */
function handleClick() {
    // Select the button with the ID "input-btn"
    const btn = document.querySelector("#input-btn");

    // Add a click event listener to the button
    btn.addEventListener("click", () => promptGridSize());
} // handleClick()



//=========================================================================================================================


handleClick();



