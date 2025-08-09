/**
 * Global document metadata.  In addition to a concise title and description,
 * we include keywords and open graph information to help search engines and
 * social sites better understand the site’s content.  Descriptions should
 * be human‑readable and clearly reflect the purpose of the site.  See
 * https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML for
 * background on why this matters.
 */
export const metadata = {
  // Clear and concise title that appears in browser tabs and search results.
  title: 'Pavlo — AI & Automation Developer | Portfolio',
  // Descriptive sentence explaining who Pavlo is and what the portfolio offers.
  description:
    'Portfolio of Pavlo, a developer specialising in AI automation, Telegram bots and financial/health applications. Explore case studies, services and get in touch to discuss your next project.',
  // Keywords help search engines associate the site with relevant queries.
  keywords: [
    'Pavlo',
    'AI automation',
    'Telegram bot development',
    'portfolio',
    'Next.js',
    'health app',
    'finance app'
  ],
  // Open Graph settings improve the appearance of links shared on social media.
  openGraph: {
    title: 'Pavlo — AI & Automation Developer',
    description:
      'Explore AI automations, Telegram bots and other projects built by Pavlo. View case studies and contact to start your own automation project.',
    // A canonical URL would normally be provided here.  Leaving it undefined
    // means Next.js will infer the current host when generating meta tags.
    url: undefined,
    siteName: 'Pavlo Portfolio',
    locale: 'en_US',
    type: 'website'
  }
};
import './globals.css';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>{children}</body></html>);
}