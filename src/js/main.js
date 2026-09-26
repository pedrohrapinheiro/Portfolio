document.addEventListener('DOMContentLoaded', () => {
    // Check if PORTFOLIO_DATA is available
    if (typeof PORTFOLIO_DATA === 'undefined') {
        console.error("Error: PORTFOLIO_DATA not loaded. Check the order of script tags in index.html");
        return;
    }

    renderHero();
    renderAbout();
    renderProjects();
    renderResearch();
    renderSkills();
    renderContact();
    setupAnimations();

    document.getElementById('year').textContent = new Date().getFullYear();
});

function renderHero() {
    document.getElementById('hero-name').textContent = PORTFOLIO_DATA.profile.name;
    document.getElementById('hero-role').textContent = PORTFOLIO_DATA.profile.role;
    document.getElementById('hero-desc').textContent = PORTFOLIO_DATA.profile.description;
}

function renderAbout() {
    document.getElementById('about-text').textContent = PORTFOLIO_DATA.profile.about;
}

function renderProjects() {
    const container = document.getElementById('projects-container');
    container.innerHTML = PORTFOLIO_DATA.projects.map(project => `
        <div class="glass-card project-card fade-in">
            <h3 style="color: var(--accent-cyan); margin-bottom: 0.5rem;">${project.title}</h3>
            <p style="color: var(--text-dim); flex-grow: 1; margin-bottom: 1.5rem;">${project.description}</p>
            <div class="project-tech">
                ${project.tech.map(t => `<span class="badge">${t}</span>`).join('')}
            </div>
            <div style="margin-top: 1.5rem; display: flex; justify-content: space-between; align-items: center;">
                <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-dim);">Status: ${project.status}</span>
                <a href="${project.link}" target="_blank" class="btn btn-ghost" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;">View on GitHub</a>
            </div>
        </div>
    `).join('');
}

function renderResearch() {
    const container = document.getElementById('research-content');
    const research = PORTFOLIO_DATA.research;

    container.innerHTML = `
        <h3 style="color: var(--accent-cyan); margin-bottom: 1rem; font-size: 1.5rem;">${research.title}</h3>
        <p style="margin-bottom: 1.5rem; font-weight: 600;">Focus: ${research.focus}</p>
        <p style="color: var(--text-dim); margin-bottom: 2rem;">${research.description}</p>
        <div style="border-top: 1px solid var(--glass-border); padding-top: 1.5rem;">
            <h4 style="font-family: var(--font-mono); font-size: 0.9rem; margin-bottom: 1rem; color: var(--text-main);">Long-term Goals:</h4>
            <ul style="list-style: none; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.5rem;">
                ${research.goals.map(goal => `<li style="color: var(--text-dim); font-size: 0.9rem; display: flex; align-items: center; gap: 0.5rem;">
                    <span style="color: var(--accent-cyan);">▹</span> ${goal}
                </li>`).join('')}
            </ul>
        </div>
    `;
}

function renderSkills() {
    const container = document.getElementById('skills-container');
    const skills = PORTFOLIO_DATA.skills;

    const categories = [
        { label: 'Programming', data: skills.programming },
        { label: 'AI & Data', data: skills.aiData },
        { label: 'Computer Vision', data: skills.computerVision },
        { label: 'Web', data: skills.web }
    ];

    container.innerHTML = categories.map(cat => `
        <div class="glass-card skill-category fade-in">
            <h3>${cat.label}</h3>
            <div class="skill-list">
                ${cat.data.map(skill => `<span class="badge">${skill}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

function renderContact() {
    const container = document.getElementById('contact-links');
    const links = PORTFOLIO_DATA.profile.links;

    container.innerHTML = `
        <a href="mailto:${PORTFOLIO_DATA.profile.email}" class="btn btn-ghost">Email</a>
        <a href="${links.github}" target="_blank" class="btn btn-ghost">GitHub</a>
        <a href="${links.linkedin}" target="_blank" class="btn btn-ghost">LinkedIn</a>
        <a href="${links.instagram}" target="_blank" class="btn btn-ghost">Instagram</a>
    `;
}

function setupAnimations() {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}
