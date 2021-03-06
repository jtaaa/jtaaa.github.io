import React from "react";
import "./Section.css";

import SubSection from "./SubSection/SubSection";

const Section = ({ title, img, alt, subsections }) => {
  return (
    <div className="Section">
      <div className="Section-title">{title}</div>
      <div className="Section-underline" />
      {img && <img className="Section-img" src={img} alt={alt} />}
      {subsections &&
        subsections.map(subsection => (
          <SubSection key={subsection.name} {...subsection} />
        ))}
    </div>
  );
};

export default Section;
