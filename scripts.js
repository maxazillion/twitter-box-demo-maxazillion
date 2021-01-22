import dom from "./lib.js";

dom.textarea.addEventListener("keyup", function handleTextarea() {
  const charCount = this.value.length;
  if (charCount) {
    dom.button.disabled = false;
  } else {
    dom.button.disabled = true;
  }
  dom.charCountSpan.innerText = charCount;

  if (charCount > 140) {
    dom.span.classList.add("is-error");
  } else {
    dom.span.classList.remove("is-error");
  }
});
