let containerElement = document.getElementById("container");
let yesBtn = document.getElementById("yes-btn");
let noBtn = document.getElementById("no-btn");

function increaseFn() {
  let currentWidth = yesBtn.clientWidth;
  let currentHeight = yesBtn.clientHeight;
  yesBtn.style.width = currentWidth + 10 + "px";
  yesBtn.style.height = currentHeight + 10 + "px";
  yesBtn.style.backgroundColor = "red";
  yesBtn.style.color = "white";
}

function agreeFunction() {
  setTimeout(function () {
    let loader = `
            <h1>Plase wait while I finalise our lives together....</h1>
            <div>
            <i class="fa-solid fa-spinner fa-spin" style="color: #000000;"></i>
            </div>
            <img src="https://media.giphy.com/media/q6RoNkLlFNjaw/giphy.gif?cid=ecf05e47e3m9b285xu1kr2ky2nbmvp4w13fscw2s2jz3zs0e&ep=v1_gifs_related&rid=giphy.gif&ct=g"/>
`;

    containerElement.innerHTML = loader;
  }, 2000);

  setTimeout(function () {
    let newContent = `
                <h1>Well well well...</h1>
                <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWJvajZ4cXN6b29tOWhubWg2OTUyMGVqbG8yM29ianNneGlzeWhkNiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Dps6uX4XPOKeA/giphy.gif"/>
`;
    containerElement.innerHTML = newContent;
  }, 9000);

  //secondTimeoutFunction
  setTimeout(function () {
    let secondMsg = `
                <h1>Looks like<br/>
                <span class="red">YOU</span><br/>
                are all mine now...
                </h1>
                <img src="https://media.giphy.com/media/lY1F6BJjbRO3m/giphy.gif?cid=790b7611c2cwm1eqv0rhjjdodajq6dntbrkplr3lyhjdrfza&ep=v1_gifs_search&rid=giphy.gif&ct=g"/>
                `;

    containerElement.innerHTML = secondMsg;
  }, 12000);

  //last Timeout function
  setTimeout(function () {
    let lastmsg = `
<h1>Shall we set the wedding date now...?</h1>
<img src="https://media.giphy.com/media/TuZ8v66TzGeYJW23as/giphy.gif?cid=790b7611dna4ngr7nqsumrxliav947nyot31s39irq6vj2e8&ep=v1_gifs_search&rid=giphy.gif&ct=g"/>

`;
    containerElement.innerHTML = lastmsg;
  }, 16000);
}

noBtn.addEventListener("click", increaseFn);
yesBtn.addEventListener("click", agreeFunction);
