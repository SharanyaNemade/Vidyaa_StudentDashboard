document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove 'active' class from all content sections
        document.querySelectorAll('.content').forEach(content => content.classList.remove('active'));
        
        // Remove 'active' class from all nav links
        document.querySelectorAll('.nav-link').forEach(nav => nav.classList.remove('active'));

        // Add 'active' class to the clicked nav link and corresponding content
        const subject = this.getAttribute('data-subject');
        document.getElementById(subject).classList.add('active');
        this.classList.add('active');
    });
});