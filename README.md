# 💘 Cupid-IDE

**Cupid-IDE** is a sleek, browser-based IDE designed for building and editing JavaScript and HTML projects with ease. Featuring a smooth interface powered by **HeartBrakeUI** and Monaco Editor, it brings coding to life with real-time previews, GitHub integration, and elegant animations.

---

## ✨ Features

- 📝 **Monaco Editor**: Rich code editing with syntax highlighting and language detection
- 💾 **Save/Load**: Store files temporarily in `/tmp` directory
- ▶️ **Run JavaScript**: Execute Node.js scripts on the backend
- 🌐 **HTML Preview**: Live rendering of HTML files in an embedded iframe
- ⬇️ **GitHub Import**: Clone GitHub repos using secure token prompts
- ⬆️ **GitHub Push**: Stage, commit, and push files back to GitHub
- 🌗 **Light/Dark Theme**: Toggle between color themes instantly
- 🎨 **HeartBrakeUI Animations**: Smooth transitions, interactive elements, and responsive layout

---

## 📁 Folder Structure

```

Cupid-IDE/
├── app.js                    # Express server with file & Git API
├── package.json              # Project dependencies and metadata
├── render.yaml               # Configuration for Render deployment
├── public/
│   ├── index.html            # Main IDE UI with Monaco and animations
│   └── HeartBrake.min.css    # HeartBrakeUI theme and animation library

````

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- Git installed on server
- Monaco Editor is loaded via CDN

### Installation

```bash
git clone https://github.com/your-username/cupid-ide.git
cd cupid-ide
npm install
node app.js
````

Then open `http://localhost:3000` in your browser.

---

## ☁️ Deploy to Render.com

1. Push the repo to GitHub
2. Go to [Render.com](https://render.com) and create a new **Web Service**
3. Select your GitHub repo
4. Choose **Free Plan**, use `render.yaml` for build config

Render automatically uses:

* **Build Command**: `npm install`
* **Start Command**: `node app.js`

---

## 🔐 GitHub Token Usage

Cupid-IDE does **not store** any credentials. When pushing or importing:

* You’re prompted for your **GitHub personal access token**
* It's used immediately in the request (e.g., cloning or pushing)
* No tokens are saved server-side

---

## 🎨 Powered By

**HeartBrakeUI**
Crafted by **Dr. Sanne Karibo**

> A design system inspired by Material Design, Apple HIG, and Bootstrap — fine-tuned for emotion, expression, and interactivity.

---

## 📃 License

MIT License

```
```
 
