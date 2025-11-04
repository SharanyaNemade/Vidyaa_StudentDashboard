document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('file-form');
  const fileList = document.getElementById('file-list');
  const modal = document.getElementById('file-modal');
  const modalFileName = document.getElementById('modal-file-name');
  const modalFileContent = document.getElementById('modal-file-content');
  const closeModal = document.querySelector('.close');

  // Load saved files from localStorage
  loadSavedFiles();

  form.addEventListener('submit', (e) => {
      e.preventDefault();

      const fileName = document.getElementById('file-name').value;
      const fileExtension = document.getElementById('file-extension').value;
      const fileContent = document.getElementById('file-content').value;

      if (fileName && fileContent) {
          saveFile(fileName, fileExtension, fileContent);
          form.reset();
          loadSavedFiles();
      }
  });

  closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
      if (e.target === modal) {
          modal.style.display = 'none';
      }
  });

  function saveFile(name, extension, content) {
      const files = JSON.parse(localStorage.getItem('files')) || [];
      files.push({ name, extension, content });
      localStorage.setItem('files', JSON.stringify(files));
  }

  function loadSavedFiles() {
      const files = JSON.parse(localStorage.getItem('files')) || [];
      fileList.innerHTML = '';

      files.forEach((file, index) => {
          const li = document.createElement('li');
          li.innerHTML = `
              <span class="file-name" data-index="${index}">${file.name}.${file.extension}</span>
              <button class="delete-btn" data-index="${index}">Delete</button>
          `;
          fileList.appendChild(li);
      });

      // Add event listeners to file names and delete buttons
      document.querySelectorAll('.file-name').forEach(fileName => {
          fileName.addEventListener('click', viewFile);
      });

      document.querySelectorAll('.delete-btn').forEach(btn => {
          btn.addEventListener('click', deleteFile);
      });
  }

  function viewFile(e) {
      const index = e.target.getAttribute('data-index');
      const files = JSON.parse(localStorage.getItem('files')) || [];
      const file = files[index];

      modalFileName.textContent = `${file.name}.${file.extension}`;
      modalFileContent.textContent = file.content;
      modal.style.display = 'block';
  }

  function deleteFile(e) {
      const index = e.target.getAttribute('data-index');
      const files = JSON.parse(localStorage.getItem('files')) || [];
      files.splice(index, 1);
      localStorage.setItem('files', JSON.stringify(files));
      loadSavedFiles();
  }
});