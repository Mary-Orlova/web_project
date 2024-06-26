const openModalButtons = document.querySelectorAll ('[data-modal-target]')
const closeModalButtons = document.querySelectorAll ('[data-close-button]')
const overlay = document.getElementById('overlay')


openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    // const modal = document.getElementById('ModalOpen')
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.modal-active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('modal-active')
  overlay.classList.add('modal-active')
  // запрет на скрол body, пока открыта страница модального окна
  document.getElementsByTagName("body")[0].style.overflow = 'hidden';
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('modal-active')
  overlay.classList.remove('modal-active')
  // разрешение на скрол body, когда закрываем модальное окно
  document.getElementsByTagName("body")[0].style.overflow = 'scroll';
}

