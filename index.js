let containerElement = document.getElementById("container");
let yesBtn = document.getElementById("yes-btn");
let noBtn = document.getElementById("no-btn");

function increaseFn() {
  let currentWidth = yesBtn.clientWidth;
  let currentHeight = yesBtn.clientHeight;
  yesBtn.style.width = currentWidth + 10 + "px";
  yesBtn.style.height = currentHeight + 10 + "px";
}

function agreeFunction() {
  let newContent = `
                <h1>Well well well...</h1>
                <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWJvajZ4cXN6b29tOWhubWg2OTUyMGVqbG8yM29ianNneGlzeWhkNiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Dps6uX4XPOKeA/giphy.gif"/>
`;
  containerElement.innerHTML = newContent;
  setTimeout(function () {
    let secondMsg = `
<h1>Looks like<br/>
<span class="red">YOU</span><br/>
are all mine now...
</h1>
<img src="https://media.giphy.com/media/lY1F6BJjbRO3m/giphy.gif?cid=790b7611c2cwm1eqv0rhjjdodajq6dntbrkplr3lyhjdrfza&ep=v1_gifs_search&rid=giphy.gif&ct=g"/>
`;
  }, 3000);
}

noBtn.addEventListener("click", increaseFn);
yesBtn.addEventListener("click", agreeFunction);
