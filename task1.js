document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const body = document.body;

    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        const docHeight = document.documentElement.scrollHeight;
        const winHeight = window.innerHeight;
        const scrollPercent = scrollY / (docHeight - winHeight);
        
        if (scrollY > 50) {
            navbar.style.backgroundColor = '#555';
        } else {
            navbar.style.backgroundColor = '#333';
        }
        
        const colorValue = Math.min(255, Math.floor(scrollPercent * 255));
        body.style.backgroundColor = `rgb(${255 - colorValue}, ${255 - colorValue}, ${255 - colorValue})`;
    });
});
