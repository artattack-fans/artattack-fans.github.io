window.addEventListener('load', () => {
    document.querySelector('#qr-id').innerText = new URLSearchParams(window.location.search).get('i');
})