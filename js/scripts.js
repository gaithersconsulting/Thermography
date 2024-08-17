/*!
* Start Bootstrap - Landing Page v6.0.6 (https://startbootstrap.com/theme/landing-page)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


document.addEventListener('DOMContentLoaded', function() {
    // Set the year in the footer
    let year = new Date().getFullYear();
    document.getElementById("year").innerHTML = year;
});



async function loadExternalHTML(target, fileName) {
    try {
      // Fetch the external HTML file
      const response = await fetch(fileName);
      const htmlText = await response.text();

      // Get the template element
      const template = document.getElementById('imported-template');

      // Set the content of the template to the fetched HTML
      template.innerHTML = htmlText;

      // Optionally, you can clone and display the template content
      const contentContainer = document.getElementById(target);
      const clone = document.importNode(template.content, true);
      contentContainer.appendChild(clone);
    } catch (error) {
      console.error('Error loading external HTML:', error);
    }
  }

  window.loadExternalHTML = loadExternalHTML;