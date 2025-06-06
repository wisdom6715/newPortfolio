"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Navbar from "@/components/navbar"
import { Calendar, Clock, User, Search, Filter } from "lucide-react"
import { useState } from "react"

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  const textRevealVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
      },
    },
  }

  const categories = [
    "All",
    "Data Analysis",
    "Business Insights",
    "Data Visualization",
    "Power BI",
    "SQL & Databases",
    "Python for Data",
    "Cloud Computing",
    "DevOps & Engineering",
    "AI & Machine Learning",
    "Career & Growth",
    "Tools & Tutorials",
    "Tech Industry Insights",
  ]

  const blogPosts = [
    {
      id: 1,
      title: "Nigeria’s economic future rests on tech — Not oil",
      excerpt:
        "As AI, data science, cloud computing, and digital entrepreneurship reshape global economies, the shift toward knowledge-based, innovation-driven growth is clear. Nations investing in technology and digital infrastructure are seeing gains in productivity, jobs, and competitiveness.",
      date: "January 25, 2023",
      readTime: "8 min read",
      author: "Oladosu Ibrahim",
      image: "/images/blog1.png",
      category: "Business Insights",
      url: "https://businessday.ng/opinion/article/nigerias-economic-future-rests-on-tech-not-oil/",
    },

    {
      id: 2,
      title: "AI isn’t taking our jobs; it’s transforming them",
      excerpt:
        "As the world accelerates into a new era powered by artificial intelligence, machine learning, cloud computing, and automation, we are witnessing a fundamental shift in the nature of work itself. Rather than eliminating jobs, AI is reshaping roles, streamlining workflows, and creating entirely new categories of employment across industries—from healthcare and finance to education and creative arts.",
      date: "March 18, 2025",
      readTime: "5 min read",
      author: "Oladosu Ibrahim",
      image: "https://cdn.businessday.ng/2023/07/xI25SKwE-Artificial-intelligence.png",
      category: "Business Insights",
      url: "https://businessday.ng/opinion/article/ai-isnt-taking-our-jobs-its-transforming-them/",
    },

    {
      id: 3,
      title: "Cloud adoption in Nigeria’s banking: The key to a modern, inclusive future",
      excerpt:
        "Cloud computing is no longer a futuristic concept—it is the engine powering modern banking systems around the world. From enabling real-time transactions to supporting scalable digital services, cloud technology is redefining how financial institutions operate and engage with customers.",
      date: "January 10, 2025",
      readTime: "6 min read",
      author: "Oladosu Ibrahim",
      image: "https://cdn.businessday.ng/wp-content/uploads/2025/01/unnamed-3.jpg",
      category: "Business Insights",
      url: "https://businessday.ng/opinion/article/cloud-adoption-in-nigerias-banking-the-key-to-a-modern-inclusive-future/",
    },
    {
      id: 4,
      title: "Multi-Cloud Strategy and How Can It Benefit Enterprises",
      excerpt:
        "A multi-cloud strategy involves using multiple cloud computing services from different providers. This article explores the benefits and challenges of implementing a multi-cloud strategy for enterprise organizations.",
      date: "January 25, 2023",
      readTime: "8 min read",
      author: "Oladosu Ibrahim",
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2070&auto=format&fit=crop",
      category: "Cloud Computing",
      url: "https://sudais.hashnode.dev/multi-cloud-strategy-and-how-can-it-benefit-enterprises",
    },

    {
      id: 5,
      title: "The Role of Excel in Business Intelligence and Data-Driven Decision-Making",
      excerpt:
        "As businesses across the globe embrace data as the new oil, the importance of tools that enable efficient data handling, analysis, and visualization cannot be overstated. In this age of real-time insights and agile decision-making, Business Intelligence (BI) has become the backbone of competitive advantage. At the heart of many BI strategies lies a familiar yet powerful tool—Microsoft Excel.",
      date: "January 10, 2025",
      readTime: "6 min read",
      author: "Oladosu Ibrahim",
      image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1742055577748/6c9cdd55-6036-4b1a-955e-c6b42e319fac.png",
      category: "Business Insights",
      url: "https://sudais.hashnode.dev/the-role-of-excel-in-business-intelligence-and-data-driven-decision-making",
    },
    {
      id: 6,
      title: "Predictive Analytics Failures in Business: What Went Wrong and Why",
      excerpt:
        "As businesses around the world race to stay ahead in an increasingly data-driven landscape, predictive analytics has emerged as a game-changing tool. From forecasting customer behavior to optimizing supply chains, companies are betting big on data to drive smarter decisions and gain competitive advantage.",
      date: "April 6, 2025",
      readTime: "5 min read",
      author: "Oladosu Ibrahim",
      image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1743949980107/7e817e15-8e8d-4b9a-b07d-35bc6c027a53.jpeg",
      category: "Business Insights",
      url: "https://sudais.hashnode.dev/predictive-analytics-failures-in-business-what-went-wrong-and-why",
    }
  ]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = activeCategory === "All" || post.category === activeCategory

    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <div className="bg-[#004a99]">
        <Navbar activePage="blog" />
      </div>

      {/* Hero Section */}
      <motion.div
        className="relative h-[50vh] md:h-[60vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#004a99]/90 to-[#1a1a1a]/90 z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop')] bg-cover bg-center opacity-40" />

        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4"
              variants={textRevealVariants}
              initial="hidden"
              animate="visible"
            >
              Ibrahim&apos;s Cloud & Data Chronicles
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8"
              variants={textRevealVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              Exploring the world of data, cloud, and DevOps through practical insights and tutorials
            </motion.p>

            <motion.div
              className="relative max-w-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-5 py-3 pr-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300" size={20} />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.main
        className="container mx-auto px-4 py-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Category Filter */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex items-center mb-6">
            <Filter size={20} className="mr-2 text-green-500" />
            <h2 className="text-xl font-semibold">Filter by Category</h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-green-500 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Featured Post */}
        {filteredPosts.length > 0 && (
          <motion.div variants={itemVariants} className="mb-16">
            <a href={filteredPosts[0].url} target="_blank" rel="noopener noreferrer">
              <div className="relative rounded-lg overflow-hidden group">
                <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                  <Image
                    src={filteredPosts[0].image || "/placeholder.svg?height=800&width=1200"}
                    alt={filteredPosts[0].title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = "/placeholder.svg?height=800&width=1200"
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <span className="inline-block bg-green-500 text-white text-xs font-bold px-3 py-1 rounded mb-4">
                      {filteredPosts[0].category}
                    </span>
                    <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white group-hover:text-green-400 transition-colors">
                      {filteredPosts[0].title}
                    </h2>
                    <p className="text-gray-300 mb-6 max-w-3xl">{filteredPosts[0].excerpt}</p>

                    <div className="flex flex-wrap items-center text-sm text-gray-400 mb-4 gap-4">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {filteredPosts[0].date}
                      </div>
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {filteredPosts[0].readTime}
                      </div>
                      <div className="flex items-center">
                        <User size={14} className="mr-1" />
                        {filteredPosts[0].author}
                      </div>
                    </div>

                    <motion.div
                      className="flex items-center text-green-500 font-medium"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      Read Article
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-1"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </a>
          </motion.div>
        )}

        {/* No Results Message */}
        {filteredPosts.length === 0 && (
          <motion.div variants={itemVariants} className="text-center py-16">
            <div className="text-gray-400 text-lg mb-4">No articles found matching your search criteria</div>
            <button
              onClick={() => {
                setSearchQuery("")
                setActiveCategory("All")
              }}
              className="text-green-500 hover:text-green-400 font-medium"
            >
              Clear filters
            </button>
          </motion.div>
        )}

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post, index) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 50,
                }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg h-full flex flex-col"
              >
                <a href={post.url} target="_blank" rel="noopener noreferrer" className="h-full flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg?height=400&width=600"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = "/placeholder.svg?height=400&width=600"
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h2 className="text-xl font-bold mb-3 hover:text-green-500 transition-colors">{post.title}</h2>

                    <div className="flex flex-wrap items-center text-sm text-gray-400 mb-4 gap-4">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {post.readTime}
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 flex-grow">{post.excerpt}</p>

                    <motion.div
                      className="flex items-center text-green-500 font-medium mt-auto group"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-1 group-hover:translate-x-2 transition-transform"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </motion.div>
                  </div>
                </a>
              </motion.article>
            ))}
          </div>
        )}

        {/* Newsletter Signup */}
        <motion.div
          variants={itemVariants}
          className="mt-20 bg-gray-800 rounded-lg p-8 md:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to My Newsletter</h2>
              <p className="text-gray-300 mb-8">
                Get the latest articles, tutorials, and insights on data engineering, cloud computing, and DevOps
                delivered straight to your inbox.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-green-500"
                />
                <motion.button
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md transition-colors font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Popular Topics */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Popular Topics</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Data Analysis", icon: "📊", color: "bg-blue-500" },
              { name: "Power BI", icon: "📈", color: "bg-yellow-500" },
              { name: "Cloud Computing", icon: "☁️", color: "bg-purple-500" },
              { name: "SQL & Databases", icon: "🗄️", color: "bg-green-600" },
              { name: "Python for Data", icon: "🐍", color: "bg-blue-600" },
              { name: "DevOps & Engineering", icon: "⚙️", color: "bg-red-500" },
              { name: "AI & Machine Learning", icon: "🤖", color: "bg-indigo-500" },
              { name: "Business Insights", icon: "💼", color: "bg-orange-500" },
            ].map((topic, index) => (
              <motion.div
                key={topic.name}
                className={`${topic.color} rounded-lg p-6 text-white cursor-pointer hover:shadow-lg transition-shadow`}
                whileHover={{ y: -5, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="text-3xl mb-2">{topic.icon}</div>
                <h3 className="font-semibold">{topic.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.main>
    </div>
  )
}
