const scholarshipTypes = [
    {
        title: "Merit Based Scholarship",
        description: "Recognizing academic excellence and outstanding achievements of students across various fields of study.",
        link: "/Codeissance Landing Page/Scolarship/Merit.html"
    },
    {
        title: "Need Based Scholarship",
        description: "Providing financial assistance to students who demonstrate significant financial need to pursue their education.",
        link: "/Codeissance Landing Page/Scolarship/Need.html"
    },
    {
        title: "International Scholarships",
        description: "Supporting international students to study abroad and promote cultural exchange and global understanding.",
        link: "/Codeissance Landing Page/Application/Application.html"
    },
    {
        title: "Minority Scholarship",
        description: "Empowering underrepresented groups by providing educational opportunities and promoting diversity in higher education.",
        link: "/Codeissance Landing Page/Application/Application.html"
    },
    {
        title: "Research Scholarship",
        description: "Encouraging innovative research projects and supporting students pursuing advanced studies in various disciplines.",
        link: "/Codeissance Landing Page/Application/Application.html"
    },
    {
        title: "All Scholarships",
        description: "Explore a comprehensive list of all available scholarships to find the perfect opportunity for your academic journey.",
        link: "/Codeissance Landing Page/Application/Application.html"
    }
];

function createScholarshipCard(scholarship) {
    return `
        <div class="card">
            <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            </div>
            <div class="featured_info">
                <span>${scholarship.title}</span>
                <p>${scholarship.description}</p>
            </div>
            <a href="${scholarship.link}" class="btn">View Scholarships</a>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('scholarship-grid');
    scholarshipTypes.forEach(scholarship => {
        container.innerHTML += createScholarshipCard(scholarship);
    });
});