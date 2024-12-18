const init = () => {
    const inputForm = document.querySelector("form");
  
    inputForm.addEventListener("submit", (event) => {
      // Prevent the default form submission behavior
      event.preventDefault();
  
      // Select the input field and get its value
      const input = document.querySelector("input#searchByID");
      const movieId = input.value;
  
      // Fetch movie data based on the input ID
      fetch(`http://localhost:3000/movies/${movieId}`)
        .then((response) => {
          // Check if the response is valid
          if (!response.ok) {
            throw new Error("Movie not found");
          }
          return response.json();
        })
        .then((data) => {
          // Select the title and summary elements
          const title = document.querySelector("section#movieDetails h4");
          const summary = document.querySelector("section#movieDetails p");
  
          // Update the content with fetched data
          title.innerText = data.title;
          summary.innerText = data.summary;
        })
        .catch((error) => {
          // Handle errors (e.g., movie not found)
          const title = document.querySelector("section#movieDetails h4");
          const summary = document.querySelector("section#movieDetails p");
  
          title.innerText = "Error";
          summary.innerText = error.message;
        });
    });
  };
  
  // Ensure DOM content is loaded before running the script
  document.addEventListener("DOMContentLoaded", init);
  