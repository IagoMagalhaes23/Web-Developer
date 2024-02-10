const bell = document.querySelector('.icon-tabler-bell');
const notificationContainer = document.querySelector('.notification');

bell.addEventListener('click', () => {
    notificationContainer.style.transform = 'scale(0)';
})