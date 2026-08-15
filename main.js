let box1 = document.getElementsByClassName("box");
box1.onclick = function () {
  document.body.appendChild("<p>Hi</p>");
};

let test = document.querySelector(".test");

test.style.cssText =
  "color :black; padding:8px; background-color: rgba(0, 242, 255, 1);width: 26%;border-radius:9px ;text-align:center;margin:auto;transition:1s;cursor:pointer";

document.body.onclick = function (e) {
  if (e.target.className === "test") {
    test.textContent = "omar";
    test.style.transform = "translate(4px,4px)";
  } else {
    test.textContent = "Hello !";
    test.style.transform = "translate(0,0)";
  }
};
let big = document.querySelector(".all");
let btn = document.querySelector(".aller");
let layer = document.querySelector(".blur");

btn.onclick = function () {
  big.removeAttribute("class");
  btn.setAttribute("class", "opc");
  layer.classList.add("opc");
};
let createdP = document.createElement("div");
createdP.classList.add("crP");
createdP.style.cssText =
  "padding:6px; color:white;width:40%;font-weight:900;margin: 10px auto;text-align:center";
createdP.innerHTML = "Hello P";

big.append(createdP);

let aPdf = document.querySelector(".pdf");
aPdf.onclick = function () {
  aPdf.setAttribute("href", "second.html");
};
console.log(aPdf);
