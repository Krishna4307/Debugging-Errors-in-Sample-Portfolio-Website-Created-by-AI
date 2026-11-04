#Personal Portfolio Website Frontend Debugging Practice

# Project Status - Completed 

#DemoLink :https://krishna4307.github.io/Debugging-Errors-in-Sample-Portfolio-Website-Created-by-AI/

  #Project Overview
    This project is a responsive personal portfolio website built using HTML5, CSS3, and Vanilla JavaScript.
    The main objective of this project was to improve real-world frontend debugging skills by identifying and fixing intentionally introduced 
    bugs in an existing website.
    The website represents a fictional frontend developer named Alex Morgan and includes sections for introduction, about, skills, projects, and contact.
    
#Technologies Used
  - HTML5 – Website structure and semantic elements.
  - CSS3 – Styling, Flexbox, Grid, responsive design, and themes.
  - JavaScript – DOM manipulation, event handling, project filtering, form validation, and LocalStorage.
  - Browser DevTools – Debugging and inspecting HTML, CSS, and JavaScript.
  
# Bugs Identified and Fixed
  During debugging, I investigated and resolved the following issues:
  1. Navigation Issues
    -Fixed incorrect navigation targets.
    -Corrected section navigation for the Contact and Hire Me links.
  2. Image Loading Issue
    -Investigated the profile image loading problem.
    -Identified the incorrect or unavailable image resource.
  3. Responsive Design Issues
    -Investigated layout problems on smaller screens.
    -Adjusted responsive CSS rules and element positioning.
  4. Dark Mode LocalStorage Issue
    -Identified a mismatch in the LocalStorage key used when saving and retrieving the theme preference.
    -Corrected the storage key so the selected theme could persist after refreshing.
  5. Project Category Filtering Issue
    -Identified an incorrect dataset property reference.
    -The project cards used data-category, but JavaScript was accessing dataset.filter.
    -Corrected the property reference to card.dataset.category.
    -Verified category comparisons for Web Design and JavaScript projects.
  6. Contact Form Issues
    -Investigated incorrect element ID references.
    
# Website Features

  - Developer introduction and hero section.
  - About section.
  - Skills showcase.
  - Project cards with category filtering.
  - Light and dark theme switching.
  - Theme preference using LocalStorage.
  - Contact form with input validation.
  - Responsive layouts for mobile, tablet, and desktop.
  - Footer with navigation links.
