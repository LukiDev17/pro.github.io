function animate() {
    const message = document.getElementById('message');
    message.classList.add('show');

    setTimeout(() => {
        message.classList.remove('show');
    }, 2000); // Nachricht für 2 Sekunden anzeigen
}