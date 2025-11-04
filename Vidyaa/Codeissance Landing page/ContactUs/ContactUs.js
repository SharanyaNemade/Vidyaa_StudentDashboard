document.getElementById('techIssue').addEventListener('click', function() {
    document.getElementById('technicalForm').classList.remove('hidden');
    document.getElementById('learningForm').classList.add('hidden');
    document.getElementById('successMessage').classList.add('hidden');
});

document.getElementById('learnIssue').addEventListener('click', function() {
    document.getElementById('learningForm').classList.remove('hidden');
    document.getElementById('technicalForm').classList.add('hidden');
    document.getElementById('successMessage').classList.add('hidden');
});

document.getElementById('technicalForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('technicalForm').classList.add('hidden');
    document.getElementById('successMessage').innerHTML = '<h3>Your response has been submitted, our team will try to fix your issue as soon as possible.</h3>';
    document.getElementById('successMessage').classList.remove('hidden');
});

document.getElementById('learningForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('learningForm').classList.add('hidden');
    document.getElementById('successMessage').innerHTML = '<h3>Your response has been submitted and the professor will reach out to you as soon as possible.</h3>';
    document.getElementById('successMessage').classList.remove('hidden');
});