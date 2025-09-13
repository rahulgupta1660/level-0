let div = document.createElement("div");
div.classList.add("parent");
document.body.appendChild(div);

export const execute = (data, newLine = false) => {
  div.append(data);
  if (newLine) div.append(document.createElement("br"));
};
