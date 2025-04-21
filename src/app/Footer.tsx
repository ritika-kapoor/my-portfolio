'use client';

export default function Footer() {
  return (
    <footer className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-text-light">
          <p className="text-sm">
            © {new Date().getFullYear()} Rio. All rights reserved.
          </p>
          <p className="text-sm mt-2 text-secondary-light">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
} 