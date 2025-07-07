import { Baloo_2, Nunito, Rubik } from 'next/font/google';

export const SITE_TITLE_DEFAULT = 'Giggles Grace Book';
export const SITE_TITLE_TEMPLATE_DEFAULT = `%s - Giggles Grace Book`;
export const SITE_DESCRIPTION_DEFAULT = 'Giggles Grace Book Description';
export const SITE_VERIFICATION_GOOGLE_DEFAULT =
    'google-site-verification=PGEZaS7P-nWCjQSRzDcREVCunAapxs8Me2dfEod7Rds';

export const FONT_DEFAULT = Rubik({
    subsets: ['latin'],
    variable: '--font-rubik-sans',
    display: 'swap'
});

export const NUNITO_FONT = Nunito({
    subsets: ['latin'],
    variable: '--font-nunito',
    display: 'swap'
});

export const BALOO_FONT = Baloo_2({
    subsets: ['latin'],
    variable: '--font-baloo',
    display: 'swap'
});
