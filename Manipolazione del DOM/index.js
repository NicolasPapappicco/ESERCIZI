const addProduct = () => {
  const ul = document.querySelector("ul");
  const input = document.querySelector("input");
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  li.innerHTML = input.value;
  ul.appendChild(li);
  li.appendChild(checkbox);
};
