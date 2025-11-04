const mentors = [
    { id: 1, name: "Dr. Alex Rivera", expertise: ["Mathematics", "Statistics", "Regression"], bio: "With 15 years of experience in the tech industry...", avatarUrl: "https://via.placeholder.com/100" },
    { id: 2, name: "Prof. Alex Rivera", expertise: ["Physics", "Mathematics", "Research"], bio: "As a tenured professor with a focus on theoretical physics...", avatarUrl: "https://via.placeholder.com/100" },
    { id: 3, name: "Alex Rivera, MBA", expertise: ["Research", "Advanced Mathematics"], bio: "Having founded and sold two successful startups...", avatarUrl: "https://via.placeholder.com/100" },
    { id: 4, name: "Dr. Alex Rivera", expertise: ["Mathematics", "Calculus", "Environmental Science"], bio: "As a researcher in molecular biology...", avatarUrl: "https://via.placeholder.com/100" },
    { id: 5, name: "Prof. Alex Rivera", expertise: ["Maths 10+ years"], bio: "With a background in comparative literature...", avatarUrl: "https://via.placeholder.com/100" }
];

document.getElementById("match-btn").addEventListener("click", function() {
    const learningGoal = document.getElementById("learningGoal").value.trim().toLowerCase();

    if (learningGoal) {
        const matchedMentor = findMentor(learningGoal);
        showMentorCard(learningGoal, matchedMentor);
    }
});

document.getElementById("back-btn").addEventListener("click", function() {
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
    skillsContainer.innerHTML = '';
    mentor.expertise.forEach(skill => {
        const skillBadge = document.createElement("div");
        skillBadge.className = "badge";
        skillBadge.textContent = skill;
        skillsContainer.appendChild(skillBadge);
    });

    document.getElementById("input-card").style.display = "none";
    document.getElementById("mentor-card").style.display = "block";
}