<div align="center">

# 🔐 HexaVault

A powerful and customizable password generator web tool with advanced features beyond typical generators, designed for security-conscious users.
</div>






---

## Features

- **Standard Mode:**  
  Generate passwords by selecting length and character types (uppercase, lowercase, digits, symbols).

- **Custom Rule Engine:**  
  Define exact counts for uppercase letters, lowercase letters, digits, and symbols, plus specify symbol placement (start, end, or anywhere).

- **Multi-password Generation:**  
  Generate multiple passwords at once.

- **Service Tagging:**  
  Add custom tags (e.g., Gmail, Bank) to passwords for easier identification.

- **Password Strength Feedback:**  
  Real-time entropy calculation and strength rating (Weak, Moderate, Strong).

- **Clipboard Copy with Auto-clear:**  
  Copy generated passwords to clipboard and automatically clear after 20 seconds for security.

- **QR Code Generation:**  
  Generate a QR code for the password(s) to easily scan on mobile devices.

- **Dark Mode Styling:**  
  Modern, dark-themed UI with clean and responsive design.

- **Toggle Slider for Custom Rules:**  
  User-friendly toggle switch to enable/disable custom rule mode.

---

## Demo

Open `index.html` in any modern web browser to use the tool.

---

## Installation

1. Clone or download this repository.
2. Open `index.html` in your favorite browser.
3. No backend or dependencies required — fully client-side.

---

## Usage

- Toggle **Use Custom Rules** to switch between standard and custom password options.
- Fill in the desired parameters.
- (Optional) Enter a **Service Tag** for password labeling.
- Select the number of passwords to generate.
- Click **Generate** to create passwords.
- Use **Copy to Clipboard** or **Generate QR** for convenience.

---

## Dependencies

- [QRCode.js](https://github.com/soldair/node-qrcode) (via CDN) for QR code generation

---

## Security Notes

- Passwords are generated client-side; no data is sent to any server.
- Clipboard contents auto-clear after 20 seconds to reduce accidental leaks.
- Always verify generated passwords meet your security requirements.

---

## License

This project is open source and available under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

Created by [Syed Labeeq](https://github.com/syedlabeeq) — feel free to open issues or submit pull requests!

---

Enjoy secure and flexible password generation! 🔐
