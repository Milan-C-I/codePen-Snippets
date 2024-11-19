const hehe = document.getElementById("hehe");
let arr = [];
onmousemove = (e) => {
    if(!hehe.hasChildNodes()) {
        arr = createchild(e);
        apch(arr);
        const bruh = setInterval(() => {
            let xl = e.clientX;
            let yl = e.clientY;
            circle(arr, xl, yl);
        }, 5);
        setTimeout(() => {
            clearInterval(bruh);
            rech(arr);
            for (let i = 0; i < 5; i++) {
                if (i % 2 == 0 && i < 4) {
                    ob.deg[i] = 0;
                } else {
                    ob.deg[i] = 180;
                }
            }
        }, 900);
    }
}
function circle(a, xl, yl) {
    let xb, yb;
    a.forEach((e, i, a) => {
        if (ob.r[i] < 0 || ob.r[i] == 60) {
            xb = xl//+ob.r[i]+Math.cos(ob.deg[i]*Math.PI/180)*-ob.r[i];
            yb = yl - Math.sin(ob.deg[i] * Math.PI / 180) * ob.r[i];
        } else {
            xb = xl + ob.r[i] + Math.cos(ob.deg[i] * Math.PI / 180) * ob.r[i];
            yb = yl - Math.sin(ob.deg[i] * Math.PI / 180) * ob.r[i];
        }
        if (ob.size[i] == 15) {
            xb = xl + ob.r[i] + Math.cos(ob.deg[i] * Math.PI / 180) * -ob.r[i];
            yb = yl - Math.sin(ob.deg[i] * Math.PI / 180) * -ob.r[i];
        }
        a[i].style.top = `${yb}px`;
        a[i].style.left = `${xb}px`;
        if (i % 2 == 0 && i < 4) {
            ob.deg[i] += 1;
        } else {
            ob.deg[i] -= 1;
        }
    });
}
class obc {
    r = [-20, 20, -40, 40, 60];
    deg = [0, 180, 0, 180, 180];
    size = [10, 13, 15, 18, 20];
    c = ["#ff0066", "#9900ff", "#ff4dc4", "#ff9933", "#00ff00"];
}
let ob = new obc();
function createchild(e) {
    let a = [];
    let rand;
    for (let i = 0; i < 5; i++) {
        rand = Math.floor(Math.random() * 5);
        a[i] = document.createElement("div");
        a[i].style.width = `${ob.size[rand]}px`;
        a[i].style.height = `${ob.size[rand]}px`;
        a[i].style.position = "absolute";
        a[i].style.background = `${ob.c[rand]}`;
        a[i].style.borderRadius = "100px";
        a[i].style.top = `${e.clientY}px`;
        a[i].style.left = `${e.clientX}px`;
        a[i].style.border = `2px solid white`;
        a[i].style.boxShadow = `0px 0px 10px #66ffff`;
    }
    return a;
}
function apch(a) {
    for (let i = 0; i < 5; i++) {
        hehe.appendChild(a[i]);
    }
}
function rech(a) {
    for (let i = 0; i < 5; i++) {
        hehe.removeChild(a[i]);
    }
}