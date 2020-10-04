import React from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import MentorCard from "./controllers/mentor-card/MentorCard";

function App() {
  const mentors = [
    {
      name: "Islam Sayed",
      title: "full-stack developer",
      message:
        'I can help you answer the "why" questions and explain difficuilt systems in simple terms.',
      skills: ["html", "css", "javascript"],
      country: "EG",
      image: "https://uifaces.co/our-content/donated/ukegoVAy.jpg",
    },
    {
      name: "Mohammed Riad",
      title: ".Net developer",
      message:
        'I can help you answer the "why" questions and explain difficuilt systems in simple terms.',
      skills: [".net", "c#", "javascript"],
      country: "SA",
      image: "https://images-na.ssl-images-amazon.com/images/M/MV5BNTk2OGU4NzktODhhOC00Nzc2LWIyNzYtOWViMjljZGFiNTMxXkEyXkFqcGdeQXVyMTE1NTQwOTk@256_AL_.jpg",
    },
    {
      name: "Islam Sayed",
      title: "full-stack developer",
      message:
        'I can help you answer the "why" questions and explain difficuilt systems in simple terms.I can help you answer the "why" questions and explain difficuilt systems in simple terms.',
      skills: ["html", "css", "javascript"],
      country: "EG",
      image: "https://uifaces.co/our-content/donated/ukegoVAy.jpg",
    },
    {
      name: "Mohammed Riad",
      title: ".Net developer",
      message:
        'I can help you answer the "why" questions and explain difficuilt systems in simple terms.I can help you answer the "why" questions and explain difficuilt systems in simple terms.I can help you answer the "why" questions and explain difficuilt systems in simple terms.',
      skills: [".net", "c#", "javascript"],
      country: "SA",
      image: "https://images-na.ssl-images-amazon.com/images/M/MV5BNTk2OGU4NzktODhhOC00Nzc2LWIyNzYtOWViMjljZGFiNTMxXkEyXkFqcGdeQXVyMTE1NTQwOTk@._V1_UY256_CR12,0,172,256_AL_.jpg",
    },
    {
      name: "Islam Sayed",
      title: "full-stack developer",
      message:
        'I can help you answer the "why" questions and explain difficuilt systems in simple terms.',
      skills: ["html", "css", "javascript"],
      country: "EG",
      image: "https://uifaces.co/our-content/donated/ukegoVAy.jpg",
    },
    {
      name: "Mohammed Riad",
      title: ".Net developer",
      message:
        'I can help you answer the "why" questions and explain difficuilt systems in simple terms.',
      skills: [".net", "c#", "javascript"],
      country: "SA",
      image: "https://images-na.ssl-images-amazon.com/images/M/MV5BNTk2OGU4NzktODhhOC00Nzc2LWIyNzYtOWViMjljZGFiNTMxXkEyXkFqcGdeQXVyMTE1NTQwOTk@._V1_UY256_CR12,0,172,256_AL_.jpg",
    },
    {
      name: "Mohammed Riad",
      title: ".Net developer",
      message:
        'I can help you answer the "why" questions and explain difficuilt systems in simple terms.I can help you answer the "why" questions and explain difficuilt systems in simple terms.I can help you answer the "why" questions and explain difficuilt systems in simple terms.',
      skills: [".net", "c#", "javascript"],
      country: "SA",
      image: "https://images-na.ssl-images-amazon.com/images/M/MV5BNTk2OGU4NzktODhhOC00Nzc2LWIyNzYtOWViMjljZGFiNTMxXkEyXkFqcGdeQXVyMTE1NTQwOTk@._V1_UY256_CR12,0,172,256_AL_.jpg",
    },
  ];
  return (
    <div className="App">
      <h1>Mentors Website</h1>
      <Grid container>
        <Grid container item>
          
        </Grid>
        <Grid container item spacing={3} justify="flex-start">
          {mentors.map((mentor, index) => (
            <Grid key={index} item>
              <MentorCard mentor={mentor} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
