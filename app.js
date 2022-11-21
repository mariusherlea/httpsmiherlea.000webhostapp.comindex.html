function curentYear() {
  document.getElementById("curentYear").innerHTML = new Date().getFullYear();
  const head = document.createElement("p");
  head.innerHTML = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <h1><a href="index.html">HOme</a></h1>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
 
      <li class="nav-item">
        <a class="nav-link" href="cv.html">CV</a>
      </li>
     
    </ul>
  
  </div>
</nav>`;
  document.getElementById("main-header").appendChild(head);
}
const pageTitle = document.createElement("h1");
pageTitle.innerHTML = document.title;
document.getElementById("main-header").appendChild(pageTitle);

// const para = document.createElement("p");
// para.innerText = "Some bullshit";
// document.body.appendChild(para);
