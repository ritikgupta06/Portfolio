import React from 'react';
import './Connect.css';

const teamMembers = [
  {
    name: "Gmail",
    role: "click ME",
    link: "https://github.com/ritikgupta06",
    imageUrl: "/src/assets/gmail.png",
  },
  {
    name: "Linkedin",
    role: "UI/UX Designer",
    link: "https://www.linkedin.com",
    imageUrl: "/src/assets/ld.png",
  },
  {
    name: "Github",
    role: "Front-End Dev",
    link: "https://github.com",
    imageUrl: "/src/assets/github.png",
  },
  {
    name: "instagram",
    role: "Android Dev",
    link: "https://www.instagram.com",
    imageUrl: "/src/assets/insta.jpg",
  },
  {
    name: "Portfolio",
    role: "Content Writer",
    link: "https://example.com",
    imageUrl: "/src/assets/icon.jpg",
  },
];

const Connect = () => {
  return (
    <div className="team-container">
      <h1 className="team-title">Connect with us</h1>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="circle-image">
              <img src={member.imageUrl} alt={member.name} className="profile-pic" />
            </div>
            <h3 className="member-name">{member.name}</h3>
            <p className="member-role">
              {member.role === "click ME" ? (
                <a href={member.link} target="_blank" rel="noopener noreferrer">
                  {member.role}
                </a>
              ) : (
                member.role
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Connect;
