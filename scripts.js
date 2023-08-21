const getInputValue = (Elementid) => {
  let elementvalue = document.getElementById(Elementid).value;
  document.getElementById(Elementid).value = "";
  return elementvalue;
};

const Addtodo = () => {
  let words = "012345689ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    console.log(i);

    color += words[Math.floor(Math.random() * 16)];
  }

  document.body.style.backgroundColor = color;
  let todo = getInputValue("todo");
  if (todo == "") {
    return;
  }
  let element = document.getElementById("todolist");
  let li = document.createElement("li");
  li.innerText = todo;
  li.classList.add("bg-blue-400");
  li.classList.add("py-2");
  li.classList.add("px-2");
  li.classList.add("rounded-lg");
  li.classList.add("break-words");
  li.classList.add("decoration-4");
  element.appendChild(li);

  let span = document.createElement("span");
  span.innerHTML = "\u274C";

  span.classList.add("cursor-pointer");
  span.classList.add("float-right");
  span.classList.add("rounded-xl");
  li.appendChild(span);

  saveData();
};

document.getElementById("todolist").addEventListener(
  "click",
  function (event) {
    if (event.target.tagName === "SPAN") {
      event.target.parentElement.remove();
      saveData();
    } else if (event.target.tagName === "LI") {
      event.target.classList.toggle("line-through");
    }
  },
  true
);

const saveData = () => {
  localStorage.setItem("items", document.getElementById("todolist").innerHTML);
};

const getData = () => {
  document.getElementById("todolist").innerHTML = localStorage.getItem("items");
};

getData();
