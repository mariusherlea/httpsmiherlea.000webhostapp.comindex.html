function curentYear() {
  document.getElementById("curentYear").innerHTML = new Date().getFullYear();
  const para = document.createElement("p");
  para.innerHTML = `<button>Cacac</button>`;
  document.getElementById("main-header").appendChild(para);
}

// const para = document.createElement("p");
// para.innerText = "Some bullshit";
// document.body.appendChild(para);
