let big = document.querySelector(".all");
let btn = document.querySelector(".aller");
let layer = document.querySelector(".blur");

btn.onclick = function () {
  big.removeAttribute("class");
  btn.setAttribute("class", "opc");
  layer.classList.add("opc");
};

let foot = document.createElement("div");
foot.className = "foote";
foot.style.width = "60%";
foot.style.paddingTop = "28px";
foot.style.paddingBottom = "28px";
foot.style.paddingRight = "12px";
foot.style.paddingLeft = "12px";
foot.style.backgroundColor = " beige";
foot.style.height = "45px";
foot.style.position = "fixed";
foot.style.bottom = "3%";
foot.style.right = "50%";
foot.style.transform = "translatex(50%)";
foot.style.borderRadius = "15px";
foot.style.display = "flex";
foot.style.justifyContent = "space-between";
foot.style.alignItems = "center";

document.body.prepend(foot);

let link1 = document.createElement("a");
let link2 = document.createElement("a");
let link3 = document.createElement("a");
foot.appendChild(link1);
foot.appendChild(link2);
foot.appendChild(link3);

link1.setAttribute("href", "index.html");
link1.innerHTML = "home page &duhar;";
link1.className = "afoot";

link2.setAttribute("href", "index.html");
link2.innerHTML = "not home page &dArr;";
link2.className = "afoot";

link3.setAttribute("href", "index.html");
link3.innerHTML = "not page &DoubleUpArrow;";
link3.className = "afoot";

if (screen.width >= 300 && screen.width <= 400) {
  foot.style.width = "92%";
}
