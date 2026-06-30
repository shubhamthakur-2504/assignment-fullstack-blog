import { useParams, Link } from 'react-router-dom';
import '../styles/Blog.css';
import largeImage from '../assets/large_detailed_page.jpg';
import profileImage from '../assets/small_profile.jpg';

export default function Blog() {
  const { slug } = useParams();

  // Mock blog data - in a real app, this would come from an API or database
  const blogPosts = {
    'bill-walsh-leadership': {
      title: 'The Ultimate Guide to Full-Body Workouts',
      author: 'Alex Carter',
      date: '23 JANUARY 2022',
      category: 'Fitness',
      image: largeImage,
      profileImage: profileImage,
      content: `Discover exercises that target every muscle group, helping you build strength and endurance. Perfect for beginners and seasoned gym-goers alike.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by ISSM and known for his enthusiastic style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strong bodies while maintaining mental health and confidence.

With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by ISSM and known for his enthusiastic style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strong bodies while maintaining mental health and confidence. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.`
    },
    'pm-mental-models': {
      title: 'The Ultimate Guide to Full-Body Workouts',
      author: 'Alex Carter',
      date: '23 JANUARY 2022',
      category: 'Product',
      image: largeImage,
      profileImage: profileImage,
      content: `Discover exercises that target every muscle group, helping you build strength and endurance. Perfect for beginners and seasoned gym-goers alike.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by ISSM and known for his enthusiastic style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strong bodies while maintaining mental health and confidence.

With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by ISSM and known for his enthusiastic style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strong bodies while maintaining mental health and confidence. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.`
    },
    'what-is-wireframing': {
      title: 'The Ultimate Guide to Full-Body Workouts',
      author: 'Alex Carter',
      date: '23 JANUARY 2022',
      category: 'Design',
      image: largeImage,
      profileImage: profileImage,
      content: `Discover exercises that target every muscle group, helping you build strength and endurance. Perfect for beginners and seasoned gym-goers alike.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by ISSM and known for his enthusiastic style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strong bodies while maintaining mental health and confidence.

With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by ISSM and known for his enthusiastic style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strong bodies while maintaining mental health and confidence. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.`
    },
    'collaboration-designers': {
      title: 'The Ultimate Guide to Full-Body Workouts',
      author: 'Alex Carter',
      date: '23 JANUARY 2022',
      category: 'Design',
      image: largeImage,
      profileImage: profileImage,
      content: `Discover exercises that target every muscle group, helping you build strength and endurance. Perfect for beginners and seasoned gym-goers alike.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by ISSM and known for his enthusiastic style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strong bodies while maintaining mental health and confidence.

With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by ISSM and known for his enthusiastic style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strong bodies while maintaining mental health and confidence. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.`
    },
    'top-10-javascript-frameworks': {
      title: 'The Ultimate Guide to Full-Body Workouts',
      author: 'Alex Carter',
      date: '23 JANUARY 2022',
      category: 'Development',
      image: largeImage,
      profileImage: profileImage,
      content: `Discover exercises that target every muscle group, helping you build strength and endurance. Perfect for beginners and seasoned gym-goers alike.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by ISSM and known for his enthusiastic style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strong bodies while maintaining mental health and confidence.

With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by ISSM and known for his enthusiastic style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strong bodies while maintaining mental health and confidence. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.`
    },
    'podcast-cx-community': {
      title: 'The Ultimate Guide to Full-Body Workouts',
      author: 'Alex Carter',
      date: '23 JANUARY 2022',
      category: 'Podcast',
      image: largeImage,
      profileImage: profileImage,
      content: `Discover exercises that target every muscle group, helping you build strength and endurance. Perfect for beginners and seasoned gym-goers alike.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by ISSM and known for his enthusiastic style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strong bodies while maintaining mental health and confidence.

With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by ISSM and known for his enthusiastic style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strong bodies while maintaining mental health and confidence. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.`
    },
    'basics-seo': {
      title: 'The Ultimate Guide to Full-Body Workouts',
      author: 'Alex Carter',
      date: '23 JANUARY 2022',
      category: 'Marketing',
      image: largeImage,
      profileImage: profileImage,
      content: `Discover exercises that target every muscle group, helping you build strength and endurance. Perfect for beginners and seasoned gym-goers alike.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by ISSM and known for his enthusiastic style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strong bodies while maintaining mental health and confidence.

With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by ISSM and known for his enthusiastic style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strong bodies while maintaining mental health and confidence. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.`
    },
    'advanced-react-patterns': {
      title: 'The Ultimate Guide to Full-Body Workouts',
      author: 'Alex Carter',
      date: '23 JANUARY 2022',
      category: 'Development',
      image: largeImage,
      profileImage: profileImage,
      content: `Discover exercises that target every muscle group, helping you build strength and endurance. Perfect for beginners and seasoned gym-goers alike.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by ISSM and known for his enthusiastic style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strong bodies while maintaining mental health and confidence.

With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by ISSM and known for his enthusiastic style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strong bodies while maintaining mental health and confidence. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.`
    },
    'digital-marketing-trends': {
      title: 'The Ultimate Guide to Full-Body Workouts',
      author: 'Alex Carter',
      date: '23 JANUARY 2022',
      category: 'Marketing',
      image: largeImage,
      profileImage: profileImage,
      content: `Discover exercises that target every muscle group, helping you build strength and endurance. Perfect for beginners and seasoned gym-goers alike.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by ISSM and known for his enthusiastic style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strong bodies while maintaining mental health and confidence.

With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by ISSM and known for his enthusiastic style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strong bodies while maintaining mental health and confidence. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.`
    }
  };

  const post = blogPosts[slug];

  if (!post) {
    return (
      <div className="blog-not-found">
        <h1>Blog Post Not Found</h1>
        <p>Sorry, the blog post you're looking for doesn't exist.</p>
        <Link to="/">← Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="blog-page">
      {/* Breadcrumb */}
      <div className="blog-breadcrumb">
        <Link to="/">Home</Link> / <span>Articles</span>
      </div>

      {/* Blog Content */}
      <article className="blog-article-page">
        <header className="blog-article-header">
          <h1>{post.title}</h1>
          
          {/* Featured Image */}
          <div className="featured-image">
            <img src={post.image} alt={post.title} />
          </div>

          {/* Article Meta */}
          <div className="article-meta">
            <div className="meta-author">
              <img src={post.profileImage} alt={post.author} className="author-avatar" />
              <span className="author-name">{post.author.toUpperCase()}</span>
            </div>
            <span className="meta-date">{post.date}</span>
          </div>
        </header>

        {/* Article Body */}
        <div className="article-body">
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Author Bio Section */}
        <div className="author-bio-section">
          <h3>About {post.author}</h3>
          <div className="author-bio-content">
            <img src={post.profileImage} alt={post.author} className="author-bio-image" />
            <p>
              With over a decade of experience in the fitness industry, {post.author} specializes in strength training and functional fitness. Certified by ISSM and known for his enthusiastic style, {post.author} designs workout programs that are both challenging and achievable. His passion lies in helping clients build strong bodies while maintaining mental health and confidence.
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="article-navigation">
          <Link to="/" className="nav-button prev">← Previous</Link>
          <Link to="/" className="nav-button next">Next →</Link>
        </div>
      </article>
    </div>
  );
}
