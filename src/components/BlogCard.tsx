import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Clock, Bookmark } from 'lucide-react';
import { urlForImage } from '@/sanity/lib/image';

export interface BlogPostItem {
  id: string;
  slug: string;
  title: string;
  category?: string;
  publishedAt: string;
  readTime?: string;
  excerpt?: string;
  mainImage?: any;
  author?: string;
}

export default function BlogCard({ post }: { post: BlogPostItem }) {
  const imageUrl = post.mainImage ? urlForImage(post.mainImage).width(720).height(480).url() : null;
  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
    : '';

  return (
    <article className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#E7E7E7] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(19,29,56,0.14)] hover:border-[#C9A227]/40 h-full">
      {/* Media Container */}
      <Link href={`/blog/${post.slug}`} className="block relative w-full aspect-[16/10] overflow-hidden bg-[#FAF6F1]">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#1E2F5A]/5 to-[#C9A227]/10 text-[#1E2F5A]/40">
            <Bookmark className="w-10 h-10 mb-2 stroke-[1.5]" />
            <span className="text-xs uppercase tracking-widest font-semibold">WorkWithNelly</span>
          </div>
        )}

        {/* Category Pill Over Image */}
        {post.category && (
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-block bg-[#1E2F5A]/90 backdrop-blur-md text-[#F5EED8] text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full shadow-sm border border-white/10">
              {post.category}
            </span>
          </div>
        )}
      </Link>

      {/* Card Content */}
      <div className="p-6 md:p-7 flex flex-col flex-1">
        {/* Meta info */}
        <div className="flex items-center gap-3 text-xs text-[#5B6C9D] mb-3 font-medium">
          {formattedDate && (
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#C9A227]" />
              {formattedDate}
            </span>
          )}
          {post.readTime && (
            <>
              <span className="text-[#C9A227]">&bull;</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#C9A227]" />
                {post.readTime}
              </span>
            </>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold font-['Sora',sans-serif] text-[#1E2F5A] leading-snug mb-3 group-hover:text-[#C9A227] transition-colors">
          <Link href={`/blog/${post.slug}`} className="focus:outline-none">
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="text-sm md:text-base text-[#4A4A4A] leading-relaxed line-clamp-3 mb-6 flex-1">
            {post.excerpt}
          </p>
        )}

        {/* CTA link */}
        <div className="pt-4 border-t border-[#E7E7E7]/80 flex items-center justify-between mt-auto">
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1E2F5A] hover:text-[#C9A227] transition-colors"
          >
            <span>Read Full Guide</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          {post.author && (
            <span className="text-xs text-[#5B6C9D] font-medium hidden sm:inline">
              By {post.author.split(' ')[0]}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
