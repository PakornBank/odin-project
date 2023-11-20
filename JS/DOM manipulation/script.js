const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const p = document.createElement("p");
p.innerText = "Hey I'm red";

container.appendChild(p);

const h3 = document.createElement("h3");
h3.innerText = "I'm a blue h3!";
h3.setAttribute("style", "color: blue;");
container.appendChild(h3);

const newDiv = document.createElement("div");
newDiv.setAttribute(
  "style",
  "border: 2px solid black; background-color: pink;"
);

const h1 = document.createElement("h1");
h1.innerText = "I'm in a div";

const divP = document.createElement("p");
divP.innerText = "ME TOO!";

newDiv.appendChild(h1);
newDiv.appendChild(divP);

container.appendChild(newDiv);
