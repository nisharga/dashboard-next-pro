import type { Metadata } from 'next';
import '../styles/globals.css';
import {
    BALOO_FONT,
    FONT_DEFAULT,
    NUNITO_FONT,
    SITE_DESCRIPTION_DEFAULT,
    SITE_DOMAIN,
    SITE_TITLE_DEFAULT,
    SITE_TITLE_TEMPLATE_DEFAULT,
    SITE_VERIFICATION_GOOGLE_DEFAULT
} from '@/configs';
import { AosInit, ScrollToTop } from '@/components';
import dynamic from 'next/dynamic';
import { ReactQuery } from '@/providers';

const Header = dynamic(
    () =>
        import('@/components/shared').then((mod) => ({
            default: mod.Header
        })),
    {
        ssr: true
    }
);
const TheFooter = dynamic(
    () =>
        import('@/components/shared').then((mod) => ({
            default: mod.TheFooter
        })),
    {
        ssr: true
    }
);

export const metadata: Metadata = {
    metadataBase: new URL(SITE_DOMAIN),
    title: {
        default: SITE_TITLE_DEFAULT,
        template: SITE_TITLE_TEMPLATE_DEFAULT
    },
    description: SITE_DESCRIPTION_DEFAULT,
    verification: {
        google: SITE_VERIFICATION_GOOGLE_DEFAULT
    }
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body
                className={`${FONT_DEFAULT.variable} ${NUNITO_FONT.variable} ${BALOO_FONT.variable} antialiased`}
            >
                <ReactQuery>
                    <Header />
                    {children}
                    <TheFooter />
                </ReactQuery>
                <ScrollToTop />
                <AosInit />
            </body>
        </html>
    );
}
