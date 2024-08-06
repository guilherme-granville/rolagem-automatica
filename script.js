document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    const toggleButton = document.getElementById('toggle-button');
    const speedControl = document.getElementById('speed-control');
    const speedValue = document.getElementById('speed-value');

    let scrollInterval;
    let isScrolling = false;
    let scrollSpeed = parseInt(speedControl.value);

    function scrollContent() {
        content.scrollTop += 1;
        if (content.scrollTop + content.clientHeight >= content.scrollHeight) {
            content.scrollTop = 0;
        }
    }

    function startScrolling() {
        if (!isScrolling) {
            isScrolling = true;
            scrollInterval = setInterval(scrollContent, 1000 / scrollSpeed);
            toggleButton.textContent = 'Parar Rolagem';
        }
    }

    function stopScrolling() {
        if (isScrolling) {
            clearInterval(scrollInterval);
            isScrolling = false;
            toggleButton.textContent = 'Iniciar Rolagem';
        }
    }

    toggleButton.addEventListener('click', () => {
        if (isScrolling) {
            stopScrolling();
        } else {
            startScrolling();
        }
    });

    speedControl.addEventListener('input', () => {
        scrollSpeed = parseInt(speedControl.value);
        speedValue.textContent = scrollSpeed;
        if (isScrolling) {
            clearInterval(scrollInterval);
            scrollInterval = setInterval(scrollContent, 1000 / scrollSpeed);
        }
    });
});
