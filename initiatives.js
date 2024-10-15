// Function to fetch news from the Google Custom Search API
async function fetchSustainabilityNews() {
    const apiKey = 'AIzaSyAPBkOz7VkpJqYMi5YLELozpBBGUJ_qel4'; // Replace with your API key
    const searchEngineId = '1195093dc05ef46e6'; // Replace with your Search Engine ID
    const query = 'latest sustainability initiatives concerning electricity and water'; // Customize your query
    const url = `https://www.googleapis.com/customsearch/v1?q=${query}&cx=${searchEngineId}&key=${apiKey}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      displayResults(data.items);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  }
  
  // Function to display the fetched results in card format
  function displayResults(results) {
    const container = document.getElementById('results-container');
    container.innerHTML = ''; // Clear previous results
  
    results.forEach(result => {
      const card = document.createElement('div');
      card.classList.add('col-md-4');
      card.innerHTML = `
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${result.title}</h5>
            <p class="card-text">${result.snippet}</p>
            <a href="${result.link}" target="_blank" class="btn btn-view">Read More</a>
          </div>
        </div>
      `;
      container.appendChild(card);
    });
  }
  
  // Automatically fetch and display the latest news on page load
  window.onload = fetchSustainabilityNews;
  