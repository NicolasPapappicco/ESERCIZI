const addProduct = () => {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  li.innerHTML = "<input type='checkbox'>";
  ul.appendChild(li);
};
