import React, { useEffect, useState } from "react";
import Header from "../containers/Header";
import Experience from "../containers/Experience";
import About from "../containers/About";
import Projects from "../containers/Projects";
import Contact from "../containers/Contact";
import Footer from "../containers/Footer";
import SosialIcons from "../components/SosialIcons";
import EmailLink from "../components/EmailLink";

const Home = () => {
  const [personalInfo, setPersonalInfo] = useState([]);
  const email = personalInfo.length > 0 ? personalInfo[0].email : "";
  const profileImg = personalInfo.length > 0 ? personalInfo[0].profileImg : "";

  useEffect(() => {
    const getPersonalInfo = async () => {
      const response = await fetch(
        "https://aligulmaliyev-c908d-default-rtdb.firebaseio.com/personal-info.json"
      );
      if (!response.ok) throw new Error("Something went wrong!");
      const responseData = await response.json();
      const newProduct = [];
      for (const key in responseData) {
        newProduct.push({
          id: key,
          name: responseData[key].name,
          surName: responseData[key].surName,
          email: responseData[key].email,
          resume: responseData[key].resume,
          profileImg: responseData[key].profileImg,
          profession: responseData[key].profession,
          description: responseData[key].description,
        });
      }
      setPersonalInfo(newProduct);
    };
    getPersonalInfo();
  }, []);
  return (
    <>
      <Header personalInfo={personalInfo} />
      <About profileImg={profileImg} />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <SosialIcons positon={true} />
      <EmailLink email={email} />
    </>
  );
};

export default Home;
