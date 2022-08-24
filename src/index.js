
import './sass/style.scss'



// Button OnClick Event
const btns = Array.from( document.querySelectorAll('a'))

btns.map(btn => btn.addEventListener("click", e => console.log(e.target)))