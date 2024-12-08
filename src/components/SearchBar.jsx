import React, { useState, useEffect } from 'react';
import { Search, Filter, X, Layers } from 'lucide-react';

// Same BLOG_POSTS data from previous implementation
const BLOG_POSTS = [
    // Technology Posts
    {
      id: 1,
      title: "The Future of Artificial Intelligence",
      content: "Exploring how AI is transforming industries, from healthcare to finance. Machine learning algorithms are becoming increasingly sophisticated, promising revolutionary changes in how we work, live, and interact with technology.",
      author: "Dr. Emily Chen",
      category: "Technology",
      date: "2024-02-15",
      readTime: "7 min read"
    },
    {
      id: 2,
      title: "React vs Vue: A Comprehensive Comparison",
      content: "Diving deep into the pros and cons of two popular JavaScript frameworks. We'll analyze performance, learning curve, community support, and real-world application scenarios to help developers make informed choices.",
      author: "Michael Rodriguez",
      category: "Web Development",
      date: "2024-01-22",
      readTime: "9 min read"
    },
    {
      id: 3,
      title: "Quantum Computing: Breaking the Impossible",
      content: "An in-depth look at quantum computing's potential to solve complex problems beyond classical computer capabilities. We examine recent breakthroughs and potential applications in cryptography, drug discovery, and climate modeling.",
      author: "Dr. Sarah Thompson",
      category: "Technology",
      date: "2024-03-10",
      readTime: "12 min read"
    },
    
    // Design Posts
    {
      id: 4,
      title: "Modern UI/UX Design Trends for 2024",
      content: "A comprehensive guide to the latest user interface and user experience design trends. From minimalist designs to interactive micro-animations, we explore how design is becoming more intuitive and user-centered.",
      author: "Alex Wong",
      category: "Design",
      date: "2024-02-05",
      readTime: "6 min read"
    },
    {
      id: 5,
      title: "The Psychology of Color in Web Design",
      content: "Understanding how color impacts user perception and behavior. We break down color theory, emotional responses, and practical applications for creating more engaging and effective digital experiences.",
      author: "Lisa Greenfield",
      category: "Design",
      date: "2024-01-15",
      readTime: "8 min read"
    },
    
    // Science Posts
    {
      id: 6,
      title: "Climate Change: Innovative Solutions",
      content: "Exploring groundbreaking technologies and strategies to combat global warming. From carbon capture to renewable energy innovations, we examine how science and technology are addressing one of humanity's greatest challenges.",
      author: "Dr. James Carter",
      category: "Science",
      date: "2024-03-20",
      readTime: "10 min read"
    },
    {
      id: 7,
      title: "The Human Genome: Latest Discoveries",
      content: "Recent advancements in genetic research are revealing unprecedented insights into human biology. We discuss breakthrough studies that are reshaping our understanding of genetics, heredity, and potential medical treatments.",
      author: "Dr. Maria Rodriguez",
      category: "Science",
      date: "2024-02-28",
      readTime: "11 min read"
    },
    
    // Health & Wellness Posts
    {
      id: 8,
      title: "Mental Health in the Digital Age",
      content: "Examining the psychological impacts of constant connectivity and digital stress. We provide strategies for maintaining mental wellness, understanding digital burnout, and creating healthy technology habits.",
      author: "Dr. Rebecca Liu",
      category: "Health",
      date: "2024-01-30",
      readTime: "7 min read"
    },
    {
      id: 9,
      title: "Nutrition Science: Debunking Popular Myths",
      content: "A scientific approach to understanding nutrition, separating fact from fiction. We analyze popular diet trends, examine scientific evidence, and provide balanced insights into healthy eating.",
      author: "Mark Stevens",
      category: "Health",
      date: "2024-02-18",
      readTime: "9 min read"
    },
    
    // Business & Technology
    {
      id: 10,
      title: "Blockchain Beyond Cryptocurrency",
      content: "Exploring the transformative potential of blockchain technology in industries beyond finance. We examine applications in supply chain, healthcare, voting systems, and digital identity verification.",
      author: "Jennifer Kim",
      category: "Technology",
      date: "2024-03-05",
      readTime: "8 min read"
    }
  ];

const SearchApp = () => {
  // State management
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(BLOG_POSTS);

  // Search and filter logic
  useEffect(() => {
    const results = BLOG_POSTS.filter(post => 
      (post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
       post.author.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (category === '' || post.category === category)
    );
    setFilteredPosts(results);
  }, [searchTerm, category]);

  // Clear search
  const clearSearch = () => {
    setSearchTerm('');
    setCategory('');
  };

  // Unique categories
  const categories = [...new Set(BLOG_POSTS.map(post => post.category))];

  // Category color mapping
  const categoryColors = {
    'Technology': 'bg-blue-100 text-blue-800',
    'Web Development': 'bg-green-100 text-green-800',
    'Design': 'bg-purple-100 text-purple-800',
    'Science': 'bg-indigo-100 text-indigo-800',
    'Health': 'bg-pink-100 text-pink-800'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto relative z-10 p-4 md:p-8">
        {/* Search Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text pb-3 bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            Insight Explorer
          </h1>
          <p className="text-gray-800 text-lg">Discover, Learn, Grow</p>
        </div>

        {/* Search Container */}
        <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-2xl p-6 mb-6 border border-gray-100">
          {/* Search Input */}
          <div className="relative mb-4">
            <input 
              type="text"
              placeholder="Search articles by title, content, or author..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-12 py-4 border-2 border-blue-200 rounded-xl focus:ring-4 focus:ring-blue-300 focus:border-blue-400 transition-all text-gray-700"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500 w-6 h-6" />
            {searchTerm && (
              <button 
                onClick={clearSearch}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            )}
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-4">
            <select 
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-4 py-3 border-2 border-purple-200 rounded-xl focus:ring-4 focus:ring-purple-300 text-gray-700"
            >
              <option value="">All Categories</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Search Stats */}
          <div className="text-sm text-gray-600 mb-2 flex items-center">
            <Layers className="mr-2 w-4 h-4 text-blue-500" />
            {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
          </div>
        </div>

        {/* Search Results */}
        <div className="space-y-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center text-gray-500 py-8 bg-white/80 backdrop-blur-lg rounded-2xl">
              <p>No articles found</p>
            </div>
          ) : (
            filteredPosts.map(post => (
              <div 
                key={post.id} 
                className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h2 className="text-xl font-bold text-gray-800 flex-grow pr-4">{post.title}</h2>
                    <span className={`${categoryColors[post.category]} px-3 py-1 rounded-full text-sm font-medium`}>
                      {post.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">{post.content.slice(0, 200)}...</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <div>
                      <span className="font-semibold text-blue-700">{post.author}</span>
                      <span className="mx-2">•</span>
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span className="text-purple-600 font-medium">{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchApp;