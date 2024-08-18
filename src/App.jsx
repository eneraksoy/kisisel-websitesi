import "./index.css";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import React, { useEffect, useState } from "react";
import data from "../data.json";
import Projects from "./components/Projects";
import { LanguageProvider } from "./context/LanguageContext";

function App() {

  const [profile, setProfile] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [isDarkMode, setIsDarkMode] = useState(false);


  useEffect(() => {
    setProfile(data.profile);
    setProjects(data.projects);
    setContact(data.contact);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <>
      <LanguageProvider>
        <Header toggleDarkMode={() => setIsDarkMode(!isDarkMode)} />
        <Skills />
        <Profile profile={profile} />
        <Projects projects={projects} />
        <Footer contact={contact} />
      </LanguageProvider>
    </>
  );
}

export default App;
