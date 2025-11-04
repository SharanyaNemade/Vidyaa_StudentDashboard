function showCourses(standard) {
    const coursesDiv = document.getElementById("teacherCourses");
    const courseInfo = `Displaying courses for ${standard} Standard.`;
    
    coursesDiv.textContent = courseInfo;
    coursesDiv.style.animation = "fadeInUp 0.5s ease-in-out";
}

const educationData = {
    '9': {
        subjects: ['Math', 'Science', 'English', 'Social Studies'],
        teachersAndCourses: {
            'Math': [
                {
                    name: 'Ms. Jane Smith',
                    courses: [
                        { title: '9th Grade Algebra Fundamentals', rating: 4.7, reviews: 15023, price: 1999, bestSeller: true },
                        { title: '9th Grade Geometry Basics', rating: 4.5, reviews: 12045, price: 1899 },
                    ]
                }
            ],
            'Science': [
                {
                    name: 'Mr. John Doe',
                    courses: [
                        { title: '9th Grade Biology Introduction', rating: 4.6, reviews: 13678, price: 1949 },
                        { title: '9th Grade Physical Science', rating: 4.4, reviews: 11234, price: 1899 },
                    ]
                }
            ],
            // Add more subjects and teachers for 9th standard
        }
    },
    '10': {
        subjects: ['Math', 'Science', 'English', 'Social Studies'],
        teachersAndCourses: {
            'Math': [
                {
                    name: 'Dr. Alan Turing',
                    courses: [
                        { title: '10th Grade Advanced Algebra', rating: 4.8, reviews: 18934, price: 2199, bestSeller: true },
                        { title: '10th Grade Trigonometry', rating: 4.6, reviews: 15678, price: 2099 },
                    ]
                }
            ],
            'Science': [
                {
                    name: 'Dr. Marie Curie',
                    courses: [
                        { title: '10th Grade Chemistry Foundations', rating: 4.7, reviews: 17890, price: 2149 },
                        { title: '10th Grade Physics Basics', rating: 4.5, reviews: 14567, price: 2099 },
                    ]
                }
            ],
            // Add more subjects and teachers for 10th standard
        }
    },
    '11': {
        subjects: ['Math', 'Physics', 'Chemistry', 'Biology', 'Computer Science', 'Economics'],
        teachersAndCourses: {
            'Math': [
                {
                    name: 'Prof. Pythagoras',
                    courses: [
                        { title: '11th Grade Calculus', rating: 4.9, reviews: 21345, price: 2499, bestSeller: true },
                        { title: '11th Grade Statistics', rating: 4.7, reviews: 18790, price: 2399 },
                    ]
                }
            ],
            'Physics': [
                {
                    name: 'Dr. Isaac Newton',
                    courses: [
                        { title: '11th Grade Mechanics', rating: 4.8, reviews: 19876, price: 2449 },
                        { title: '11th Grade Electromagnetism', rating: 4.6, reviews: 17654, price: 2399 },
                    ]
                }
            ],
            'Chemistry': [
                {
                    name: 'Prof. Dmitri Mendeleev',
                    courses: [
                        { title: '11th Grade Organic Chemistry', rating: 4.7, reviews: 18543, price: 2449 },
                        { title: '11th Grade Inorganic Chemistry', rating: 4.5, reviews: 16789, price: 2399 },
                    ]
                }
            ],
            // Add more subjects and teachers for 11th standard
        }
    },
    '12': {
        subjects: ['Math', 'Physics', 'Chemistry', 'Biology', 'Computer Science', 'Economics'],
        teachersAndCourses: {
            'Math': [
                {
                    name: 'Dr. Srinivasa Ramanujan',
                    courses: [
                        { title: '12th Grade Advanced Calculus', rating: 4.9, reviews: 23456, price: 2699, bestSeller: true },
                        { title: '12th Grade Linear Algebra', rating: 4.8, reviews: 21098, price: 2599 },
                    ]
                }
            ],
            'Physics': [
                {
                    name: 'Prof. Albert Einstein',
                    courses: [
                        { title: '12th Grade Quantum Mechanics', rating: 4.8, reviews: 22345, price: 2649 },
                        { title: '12th Grade Thermodynamics', rating: 4.7, reviews: 20123, price: 2599 },
                    ]
                }
            ],
            'Computer Science': [
                {
                    name: 'Ms. Ada Lovelace',
                    courses: [
                        { title: '12th Grade Data Structures', rating: 4.8, reviews: 21567, price: 2649 },
                        { title: '12th Grade Algorithms', rating: 4.7, reviews: 19876, price: 2599 },
                    ]
                }
            ],
            // Add more subjects and teachers for 12th standard
        }
    }
};

let currentStandard = '';
let currentSubject = '';

function createSubjectButtons() {
    const container = document.getElementById('subjectButtons');
    container.innerHTML = ''; // Clear existing buttons
    if (!currentStandard) return;

    educationData[currentStandard].subjects.forEach((subject, index) => {
        const button = document.createElement('button');
        button.className = 'subject-button' + (index === 0 ? ' active' : '');
        button.textContent = subject;
        button.onclick = () => setActiveSubject(subject);
        container.appendChild(button);
    });
}

function displayTeachersAndCourses() {
    const container = document.getElementById('teacherCourses');
    container.innerHTML = '';
    if (!currentStandard || !currentSubject) return;

    const teachers = educationData[currentStandard].teachersAndCourses[currentSubject] || [];
    teachers.forEach(teacher => {
        const teacherSection = document.createElement('div');
        teacherSection.className = 'teacher-section';

        const teacherName = document.createElement('div');
        teacherName.className = 'teacher-name';
        teacherName.textContent = teacher.name;
        teacherSection.appendChild(teacherName);

        const courseList = document.createElement('div');
        courseList.className = 'course-list';

        teacher.courses.forEach(course => {
            const courseCard = document.createElement('div');
            courseCard.className = 'course-card';
            courseCard.innerHTML = `
                <div class="course-title">${course.title}${course.bestSeller ? '<span class="bestseller">Bestseller</span>' : ''}</div>
                <div>Rating: ${course.rating} (${course.reviews.toLocaleString()} reviews)</div>
                <div>₹${course.price}</div>
            `;
            courseList.appendChild(courseCard);
        });

        teacherSection.appendChild(courseList);
        container.appendChild(teacherSection);
    });
}

function setActiveSubject(subject) {
    currentSubject = subject;
    const buttons = document.querySelectorAll('.subject-button');
    buttons.forEach((button) => {
        button.classList.toggle('active', button.textContent === subject);
    });
    displayTeachersAndCourses();
}

function updateContent() {
    currentStandard = document.getElementById('standardSelect').value;
    createSubjectButtons();
    if (currentStandard && educationData[currentStandard].subjects.length > 0) {
        setActiveSubject(educationData[currentStandard].subjects[0]);
    } else {
        document.getElementById('teacherCourses').innerHTML = '';
    }
}

updateContent(); // Initialize the content