// Add new blog posts at the top of this list.
// `slug` is used in the URL (/blog/<slug>), `content` is an array of paragraphs.
const posts = [
  {
    slug: "building-speek-programming-language",
    title: "Building SPEEK: My Own Programming Language in Java",
    date: "2026-11-10",
    tags: ["Java", "Interpreter", "Spring Boot", "React"],
    summary:
      "How SPEEK works under the hood: from source code to tokens, parsing, evaluation and a browser-based IDE.",
    content: [
      "SPEEK is a small programming language and interpreter that I built from scratch in Java. It comes with a web IDE, so you can write a SPEEK program in the browser, run it, and see exactly what the interpreter did with it.",
      "The interpreter follows a simple pipeline: source code goes into a tokenizer, the tokens go into a parser, the parser produces instructions, and an evaluator runs those instructions to produce the output. Keeping each stage separate made the project much easier to reason about, because every stage has one job and can be checked on its own.",
      "The language itself is intentionally small. It supports variables and assignment, arithmetic expressions, string values, output statements, conditional statements and repeat loops. A runtime environment keeps track of variable values while a program runs, and errors are caught and reported instead of crashing the interpreter.",
      "To make SPEEK usable without installing anything, I connected the Java interpreter to a React front end through a Spring Boot REST API. The IDE uses the Monaco editor, and it has an output console, a token viewer, an environment viewer that shows variable values, an error panel and built-in documentation.",
      "The token viewer and the environment viewer were my favourite part to build. They turn the interpreter from a black box into something you can look inside, which makes SPEEK useful for understanding how languages work, not only for running code.",
      "You can try SPEEK from the Projects page, and the full source is on my GitHub.",
    ],
  },
  {
    slug: "making-musicverse-lyrics-search",
    title: "Making MusicVerse: A Lyrics Search Website",
    date: "2026-11-08",
    tags: ["JavaScript", "Frontend", "Flask", "CSS"],
    summary:
      "The front-end side of MusicVerse: search, fetch requests to a Python backend, lyrics display and smooth animations.",
    content: [
      "MusicVerse is a lyrics search website. You type in a song title, and it shows the lyrics in a clean, readable layout. It is built with HTML, CSS and JavaScript on the front end and a Python Flask backend.",
      "My part of the project was the front end. I worked on the UI design and layout, the search bar and input handling, the JavaScript fetch requests that talk to the Python backend, the display of lyrics and error messages, mobile responsiveness, and the CSS animations and transitions.",
      "Handling the empty and error states took more thought than I expected. A search can return nothing, the backend can be slow, or the input can be blank, and each of those needs a clear message so the user is never left looking at an empty page.",
      "The interface has multiple navigation bars, smooth transitions between sections, and an interactive guitar element that gives the site some personality. I also made sure the layout adapts to smaller screens, since many people look up lyrics on their phones.",
      "One practical note: MusicVerse is hosted on a free plan, so the server goes to sleep when nobody is using it. The first visit can take a few seconds while it wakes up.",
    ],
  },
  {
    slug: "why-i-built-toolnest",
    title: "Why I Built ToolNest with Plain JavaScript",
    date: "2026-11-05",
    tags: ["JavaScript", "HTML", "CSS", "Side Project"],
    summary:
      "A collection of everyday tools and games with no frameworks and no build step, and what I learned from building it that way.",
    content: [
      "ToolNest is a small collection of everyday tools and games: a calculator, unit converter, password generator, stopwatch and timer, word counter, QR code generator, BMI calculator, Tic Tac Toe, Rock Paper Scissors, Number Guess and Memory Match.",
      "I built it with plain HTML, CSS and JavaScript on purpose. No framework, no build step, nothing to install. Working this way forced me to understand things that a framework would have hidden from me, like how to switch between pages without reloading, how to render a view from a list of data, and how to clean up timers and key listeners when you leave a page.",
      "The whole site runs on one list. Every tool is an entry with a name, an icon, a type and a render function. The home page, the search, the Tools and Games filters and the pinned favourites are all generated from that list, so adding a new tool means adding one entry and one function.",
      "Some small details were there to make it feel more finished. Favourites, scores and your light or dark theme choice are saved in the browser with localStorage, the games celebrate wins with confetti, and the whole site is responsive.",
      "The QR code generator is the one tool that uses a library, because writing a QR encoder from scratch is a project of its own. It draws the code on a canvas, which also makes the Download PNG button simple.",
      "ToolNest is hosted for free on GitHub Pages. Since it is only static files, deploying it is as simple as pushing the code.",
    ],
  },
  {
    slug: "building-a-website-for-a-neuro-rehab-center",
    title: "Building a Website for a Neuro Rehab Center",
    date: "2026-11-03",
    tags: ["Client Work", "Web Design", "Frontend"],
    summary:
      "What it was like to build a real website for a physiotherapy and neuro rehabilitation center in Bhopal.",
    content: [
      "One of my favourite projects is the website for Dhakate Physiotherapy & Neuro Rehab Center in Bhopal. Unlike my personal projects, this one was built for a real client with real patients visiting the site.",
      "The center helps people recover from conditions like stroke, paralysis and Parkinson's disease, so the website had to feel calm, trustworthy and easy to use. A visitor might be a patient or a worried family member, and they should be able to find what they need quickly.",
      "The site covers the essentials: an overview of the center, the treatments offered, a photo gallery, patient testimonials, an FAQ and contact details. A clear Book Appointment button sits in the header, and there are quick call and message buttons so reaching the clinic takes a single tap.",
      "Building for a client taught me to think about the people using the site more than the technology behind it. Clear navigation, readable text and obvious buttons mattered far more than clever effects.",
      "Because it is client work, the source code is private, but you can see the finished website from the Projects page.",
    ],
  },
  {
    slug: "hello-world",
    title: "Hello, World!",
    date: "2026-11-02",
    tags: ["Personal", "Beginnings"],
    summary: "Why I started this blog and what I plan to write about.",
    content: [
      "Welcome to my corner of the internet. This is where I'll share what I'm learning, building and figuring out along the way.",
      "Expect notes on projects, things that broke (and how I fixed them), and ideas I find interesting in software development.",
      "Thanks for stopping by!",
    ],
  },
];

export default posts;
