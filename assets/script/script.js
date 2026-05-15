// Typewriter effect for role text
const roles = [
    'Frontend Developer',
    'CS Student',
    'Mandarin Learner',
    'Road to Tsinghua',
];
 
const roleEl = document.getElementById('roleText');
 
if (roleEl) {
    let roleIndex = 0;
    let charIndex  = 0;
    let deleting   = false;
 
    function typeWriter() {
        const current = roles[roleIndex];
 
        if (!deleting) {
            roleEl.textContent = current.slice(0, charIndex + 1);
            charIndex++;
            if (charIndex === current.length) {
                deleting = true;
                setTimeout(typeWriter, 1800);
                return;
            }
        } else {
            roleEl.textContent = current.slice(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                deleting   = false;
                roleIndex  = (roleIndex + 1) % roles.length;
            }
        }
 
        setTimeout(typeWriter, deleting ? 60 : 100);
    }
 
    typeWriter();
}
 