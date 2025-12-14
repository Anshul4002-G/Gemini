# Gemini
website url : https://gemini-rxu2.vercel.app/

Gemini Clone (React JS)

A Gemini-inspired AI chat interface built using React. This project replicates the core user experience of Google’s Gemini chat application, including a conversational UI, prompt input, message streaming, and responsive design.
It is intended for learning purposes and frontend architecture practice.

Table of Contents

Overview

Features

Tech Stack

Project Structure

Installation

Usage

Environment Variables

API Integration

Screenshots

Limitations

Future Enhancements

Disclaimer

License

Overview

The Gemini Clone is a frontend-focused application that simulates an AI chatbot interface.
It emphasizes clean UI design, component-based architecture, and asynchronous API handling.

This project does not recreate Gemini’s proprietary AI models, but instead connects to a configurable AI API endpoint or mock service.

Features

Chat-style conversational interface

Real-time user and AI message rendering

Typing indicator / loading state

Prompt input with submit handling

Conversation history persistence (local state or localStorage)

Responsive layout for desktop and mobile

Clean, minimal UI inspired by Gemini

Tech Stack

React (Functional Components & Hooks)

JavaScript (ES6+)

CSS / Tailwind CSS (optional)

Fetch API / Axios for HTTP requests

Project Structure
gemini-clone/
│
├── src/
│   ├── components/
│   │   ├── ChatWindow.jsx
│   │   ├── Message.jsx
│   │   ├── PromptInput.jsx
│   │   └── Loader.jsx
│   │
│   ├── services/
│   │   └── aiService.js
│   │
│   ├── App.jsx
│   ├── index.js
│   └── styles.css
│
├── public/
├── .env
├── package.json
└── README.md

Installation

Clone the repository:

git clone https://github.com/your-username/gemini-clone.git


Navigate to the project directory:

cd gemini-clone


Install dependencies:

npm install

Usage

Start the development server:

npm start


The application will be available at:

http://localhost:3000

Environment Variables

Create a .env file in the root directory:

REACT_APP_AI_API_KEY=your_api_key_here
REACT_APP_AI_API_URL=https://api.example.com/chat


Never commit your .env file to version control.

API Integration

The application uses a service layer (aiService.js) to communicate with an AI backend.

Example request flow:

User submits a prompt

Frontend sends prompt to AI API

Response is rendered as a chat message

You can connect:

OpenAI-compatible APIs

Custom backend services

Mock APIs for testing

Screenshots

Add screenshots here to showcase the UI.

Limitations

No authentication or user accounts

No server-side rendering

AI accuracy depends entirely on the connected API

Not affiliated with Google or Gemini

Future Enhancements

Message streaming (token-by-token responses)

User authentication

Conversation history stored in a backend

Theme switching (light/dark mode)

Markdown and code block rendering

Disclaimer

This project is for educational purposes only.
It is not an official Gemini product and does not use proprietary Google technologies.

License

This project is licensed under the MIT License.
You are free to use, modify, and distribute it for learning and development.
