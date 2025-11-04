document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('createCourseForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const courseData = Object.fromEntries(formData.entries());

        // Here you would typically send the data to your backend
        console.log('Course data:', courseData);

        // Simulate sending data to server
        setTimeout(() => {
            alert('Course created successfully!');
            window.location.href = 'ProfDashboard.html';
        }, 1000);
    });
});