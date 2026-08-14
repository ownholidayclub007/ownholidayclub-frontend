// "use client";

// import React from "react";
// import { Facebook, Linkedin, Twitter } from "lucide-react";

// export default function Body({ articleData }) {
//   const contentMarkup = articleData.content || `<p>${articleData.excerpt}</p>`;

//   return (
//     <section className="py-16 md:py-24 relative bg-white">
//       {/* Sticky Share (Left Side) - Hidden on smaller screens */}
//       <div className="hidden xl:flex flex-col gap-5 absolute top-32 left-16 sticky-share items-center">
//         <div
//           className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 rotate-180"
//           style={{ writingMode: "vertical-rl" }}
//         >
//           Share Story
//         </div>
//         <div className="w-[1px] h-16 bg-slate-200 my-2"></div>
//         <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-amber-600 hover:border-amber-600 hover:bg-amber-50 transition-all shadow-sm">
//           <Twitter size={16} />
//         </button>
//         <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-amber-600 hover:border-amber-600 hover:bg-amber-50 transition-all shadow-sm">
//           <Facebook size={16} />
//         </button>
//         <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-amber-600 hover:border-amber-600 hover:bg-amber-50 transition-all shadow-sm">
//           <Linkedin size={16} />
//         </button>
//       </div>

//       <div className="max-w-[760px] mx-auto px-6">
//         {/* Professional Excerpt / Lead Paragraph */}
//         {articleData.excerpt && (
//           <div className="mb-12 pb-10 border-b border-slate-200">
//             <p className="text-xl md:text-2xl font-serif text-slate-800 leading-relaxed font-medium">
//               {articleData.excerpt}
//             </p>
//           </div>
//         )}

//         {/* Article Content */}
//         <div
//           className="rich-text-content text-[17px] md:text-[19px] text-slate-700 leading-[1.85] font-sans font-normal"
//           dangerouslySetInnerHTML={{ __html: contentMarkup }}
//         />

//         {/* Tags and Bottom Share */}
//         <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
//           <div className="flex flex-wrap justify-center sm:justify-start gap-2">
//             {articleData.tags?.map((tag) => (
//               <span
//                 key={tag}
//                 className="px-4 py-1.5 rounded-full bg-slate-100 text-[11px] font-semibold uppercase tracking-wider text-slate-600 hover:bg-slate-200 hover:text-slate-900 transition-colors cursor-pointer"
//               >
//                 #{tag}
//               </span>
//             ))}
//           </div>

//           <div className="flex items-center gap-4">
//             <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
//               Share:
//             </span>
//             <button className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-amber-100 hover:text-amber-600 transition-colors">
//               <Twitter size={15} />
//             </button>
//             <button className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-amber-100 hover:text-amber-600 transition-colors">
//               <Facebook size={15} />
//             </button>
//             <button className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-amber-100 hover:text-amber-600 transition-colors">
//               <Linkedin size={15} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import React from "react";
import { Facebook, Linkedin, Twitter } from "lucide-react";

export default function Body({ articleData }) {
  const contentMarkup =
    articleData.content || `<p>${articleData.excerpt}</p>`;

  // Current blog URL
  const shareUrl = `https://www.ownholidayclub.com/blog/${articleData.slug}`;

  // Blog title
  const shareTitle =
    articleData.h1Title ||
    articleData.title ||
    articleData.blogTitle ||
    "Own Holiday Club";

  return (
    <section className="py-16 md:py-24 relative bg-white">
      {/* Sticky Share */}
      <div className="hidden xl:flex flex-col gap-5 absolute top-32 left-16 sticky-share items-center">
        <div
          className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 rotate-180"
          style={{ writingMode: "vertical-rl" }}
        >
          Share Story
        </div>

        <div className="w-[1px] h-16 bg-slate-200 my-2"></div>

        {/* Twitter / X */}
        <a
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
            shareUrl
          )}&text=${encodeURIComponent(shareTitle)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on X"
          className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-amber-600 hover:border-amber-600 hover:bg-amber-50 transition-all shadow-sm"
        >
          <Twitter size={16} />
        </a>

        {/* Facebook */}
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            shareUrl
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Facebook"
          className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-amber-600 hover:border-amber-600 hover:bg-amber-50 transition-all shadow-sm"
        >
          <Facebook size={16} />
        </a>

        {/* LinkedIn */}
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            shareUrl
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on LinkedIn"
          className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-amber-600 hover:border-amber-600 hover:bg-amber-50 transition-all shadow-sm"
        >
          <Linkedin size={16} />
        </a>
      </div>

      <div className="max-w-[760px] mx-auto px-6">
        {/* Excerpt */}
        {articleData.excerpt && (
          <div className="mb-12 pb-10 border-b border-slate-200">
            <p className="text-xl md:text-2xl font-serif text-slate-800 leading-relaxed font-medium">
              {articleData.excerpt}
            </p>
          </div>
        )}

        {/* Article Content */}
        <div
          className="rich-text-content text-[17px] md:text-[19px] text-slate-700 leading-[1.85] font-sans font-normal"
          dangerouslySetInnerHTML={{ __html: contentMarkup }}
        />

        {/* Tags + Bottom Share */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Tags */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-2">
            {articleData.tags?.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 rounded-full bg-slate-100 text-[11px] font-semibold uppercase tracking-wider text-slate-600 hover:bg-slate-200 hover:text-slate-900 transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Bottom Share */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Share:
            </span>

            {/* Twitter / X */}
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                shareUrl
              )}&text=${encodeURIComponent(shareTitle)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on X"
              className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-amber-100 hover:text-amber-600 transition-colors"
            >
              <Twitter size={15} />
            </a>

            {/* Facebook */}
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                shareUrl
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Facebook"
              className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-amber-100 hover:text-amber-600 transition-colors"
            >
              <Facebook size={15} />
            </a>

            {/* LinkedIn */}
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                shareUrl
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on LinkedIn"
              className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-amber-100 hover:text-amber-600 transition-colors"
            >
              <Linkedin size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}