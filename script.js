document.addEventListener('DOMContentLoaded', () => {
    const ui = document.getElementById('ui');
    const text = 'I love you ';
    const count = 100; // Jumlah elemen teks (semakin banyak, semakin padat hatinya)

    for (let i = 0; i < count; i++) {
        const word = document.createElement('div');
        word.classList.add('love_word', 'love_horizontal');
        word.textContent = text;
        word.style.setProperty('--i', i);

        // Hitung posisi di sekitar bentuk hati (parametrik)
        const angle = (i / count) * Math.PI * 2;
        const radius = 100 + 30 * Math.sin(angle * 3); // Variasi radius untuk bentuk hati

        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        const z = 20 * Math.sin(angle * 2); // Memberi efek 3D

        word.style.transform = `
            translateY(-100%) 
            rotateZ(-30deg) 
            translate3d(${x}px, ${y}px, ${z}px)
        `;

        ui.appendChild(word);
    }
});
