import React, { useState } from "react";
import { Eye } from "lucide-react";
import "./Pages.css";
import "./Portfolio.css";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Mobile Apps", "Web Apps", ];

  const projects = [
    {
      id: 1,
      title: "Smart E-commerce App",
      category: "Mobile Apps",
      image: "src/assets/projects/appicon.png",
      link: "#",
    },

    {
      id: 2,
      title: "ChatCode",
      category: "Mobile Apps",
      image: "src/assets/projects/chatCode.png",
      link: "#",
    },

    {
      id: 3,
      title: "SafeZ",
      category: "Mobile Apps",
      image: "src/assets/projects/safez.png",
      link: "#",
    },
 
    {
      id: 4,
      title: "Portfolio Website",
      category: "Web Apps",
      image: "src/assets/projects/portfolio.png",
      link: "#",
    },

    {
      id: 5,
      title: "Booking App ",
      category: "Web Apps",
      image: "src/assets/projects/Book.png",
      link: "#",
    },
  ];

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((project) =>
         project.category === activeTab);

  return (
    <article className="article portfolio fade-in">
      <header>
        <h2 className="article-title">Portfolio</h2>
      </header>

      {/* Filter Tabs */}

      <ul className="filter-list">
        {tabs.map((tab) => (
          <li className="filter-item" key={tab}>
            <button
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>

      {/* Project List */}

      <ul className="project-list">
        {filteredProjects.map((project) => (
          <li className="project-item" key={project.id}>
            <a href={project.link} target="#">
              <figure className="project-img-box">
                <img src={project.image} alt={project.title} loading="lazy" />

                <div className="project-item-icon-box">
                  <Eye size={20} />
                </div>
              </figure>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-category">{project.category}</p>
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Portfolio;
