// JavaScript for handling the modal behavior
document.addEventListener('DOMContentLoaded', () => {
    const modalTriggers = document.querySelectorAll('.cta-btn');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close');
  
    // Open the modal
    modalTriggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const projectId = trigger.getAttribute('data-project');
        const modal = document.getElementById(`modal-${projectId}`);
        modal.style.display = 'block';
      });
    });
  
    // Close the modal
    closeButtons.forEach(button => {
      button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        modal.style.display = 'none';
      });
    });
  
    // Close the modal if the user clicks outside the modal content
    window.addEventListener('click', (event) => {
      modals.forEach(modal => {
        if (event.target === modal) {
          modal.style.display = 'none';
        }
      });
    });
  });
  