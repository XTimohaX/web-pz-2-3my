document.addEventListener("DOMContentLoaded", function () {
  generateChessboard();
});

function generateChessboard() {
  const chessboard = document.getElementById("chessboard");
  const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];


  for (let row = 8; row >= 1; row--) {

    const rowElement = document.createElement("div");
    rowElement.classList.add("chessboard-row");
    chessboard.appendChild(rowElement);

    const rowNumberCell = document.createElement("div");
    rowNumberCell.classList.add("cell", "row-number");
    rowNumberCell.textContent = row;
    rowElement.appendChild(rowNumberCell);
    for (let col = 0; col < columns.length; col++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      rowElement.appendChild(cell);

      if (row === 2 ) {
        const pieceImg = document.createElement("img");
        pieceImg.src = "data:image/png;base64,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";
        pieceImg.alt = "Chess Figure";
        pieceImg.classList.add("chess-piece");
        cell.appendChild(pieceImg);
      }

      if (row === 7 ) {
        const pieceImg = document.createElement("img");
        pieceImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIGpZ1l6vTZj0Prxj4owB0xaTxBqredmppbQ&usqp=CAU";
        pieceImg.alt = "Chess Figure";
        pieceImg.classList.add("chess-piece");
        cell.appendChild(pieceImg);
      }
      if (row === 8 && col===0 || row === 8 && col===7) {
        const pieceImg = document.createElement("img");
        pieceImg.src = "https://cdn-icons-png.flaticon.com/128/6908/6908516.png";
        pieceImg.alt = "Chess Figure";
        pieceImg.classList.add("chess-piece");
        cell.appendChild(pieceImg);
      }
      if (row === 1 && col===0 || row === 1 && col===7) {
        const pieceImg = document.createElement("img");
        pieceImg.src = "https://cdn-icons-png.flaticon.com/128/3395/3395206.png";
        pieceImg.alt = "Chess Figure";
        pieceImg.classList.add("chess-piece");
        cell.appendChild(pieceImg);
      }
      if (row === 1 && col===1 || row === 1 && col===6) {
        const pieceImg = document.createElement("img");
        pieceImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Id38g9yrY7XxONfjbcxDdB9837X009I7pw&usqp=CAU";
        pieceImg.alt = "Chess Figure";
        pieceImg.classList.add("chess-piece");
        cell.appendChild(pieceImg);
      }
      if (row === 8 && col===1 || row === 8 && col===6) {
        const pieceImg = document.createElement("img");
        pieceImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVHTV3Rm3-0GlOIXsxvoCtlmp2sCj3kxIU3g&usqp=CAU";
        pieceImg.alt = "Chess Figure";
        pieceImg.classList.add("chess-piece");
        cell.appendChild(pieceImg);
      }
      if (row === 8 && col===2 || row === 8 && col===5) {
        const pieceImg = document.createElement("img");
        pieceImg.src = "https://w7.pngwing.com/pngs/149/246/png-transparent-battle-bishop-checkmate-chess-figure-game-chess-icon.png";
        pieceImg.alt = "Chess Figure";
        pieceImg.classList.add("chess-piece");
        cell.appendChild(pieceImg);
      }
      if (row === 1 && col===2 || row === 1 && col===5) {
        const pieceImg = document.createElement("img");
        pieceImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-rZWJBErc-rHOZJUDaRGLGS91vruM0QHb8vmXmFZEtTdVLd-hzXk6ynVFkHgaPbe_xpc&usqp=CAU";
        pieceImg.alt = "Chess Figure";
        pieceImg.classList.add("chess-piece");
        cell.appendChild(pieceImg);
      }if (row === 1 && col===3 ) {
        const pieceImg = document.createElement("img");
        pieceImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9uAeb10HtemzMVHJ_8jrOgzumQQ1JOAdW8Z2nyzdTBK35uXn4PzaYfr39NqKJ5wvWOJ0&usqp=CAU";
        pieceImg.alt = "Chess Figure";
        pieceImg.classList.add("chess-piece");
        cell.appendChild(pieceImg);
      }if (row === 1 && col===4 ) {
        const pieceImg = document.createElement("img");
        pieceImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiFqPXLvnqJafrsyfO8hivpZ4iWb1ELyciQMyvps5E9d117bIuOmKeK08Ee0gj5SBIPSU&usqp=CAU";
        pieceImg.alt = "Chess Figure";
        pieceImg.classList.add("chess-piece");
        cell.appendChild(pieceImg);
      }if (row === 8 && col===4 ) {
        const pieceImg = document.createElement("img");
        pieceImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjAolsH_OD6jy21CGM0b07XCE_8i8yVqe4W3KZTcmirk9kj8kKw0AsPkLdgxNHYCIzOAU&usqp=CAU";
        pieceImg.alt = "Chess Figure";
        pieceImg.classList.add("chess-piece");
        cell.appendChild(pieceImg);
      }if (row === 8 && col===3 ) {
        const pieceImg = document.createElement("img");
        pieceImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkVTygzv8JS5UkU5hXJjdhRFoa3vPpBmzo5w&usqp=CAU";
        pieceImg.alt = "Chess Figure";
        pieceImg.classList.add("chess-piece");
        cell.appendChild(pieceImg);
      }


    }
  }

  const letterRow = document.createElement("div");
  letterRow.classList.add("chessboard-row", "row-letters");
  chessboard.appendChild(letterRow);
  const emptyCell = document.createElement("div");
  emptyCell.classList.add("cell", "row-number");
  letterRow.appendChild(emptyCell);

  for (let col = 0; col < columns.length; col++) {
    const letterCell = document.createElement("div");
    letterCell.classList.add("cell");
    letterCell.textContent = columns[col];
    letterRow.appendChild(letterCell);
  }
}
