// Function para sa Floating Hearts Background
function createFloatingHearts() {
    const container = document.getElementById('hearts-container');
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.innerHTML = '❤️';
        
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 4 + 's'; 
        heart.style.fontSize = Math.random() * 20 + 15 + 'px'; 
        
        container.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 7000);
    }, 300); 
}

// === TIME COUNTER ===
// (Palitan ang 2026-07-01 ng totoong petsa kung kailan ka nagsimula)
const startDate = new Date("2026-07-01T00:00:00").getTime(); 
setInterval(function() {
    const now = new Date().getTime();
    const distance = now - startDate;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if(document.getElementById("timeCounter")) {
        document.getElementById("timeCounter").innerHTML = `${days} Days, ${hours} Hours, ${minutes} Mins, ${seconds} Secs of choosing you ❤️`;
    }
}, 1000);

// === FALLING PETALS ===
function createFallingPetals() {
    const container = document.getElementById('petals-container');
    setInterval(() => {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.width = Math.random() * 10 + 10 + 'px';
        petal.style.height = Math.random() * 10 + 15 + 'px';
        petal.style.animationDuration = Math.random() * 4 + 4 + 's';
        if(container) container.appendChild(petal);
        setTimeout(() => { petal.remove(); }, 8000);
    }, 200);
}

// === TYPEWRITER EFFECT ===
const letterContent = `Hi Ela,

Para sa taong gusto kong piliin araw-araw,

3months na pala mula nung sinimulan kitang ligawan HAHAHAHA Ang bilis nmn ng panahon noh pero sa 3 months na yun mas nakilala kita at mas lalong nagustuhan at sana wag mo na po ako pag dudhan HAHAHAHA baka na ccringe ka sa ginawa kong toh 3 months plng may pagan toh na HAHAHAHA wla po gusto ko lng po celebrate or gawan ka ng ganito, gusto ko lang din po mag sorry ngayon po (time: 5:36pm) totoo po na namali lng po ako ng pakinig sa inuman ng name sorry po kung nawala po kita sa mood ngyun and sana po maging ok na po tayo sorry po ulit. so ayun na nga po hindi ko man maipapangako na magiging perfect ako, pero maipapangako ko na magiging sincere ako sayo, gusto kong ipakita sayo na hindi lang sa salita, kundi sa actions ko na seryoso ako sayo.

Alam ko naman po na may mga bagay na kailangan ng panahon kaya hindi kita pipilitin na madaliin at hihintayin ko yung araw na magiging ready ka, habang patuloy kitang kikilalanin, aalagaan, at susuportahan sa lahat ng bagay. Salamat kasi sa 3 months na yun hinayaan mo akong maging parte ng buhay mo hindi to pamamaalam ha HAHAHAHA, Salamat sa mga conversations, tawanan, away bati at kahit sa mga simpleng moments na parang ordinary lang para sayo or sa iba, pero special sakin yun kasi kasama kita ehe HAHAHAHAHA.

And if you ever wonder ay wah english HAHAHAHA na kung hanggang kailan kita liligawan, simple lang ang sagot ko jan hanggat pinapayagan mo ako at hindi moko pinapatigil manligaw hindi ako titigil na ligawan ka.

Three months pa lang, pero sana hindi dito nagtatapos ang story natin sana dumating yung araw na masasabi kong, “Sa wakas, naging tayo rin.”

Happy 3rd months ulit ng panliligaw ko HAHAHHA
Still choosing you always.

Nagmamahal:
your always manliligaw (rc cola)`;
let charIndex = 0;
function typeWriter() {
    if (charIndex < letterContent.length) {
        let char = letterContent.charAt(charIndex);
        document.getElementById("typewriterText").innerHTML += (char === '\n') ? "<br>" : char;
        charIndex++;
        window.scrollTo(0, document.body.scrollHeight);
        setTimeout(typeWriter, 45);
    }
}

// Function para sa pagpapakita ng Secret Message at Pag-play ng Music
document.getElementById('surpriseBtn').addEventListener('click', function() {
    const message = document.getElementById('secretMessage');
    const button = document.getElementById('surpriseBtn');
    const music = document.getElementById('bgMusic'); 
    
    // I-play ang kanta (Kung minsan ay binablock ng browser, pero dahil may user click, gagana ito)
    if (music) music.play();

    // Ipakita ang message
    message.classList.remove('hidden');
    message.classList.add('show');
    
    // Itago ang button pagkatapos pindutin
    button.style.display = 'none';

    // === DITO IPINASOK ANG TYPEWRITER AT PETALS PARA GUMANA PAGKA-CLICK ===
    createFallingPetals();
    typeWriter();

    // Gumawa ng mas maraming hearts (Heart Explosion effect)
    for(let i = 0; i < 30; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.classList.add('floating-heart');
            heart.innerHTML = '💖';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = Math.random() * 2 + 2 + 's'; 
            heart.style.fontSize = '30px';
            document.getElementById('hearts-container').appendChild(heart);
            
            setTimeout(() => { heart.remove(); }, 4000);
        }, i * 100);
    }
});

// Simulan ang floating hearts pag-load ng page
window.onload = createFloatingHearts;