import dom from "./lib.js";

dom.textarea.addEventListener("keyup", function handleTextarea() {
  if (this.value.length) {
    dom.button.disabled = false;
  } else {
    dom.button.disabled = true;
  }
});
