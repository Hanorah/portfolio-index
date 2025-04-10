import React from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet
import About from './components/About';
import Hero from './components/Hero';
import NavBar from './components/Navbar';
import Features from './components/Features';
import Story from './components/Story';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      {/* SEO meta tags using react-helmet */}
      <Helmet>
        <title>Okosodo Hanorah | Software Developer</title>
        <meta
          name="description"
          content="Welcome to my portfolio. I am Okosodo Hanorah, a passionate Software Developer who helps brands and individuals stand out with dynamic, immersive web and app experiences."
        />
        <meta
          name="keywords"
          content="Software Developer, Web Developer, Portfolio, React, JavaScript, Frontend Development, Web Development"
        />
        <meta name="author" content="Okosodo Hanorah" />
        <meta property="og:title" content="Okosodo Hanorah | Software Developer" />
        <meta
          property="og:description"
          content="Welcome to my portfolio. I am Okosodo Hanorah, a passionate Software Developer who helps brands and individuals stand out with dynamic, immersive web and app experiences."
        />
        <meta property="og:image" content="logo.png" />
        <meta property="og:url" content="https://portfolio-pco6.onrender.com/" />
        <meta name="twitter:card" content="logo.png" />
        <meta name="twitter:title" content="Okosodo Hanorah | Software Developer" />
        <meta
          name="twitter:description"
          content="Welcome to my portfolio. I am Okosodo Hanorah, a passionate Software Developer who helps brands and individuals stand out with dynamic, immersive web and app experiences."
        />

        {/* Structured Data (JSON-LD) for SEO */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Okosodo Hanorah",
              "url": "https://portfolio-pco6.onrender.com/",
              "jobTitle": "Software Developer",
              "description": "I help brands and individuals stand out with dynamic, immersive Web and App experiences.",
              "sameAs": [
                "https://www.linkedin.com/in/norahokosodo/",
                "https://web.facebook.com/profile.php?id=61573522547589",
                "https://github.com/Hanorah"
              ]
            }
          `}
        </script>
      </Helmet>

      {/* Your website components */}
      <NavBar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
