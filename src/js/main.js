window.onload = () => {
    renderHero();
    renderAbout();
    renderProjects();
    renderResearch();
    renderSkills();
    renderContact();
    setupAnimations();

    if (document.getElementById('year')) {
        document.getElementById('year').textContent = new Date().getFullYear();
    }
};

function renderHero() {
    const data = {
        name: "Pedro Pinheiro",
        role: "Computer Engineering Student | AI & Machine Learning",
        description: "Building intelligent systems, exploring AI research and turning engineering problems into practical solutions."
    };
    if (!document.getElementById('hero-name')) return;
    document.getElementById('hero-name').textContent = data.name;
    document.getElementById('hero-role').textContent = data.role;
    document.getElementById('hero-desc').textContent = data.description;
}

function renderAbout() {
    const text = "I am a Computer Engineering student at UPE — Escola Politécnica de Pernambuco, currently in my first year. My focus is on the intersection of Artificial Intelligence, Machine Learning, Computer Vision, and Robotics. I am building a strong technical foundation through university, independent projects, and academic research, with a long-term goal of contributing to advanced technology and international research environments.";
    if (!document.getElementById('about-text')) return;
    document.getElementById('about-text').textContent = text;
}

function renderProjects() {
    const projects = [
        {
            title: "Brain Tumor Classification from Scratch",
            description: "A machine learning model implemented from scratch using NumPy to classify brain tumors. Features include feature preprocessing, Sigmoid activation, Gradient Descent, and L2 regularization.",
            tech: ["Python", "NumPy", "Machine Learning"],
            status: "Completed",
            link: "https://github.com/pedrohrapinheiro",
        },
        {
            title: "Taekwondo Kick Analyzer",
            description: "A computer vision application that analyzes kicking techniques using pose estimation. Built with OpenCV and MediaPipe for real-time human posture tracking.",
            tech: ["Python", "OpenCV", "MediaPipe", "NumPy"],
            status: "in-progress",
            link: "https://github.com/pedrohrapinheiro",
        },
        {
            title: "PVAX — Pulseira Vibratória Auxiliadora de Experiência",
            description: "An assistive technology wearable developed with ESP32 that provides directional vibration feedback to assist users with visual impairments.",
            tech: ["C++", "ESP32", "Electronics", "Accessibility"],
            status: "Completed",
            link: "https://github.com/pedrohrapinheiro",
        },
        {
            title: "JavaScript Chess",
            description: "An interactive chess game implementing core game logic and an intuitive user interface using vanilla JavaScript.",
            tech: ["JavaScript", "HTML", "CSS"],
            status: "Completed",
            link: "https://github.com/pedrohrapinheiro",
        }
    ];
    const container = document.getElementById('projects-container');
    if (!container) return;
    container.innerHTML = projects.map(project => `
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
    const research = {
        title: "Academic Research",
        focus: "DSS: XAI / RAI — Evidence-based Planning, Monitoring and Assessment",
        description: "Currently involved in undergraduate research focused on Explainable AI (XAI), Responsible AI (RAI), and optimization, aiming to create transparent and ethical AI systems through rigorous data analysis.",
        goals: [
            "International research opportunities",
            "Exchange programs in China",
            "Graduate studies abroad",
            "Contribution to advanced AI technology"
        ]
    };
    const container = document.getElementById('research-content');
    if (!container) return;

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
    const skills = {
        programming: ["Python", "JavaScript", "TypeScript", "C"],
        aiData: ["Machine Learning fundamentals", "NumPy", "Pandas"],
        computerVision: ["OpenCV", "MediaPipe"],
        web: ["HTML", "CSS", "JavaScript", "TypeScript"]
    };
    const container = document.getElementById('skills-container');
    if (!container) return;

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
    const links = {
      github: "https://github.com/pedrohrapinheiro",
      linkedin: "https://www.linkedin.com/in/pedro-pinheiro-0b76b73b4/",
      instagram: "https://www.instagram.com/pedropinheiro.dev/",
      email: "your-email@example.com"
    };
    const container = document.getElementById('contact-links');
    if (!container) return;

    container.innerHTML = `
        <a href="mailto:${links.email}" class="btn btn-ghost">Email</a>
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
