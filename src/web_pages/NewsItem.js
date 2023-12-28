import React from 'react';

// NewsItem component to display each news article
const NewsItem = ({ title, url, image_url, news_site, summary, published_at, launches, events }) => {
  return (
    // Each news item is wrapped in a column with Bootstrap styling
    <div className="col-md-4 mb-4">
      {/* Card component to display the news item */}
      <div className="card">
        {/* News item image */}
        <img src={image_url} className="card-img-top" alt={title} />
        {/* Card body containing title, summary, and read more button */}
        <div className="card-body">
          {/* News item title */}
          <h5 className="card-title">{title}</h5>
          {/* News item summary */}
          <p className="card-text">{summary}</p>
          {/* Published date with a small text */}
          <p className="card-text">
            <small className="text-muted">{`Published on ${new Date(published_at).toLocaleString()}`}</small>
          </p>
          {/* Read more button linking to the article URL */}
          <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

// Exporting the NewsItem component as the default export
export default NewsItem;
