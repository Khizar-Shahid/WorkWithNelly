import React from 'react';
import type { Metadata } from 'next';
import BlogBrowser from '@/components/BlogBrowser';
import { client } from '@/sanity/lib/client';
import { postsQuery } from '@/sanity/lib/queries';
import { blogJsonLd } from '@/lib/jsonld';

export const metadata: Metadata = {
  title: 'Mortgage & Home Loan Blog | Nelly Santiesteban',
  description:
    'Expert mortgage advice, Miami real estate trends, FHA loan guides, and refinancing tips from licensed loan officer Nelly Santiesteban.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Mortgage & Home Loan Blog | Nelly Santiesteban',
    description:
      'Expert mortgage advice, Miami real estate trends, FHA loan guides, and refinancing tips from licensed loan officer Nelly Santiesteban.',
    url: 'https://workwithnelly.com/blog',
    siteName: 'WorkWithNelly',
    type: 'website',
  },
};

export const revalidate = 60; // Fallback ISR revalidation every 60s in addition to instant webhooks

export default async function BlogIndexPage() {
  let posts: any[] = [];
  try {
    posts = await client.fetch(postsQuery);
  } catch (err) {
    console.error('Error fetching blog posts from Sanity:', err);
  }

  const formattedPosts = (posts || []).map((post: any) => ({
    id: post._id,
    slug: post.slug,
    title: post.title,
    category: post.category || 'Mortgage Tips',
    publishedAt: post.publishedAt,
    readTime: '4 min read',
    excerpt: post.excerpt || '',
    mainImage: post.mainImage || null,
    author: post.author || 'Nelly Santiesteban',
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      {/* Standard Site Hero */}
      <section className="hero" style={{ minHeight: '52vh', display: 'flex', alignItems: 'center' }}>
        <div className="hero-bg">
          <img src="/assets/nelly_hero_house.jpg" alt="Mortgage Insights & Guides" className="hero-photo" />
        </div>
        <div className="hero-overlay"></div>
        <div className="wrap hero-content">
          <span className="eyebrow">Miami Mortgage Insights &amp; Guides</span>
          <h1 className="serif kinetic" data-kinetic-mode="load" style={{ maxWidth: '840px' }}>
            Mortgage Knowledge, <span className="text-[#C9A227] italic font-normal">Made Simple.</span>
          </h1>
          <p className="sub" style={{ maxWidth: '720px' }}>
            Clear, actionable financing advice, Miami market trends, and step-by-step
            strategies to guide you home with confidence.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section style={{ padding: '70px 0 120px 0', background: 'var(--cream)' }}>
        <div className="wrap">
          <BlogBrowser initialPosts={formattedPosts} />
        </div>
      </section>
    </>
  );
}
