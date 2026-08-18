
import "./globals.css";
import Script from "next/script";
import AppShell from "@/components/AppShell";
import SmoothScroll from "@/components/SmoothScroll";
import { siteUrl } from "@/lib/site-config";
import {
  DEFAULT_OG_IMAGE,
  DEFAULT_SITE_DESCRIPTION,
  SITE_NAME,
  resolveMetadataImage,
} from "@/lib/metadata";

const GTM_ID = "GTM-NL2D8S75";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: DEFAULT_SITE_DESCRIPTION,
    images: [
      {
        url: resolveMetadataImage(DEFAULT_OG_IMAGE),
        width: 1376,
        height: 768,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: DEFAULT_SITE_DESCRIPTION,
    images: [resolveMetadataImage(DEFAULT_OG_IMAGE)],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect for speed */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://api.ownholidayclub.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,300;1,400&family=Inter:wght@400;500;600;700;900&family=Outfit:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@600;700&display=swap"
        />
      </head>
      <body className="bg-slate-50 text-slate-800 flex flex-col min-h-screen">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <SmoothScroll>
          <AppShell>{children}</AppShell>
        </SmoothScroll>
        {/* GTM deferred — loads after page is interactive, saves ~127 KiB blocking JS */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      </body>
    </html>
  );
}
