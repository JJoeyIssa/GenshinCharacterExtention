// Get all buttons
const buttons = document.querySelectorAll('.button');

// Add click event listener to each button
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const characterName = button.id;
    const url = `https://genshin-impact.fandom.com/wiki/${characterName}`;
    window.open(url, '_blank');
  });
});
