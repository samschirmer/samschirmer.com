document.addEventListener('DOMContentLoaded',function(){
    sayHello();
 });

 async function sayHello() {
    const l = ['H','e','l','l','o','\u00A0','W','o','r','l','d','.'];
    let s = document.getElementById('hello');
    for (let i=0; i<l.length; i++) {
        s.innerText = `${s.innerText}${l[i]}`;
        await new Promise(r => setTimeout(r, 200));
    }
 }