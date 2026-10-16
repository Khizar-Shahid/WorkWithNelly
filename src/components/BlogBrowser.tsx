'use client';

import React, { useState, useMemo } from 'react';
import BlogCard, { BlogPostItem } from '@/components/BlogCard';
import { Search, Sparkles } from 'lucide-react';
import Link from 'next/link';

interface BlogBrowserProps {
  initialPosts: BlogPostItem[];
}

export default function BlogBrowser({ initialPosts }: BlogBrowserProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Extract unique categories from actual posts
  const categories = useMemo(() => {
    const set = new Set<string>();
    initialPosts.forEach((post) => {
      if (post.category) set.add(post.category);
    });
    return ['All', ...Array.from(set)];
  }, [initialPosts]);

  // Filter posts by category and search query
  const filteredPosts = useMemo(() => {
    return initialPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All' || post.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (post.excerpt && post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (post.category && post.category.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [initialPosts, selectedCategory, searchQuery]);

  return (
    <div className="w-full">
      {/* Search and Category Filter Toolbar (Only shown when articles exist) */}
      {initialPosts.length > 0 && (
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12 pb-6 border-b border-[#E7E7E7]">
          {/* Category Pills */}
          <div
            className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none"
            role="tablist"
            aria-label="Filter blog posts by category"
          >
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-[#1E2F5A] text-white shadow-md shadow-[#1E2F5A]/20 scale-[1.02]'
                      : 'bg-white text-[#465478] hover:bg-[#F5EED8] hover:text-[#1E2F5A] border border-[#E7E7E7]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72 flex-shrink-0">
            <Search className="w-4 h-4 text-[#5B6C9D] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search guides & tips..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm bg-white border border-[#E7E7E7] rounded-full focus:outline-none focus:ring-2 focus:ring-[#C9A227] focus:border-transparent text-[#1E2F5A] placeholder-[#5B6C9D]"
            />
          </div>
        </div>
      )}

      {/* Grid or Empty State */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div key={post.id} className="h-full">
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      ) : (
        <div
          className="text-center bg-white border border-[#E7E7E7] max-w-2xl mx-auto"
          style={{
            borderRadius: '28px',
            padding: 'clamp(3.5rem, 6vw, 4.75rem) clamp(2rem, 5vw, 3.5rem)',
            boxShadow: '0 20px 50px -15px rgba(19, 29, 56, 0.08)',
          }}
        >
          {/* Icon Badge */}
          <div
            className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center text-[#C9A227] border border-[#C9A227]/25 shadow-sm"
            style={{ backgroundColor: '#F5EED8', marginBottom: '1.75rem' }}
          >
            <Sparkles className="w-8 h-8 stroke-[1.8]" />
          </div>

          {/* Heading */}
          <h3
            className="font-bold text-[#1E2F5A]"
            style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: 'clamp(24px, 3.5vw, 32px)',
              lineHeight: 1.25,
              marginBottom: '1rem',
            }}
          >
            {initialPosts.length === 0 ? 'Articles Coming Soon!' : 'No Matching Articles'}
          </h3>

          {/* Descriptive Text */}
          <p
            style={{
              fontSize: '16px',
              lineHeight: 1.8,
              color: 'var(--ink-soft, #4A4A4A)',
              maxWidth: '480px',
              margin: '0 auto 2.25rem auto',
            }}
          >
            {initialPosts.length === 0
              ? 'Nelly is currently preparing insightful home buying guides and market insights. Check back soon or visit the Studio to publish your first post.'
              : `We couldn't find any articles matching your search query. Try choosing another category or clearing your search.`}
          </p>

          {/* Action Button */}
          <div>
            {initialPosts.length === 0 ? (
              <Link
                href="/studio"
                className="btn btn-primary"
                style={{
                  color: '#ffffff',
                  padding: '16px 36px',
                  fontSize: '15px',
                  boxShadow: '0 14px 30px -12px rgba(201,162,39,0.55)',
                }}
              >
                Open Sanity Studio
              </Link>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="btn btn-dark"
                style={{ color: '#ffffff', padding: '16px 32px', fontSize: '15px' }}
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
