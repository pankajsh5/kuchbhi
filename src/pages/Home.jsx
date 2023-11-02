import React from 'react';
import "./home.css"
const Home = () => {
  return (
    <div className="home-page-container">
      <header>
        <h1>Welcome to My Website</h1>
      </header>
      <main>
        <section>
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </section>
        <section>
          <h2>Services</h2>
          <ul>
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 My Website</p>
      </footer>
    </div>
  );
};

export default Home;
