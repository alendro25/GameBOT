let availableKeywords = [
  "Angry Bird",
  "Ashplat 8",
  "Bomb",
  "Counter Strike",
  "DOTA 2",
  "Empire of Kingdom",
  "Forza 9",
  "GTA: San Andreas",
  "GTA: V",
  "Need for Speed",
  "Point Blank",
  "Underground",
  "Zuma",
];

const resultBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function () {
  let result = [];
  let input = inputBox.value;

  if (input.length > 0) {
    result = availableKeywords.filter((keyword) => {
      return keyword.toLowerCase().includes(input.toLowerCase());
    });
    console.log(result);
  } else {
    resultBox.innerHTML = "";
  }

  display(result);

  if (!result.length) {
    resultBox.innerHTML = "";
  }
};

function display(result) {
  const content = result.map((list) => {
    return "<li onClick=selectInput(this)>" + list + "</li>";
  });

  resultBox.innerHTML = "<ul>" + content.join("") + "</ul>";
}

function selectInput(list) {
  inputBox.value = list.innerHTML;
  resultBox.innerHTML = "";
}
