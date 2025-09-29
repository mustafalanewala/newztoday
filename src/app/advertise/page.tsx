export default function AdvertisePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Advertise with NewzToday
          </h1>
          <p className="text-xl text-muted-foreground">
            Reach millions of engaged readers with targeted advertising
            solutions
          </p>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <p className="text-lg leading-relaxed mb-8">
            NewzToday offers premium advertising opportunities to connect your
            brand with our engaged audience of news enthusiasts, professionals,
            and decision-makers. With millions of monthly visitors, we provide
            targeted reach across desktop and mobile platforms.
          </p>

          <h2 className="text-2xl font-semibold mb-6">
            Why Advertise with Us?
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-3">Targeted Audience</h3>
              <p className="text-muted-foreground">
                Reach educated, informed readers who are actively seeking news
                and information. Our audience includes professionals, students,
                and engaged citizens.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-3">High Engagement</h3>
              <p className="text-muted-foreground">
                Our readers spend significant time on our platform, providing
                ample opportunity for your message to be seen and remembered.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-3">Premium Environment</h3>
              <p className="text-muted-foreground">
                Your ads appear alongside high-quality, credible news content,
                enhancing your brand's association with reliability and
                trustworthiness.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-3">Cross-Platform Reach</h3>
              <p className="text-muted-foreground">
                Optimized campaigns across desktop, mobile, and tablet devices
                ensure your message reaches customers wherever they are.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-6">Advertising Options</h2>
          <div className="space-y-6 mb-8">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3">Display Advertising</h3>
              <p className="text-muted-foreground mb-4">
                Banner and display ads placed strategically throughout our
                content for maximum visibility.
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Leaderboard banners (728x90)</li>
                <li>Rectangle ads (300x250)</li>
                <li>Mobile-optimized formats</li>
                <li>Custom branded content integrations</li>
              </ul>
            </div>

            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3">Sponsored Content</h3>
              <p className="text-muted-foreground mb-4">
                Native advertising that seamlessly integrates with our editorial
                content.
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Branded articles and features</li>
                <li>Video content sponsorships</li>
                <li>Newsletter sponsorships</li>
                <li>Custom content series</li>
              </ul>
            </div>

            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3">
                Programmatic Advertising
              </h3>
              <p className="text-muted-foreground mb-4">
                Automated, data-driven campaigns that target specific audiences
                and behaviors.
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Real-time bidding</li>
                <li>Behavioral targeting</li>
                <li>Geographic targeting</li>
                <li>Device and platform targeting</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-6">Get Started</h2>
          <p className="text-lg mb-6">
            Ready to reach our engaged audience? Contact our advertising team to
            discuss your campaign goals and explore customized solutions.
          </p>

          <div className="bg-theme/10 border border-theme/20 rounded-lg p-6">
            <h3 className="text-lg font-medium mb-2">
              Contact Advertising Sales
            </h3>
            <p className="text-muted-foreground mb-4">
              Our team is ready to help you create an effective advertising
              campaign.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:advertising@newztoday.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-theme text-white font-medium rounded-lg hover:bg-theme/90 transition-colors"
              >
                Email Us
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-theme text-theme font-medium rounded-lg hover:bg-theme hover:text-white transition-colors"
              >
                Contact Form
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
