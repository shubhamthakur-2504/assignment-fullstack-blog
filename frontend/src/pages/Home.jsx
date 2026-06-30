import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Home.css';

export default function Home() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is authenticated (from localStorage)
    const user = localStorage.getItem('user');
    if (!user) {
      navigate('/login');
    } else {
      setIsAuthenticated(true);
      setLoading(false);
    }
  }, [navigate]);

  const blogs = [
    {
      id: 1,
      title: 'Bill Walsh leadership lessons',
      date: 'Nov 15, Jun 2022',
      category: 'Leadership',
      image: '115540896b913ddf85158d3f3246fba7da982400.jpg',
      slug: 'bill-walsh-leadership',
      description: 'Like to know the secrets of transforming a 2-14 team into a Super Bowl winning Dynasty?'
    },
    {
      id: 2,
      title: 'PM mental models',
      date: 'Dec 12, Jun 2022',
      category: 'Product',
      image: '2c71d31963450c58fe599c40a68f1bf74c09b3de.jpg',
      slug: 'pm-mental-models',
      description: 'Mental models are simple expressions of complex processes or relationships.'
    },
    {
      id: 3,
      title: 'What is Wireframing?',
      date: 'Tuesday, Jun 12, 2022',
      category: 'Design',
      image: '908f6e6dadefff9c6fad99774e0aa7808b2270ab.jpg',
      slug: 'what-is-wireframing',
      description: 'Introduction to Wireframing and its Principles. Learn from the best in the industry.'
    },
    {
      id: 4,
      title: 'How collaboration makes us better designers',
      date: 'Wed, 15 Jun 2022',
      category: 'Design',
      image: '950f430576ceafadb9f758a56d19a086f7505a80.jpg',
      slug: 'collaboration-designers',
      description: 'Collaboration can make our lives easier and we have the freedom to choose how we work.'
    },
    {
      id: 5,
      title: 'Our top 10 Javascript frameworks',
      date: 'Wed, 15 Jun 2022',
      category: 'Software Development',
      image: 'aa0e63b4b72dafa20ebf705cb3408f9d3a4343ef.jpg',
      slug: 'top-10-javascript-frameworks',
      description: 'JavaScript frameworks make development easy with extensive features and high-quality documentation.'
    },
    {
      id: 6,
      title: 'Podcast: Creating a better CX Community',
      date: 'Tuesday, Jun 12, 2022',
      category: 'Podcast',
      image: 'b86da4b5ab8c0e971321e0daafdbc3bc3adffb48.jpg',
      slug: 'podcast-cx-community',
      description: 'Starting a community doesn\'t need to be complicated, but how do you get started?'
    },
    {
      id: 7,
      title: 'The Basics of SEO',
      date: 'Thursday, Jun 10, 2022',
      category: 'Marketing',
      image: '115540896b913ddf85158d3f3246fba7da982400.jpg',
      slug: 'basics-seo',
      description: 'Learn the fundamentals of search engine optimization and how to improve your online presence.'
    },
    {
      id: 8,
      title: 'Advanced React Patterns',
      date: 'Monday, Jun 8, 2022',
      category: 'Development',
      image: '2c71d31963450c58fe599c40a68f1bf74c09b3de.jpg',
      slug: 'advanced-react-patterns',
      description: 'Deep dive into advanced patterns and best practices for building scalable React applications.'
    },
    {
      id: 9,
      title: 'Digital Marketing Trends 2022',
      date: 'Friday, Jun 5, 2022',
      category: 'Marketing',
      image: '908f6e6dadefff9c6fad99774e0aa7808b2270ab.jpg',
      slug: 'digital-marketing-trends',
      description: 'Explore the latest trends and strategies in digital marketing for 2022 and beyond.'
    }
  ];

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="home-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-content">
          <Link to="/" className="logo">Home</Link>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      </nav>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="newsletter-content">
          <span className="newsletter-tag">NEW</span>
          <h2>Stories and interviews</h2>
          <p>Subscribe to learn about new product features, the latest in technology, solutions, and updates.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button className="subscribe-button">Subscribe</button>
          </div>
        </div>
      </section>

      {/* All Blog Posts Section */}
      <section className="blogs-section">
        <div className="blogs-header">
          <h2>All blog posts</h2>
        </div>

        {/* Blogs Grid 3x3 */}
        <div className="blogs-grid">
          {blogs.map((blog) => (
            <Link key={blog.id} to={`/blog/${blog.slug}`} className="blog-card">
              <div className="blog-card-image">
                <img src={new URL(`../assets/${blog.image}`, import.meta.url).href} alt={blog.title} />
              </div>
              <div className="blog-card-content">
                <span className="blog-date">{blog.date}</span>
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
                <div className="blog-categories">
                  <span className="category-tag">{blog.category}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination">
          <button className="prev-button">← Previous</button>
          <div className="page-numbers">
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <button className="page-btn">4</button>
            <button className="page-btn">5</button>
            <span className="dots">...</span>
            <button className="page-btn">10</button>
          </div>
          <button className="next-button">Next →</button>
        </div>
      </section>
    </div>
  );
}
