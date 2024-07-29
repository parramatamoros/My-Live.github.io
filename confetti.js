document.addEventListener("DOMContentLoaded", function() {
    const card = document.getElementById('birthdayCard');
    card.addEventListener('mouseover', createConfetti);

    function createConfetti() {
      const confettiContainer = document.getElementById('confetti-container');
      for (let i = 0; i < 100; i++) {
        let confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = Math.random() * 2 + 3 + 's';
        confetti.style.backgroundColor = getRandomColor();
        confettiContainer.appendChild(confetti);
      }

      setTimeout(() => {
        confettiContainer.innerHTML = '';
      }, 5000);
    }

    function getRandomColor() {
      const colors = ['#FF7F50', '#FF4500', '#FF69B4', '#FFD700', '#ADFF2F', '#32CD32', '#1E90FF', '#DA70D6'];
      return colors[Math.floor(Math.random() * colors.length)];
    }
  });