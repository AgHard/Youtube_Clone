YouTube Clone

A YouTube-like video streaming platform built with React.js, designed to replicate core functionalities such as video playback, search, and a responsive UI.

▶️ Video Section

Videos are fetched dynamically using the YouTube Data API

Each video card displays a thumbnail, title, channel name, and metadata

Clicking a video opens a detailed view with the embedded YouTube player

Smooth playback with full-screen capability

Data is updated in real-time through API requests

🎥 Demo Video:

Click here to watch the demo on YouTube

🚀 Features

Responsive design mimicking YouTube's layout

Video playback functionality

Search capability for videos

Navigation through different video categories

Integration with YouTube Data API v3 for real-time data

🛠️ Tech Stack

Frontend: React.js, React Router, Axios

Styling: CSS Modules / Tailwind CSS (specify based on your implementation)

API: YouTube Data API v3

📦 Installation

1- Clone the repository:

    git clone https://github.com/AgHard/Youtube_Clone.git

    cd Youtube_Clone

2- Install dependencies:

    npm install

3- Configure environment variables:

    Create a .env file in the root directory and add your YouTube Data API key:

    REACT_APP_YOUTUBE_API_KEY=your_api_key_here
4- Start the development server:
    npm start

📁 Project Structure

        ├── public/
        
        │   └── index.html
        
        ├── src/
        
        │   ├── components/
        
        │   │   ├── Header.js
        
        │   │   ├── Sidebar.js
        
        │   │   └── VideoCard.js
        
        │   ├── pages/
        
        │   │   ├── Home.js
        
        │   │   └── VideoDetail.js
        
        │   ├── App.js
        
        │   ├── index.js
        
        │   └── api/
        
        │       └── youtube.js

├── .env

├── package.json

└── README.md

🔧 Available Scripts
npm start: Runs the app in development mode.

npm test: Launches the test runner.

npm run build: Builds the app for production.

npm run eject: Ejects the app configuration (use with caution).

📸 Screenshots

![Screenshot (1375)](https://github.com/user-attachments/assets/651b76ad-59a7-454f-8cc1-9c246fbff6c7)

![image](https://github.com/user-attachments/assets/46ffb780-3c20-4f2f-b222-9a41f1ef41eb)

![image](https://github.com/user-attachments/assets/cab011a5-658f-4cf2-a78b-ac10c4d84a06)

🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

