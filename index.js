red = "/images/red.png";
yellow = "/images/yellow.png";
// console.log(header.children[0]);
matrix = Array(3);
buttons = document.querySelectorAll(".btn");
counter = 0;

buttons.forEach((element) => {
  element.addEventListener("click", () => {
    previous = document.querySelector(".prev");
    element.classList.toggle("prev");

    if (previous != null) {
      if (previous != element) {
        if (counter == 0) {
          element.children[0].src = red;
          counter = 1;
          element.classList.add("r");
        } else if (counter == 1) {
          element.children[0].src = yellow;
          counter = 0;
          element.classList.add("y");
        }
      }
    } else {
      element.children[0].src = red;
      counter = 1;
    }
    header = document.querySelector(".header");
    console.log(check(header));
    for (j = 0; j < 3; j++) {
      for (i = 0; i < 3; i++) {
        if (matrix[j][i] != "") {
          continue;
        }
        else{
            break;
        }
        if((matrix[j][1]+matrix[j][2]+matrix[j][3]==0){
            winning="Yellow";
            console.log(winning)
        }
        if
      }
    }
  });
});

function check(header) {
  matrix = Array(3);
  for (i = 0; i < 9; i++) {
    if (header.children[i].classList.contains("r")) {
      matrix[i] = 1;
    }

    if (header.children[i].classList.contains("y")) {
      matrix[i] = 0;
    }
  }
  return matrix;
}
