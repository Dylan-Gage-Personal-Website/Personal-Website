// This console log is for the workshop requirement.

console.log("Hello World");

// These Varables below are for the "if Statements" further down.
// They are meant to correspond to each page you can visit.

const index = `Welcome to my website. You can learn about me and what i've made here on the "About" and "Portfolio" Page by clicking the links at the top.`;
const about = "Welcome to my About page, you can learn about me here.";
const portfolio =
  "Welcome to my portfolio, you can see what i've created here.";

// These "if Statements" will check to see what is in the url.
// Then they will output a console log with ONE of the three appropriately named variables above according to whats in the URL.

if (document.URL.includes("Index.html")) {
  console.log(index);
}

if (document.URL.includes("About.html")) {
  console.log(about);
}

if (document.URL.includes("Portfolio.html")) {
  console.log(portfolio);
}
