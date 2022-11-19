const d = new Date();
document.getElementById("age").innerHTML = d.getFullYear() - 1977;

function curentYear() {
  document.getElementById("curentYear").innerHTML = d.getFullYear();
}
