const box = document.getElementById("box");
let balls = [];
for(let i=0;i<420;i++){
  let indot = document.createElement("div");
  indot.className = "dot";
  box.appendChild(indot);
  balls.push(indot);
}
onclick = (event)=>{
  let x = event.clientX;
  let y = event.clientY;
  let dist;
  balls.forEach( e =>{
    e.style.animation = ``;
    dist = Math.round(Math.sqrt((x-e.offsetLeft)**2+(y-e.offsetTop)**2));
    e.style.animation = `0.75s ease ${dist*2.5}ms jump`;
  })
}