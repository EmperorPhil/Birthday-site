// Animate text word by word
function animateText(elementId, text, delay = 100) {
  const element = document.getElementById(elementId);
  const words = text.split(" ");
  let i = 0;

  function addWord() {
    if (i < words.length) {
      element.innerHTML += words[i] + " ";
      i++;
      setTimeout(addWord, delay);
    }
  }

  addWord();
}

// Call animations for heading and subtitle
animateText("main-heading", "Happy Birthday, Mea Luna❤️", 150);
setTimeout(() => {
  animateText("subtitle", "You make my day every single day.", 100);
}, 2500);

// Love letter paragraphs
const letterContent = [
  "Jealous Muffin,",
  "Your smile, your I don’t even know where to start because there’s so much I feel, but I’ll try. You’ve been such a blessing in my life in ways I don’t always say out loud. It’s not just about how beautiful you are or how your smile can light up a room — though it really can. It’s about your heart. The way you care, the way you show up for people, the way you make the simplest moments feel special., your warmth, and your beautiful soul make my world a better place. Every day I’m thankful to have you by my side. This year, I wanted to remind you how much you mean to me. I hope this little surprise brings a smile to your face and reminds you of how cherished you are.",
  "May today and every day be filled with joy, peace, love, and endless memories. Here's to many more birthdays, adventures, and I remember those nights I couldn’t sleep, and you’d sing for me. You have no idea how much that meant to me. It wasn’t just your voice, it was your presence, your calm — you made everything feel okay, even when my head was a mess.",
  "I’m proud of the pI think about the times we danced together, how we laughed like kids, like nothing else mattered. Or when I fed you, and it felt like the most natural, effortless thing — like it was always meant to be us, in those little moments. You’ve made my world softer, better, and a lot brighter just by being in it. And I don’t take that for granted. You’re someone I cherish deeply, Luna.",
  "I hope this new year of your life brings you peace, happiness, and moments so beautiful they leave you speechless. You deserve every good thing this life has to offer.Thank you for existing. Thank you for being you. And thank you for being here for me — in ways you might not even realize.",
  "Ayomi❤️"
];

// Function to animate each paragraph
function animateParagraphs(paragraphs, delayBetween = 4000) {
  const container = document.getElementById("letter");
  let pIndex = 0;

  function addParagraph() {
    if (pIndex < paragraphs.length) {
      const p = document.createElement("p");
      p.classList.add("letter-paragraph");
      container.appendChild(p);
      animateText(p.id = "para" + pIndex, paragraphs[pIndex], 80);
      pIndex++;
      setTimeout(addParagraph, delayBetween);
    }
  }

  addParagraph();
}

// Start animating paragraphs after subtitle is done
setTimeout(() => {
  animateParagraphs(letterContent);
}, 5000);
