import img1 from "../assets/projects/1.webp"
import img4 from "../assets/projects/4.webp"
import img5 from "../assets/projects/5.webp"

export const projects = [
  {
    id: "talkative",
    image: img1,
    name: "Talkative",
    tags: ["react", "firebase", "tailwind"],
    shortDescription:
      "This project is an Internet Forum built using React and Firebase that enables users to create profiles, make posts, and interact with each other through comments fostering a sense of community engagement.",
    longDescription:
      "This project is an internet forum built using React and Firebase. It allows users to create profiles, create new posts on any topic, and engage with other users by commenting on posts. The use of Firebase allows for easy and secure storage of user and post data. Overall, this project provides a user-friendly and interactive platform for people to share ideas and opinions while also fostering a sense of community.",
    liveLink: "https://react-http-a3a7d.web.app/",
    codeLink: "https://github.com/szyi10/talkative",
  },
  {
    id: "quiz-app",
    image: img5,
    name: "Quiz App",
    tags: ["react", "css"],
    shortDescription:
      "A React-based quiz application has been developed to enable users to both solve and create quizzes. With this app, users can test their knowledge on various topics while also having the ability to create their own quizzes using a range of question formats.",
    longDescription:
      "A React-based quiz application has been developed to enable users to both solve and create quizzes. With this app, users can test their knowledge on various topics while also having the ability to create their own quizzes using a range of question formats.",
    liveLink: "https://quiz-app-d8711.web.app/",
    codeLink: "https://github.com/szyi10/quiz-app",
  },
  {
    id: "password-generator",
    image: img4,
    name: "Password Generator",
    tags: ["react", "css", "redux"],
    shortDescription:
      "This project is a password generator built using React, where users can check the strength of their existing password or generate a new one by selecting the password length and choosing what characters to include, such as uppercase letters, lowercase letters, numbers, and symbols.",
    longDescription:
      "This project is a password generator built using React, where users can check the strength of their existing password or generate a new one by selecting the password length and choosing what characters to include, such as uppercase letters, lowercase letters, numbers, and symbols.",
    liveLink: "https://password-generator-a75c3.web.app/",
    codeLink: "https://github.com/szyi10/password-generator",
  },
]
