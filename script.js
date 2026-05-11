document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  console.log('App loaded successfully!');
  
  // Add some interactivity
  app.addEventListener('click', () => {
    app.style.transform = 'scale(1.05)';
    setTimeout(() => {
      app.style.transform = 'scale(1)';
    }, 200);
  });
});