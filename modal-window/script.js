'use strict';

const modal = document.querySelector('.modal');

const openButtons = document.querySelectorAll('.btn-open-modal');

const overlay = document.querySelector('.overlay');

function openModalWindow() {
  console.log('button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
openButtons.forEach((openButton) => {
  openButton.addEventListener('click', openModalWindow);
});
const closeModalButtons = document.querySelector('.close-modal');

function closeModalWindow() {
  console.log('close button clicked');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

closeModalButtons.addEventListener('click', closeModalWindow);

overlay.addEventListener('click', closeModalWindow);

document.addEventListener('keydown', function (e) {
  console.log(e);

  if (
    e.key === 'Escape' &&
    !modal.classList.contains('hidden') &&
    !overlay.classList.contains('hidden')
  ) {
    closeModalWindow();
  }
});
