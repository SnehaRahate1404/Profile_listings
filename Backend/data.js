require("dotenv").config();
const mongoose = require("mongoose");
const Users = require("./schemas/Profile"); // Your mongoose model
const uri = process.env.MONGO_URL;

async function main() {
  await mongoose.connect(uri);
  console.log("Database connected");

  let allUsers = [
    {
      "name": "Aarav Sharma",
      "description": "A backend developer with experience in Node.js and MongoDB.",
      "about": "Aarav is a technology enthusiast who enjoys designing scalable and secure systems. He has a strong interest in building RESTful APIs and integrating backend services with frontend interfaces seamlessly.\n\nOutside of coding, he spends time contributing to open-source projects and mentoring juniors in his tech community.",
      "skills": ["Node.js", "Express.js", "MongoDB", "REST APIs"],
      "address": "Flat 302, DLF Phase 3, Sector 24, Gurugram, Haryana, 122002",
      "Contact": 9876543210
    },
    {
      "name": "Priya Verma",
      "description": "A frontend developer passionate about responsive UI design.",
      "about": "Priya combines technical precision with an artistic touch to craft elegant and intuitive user interfaces. She enjoys turning wireframes into functional layouts that enhance user experience.\n\nShe believes in continuous learning and regularly explores the latest in frontend libraries and design systems.",
      "skills": ["HTML", "CSS", "JavaScript", "React"],
      "address": "12/45, Andheri East, Mumbai, Maharashtra, 400069",
      "Contact": 9123456789
    },
    {
      "name": "Rohan Mehta",
      "description": "DevOps engineer skilled in CI/CD and cloud infrastructure.",
      "about": "Rohan is committed to automating software delivery pipelines and enhancing system reliability. He has experience managing deployments across multiple cloud environments.\n\nHe advocates for infrastructure as code and strives to bridge the gap between development and operations.",
      "skills": ["AWS", "Docker", "Kubernetes", "Jenkins"],
      "address": "21B, Koramangala 5th Block, Bengaluru, Karnataka, 560034",
      "Contact": 9988776655
    },
    {
      "name": "Sneha Iyer",
      "description": "Software engineer focused on scalable backend systems.",
      "about": "Sneha specializes in building high-performance server-side applications. Her approach emphasizes clean architecture, modular code, and database optimization.\n\nIn her free time, she loves reading tech blogs and participating in backend coding challenges.",
      "skills": ["Java", "Spring Boot", "MySQL", "Kafka"],
      "address": "Block 4, Hitech City, Madhapur, Hyderabad, Telangana, 500081",
      "Contact": 8899001122
    },
    {
      "name": "Aniket Deshmukh",
      "description": "Python developer experienced in data pipelines and APIs.",
      "about": "Aniket is an analytical thinker with a background in data engineering. He enjoys working with ETL processes and integrating third-party APIs for data enrichment.\n\nHe’s passionate about clean code and often contributes to Python open-source libraries.",
      "skills": ["Python", "Flask", "Pandas", "PostgreSQL"],
      "address": "Sector 17, Navi Mumbai, Maharashtra, 410210",
      "Contact": 9765432109
    },
    {
      "name": "Kavya Nair",
      "description": "Mobile app developer creating Android applications.",
      "about": "Kavya is an Android developer who focuses on building user-friendly mobile applications. She has a deep understanding of Android architecture components and integrates Firebase for real-time features.\n\nShe actively blogs about mobile development and attends tech meetups in Kochi.",
      "skills": ["Kotlin", "Android Studio", "Firebase", "Jetpack"],
      "address": "MG Road, Kochi, Kerala, 682016",
      "Contact": 9345612789
    },
    {
      "name": "Aditya Kapoor",
      "description": "Full-stack engineer working with MERN stack.",
      "about": "Aditya is a dynamic developer skilled in both frontend and backend technologies. He enjoys creating full-fledged web applications that solve real-world problems.\n\nHe mentors budding developers and regularly contributes to open-source MERN projects.",
      "skills": ["MongoDB", "Express", "React", "Node.js"],
      "address": "Sector 62, Noida, Uttar Pradesh, 201301",
      "Contact": 9786012345
    },
    {
      "name": "Meera Singh",
      "description": "UI/UX designer with a focus on user-centric design.",
      "about": "Meera brings ideas to life through engaging and intuitive interfaces. Her work bridges the gap between functionality and aesthetics, always focusing on the end user's needs.\n\nShe collaborates closely with developers and uses prototyping tools to refine user experiences.",
      "skills": ["Figma", "Adobe XD", "Sketch", "Design Systems"],
      "address": "Park Street, Kolkata, West Bengal, 700016",
      "Contact": 9811122233
    },
    {
      "name": "Harshad Joshi",
      "description": "Data analyst skilled in data visualization and reporting.",
      "about": "Harshad excels at turning raw data into actionable insights. He is proficient in creating dashboards that support strategic decisions for businesses.\n\nHe enjoys working with structured data and is learning machine learning models for predictive analytics.",
      "skills": ["Excel", "Power BI", "SQL", "Tableau"],
      "address": "Fergusson College Road, Pune, Maharashtra, 411004",
      "Contact": 9871209876
    },
    {
      "name": "Ritika Chawla",
      "description": "Machine learning engineer with a passion for AI.",
      "about": "Ritika works on innovative AI solutions, focusing on natural language processing and predictive modeling. She is driven by curiosity and enjoys experimenting with ML algorithms.\n\nShe regularly attends AI conferences and contributes to Kaggle competitions.",
      "skills": ["Python", "TensorFlow", "scikit-learn", "NLP"],
      "address": "Rajouri Garden, New Delhi, Delhi, 110027",
      "Contact": 9001234567
    }
  ];

  // Map users to add avatar filename (assumes images in frontend/public/)
  allUsers = allUsers.map(user => {
    const imageFileName = user.name.toLowerCase().replace(/ /g, "-") + ".jpg"; // e.g. aarav-sharma.jpg
    return {
      ...user,
      avatar: imageFileName
    };
  });

  await Users.insertMany(allUsers);
  console.log("All users inserted with image filenames.");
  process.exit();
}

main().catch(console.error);
