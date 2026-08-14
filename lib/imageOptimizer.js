/**
 * Utility to optimize Cloudinary, Unsplash, and local image URLs dynamically.
 * Helps achieve dramatic reductions in transfer size (up to 95% savings)
 * and improves LCP/FCP performance metrics.
 */

export function getOptimizedImageUrl(url, width = 800, quality = 75) {
  if (!url || typeof url !== "string") return url;

  // Optimize Cloudinary URLs
  if (url.includes("res.cloudinary.com")) {
    if (url.includes("/upload/")) {
      // Avoid duplicating transformations if already present
      if (url.includes("/upload/f_auto") || url.includes("/upload/w_")) {
        return url;
      }
      // Use c_fill for accurate sizing, q_auto:low for aggressive compression
      const transformParams = `f_auto,q_auto:low,w_${width},c_fill,dpr_auto`;
      return url.replace("/upload/", `/upload/${transformParams}/`);
    }
  }

  // Optimize Unsplash URLs
  if (url.includes("images.unsplash.com")) {
    try {
      const urlObj = new URL(url);
      urlObj.searchParams.set("auto", "format");
      urlObj.searchParams.set("fit", "crop");
      urlObj.searchParams.set("w", String(width));
      urlObj.searchParams.set("q", String(quality));
      return urlObj.toString();
    } catch {
      return url;
    }
  }

  return url;
}
