import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "about", "skills", "work", "testimonial", "contact"].map(
        (item, index) => (
          <a
            href={`#${item}`}
            key={item + index}
            className="app__navigation-dot"
            style={active === item ? { backgroundColor: "#FF48A5" } : {}}
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;
