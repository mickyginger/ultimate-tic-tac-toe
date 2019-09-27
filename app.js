document.addEventListener('DOMContentLoaded', () => {
  const gameBoard = document.querySelector('.game')
  const boards = gameBoard.querySelectorAll('.small-board')

  let player = 'X'

  function handleClick(e) {
    const boardThatWasClickedOn = e.target.parentNode
    if(!boardThatWasClickedOn.classList.contains('current')) return false

    const tiles = Array.from(e.target.parentNode.children)
    const index = tiles.indexOf(e.target)

    e.target.innerHTML = player

    player = player === 'O' ? 'X' : 'O'

    boardThatWasClickedOn.classList.remove('current')
    boards[index].classList.add('current')
  }

  boards.forEach(board => {
    // Array.from turns the children of the board into a normal array
    Array.from(board.children).forEach(tile => {
      tile.addEventListener('click', handleClick)
    })
  })
})
