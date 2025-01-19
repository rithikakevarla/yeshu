// Toggle Guidebook
function toggleGuidebook() {
    const guidebookContent = document.getElementById('guidebook-content');
    guidebookContent.style.display = 
      guidebookContent.style.display === 'block' ? 'none' : 'block';
  }
  
  // Open Birthday Video
  function openVideo() {
    window.open('https://your-video-link-here.com', '_blank');
  }
  
  // Confetti Setup
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
  