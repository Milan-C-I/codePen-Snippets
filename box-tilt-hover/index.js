let xc, yc;
let xp, yp;
const box = document.getElementById("box");
function getCursorposition(event) {
    let x = event.clientX;
    let y = event.clientY;
    xc = box.offsetLeft + box.clientWidth / 2;
    yc = box.offsetTop + box.clientHeight / 2;
    xp = (x / xc) - 1;
    yp = (y / yc) - 1;
    box.style.transform = `rotateX(${-yp * 30}deg) rotateY(${xp * 30}deg)`;
  box.style.boxShadow = `${-xp*20}px ${-yp*20}px 10px black`;
}
onmousemove = (e) => {
  getCursorposition(e);
}