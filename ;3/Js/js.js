
window.onload=function(){
var r = document.querySelector(':root');
var t = document.querySelector(':root');
const bt = document.querySelector('.btn-no');


let x =Math.floor(Math.random(100)*1000);
let y =Math.floor(Math.random(25)*500);

function myFunction_set() {
    t.style.setProperty('--random', x + "px");
    r.style.setProperty('--random1', y + "px");
}

bt.addEventListener('mouseover',function(){
    const trans = bt.getAttribute('area-expanded');
    if (trans === 'false'){
    bt.setAttribute('area-expanded', true);
    }
    x =Math.floor(Math.random(-100)*1000);
    y =Math.floor(Math.random(25)*(500));
    myFunction_set();
    console.log(x);
    console.log(y);
})
};



