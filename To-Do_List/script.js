let input = document.getElementById("cont");
let btn = document.querySelector(".submit");
let rem = document.querySelector(".rem");

input.addEventListener("keyup", () => {
  if (input.value.trim() != 0) {
    btn.classList.add("active");
  } else {
    btn.classList.remove("active");
  }
});

btn.addEventListener("click", () => {
  if (input.value.trim() != 0) {
    let newitem = document.createElement("div");
    newitem.classList.add("tasks");
    newitem.innerHTML = `<p>${input.value} </p>
           <button type="submit" class="complete" id="complete" value="completed">complete</button>
        `;
    rem.appendChild(newitem);
    input.value = "";
  } else {
    alert("please enter a task");
  }
});

document.addEventListener("click", function (event) {
  if (event.target && event.target.className == "complete") {
    let paragraph = event.target.previousElementSibling;
    paragraph.classList.toggle("completed");
  }
});
