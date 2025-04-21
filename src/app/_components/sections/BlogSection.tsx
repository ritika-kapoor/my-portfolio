'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import type { BlogPostPreview } from '~/types/blog';

// This will be replaced with actual data from the API
const samplePosts: BlogPostPreview[] = [
  {
    id: '1',
    title: 'Getting Started with Next.js and TypeScript',
    slug: 'getting-started-nextjs-typescript',
    excerpt: 'Learn how to set up a new Next.js project with TypeScript and best practices for modern web development.',
    createdAt: new Date('2024-03-01'),
    tags: ['Next.js', 'TypeScript', 'Web Development'],
    likes: 42
  },
  {
    id: '2',
    title: 'Understanding the T3 Stack',
    slug: 'understanding-t3-stack',
    excerpt: 'Dive deep into the T3 stack - TypeScript, Tailwind, tRPC, and how they work together to create modern applications.',
    createdAt: new Date('2024-03-02'),
    tags: ['T3 Stack', 'TypeScript', 'Tailwind'],
    likes: 35
  },
  {
    id: '3',
    title: 'From EEE to Software Development',
    slug: 'eee-to-software-development',
    excerpt: 'My personal journey transitioning from Electrical Engineering to Software Development, and lessons learned along the way.',
    createdAt: new Date('2024-03-03'),
    tags: ['Career', 'Learning', 'Personal Growth'],
    likes: 28
  }
];

export const BlogSection = () => {
  return (
    <section id="blog" className="py-24 bg-gradient-to-br from-background-dark via-background-light to-background-dark relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,233,208,0.03)_1px,transparent_1px)] bg-[length:24px_24px] opacity-30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-accent mb-6 font-serif">
            Latest from the <span className="text-secondary">Blog</span>
          </h2>
          <p className="text-accent/80 max-w-2xl mx-auto text-lg">
            Chronicles of my adventures in technology and software development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {samplePosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="vintage-card group"
            >
              <div className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium bg-secondary/10 text-accent/90 px-3 py-1 rounded-full vintage-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link href={`/blog/${post.slug}`} className="block group">
                  <h3 className="text-2xl font-bold text-accent group-hover:text-secondary transition-colors duration-300 font-serif">
                    {post.title}
                  </h3>
                </Link>
                
                <p className="text-accent/80 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex justify-between items-center text-sm text-accent/70 pt-4 border-t border-accent/10">
                  <time dateTime={post.createdAt.toISOString()} className="font-serif">
                    {post.createdAt.toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-5 h-5 text-secondary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                    </svg>
                    <span className="font-serif">{post.likes}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            href="/blog"
            className="vintage-button"
          >
            View All Posts
          </Link>
        </motion.div>
      </div>
    </section>
  );
};