document.addEventListener('DOMContentLoaded', () => {
    const noBtn = document.querySelector('#no');
    const yesBtn = document.querySelector('#yes');
    const h1 = document.querySelector('h1');
    const buttonsContainer = document.querySelector('.buttons');
    const buttonPresents = document.querySelector('.pdiv');
    
    let scale = 1;

    function growYesButton() {
        scale += 0.2;
        yesBtn.style.transform = `scale(${scale})`;
        yesBtn.style.transition = "transform 0.3s ease";
    }

    function moveNoButton() {
        noBtn.style.position = 'fixed';
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    }

    // --- EVENTI TASTO NO ---
    noBtn.addEventListener('mouseover', () => {
        if (window.matchMedia("(pointer: fine)").matches) {
            moveNoButton();
        }
    });

    noBtn.addEventListener('touchstart', (e) => {
        e.preventDefault(); 
        growYesButton();
    }, { passive: false });

    noBtn.addEventListener('click', (e) => {
        // Se il bottone è in 'fixed', il click non dovrebbe triggerare grow 
        // a meno che non sia mobile.
        if (!window.matchMedia("(pointer: fine)").matches) {
            growYesButton();
        }
    });

    // --- EVENTO TASTO YES (CORRETTO) ---
    yesBtn.addEventListener('click', () => {
        h1.innerText = "Sapevo che avresti detto di sì!";

        // 2. Nascondi i bottoni Yes/No
        if (buttonsContainer) {
            buttonsContainer.style.setProperty('display', 'none', 'important');
        }

        // 3. Mostra il div della sorpresa
        if (buttonPresents) {
            buttonPresents.style.setProperty('display', 'flex', 'important');
            console.log("Presents div mostrato!"); 
        }
    });
});