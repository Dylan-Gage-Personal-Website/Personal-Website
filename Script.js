// This console log is for the workshop requirement.

console.log("Hello World");

// These Varables below are for the "if Statements" further down.
// They are meant to correspond to each page you can visit.

const index = `Welcome to my website. You can learn about me and what i've made here on the "About" and "Portfolio" Page by clicking the links at the top.`;
const about = "Welcome to my About page, you can learn about me here.";
const portfolio =
  "Welcome to my portfolio, you can see what i've created here.";
const contact =
  "Welcome to my contact page, here you can communicate to me about your inquiry.";

// These "if Statements" will check to see what is in the url.
// Then they will output a console log with ONE of the three appropriately named variables above according to whats in the URL.

if (document.URL.includes("index.html")) {
  console.log(index);
}

if (document.URL.includes("About.html")) {
  console.log(about);
}

if (document.URL.includes("Portfolio.html")) {
  console.log(portfolio);
}

if (document.URL.includes("contact.html")) {
  console.log(contact);
}

// This function will redirect you to the home page when called
function redirectHomePage() {
  window.location.href = "./index.html";
}

// After 5 seconds this will run the above function redirecting you to the home page.
if (document.URL.includes("submitsuccessful")) {
  setTimeout(redirectHomePage, 5000);
}
