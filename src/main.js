const modal = document.querySelector('.modal');
const allButtonImages = document.querySelectorAll('.buttonImage');
const closeButton = document.querySelector('.close-button');

allButtonImages.forEach(simpleButton => {
    simpleButton.addEventListener('click', () => {
        modal.classList.remove('hidden')
        modal.classList.add('visible')
    })
})
closeButton.addEventListener('click', () => {
    modal.classList.add('hidden')
    modal.classList.remove('visible')
})