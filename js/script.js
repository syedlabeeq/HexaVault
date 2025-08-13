function toggleCustomRules() {
  const custom = document.getElementById("useCustomRules").checked;
  document.getElementById("customRules").style.display = custom ? "block" : "none";
  document.getElementById("standardOptions").style.display = custom ? "none" : "block";
}

function generatePassword() {
  const useCustom = document.getElementById("useCustomRules").checked;
  const count = parseInt(document.getElementById("count").value);
  const tag = document.getElementById("customTag").value;

  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  let passwords = [];

  for (let i = 0; i < count; i++) {
    let pwd = "";

    if (useCustom) {
      const ruleUpper = parseInt(document.getElementById("ruleUppercase").value);
      const ruleLower = parseInt(document.getElementById("ruleLowercase").value);
      const ruleDigits = parseInt(document.getElementById("ruleDigits").value);
      const ruleSymbols = parseInt(document.getElementById("ruleSymbols").value);
      const symbolPos = document.getElementById("symbolPosition").value;

      let parts = [];

      parts.push(pickRandom(upper, ruleUpper));
      parts.push(pickRandom(lower, ruleLower));
      parts.push(pickRandom(numbers, ruleDigits));
      let sym = pickRandom(symbols, ruleSymbols);

      if (symbolPos === "start") {
        parts.unshift(sym);
      } else if (symbolPos === "end") {
        parts.push(sym);
      } else {
        parts.push(sym);
      }

      pwd = shuffle(parts.join(""));
    } else {
      const length = parseInt(document.getElementById("length").value);
      const useUpper = document.getElementById("uppercase").checked;
      const useLower = document.getElementById("lowercase").checked;
      const useNum = document.getElementById("numbers").checked;
      const useSym = document.getElementById("symbols").checked;

      let allChars = "";
      if (useUpper) allChars += upper;
      if (useLower) allChars += lower;
      if (useNum) allChars += numbers;
      if (useSym) allChars += symbols;

      if (!allChars) {
        alert("Please select at least one character type.");
        return;
      }

      for (let j = 0; j < length; j++) {
        pwd += allChars.charAt(Math.floor(Math.random() * allChars.length));
      }
    }

    if (tag) pwd = `[${tag}] ${pwd}`;
    passwords.push(pwd);
  }

  document.getElementById("passwordOutput").innerText = passwords.join("\n");
  evaluateStrength(passwords[0]);
}

function pickRandom(charset, count) {
  let result = "";
  for (let i = 0; i < count; i++) {
    result += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return result;
}

function shuffle(str) {
  const arr = str.split("");
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join("");
}

function evaluateStrength(pwd) {
  let entropy = 0;
  let charTypes = 0;

  if (/[a-z]/.test(pwd)) charTypes += 26;
  if (/[A-Z]/.test(pwd)) charTypes += 26;
  if (/\d/.test(pwd)) charTypes += 10;
  if (/[^a-zA-Z0-9]/.test(pwd)) charTypes += 32;

  entropy = Math.log2(Math.pow(charTypes, pwd.length));
  let strength = "Weak";
  if (entropy > 60) strength = "Strong";
  else if (entropy > 40) strength = "Moderate";

  document.getElementById("strengthFeedback").innerText = `🔍 Entropy: ${entropy.toFixed(2)} bits — ${strength}`;
}

function copyToClipboard() {
  const pwd = document.getElementById("passwordOutput").innerText;
  navigator.clipboard.writeText(pwd);
  alert("Password(s) copied to clipboard. Auto-clearing in 20 seconds.");
  setTimeout(() => navigator.clipboard.writeText(""), 20000);
}

function generateQRCode() {
  const pwd = document.getElementById("passwordOutput").innerText;
  const canvas = document.getElementById("qrCode");
  QRCode.toCanvas(canvas, pwd, function (error) {
    if (error) console.error(error);
  });
}

function toggleCustomRules() {
  const custom = document.getElementById("useCustomRules").checked;
  document.getElementById("customRules").style.display = custom ? "block" : "none";
  document.getElementById("standardOptions").style.display = custom ? "none" : "block";
}