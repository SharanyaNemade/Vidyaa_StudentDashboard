const courses = [
    { id: 1, title: 'Maths Ultimate Course', professor: 'Snehal Joshi', image: '/Codeissance Landing page/Professor/maths.png' },
    { id: 2, title: 'Biology Chapter 1', professor: 'Nathan Silva', image: '/Codeissance Landing page/Professor/bio.png' },
    { id: 3, title: 'Physics Course', professor: 'Betty Hansen', image: '/Codeissance Landing page/Professor/MATHSPART2.png' },
    { id: 4, title: 'Chemistry Ultimate Course', professor: 'Emily Thomas', image: '/Codeissance Landing page/Professor/Chem.png' },
];

function createCourseCard(course) {
    const card = document.createElement('div');
    card.className = 'course-card';
    card.innerHTML = `
        <img src="${course.image}" alt="${course.title}">
        <div class="course-info">
            <h2>${course.title}</h2>
            <p>Professor: ${course.professor}</p>
        </div>
    `;
    return card;
}

function displayCourses() {
    const coursesGrid = document.getElementById('coursesGrid');
    courses.forEach(course => {
        const card = createCourseCard(course);
        coursesGrid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', displayCourses);