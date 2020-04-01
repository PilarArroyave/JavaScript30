function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function playSound(e) {
    const audio = document.querySelector(`audio[key-code="${e.keyCode}"]`);
    const key = document.querySelector(`div[key-code="${e.keyCode}"]`);
    if (!audio) return; //tecla no parametrizada

    key.classList.add('playing'); //cambiar el estilo del boton usando la clase playing
    audio.currentTime = 0; //iniciar el audio de nuevo si se oprime la misma tecla
    audio.play();
}
  
window.addEventListener('keydown', playSound);
const keys = Array.from(document.querySelectorAll('.key')); //selecciona el boton a formatear
keys.forEach(key => key.addEventListener('transitionend', removeTransition)); //deja el estilo del boton seleccionado en el estado inicial