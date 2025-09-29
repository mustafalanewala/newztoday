export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            About NewzToday
          </h1>
          <p className="text-xl text-muted-foreground">
            Your trusted source for breaking news and in-depth analysis
          </p>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <p className="text-lg leading-relaxed mb-8">
            NewzToday is a modern, comprehensive news platform dedicated to
            delivering accurate, timely, and engaging news content to readers
            worldwide. Our mission is to keep you informed about the events that
            matter most in today's fast-paced world.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="mb-6">
            We strive to provide high-quality journalism that is accessible,
            reliable, and unbiased. Our team of experienced journalists and
            editors work tirelessly to bring you the latest developments across
            politics, business, technology, sports, and more.
          </p>

          <h2 className="text-2xl font-semibold mb-4">What Sets Us Apart</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <strong>Real-time Updates:</strong> Breaking news as it happens
            </li>
            <li>
              <strong>In-depth Analysis:</strong> Comprehensive coverage of
              complex stories
            </li>
            <li>
              <strong>Multiple Perspectives:</strong> Balanced reporting from
              various viewpoints
            </li>
            <li>
              <strong>User-Friendly Design:</strong> Clean, modern interface
              optimized for all devices
            </li>
            <li>
              <strong>Community Focus:</strong> Building a community of informed
              citizens
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-lg font-medium mb-2">Accuracy</h3>
              <p>
                We prioritize factual reporting and verify information before
                publication.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Independence</h3>
              <p>
                Our editorial decisions are made free from external influences.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Transparency</h3>
              <p>
                We clearly label our sources and maintain editorial standards.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Accessibility</h3>
              <p>
                News should be available to everyone, regardless of their
                circumstances.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-4">
            Have questions, feedback, or story tips? We'd love to hear from you.
          </p>
          <p>
            Email us at:{" "}
            <a
              href="mailto:contact@newztoday.com"
              className="text-theme hover:underline"
            >
              contact@newztoday.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
