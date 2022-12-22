const noBtn= document.getElementById('hinde');
const yesBtn= document.getElementById('yes');
const ques= document.getElementById('question');
noBtn.addEventListener("click",()=>{
    let rand = Math.floor(Math.random()* (400-300)+1);
    let rand2 = Math.floor(Math.random()* (200-100)+1);
    noBtn.style.transform="translate("+rand+"px,"+rand2+"px)";
});
yesBtn.addEventListener("click",()=>{
    ques.innerHTML= "I love you too <3"
})

let main = document.getElementById('main');

function renderStar(col, classNameStar) {
    let html = '';
    for (let i = 0; i < col; i++) {
        html += `<div class="star ${classNameStar}" style="
        top: ${returnRandomInt(window.innerHeight)}px;
        right: ${returnRandomInt(window.innerWidth)}px;
      "></div>`;
    }
    main.innerHTML +=
        renderStarGroup(0, html) +
        renderStarGroup(window.innerHeight, html);
}

function renderStarGroup(top, html) {
    return `<div class="star-group" style="
    top: ${top}px;
    --translateY: -${window.innerHeight}px"
  >${html}</div>`;
}

function returnRandomInt(max) {
    return Math.floor(Math.random() * max);
}

renderStar(20, 'big-star');
renderStar(90, 'average-star');
renderStar(180, 'small-star');