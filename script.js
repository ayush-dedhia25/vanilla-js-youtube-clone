"use strict";

import Router from "./lib/router.js";
import HomePage from "./pages/home-page.js";
import NotFoundPage from "./pages/not-found-page.js";

const router = new Router();
const parser = new DOMParser();

// Routes
const routes = new Map();
routes.set("", HomePage);

/**
 * @param {HTMLDivElement} screen
 */
function navigate(screen) {
  const route = window.location.hash.substring(1);

  if (routes.has(route)) {
    const content = routes.get(route);

    if (typeof content === "string") {
      const htmlData = parser.parseFromString(content, "text/html");
      screen.appendChild(htmlData.body.firstChild);
    } else if (typeof content === "function") {
      const sanitizedContent = parser.parseFromString(content(), "text/html");
      screen.appendChild(sanitizedContent.body.firstChild);
    }
  } else {
    const sanitizedContent = parser.parseFromString(
      NotFoundPage(),
      "text/html"
    );
    screen.appendChild(sanitizedContent.body.firstChild);
  }
}

document.addEventListener("DOMContentLoaded", (e) => {
  const screen = document.getElementById("innerScreen");
  window.addEventListener("hashchange", navigate);
  navigate(screen);
});
