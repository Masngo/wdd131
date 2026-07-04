// Dynamically set the current year for the copyright notice
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Dynamically set the last modified date of the document
document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;