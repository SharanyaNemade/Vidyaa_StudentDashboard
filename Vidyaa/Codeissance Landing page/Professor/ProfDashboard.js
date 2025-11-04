document.addEventListener('DOMContentLoaded', () => {
    const runningCourses = [
        { id: 1, title: 'UX Design', image: '/placeholder.svg?height=80&width=80', progress: 75 },
        { id: 2, title: 'Illustration', image: '/placeholder.svg?height=80&width=80', progress: 50 },
        { id: 3, title: '3D Modelling', image: '/placeholder.svg?height=80&width=80', progress: 25 },
        { id: 4, title: 'Complete Python Bootcamp', image: '/placeholder.svg?height=80&width=80', progress: 90 },
    ];

    const favoriteCourses = [
        { id: 1, title: 'The Flat Style Illustration Course', image: '/placeholder.svg?height=60&width=60', rating: 4.8 },
        { id: 2, title: 'Drawing Characters with Photoshop', image: '/placeholder.svg?height=60&width=60', rating: 4.5 },
    ];

    function displayRunningCourses() {
        const container = document.getElementById('runningCourses');
        runningCourses.forEach(course => {
            const courseElement = document.createElement('div');
            courseElement.className = 'running-course';
            courseElement.innerHTML = `
                <img src="${course.image}" alt="${course.title}">
                <div>
                    <h3>${course.title}</h3>
                    <div class="progress-bar">
                        <div class="progress" style="width: ${course.progress}%"></div>
                    </div>
                </div>
            `;
            container.appendChild(courseElement);
        });
    }

    function displayFavoriteCourses() {
        const container = document.getElementById('favoriteCourses');
        favoriteCourses.forEach(course => {
            const courseElement = document.createElement('div');
            courseElement.className = 'favorite-course';
            courseElement.innerHTML = `
                <img src="${course.image}" alt="${course.title}">
                <div>
                    <h3>${course.title}</h3>
                    <p>Rating: ${course.rating}</p>
                </div>
            `;
            container.appendChild(courseElement);
        });
    }

    function createActivityChart() {
        const ctx = document.getElementById('activityChart').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Learn Time',
                    data: [12, 19, 3, 5, 2, 3],
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }, {
                    label: 'Practice Time',
                    data: [1, 2, 5, 3, 2, 1],
                    borderColor: 'rgb(255, 99, 132)',
                    tension: 0.1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    displayRunningCourses();
    displayFavoriteCourses();
    createActivityChart();
});