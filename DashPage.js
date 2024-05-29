const text = "QUALITY CORRUGATED BOX MFG. CORP.";
let index = 0;
const speed = 100; // Adjust typing speed here

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

// Call the function to start typing
typeWriter();