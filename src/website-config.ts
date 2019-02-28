export interface WebsiteConfig {
  title: string;
  description: string;
  coverImage: string;
  logo: string;
  /**
   * Specifying a valid BCP 47 language helps screen readers announce text properly.
   * See: https://dequeuniversity.com/rules/axe/2.2/valid-lang
   */
  lang: string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string;
  facebook?: string;
  twitter?: string;
  /**
   * hide or show all email subscribe boxes
   */
  showSubscribe: boolean;
  /**
   * create a list on mailchimp and then create an embeddable signup form. this is the form action
   */
  mailchimpAction?: string;
  /**
   * this is the hidden input field name
   */
  mailchimpName?: string;
}

const config: WebsiteConfig = {
  title: 'tamilcode.org',
  description: 'அறிவே அழியா செல்வம்',
  coverImage: 'img/blog-cover.jpg',
  logo: 'img/tamilcode-logo.png',
  lang: 'en',
  siteUrl: 'https://tamilcode.org',
  facebook: 'https://facebook.com/paramanantham.harrison',
  twitter: 'https://twitter.com/Jacknapes',
  showSubscribe: false,
};

export default config;
