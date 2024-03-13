let open = document.querySelector('#opened')
let keys = document.querySelector('.keys')
let code = document.querySelector('#code')
let keyCode = document.querySelector('#keyCode')
let key = document.querySelector('#key')

document.addEventListener('keydown',(el)=>{
    keys.classList.remove('hidden')
    open.classList.add('hidden')

    
    code.innerHTML = el.code;
    key.innerHTML = el.key;
    keyCode.innerHTML = el.keyCode;
})
