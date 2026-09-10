const Fetch = require("@11ty/eleventy-fetch");

module.exports = async function() {
  let url = "https://api.brand.illinois.edu/colors"; 
  try {
    let json = await Fetch(url, {
      duration: "1d", 
      type: "json" 
    });
    return json; 
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; 
  }
};