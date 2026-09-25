const PORTFOLIO_DATA = {
  profile: {
    name: "Pedro Pinheiro",
    role: "Computer Engineering Student | AI & Machine Learning",
    description: "Building intelligent systems, exploring AI research and turning engineering problems into practical solutions.",
    about: "I am a Computer Engineering student at UPE — Escola Politécnica de Pernambuco, currently in my first year. My focus is on the intersection of Artificial Intelligence, Machine Learning, Computer Vision, and Robotics. I am building a strong technical foundation through university, independent projects, and academic research, with a long-term goal of contributing to advanced technology and international research environments.",
    email: "your-email@example.com", // Replace with actual email
    links: {
      github: "https://github.com/pedrohrapinheiro",
      linkedin: "https://linkedin.com/in/your-profile", // Replace with actual
      instagram: "https://instagram.com/your-profile", // Replace with actual
    }
  },
  research: {
    title: "Academic Research",
    focus: "DSS: XAI / RAI — Evidence-based Planning, Monitoring and Assessment",
    description: "Currently involved in undergraduate research focused on Explainable AI (XAI), Responsible AI (RAI), and optimization, aiming to create transparent and ethical AI systems through rigorous data analysis.",
    goals: [
      "International research opportunities",
      "Exchange programs in China and Canada",
      "Graduate studies abroad",
      "Contribution to advanced AI technology"
    ]
  },
  projects: [
    {
      title: "Brain Tumor Classification from Scratch",
      description: "A machine learning model implemented from scratch using NumPy to classify brain tumors. Features include feature preprocessing, Sigmoid activation, Gradient Descent, and L2 regularization.",
      tech: ["Python", "NumPy", "Machine Learning"],
      status: "Completed",
      link: "https://github.com/pedrohrapinheiro", // Replace with specific link
    },
    {
      title: "Taekwondo Kick Analyzer",
      description: "A computer vision application that analyzes kicking techniques using pose estimation. Built with OpenCV and MediaPipe for real-time human posture tracking.",
      tech: ["Python", "OpenCV", "MediaPipe", "NumPy"],
      status: "Completed",
      link: "https://github.com/pedrohrapinheiro", // Replace with specific link
    },
    {
      title: "PVAX — Pulseira Vibratória Auxiliadora de Experiência",
      description: "An assistive technology wearable developed with ESP32 that provides directional vibration feedback to assist users with visual impairments.",
      tech: ["C++", "ESP32", "Electronics", "Accessibility"],
      status: "Completed",
      link: "https://github.com/pedrohrapinheiro", // Replace with specific link
    },
    {
      title: "JavaScript Chess",
      description: "An interactive chess game implementing core game logic and an intuitive user interface using vanilla JavaScript.",
      tech: ["JavaScript", "HTML", "CSS"],
      status: "Completed",
      link: "https://github.com/pedrohrapinheiro", // Replace with specific link
    }
  ],
  skills: {
    programming: ["Python", "JavaScript", "TypeScript", "C"],
    aiData: ["Machine Learning fundamentals", "NumPy", "Pandas"],
    computerVision: ["OpenCV", "MediaPipe"],
    web: ["HTML", "CSS", "JavaScript", "TypeScript"]
  }
};

export default PORTFOLIO_DATA;
