document.addEventListener("mousemove", (e) => {
    const video = document.getElementById("bg-video");
    const x = (e.clientX / window.innerWidth - 0.5) * 30; // от -15 до +15
    const y = (e.clientY / window.innerHeight - 0.5) * 30;

    video.style.transform = `translate(${x}px, ${y}px) scale(1.1)`; // небольшой масштаб, чтобы края не обрезались
});

document.querySelectorAll('.content-section').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.03)';
        card.style.transition = 'transform 0.3s ease';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});
