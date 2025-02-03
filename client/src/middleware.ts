import { DASHBOARD_PAGES } from './config/page-url.config';
import { EnumTokens } from './services/auth-token.service';
import { NextRequest, NextResponse } from 'next/server';

export const middleware = (req: NextRequest, res: NextResponse) => {
  const { url, cookies } = req;

  const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value;

  const isAuthPage = url.includes('/auth');

  if (isAuthPage && refreshToken) {
    return NextResponse.redirect(new URL(DASHBOARD_PAGES.HOME, url));
  }

  if (isAuthPage) {
    return NextResponse.next();
  }

  if (!refreshToken) {
    return NextResponse.redirect(new URL('/', url));
  }

  return;
};

export const config = {
  matcher: ['/i/:path*', '/auth/:path*'],
};
