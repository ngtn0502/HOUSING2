"use strict";

const btnAbout = document.querySelector("#aboutBtn");
const sectionAbout = document.querySelector("#about");
const btnStats = document.querySelector("#statsBtn");
const sectionStats = document.querySelector("#stats");
const btnPortfolio = document.querySelector("#portfolioBtn");
const sectionPortfolio = document.querySelector("#portfolio");
const btnAgents = document.querySelector("#agentsBtn");
const sectionAgents = document.querySelector("#agents");
const btnContact = document.querySelector("#contactBtn");
const sectionContact = document.querySelector("#contact");

btnAbout.addEventListener("click", function (e) {
  e.preventDefault();
  sectionAbout.scrollIntoView({ behavior: "smooth" });
});

btnStats.addEventListener("click", function (e) {
  e.preventDefault();
  sectionStats.scrollIntoView({ behavior: "smooth" });
});

btnPortfolio.addEventListener("click", function (e) {
  e.preventDefault();
  sectionPortfolio.scrollIntoView({ behavior: "smooth" });
});

btnAgents.addEventListener("click", function (e) {
  e.preventDefault();
  sectionAgents.scrollIntoView({ behavior: "smooth" });
});

btnContact.addEventListener("click", function (e) {
  e.preventDefault();
  sectionContact.scrollIntoView({ behavior: "smooth" });
});
