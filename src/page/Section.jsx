import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import './page.css';
import { useGlobalContext } from "../context";
import { useFetchSectionsData } from "../hooks/useFetchSectionsData";
import Article from "../article/Article";
import style from "./page.module.css";
import Region from '../World_Region/Region';
import NewsFeed from '../World_Region/Region'; // Import NewsFeed component

const Section = () => {
  const { formatSection } = useGlobalContext();
  const { sectionName } = useParams();
  const { loaded, articles } = useFetchSectionsData(sectionName);

  // State to store selected section
  const [selectedSection, setSelectedSection] = useState(null);

  // Function to handle section selection
  const handleSectionSelect = (section) => {
    setSelectedSection(section);
  };

  // Function to clear the selected section
  const clearSelectedSection = () => {
    setSelectedSection(null);
  };

  // Check if there are articles related to the section
  if (loaded && articles.length < 1) {
    return (
      <div className="sectionContainer">
        <h2 className={style.title} onClick={clearSelectedSection}>
          {formatSection(sectionName)} News
        </h2>
        <hr />
        <div className={style.article}>No articles found</div>
      </div>
    );
  }

  return (
    <div className="sectionContainer">
      <h2
        className={style.title}
        onClick={() => {
          if (selectedSection) {
            // Clear the selected section if already selected
            clearSelectedSection();
          }
        }}
      >
        {formatSection(sectionName)} News
      </h2>
      <h2
        className={style.region}
      >
         {selectedSection}
      </h2>
      <hr />
      {sectionName === "world" ? 
        <ul className="region">
          <li
            className={`li ${selectedSection === 'Africa' ? 'selected' : ''}`}
            onClick={() => handleSectionSelect('Africa')}
          >
            Africa
          </li>
          <li
            className={`li ${selectedSection === 'Americas' ? 'selected' : ''}`}
            onClick={() => handleSectionSelect('Americas')}
          >
            America
          </li>
          <li
            className={`li ${selectedSection === 'AsiaPacific' ? 'selected' : ''}`}
            onClick={() => handleSectionSelect('AsiaPacific')}
          >
            Asia
          </li>
          <li
            className={`li ${selectedSection === 'Australia' ? 'selected' : ''}`}
            onClick={() => handleSectionSelect('Australia')}
          >
            Australia
          </li>
          <li
            className={`li ${selectedSection === 'Europe' ? 'selected' : ''}`}
            onClick={() => handleSectionSelect('Europe')}
          >
            Europe
          </li>
          <li
            className={`li ${selectedSection === 'MiddleEast' ? 'selected' : ''}`}
            onClick={() => handleSectionSelect('MiddleEast')}
          >
            Middle East
          </li>
         
        </ul>
      : null}
      <hr className="horizontal-line"/>
      {selectedSection ? null : (
        // Display content below the horizontal line when no section is selected
        loaded ? (
          <div className={style.article}>
            {articles.map((article, index) => {
              return <Article key={index} {...article} />;
            })}
          </div>
        ) : (
          <ClipLoader
            color={"#727272"}
            cssOverride={{ display: "block", margin: "80px auto" }}
            size={80}
            speedMultiplier={0.5}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        )
      )}
      {sectionName === "world" ? <Region /> : null}

      {/* Render the NewsFeed component and pass selected section as a prop */}
      {selectedSection && <NewsFeed section={selectedSection} />}
    </div>
  );
};

export default Section;

