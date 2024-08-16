import "./index.css";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import React, { useEffect, useState } from "react";
import data from "../data.json";
import Projects from "./components/Projects";

function App() {

  const [profile, setProfile] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});

  useEffect(() => {
    setProfile(data.profile);
    setProjects(data.projects);
    setContact(data.contact);
  }, []);

  return (
    <>
      <Header />
      <Skills />
      <Profile profile={profile} />
      <Projects projects={projects} />
      <Footer contact={contact} />
    </>
  );
}

export default App;
