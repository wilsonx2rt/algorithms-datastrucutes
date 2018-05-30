/* 
    Maze is 2D Array. Each Maze element (cell) looks like
    {
      x: 4,          // Horizontal position, integer
      
      y: 7,          // Vertical position, integer

      top: false,    // Top/Up has a wall/blocked if true, boolean 
      
      left: false,   // Left has a wall/blocked if true, boolean
      
      bottom: true,  // Bottom/Down has a wall/blocked if true, boolean
      
      right: true,   // Right has a wall/blocked if true, boolean
      
      set: 5         // Set # used to generate maze, can be ignored
    
      end: false     // true if his is the end cell you should find a path to

      // these can be set by you:
      visited: false // your algorithm visited this place already once
      onpath: false // this cell is on your solutions path to the end
    }
*/

// function that finds the end cell from the start position row, col
// returns true if it can find it, false otherwise

export function mazeSolver(maze, row, col) {
  let cell = maze[row][col];
  if (cell.visited) return false;
  if (cell.end) return true;

  cell.visited = true;
  let found = false;
  if (!cell.top) {
    found = mazeSolver(maze, row - 1, col + 0);
  }
  if (!found && !cell.right) {
    found = mazeSolver(maze, row - 0, col + 1);
  }
  if (!found && !cell.bottom) {
    found = mazeSolver(maze, row + 1, col + 0);
  }
  if (!found && !cell.left) {
    found = mazeSolver(maze, row + 0, col - 1);
  }

  cell.onpath = found;
  return found;
}
