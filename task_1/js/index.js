let rotation = 0;

function img_Rotate(dg, img) {

  rotation += dg;

  const image = document.getElementById(img);
  image.style.transform = `rotate(${rotation}deg)`;

}

function img_Alert() {
  alert("ALERT with href")
}


const linkElements = document.getElementsByTagName('a');

for (const linkElement of linkElements) {
  linkElement.onmouseenter = function (event) {
    event.target.innerHTML += `(${event.target.href})`

  }

  linkElement.onmouseleave = function (event) {
    event.target.innerHTML = event.target.innerHTML.slice(0, event.target.innerHTML.indexOf('('))
  }
}

function validateInput() {

  let inputElement = document.getElementById("ageInput");
  let inputValue = inputElement.value;
  let inpElement = document.getElementById("nameInput");
  inpElement.classList.remove("error");

  inputElement.classList.remove("error");




  console.log(inputValue)
  try {
    let inpValue = inpElement.value;

    let inputValue = inputElement.value;
    if (/^[A-Z]/.test(inpValue)) {
      inpValue.textContent = "XXX";
      alert("Nice")
    } else {
      inpValue.textContent = "First letter must be up register";
      inpElement.classList.add("error");
      alert("Letter")
    }


    const number = parseFloat(inputValue);



    if (isNaN(number)) {
      alert("No convertable number");
      inputElement.value="";
      inputElement.classList.add("error");
      return false;
    }

    if (number < 0) {
      alert("No valid value");
      inputElement.value="";
      inputElement.classList.add("error");

      return false;
    } else {
      console.log("XXX");
      return true;
    }
  } catch (error) {
    alert("Validation error", error.message);
    return false;
  }
}
