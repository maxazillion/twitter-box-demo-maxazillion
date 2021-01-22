import { dom, toggleBtn, toggleCharCountError } from "./lib.js";

dom.textarea.addEventListener("keyup", function handleTextarea() {
  const charCount = this.value.length;
  dom.charCountSpan.innerText = charCount;
  toggleBtn(charCount);
  toggleCharCountError(charCount);
});
