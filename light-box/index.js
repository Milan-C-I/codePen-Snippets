const cont = document.getElementById("container");
let boxes=[];
for(let i = 0;i<107;i++){
  let inbox = document.createElement("div");
  inbox.className = "box";
  inbox.id = "box";
  cont.appendChild(inbox);
  boxes.push(inbox);
}
//////////////////////////////////////////////////////////\
/////////////////DIFFERENT-COLORS
let colors = ["#ff0000","#ff006f","#ff00e5","#af00ff","#2200ff","#00ecff","#00ffe2","#00ff6d","#2cff00","#a2ff00","#e9ff00","#ffa000"];
let c=0;
cont.addEventListener('mouseover',()=>{
  boxes.forEach( e =>{
    setTimeout(()=>{
      c+=1;
      c = c==colors.length?0:c;
    },100);
    e.addEventListener('mouseover', () =>{
      e.style.background = `${colors[c]}`;
      e.style.transition = "none";
    } );
    e.addEventListener('mouseout',()=>{
      e.style.transition = "3s";
      e.style.background = "none";
    });
  })
});
//////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////
/////////////LINEAR GRADIENT
// let deg=0;
// cont.addEventListener('mouseover',()=>{
//   boxes.forEach( e =>{
//     e.addEventListener('mouseover',()=>{
//     setTimeout(()=>{
//       deg+=10;
//     },10);
//       e.style.opacity = "1";
//       e.style.backgroundImage = `linear-gradient(${deg}deg,blue,red)`;
//       e.style.transition = "none";
//     })
//     e.addEventListener('mouseout',()=>{
//       // e.style.backgroundImage = "linear-gradient(45deg,black,black)";
//       // e.style.transition = "background-image 3s ease-in-out";
//       e.style.opacity = "0";
//       e.style.transition = "opacity 3s";
//     })
//   })
// })
//////////////////////////////////////////////////////////