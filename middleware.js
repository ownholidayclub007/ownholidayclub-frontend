import { NextResponse } from 'next/server';

export function middleware(request) {
  const userAgent = request.headers.get('user-agent') || '';

  const isAndroid = /android/i.test(userAgent);
  const isIOS = /iphone|ipad|ipod/i.test(userAgent);

  let redirectUrl;

  if (isAndroid) {
    redirectUrl =
      'https://play.google.com/store/apps/details?id=com.ownholidayclub.app';
  } else if (isIOS) {
    redirectUrl =
      'https://apps.apple.com/in/app/own-holiday-club/id6741328417';
  } else {
    redirectUrl =
      'https://play.google.com/store/apps/details?id=com.ownholidayclub.app';
  }

  return NextResponse.redirect(redirectUrl, 307);
}

export const config = {
  matcher: '/app',
};