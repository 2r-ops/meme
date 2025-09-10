// List of memes from your meme folder
const memes = [
  "meme/meme1.jpg",
  "meme/meme2.png",
  "meme/meme3.gif",
  "meme/meme4.jpg"
];

function loadMeme() {
  const randomIndex = Math.floor(Math.random() * memes.length);
  document.getElementById("meme").src = memes[randomIndex];
}

// Load one meme when page opens
window.onload = loadMeme;
