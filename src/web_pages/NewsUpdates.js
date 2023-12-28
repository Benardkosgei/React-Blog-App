import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';

// NewsUpdates component responsible for fetching and displaying news articles
const NewsUpdates = () => {
  // State to store the fetched articles
  const [articles, setArticles] = useState([]);

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    // Function to fetch articles asynchronously
    const fetchArticles = async () => {
      try {
        // Fetch data from the Spaceflight News API
        const response = await fetch('https://api.spaceflightnewsapi.net/v4/articles/');

        // Check if the response is successful (status code 200)
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        // Parse the JSON response and set the articles state with the fetched data
        const data = await response.json();
        setArticles(data.results);
      } catch (error) {
        // Handle errors by logging to the console
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchArticles function when the component mounts
    fetchArticles();
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    // Container to display the news updates
    <div className="container my-5">
      {/* Heading for the news updates section */}
      <h1 className="display-4 mb-2">News Updates</h1>
      {/* Row to display articles using the NewsItem component */}
      <div className="row">
        {/* Map over articles and render NewsItem component for each */}
        {articles.map((article) => (
          <NewsItem key={article.id} {...article} />
        ))}
      </div>
    </div>
  );
};
// Exporting the NewsUpdates component as the default export
export default NewsUpdates;
