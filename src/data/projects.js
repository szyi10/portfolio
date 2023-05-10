import img1 from "../assets/projects/1.jpg"
import img2 from "../assets/projects/2.png"
import img3 from "../assets/projects/3.png"
import img4 from "../assets/projects/4.jpg"
import img5 from "../assets/projects/5.png"

export const projects = [
  {
    id: 1,
    image: img1,
    title: "Talkative",
    tags: ["react", "firebase", "tailwind"],
    shortDescription:
      "This project is an Internet Forum built using React and Firebase that enables users to create profiles, make posts, and interact with each other through comments fostering a sense of community engagement.",
    longDescription:
      "This project is an internet forum built using React and Firebase. It allows users to create profiles, create new posts on any topic, and engage with other users by commenting on posts. The use of Firebase allows for easy and secure storage of user and post data. Overall, this project provides a user-friendly and interactive platform for people to share ideas and opinions while also fostering a sense of community.",
    liveLink: "https://react-http-a3a7d.web.app/",
    codeLink: "https://github.com/szyi10/talkative",
  },
  {
    id: 2,
    image: img2,
    title: "Todo List",
    tags: ["react", "css"],
    shortDescription:
      "This project is a simple Todo List application built using React that enables users to manage their tasks and to-do list in a user-friendly and efficient manner, with the added convenience of persistent data storage through local storage.",
    longDescription:
      "This project is a simple Todo List application built using React. It allows users to keep track of their tasks and manage their to-do list in a user-friendly and efficient manner. The tasks added by the user are stored in local storage, which ensures that the data is persistent even after closing the application. Overall, this project provides a convenient solution for keeping track of tasks and staying organized.",
    liveLink: "https://tasks-e79a8.web.app/",
    codeLink: "https://github.com/szyi10/tasks",
  },
  {
    id: 3,
    image: img3,
    title: "Weather App",
    tags: ["react", "api", "tailwind"],
    shortDescription:
      "This project is a Weather App built using React and weatherapi.com API that provides users with current weather conditions and forecast for 3 days for any location in the world entered by the user.",
    longDescription:
      "This project is a Weather App built using React and the weatherapi.com API. The app allows users to enter any location in the world to retrieve current weather conditions and a 3-day forecast. Users can input a location by either city name or latitude and longitude coordinates. The app then retrieves the weather data from the API and displays it on the screen, providing users with up-to-date weather information for any location they choose. The app is designed to be user-friendly and provides a convenient way for users to stay informed about the weather in different locations. Overall, this project is an efficient and practical tool for anyone looking for accurate and timely weather information.",
    liveLink: "https://weather-app-9f95e.web.app/",
    codeLink: "https://github.com/szyi10/weather-app",
  },
  {
    id: 4,
    image: img4,
    title: "Password Generator",
    tags: ["react", "css", "redux"],
    shortDescription:
      "This project is a password generator built using React, where users can check the strength of their existing password or generate a new one by selecting the password length and choosing what characters to include, such as uppercase letters, lowercase letters, numbers, and symbols.",
    longDescription:
      "This project is a password generator built using React, where users can check the strength of their existing password or generate a new one by selecting the password length and choosing what characters to include, such as uppercase letters, lowercase letters, numbers, and symbols.",
    liveLink: "https://password-generator-a75c3.web.app/",
    codeLink: "https://github.com/szyi10/password-generator",
  },
  {
    id: 5,
    image: img5,
    title: "Quiz App",
    tags: ["react", "css"],
    shortDescription:
      "A React-based quiz application has been developed to enable users to both solve and create quizzes. With this app, users can test their knowledge on various topics while also having the ability to create their own quizzes using a range of question formats.",
    longDescription:
      "A React-based quiz application has been developed to enable users to both solve and create quizzes. With this app, users can test their knowledge on various topics while also having the ability to create their own quizzes using a range of question formats.",
    liveLink: "https://quiz-app-d8711.web.app/",
    codeLink: "https://github.com/szyi10/quiz-app",
  },
]
