function change_Color()
{
  const buttElements = document.getElementsByTagName('button');

  for (const buttElement of buttElements) {
    buttElement.onclick = function () {
      let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      buttElement.style.backgroundColor = randomColor;
    }
  }
}
