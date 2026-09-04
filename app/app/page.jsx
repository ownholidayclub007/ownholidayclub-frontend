// 'use client';

// import { useEffect } from 'react';

// export default function AppRedirect() {
//   useEffect(() => {
//     const userAgent =
//       typeof navigator !== 'undefined' ? navigator.userAgent : '';

//     const isAndroid = /android/i.test(userAgent);
//     const isIOS = /iphone|ipad|ipod/i.test(userAgent);

//     const redirectUrl = isAndroid
//       ? 'https://play.google.com/store/apps/details?id=com.ownholidayclub.app'
//       : isIOS
//         ? 'https://apps.apple.com/in/app/own-holiday-club/id6741328417'
//         : 'https://play.google.com/store/apps/details?id=com.ownholidayclub.app';

//     window.location.replace(redirectUrl);
//   }, []);

//   return null;
// }


export default function AppPage() {
  return null;
}