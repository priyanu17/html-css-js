'use-strict';

const modal = document.querySelector('.modal');

const openButtons = document.querySelectorAll('.btn-open-modal');

function openModalWindow() {
  console.log('button clicked');
  modal.classList.remove('hidden');
}
openButtons.forEach((openButton) => {
  openButton.addEventListener('click', openModalWindow);
});
const closeModalButtons = document.querySelector('.close-modal');

function closeModalWindow() {
  console.log('close button clicked');
  modal.classList.add('hidden');
}

closeModalButtons.addEventListener('click', closeModalWindow);
