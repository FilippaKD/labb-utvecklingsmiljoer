import { initClicker } from "./js/utils.js";

function init() {
  initClicker("btn", "output");

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js").then(
      (registration) => {
        console.log("Service worker registration succeeded:", registration);
      },
      (error) => {
        console.error(`Service worker registration failed: ${error}`);
      },
    );
  }




}
window.addEventListener("load", init);
