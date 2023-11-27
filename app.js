
const question = [
  {
    que: 	"The name of technology company HP stands for what?",
    a: "Howard Packmann",
    b: "Husker-Pollosk",
    c: "Hewlett-Packard",
    d: "Hellman-Pohl",
    correct: "c",
    
  },
  {
        que: 	"_______ is the smallest unit of data in a computer?",
        a: "Gigabyte",
        b: "Bit",
        c: "Byte ",
        d: "Terabyte",
        correct: "b",
        
      },
      {
        que: 	"What does &quot;LCD&quot; stand for?",
        a: "Language Control Design",
        b: "Last Common Difference",
        c: "Long Continuous Design",
        d: "Liquid Crystal Display",
        correct: "d",
        
      },
      {
        que: 	"Which of the following is a personal computer made by the Japanese company Fujitsu?",
        a: "FM-7",
        b: "PC-9801",
        c: "Xmillennium",
        d: "MSX",
        correct: "a",
        
      },
      {
        que: 	"Which coding language was the #1 programming language in terms of usage on GitHub in 2015?",
        a: "C#",
        b: "Python",
        c: "PHP ",
        d: "Javascript",
        correct: "d",
        
      },
      {
        que: 	"In the programming language &quot;Python&quot;, which of these statements would display the string &quot;Hello World&quot; correctly?",
        a: "print(&quot;Hello World&quot;)",
        b: "console.log(&quot;Hello World&quot;)",
        c: "echo &quot;Hello World&quot;",
        d: "printf(&quot;Hello World&quot;)",
        correct: "a",
        
      },
      {
        que: "Which of the following is NOT an anti-virus software ?",
        a: "Avast",
        b: "Linux",
        c: "Norton",
        d: "Kaspersky ",
        correct: "b",
      },
      {
        que: "In the context of digital computer, which of the following pairs of digits is referred to as binary code ?",
        a: "3 and 4",
        b: "0 and 1 ",
        c: "2 and 3",
        d: "none of above",
        correct: "b",
      },
      {
        que: "Which of the following is an input device used to enter motion data in computers or other electronic devices ?",
        a: "Monitor ",
        b: "Plotter",
        c: "Trackball ",
        d: "Joystick ",
        correct: "c",
      },
      {
        que: "In computing terms, typically what does CLI stand for?",
        a: "Common Language Input",
        b:  "Common Language Input",
        c: "Command Line Interface",
        d: "Common Language Interface",
        correct: "c",
      },
      {
        que: ".at is the top-level domain for what country?",
        a: "Austria",
        b:  "Argentina",
        c: "Australia",
        d: "Angola",
        correct: "a",
      },
      {
        que: "In the context of computing, a byte is equal to _____ bits ?",
        a: "4",
        b: "16 ",
        c: "24",
        d: "8",
        correct: "d",
      },
      {
        que: "In the context of digital computer, which of the following pairs of digits is referred to as binary code ?",
        a: "3 and 4",
        b: "0 and 1 ",
        c: "2 and 3",
        d: "none of above",
        correct: "b",
      },
      {
        que: "_____ is a small, portable flash memory card that plugs into a computer’s USB port and functions as a portable hard drive ?",
        a: "Flash drive",
        b: "CD-RW",
        c: "DVD-ROM ",
        d: "CD-ROM ",
        correct: "a",
      },
      {
        que: "	Desktop Computers, Laptop Computers, tablets and smartphones are different types of _______ ?",
        a: "Supercomputers",
        b: "Mainframe Computers",
        c: "Microcomputers ",
        d: "Minicomputers ",
        correct: "c",
      },
  
];

let index = 0;
let total = question.length;
let right = 0,
  wrong = 0;
let time = 60; 
let countdown; 
const cover = document.getElementById("cover");
const quesbox = document.getElementById("quesbox");
const optioninput = document.querySelectorAll(".options");
const timerDisplay = document.getElementById("timer");

const loadquestion = () => {
  if (index === total) {
    return endquiz();
  }
  reset();
  const data = question[index];
  quesbox.innerText = ` ${index + 1}) ${data.que}`;
  optioninput[0].nextElementSibling.innerText = data.a;
  optioninput[1].nextElementSibling.innerText = data.b;
  optioninput[2].nextElementSibling.innerText = data.c;
  optioninput[3].nextElementSibling.innerText = data.d;

  startTimer(); 
  const progress = document.getElementById("progress");
  progress.textContent = `Question ${index + 1} of ${total}`;
};


const submitquiz = () => {
  const data = question[index];
  const ans = getAnswer();
  
  if (ans == data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadquestion();
  const scoreDisplay = document.getElementById("score");
  scoreDisplay.textContent = `Score: ${right} / ${total}`;
};

const getAnswer = () => {
  let answer;
  optioninput.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};

const reset = () => {
  optioninput.forEach((input) => {
    input.checked = false;
  });
};

const startTimer = () => {
  clearInterval(countdown); 
  time = 60; 
  countdown = setInterval(updateTimer, 1000);
};

const updateTimer = () => {
  if (time > 0) {
    time--;
    timerDisplay.textContent = `Time Left: ${time}s`;
  } else {
    clearInterval(countdown);
    submitquiz();
  }
};

const endquiz = () => {
  clearInterval(countdown); 
  document.getElementById("box").innerHTML = `
    <div style="text-align: center;">
      <h3>Thank you for playing</h3>
      <h2>${right} / ${total} are correct</h2>
    </div>
  `;
};

loadquestion(); 