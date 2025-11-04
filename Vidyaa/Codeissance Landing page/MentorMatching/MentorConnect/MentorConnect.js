const mentors = [
    {
        id: 1,
        name: "Dr. Emily Chen",
        expertise: ["Computer Science", "Machine Learning", "Data Science"],
        bio: "With 15 years of experience in the tech industry, Dr. Emily Chen has worked at leading tech companies and research institutions, focusing on machine learning and artificial intelligence.",
        avatarUrl: "https://via.placeholder.com/100"
    },
    {
        id: 2,
        name: "Prof. Michael Johnson",
        expertise: ["Physics", "Mathematics", "Research"],
        bio: "As a tenured professor with a focus on theoretical physics, Prof. Michael Johnson has authored numerous papers and conducted research in quantum mechanics and mathematical modeling.",
        avatarUrl: "https://via.placeholder.com/100"
    },
    {
        id: 3,
        name: "Sarah Thompson, MBA",
        expertise: ["Business Administration", "Entrepreneurship"],
        bio: "Having founded and sold two successful startups, Sarah Thompson has hands-on experience in building businesses from the ground up, with a focus on scaling and business strategy.",
        avatarUrl: "https://via.placeholder.com/100"
    },
    {
        id: 4,
        name: "Dr. Alex Rivera",
        expertise: ["Biology", "Genetics", "Environmental Science"],
        bio: "As a researcher in molecular biology, Dr. Alex Rivera has contributed to numerous breakthroughs in genetics and environmental science, with a focus on sustainable development.",
        avatarUrl: "https://via.placeholder.com/100"
    },
    {
        id: 5,
        name: "Prof. Olivia Carter",
        expertise: ["Literature", "Creative Writing"],
        bio: "With a background in comparative literature, Prof. Olivia Carter teaches creative writing and has published several acclaimed novels and academic papers on literary criticism.",
        avatarUrl: "https://via.placeholder.com/100"
    }
];

document.getElementById("match-btn").addEventListener("click", function () {
    const learningGoal = document.getElementById("learningGoal").value.trim().toLowerCase();

    if (learningGoal) {
        const matchedMentor = findMentor(learningGoal);
        showMentorCard(learningGoal, matchedMentor);
    }
});

document.getElementById("back-btn").addEventListener("click", function () {
    document.getElementById("mentor-card").style.display = "none";
    document.getElementById("input-card").style.display = "block";
    document.getElementById("learningGoal").value = '';
});

function findMentor(goal) {
    return mentors.find(mentor => mentor.expertise.some(skill => goal.includes(skill.toLowerCase()))) || mentors[Math.floor(Math.random() * mentors.length)];
}

function showMentorCard(learningGoal, mentor) {
    document.getElementById("learningGoalDisplay").textContent = `Based on your learning goal: ${learningGoal}`;
    document.getElementById("mentor-name").textContent = mentor.name;
    document.getElementById("mentor-bio").textContent = mentor.bio;
    document.getElementById("mentor-avatar").src = mentor.avatarUrl;

    const skillsContainer = document.getElementById("mentor-skills");
    skillsContainer.innerHTML = ''; // Clear previous skills

    mentor.expertise.forEach(skill => {
        const skillBadge = document.createElement("div");
        skillBadge.className = "badge";
        skillBadge.textContent = skill;
        skillsContainer.appendChild(skillBadge);
    });

    // Switch view to the mentor card
    document.getElementById("input-card").style.display = "none";
    document.getElementById("mentor-card").style.display = "block";
}
