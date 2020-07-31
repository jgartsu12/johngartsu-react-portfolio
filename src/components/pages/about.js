import React from "react";
import profilePicture from "../../../static/assets/images/bio/headshot.jpg";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="right-column">
        John Gartsu is recent graduate from Bottega Tech (July 2020) with a previous B.S. degree in Exercise Science 
        with a concentration in Human Performance from Southern Connecticut State University (Dec 2015). 
        Also, he served in the Air Force National Guard in Connecticut as Structural Engineer while he was earning his 
        Bachelors degree. When John left the Air Force and graduated from college, he found himself doing various careers.
        While he was on his journey to finding his passion, he was teaching himself coding through YouTube, Codecademy, and 
        FreeCodeCamp. 
        
        He decided to get a certificate in Full Stack in Web Engineering from Bottega Tech.
        Once he joined Bottega Tech and met various mentors from the program, he found his passion in Software Engineering.
        During his time at Bottega Tech, he learned various languages and frameworks such as Python3, JavaScript, ReactJS, and
        Flask. His favorite language is Python. He enjoys teaching himself new coding languages and frameworks, and has a strong desire to learn.
        John is teaching himself the programming languages C#, GOlang, and .NET framework through Codecademy and by reading
        documentation. John believes he learns best by reading the documentation and creating projects. 

        John also enjoys teaching himself Information Technology concepts. He is taking classes online to receive certifications 
        in COMPTIA A+, Networking+, Security+. Clearly, he has a strong passion to learn.

        Currently, John works at Awareness Technologies Incorporated as a Tier 2 Technical Analyst.
        At Awareness Technologies Inc, he provides Tier 2 support for InterGuard employee monitoring software.
      </div>
    </div>
  ); 
}