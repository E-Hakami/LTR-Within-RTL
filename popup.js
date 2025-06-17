document.getElementById('wrapBtn').addEventListener('click', () => {
  const input = document.getElementById('inputText').value.trim();
  const status = document.getElementById('statusText');

  if (!input) {
    status.textContent = "Please enter some text.";
    return;
  }

  const PDF = '\u202C';  
  const LRI = '\u2066';  
  const PDI = '\u2069';  

  const wrapped = PDF + LRI + input + PDI;

  navigator.clipboard.writeText(wrapped).then(() => {
    status.textContent = "Copied to clipboard";
  }).catch(err => {
    status.textContent = "Failed to copy" + err;
  });
});
