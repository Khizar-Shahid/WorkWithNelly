import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import { client } from '@/sanity/lib/client';
import { postBySlugQuery, postSlugsQuery, recentPostsQuery } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/image';
import { ArrowLeft, Calendar, Clock, Share2, PhoneCall, ChevronRight } from 'lucide-react';
import BlogCard from '@/components/BlogCard';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch(postBySlugQuery, { slug });

  if (!post) {
    return {
      title: 'Article Not Found | WorkWithNelly',
    };
  }

  const imageUrl = post.mainImage ? urlForImage(post.mainImage).width(1200).height(630).url() : undefined;

  return {
    title: `${post.title} | Nelly Santiesteban Blog`,
    description: post.excerpt || `Read ${post.title} by Nelly Santiesteban, Miami Mortgage Loan Officer.`,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt || `Expert mortgage insights by Nelly Santiesteban`,
      url: `https://workwithnelly.com/blog/${slug}`,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author || 'Nelly Santiesteban'],
      images: imageUrl ? [{ url: imageUrl }] : undefined,
    },
  };
}

export async function generateStaticParams() {
  try {
    const slugs = await client.fetch(postSlugsQuery);
    if (!Array.isArray(slugs)) return [];
    return slugs.map((item: any) => ({
      slug: item.slug,
    }));
  } catch {
    return [];
  }
}

const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) return null;
      const imageUrl = urlForImage(value).width(900).url();
      return (
        <figure className="my-8">
          <img
            src={imageUrl}
            alt={value.alt || 'Article visual'}
            className="w-full rounded-2xl shadow-sm border border-[#E7E7E7]"
            loading="lazy"
          />
          {value.caption && (
            <figcaption className="text-center text-xs text-[#5B6C9D] mt-2 italic">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  block: {
    h2: ({ children }) => (
      <h2 className="text-2xl sm:text-3xl font-bold font-['Sora',sans-serif] text-[#1E2F5A] mt-10 mb-4 tracking-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl sm:text-2xl font-bold font-['Sora',sans-serif] text-[#1E2F5A] mt-8 mb-3 tracking-tight">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg sm:text-xl font-bold font-['Sora',sans-serif] text-[#1E2F5A] mt-6 mb-2">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="text-[#333333] text-base sm:text-lg leading-relaxed mb-6 font-normal">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 pl-6 border-l-4 border-[#C9A227] italic text-[#1E2F5A] font-['Fraunces',serif] text-lg sm:text-xl bg-[#FAF6F1] py-4 pr-6 rounded-r-xl">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 mb-6 space-y-2 text-[#333333] text-base sm:text-lg leading-relaxed">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 mb-6 space-y-2 text-[#333333] text-base sm:text-lg leading-relaxed">
        {children}
      </ol>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const isExternal = (value?.href || '').startsWith('http');
      return (
        <a
          href={value?.href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className="text-[#C9A227] font-semibold underline decoration-[#C9A227]/40 hover:decoration-[#C9A227] transition-colors"
        >
          {children}
        </a>
      );
    },
    strong: ({ children }) => <strong className="font-bold text-[#1E2F5A]">{children}</strong>,
  },
};

export default async function BlogPostDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await client.fetch(postBySlugQuery, { slug });

  if (!post) {
    notFound();
  }

  // Fetch recent posts for bottom recommendations
  let recentPosts: any[] = [];
  try {
    recentPosts = await client.fetch(recentPostsQuery, { currentSlug: slug });
  } catch {
    recentPosts = [];
  }

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    : '';

  const heroImageUrl = post.mainImage ? urlForImage(post.mainImage).width(1200).height(675).url() : null;

  return (
    <article className="min-h-screen bg-[var(--cream)]" style={{ paddingTop: '130px', paddingBottom: '90px' }}>
      <div className="wrap" style={{ maxWidth: '820px', margin: '0 auto' }}>
        {/* Navigation Breadcrumb */}
        <div style={{ marginBottom: '1.25rem' }}>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#1E2F5A] hover:text-[#C9A227] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>

        {/* Metadata Badges */}
        <div className="flex flex-wrap items-center gap-2.5 text-xs text-[#5B6C9D] font-medium mb-3">
          {post.category && (
            <span
              className="font-bold uppercase tracking-wider text-xs px-3 py-0.5 rounded-full"
              style={{ backgroundColor: 'rgba(201, 162, 39, 0.15)', color: 'var(--gold-dark)' }}
            >
              {post.category}
            </span>
          )}
          {formattedDate && (
            <>
              <span className="text-[#C9A227]">&bull;</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#C9A227]" />
                {formattedDate}
              </span>
            </>
          )}
          <span className="text-[#C9A227]">&bull;</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-[#C9A227]" />
            4 min read
          </span>
        </div>

        {/* Article Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-['Sora',sans-serif] text-[#1E2F5A] tracking-tight leading-[1.2] mb-5">
          {post.title}
        </h1>

        {/* Excerpt Lead (Directly above the image) */}
        {post.excerpt && (
          <p style={{ fontSize: '18px', lineHeight: 1.75, color: 'var(--ink-soft)', marginBottom: '2.25rem' }}>
            {post.excerpt}
          </p>
        )}

        {/* Hero Featured Image (Directly below Title and Excerpt) */}
        {heroImageUrl && (
          <div className="relative w-full aspect-[16/9] rounded-2xl md:rounded-3xl overflow-hidden shadow-md border border-[#E7E7E7] mb-12">
            <Image
              src={heroImageUrl}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 820px"
              className="object-cover"
            />
          </div>
        )}

        {/* Article Body Container */}
        <div className="article-body text-[#333333] text-lg leading-relaxed">
          {post.body ? (
            <PortableText value={post.body} components={portableTextComponents} />
          ) : (
            <p className="italic text-[#5B6C9D]">No content available for this post.</p>
          )}
        </div>

        {/* Author Bio Card */}
        <div className="mt-14 p-6 sm:p-8 bg-white rounded-3xl border border-[#E7E7E7] shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-[#C9A227] flex-shrink-0 shadow-md">
            <Image
              src="/assets/nelly_mark.png"
              alt="Nelly Santiesteban"
              fill
              className="object-contain p-2 bg-[#1E2F5A]"
            />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#9D7E1E] mb-1 block">
              Written By
            </span>
            <h4 className="text-xl font-bold font-['Sora',sans-serif] text-[#1E2F5A] mb-1">
              {post.author || 'Nelly Santiesteban'}
            </h4>
            <p className="text-xs font-semibold text-[#5B6C9D] mb-3">
              Mortgage Loan Officer &middot; NMLS #1808120 &middot; ACE Florida Mortgage
            </p>
            <p className="text-sm text-[#4A4A4A] leading-relaxed mb-4">
              {post.authorBio ||
                'Miami-based Mortgage Loan Officer dedicated to helping buyers and homeowners navigate financing across Florida.'}
            </p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mt-4">
              <Link
                href="/contact"
                className="btn btn-dark"
                style={{ color: '#ffffff', padding: '12px 22px', fontSize: '13px' }}
              >
                <PhoneCall className="w-3.5 h-3.5" style={{ color: '#ffffff' }} />
                <span style={{ color: '#ffffff' }}>Schedule a Consultation</span>
              </Link>
              <Link
                href="/contact"
                className="btn btn-outline"
                style={{ padding: '12px 22px', fontSize: '13px' }}
              >
                <span>Apply Online</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation & Sharing */}
        <div className="mt-10 pt-6 border-t border-[#E7E7E7] flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1E2F5A] hover:text-[#C9A227] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Articles
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#C9A227] hover:underline"
          >
            Have Questions? Talk with Nelly &rarr;
          </Link>
        </div>
      </div>

      {/* Related Posts Section */}
      {recentPosts && recentPosts.length > 0 && (
        <section className="wrap max-w-6xl mx-auto mt-20 pt-16 border-t border-[#E7E7E7]">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#9D7E1E] block mb-2">
              Keep Reading
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-['Sora',sans-serif] text-[#1E2F5A]">
              More Mortgage Insights
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.map((rPost: any) => (
              <BlogCard
                key={rPost._id}
                post={{
                  id: rPost._id,
                  slug: rPost.slug,
                  title: rPost.title,
                  category: rPost.category || 'Mortgage Tips',
                  publishedAt: rPost.publishedAt,
                  readTime: '4 min read',
                  excerpt: rPost.excerpt,
                  mainImage: rPost.mainImage,
                }}
              />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
