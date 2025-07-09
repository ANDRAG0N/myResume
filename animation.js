document.addEventListener("mousemove", (e) => {
    const video = document.getElementById("bg-video");

    // Получаем центр экрана
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // Смещения от центра (-1 до 1)
    const offsetX = (e.clientX - centerX) / centerX;
    const offsetY = (e.clientY - centerY) / centerY;

    // Коэффициенты силы смещения (настрой по вкусу)
    const moveX = offsetX * 20; // 20px влево-вправо
    const moveY = offsetY * 20;

    // Применяем transform
    video.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px)) scale(1.05)`;
});
