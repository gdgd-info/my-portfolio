const nameJapanese = document.getElementById("name-japanese");
const nameEnglish = document.getElementById("name-english");
const nameplate = document.getElementById("name");

const target = document.getElementById("text");
const target2 = document.getElementById("text2");
const school = document.getElementById("school");
const hobby = document.getElementById("hobby");

nameplate.onclick = function () {
  if (nameEnglish.textContent === "SHIMIZU YUSUKE") {
    nameJapanese.textContent = "WebExpertコース";
    nameEnglish.textContent = "12期";
  } else {
    nameJapanese.textContent = "志水　佑輔";
    nameEnglish.textContent = "SHIMIZU YUSUKE";
  }
};

const text = "東京理科大学院　情報工学専攻";
const dataArray = text.split("").slice(0);

const html = dataArray.map(function (word, index) {
  return `<span style="transition-delay: ${
    (index + 1) * 50
  }ms;">${word}</span>`;
});
html.forEach(function (element) {
  target.insertAdjacentHTML("beforeend", element);
});

const text2 = "卓球　ビリヤード　将棋";
const dataArray2 = text2.split("").slice(0);
console.log(dataArray2);
const html2 = dataArray2.map(function (word, index) {
  return `<span style="transition-delay: ${
    (index + 1) * 50
  }ms;">${word}</span>`;
});
html2.forEach(function (element) {
  target2.insertAdjacentHTML("beforeend", element);
});
console.log(html2);

school.onclick = function () {
  target.classList.toggle("played");
};

hobby.onclick = function () {
  target2.classList.toggle("played");
};
