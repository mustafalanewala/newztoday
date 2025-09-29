export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground">
            Get in touch with the NewzToday team
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">General Inquiries</h3>
                <p className="text-muted-foreground mb-1">
                  Email us for general questions
                </p>
                <a
                  href="mailto:contact@newztoday.com"
                  className="text-theme hover:underline"
                >
                  contact@newztoday.com
                </a>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">News Tips</h3>
                <p className="text-muted-foreground mb-1">
                  Share breaking news or story ideas
                </p>
                <a
                  href="mailto:tips@newztoday.com"
                  className="text-theme hover:underline"
                >
                  tips@newztoday.com
                </a>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Press Inquiries</h3>
                <p className="text-muted-foreground mb-1">
                  For media and press relations
                </p>
                <a
                  href="mailto:press@newztoday.com"
                  className="text-theme hover:underline"
                >
                  press@newztoday.com
                </a>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Business Hours</h3>
                <p className="text-muted-foreground">
                  Monday - Friday: 9:00 AM - 6:00 PM EST
                  <br />
                  Saturday - Sunday: 10:00 AM - 4:00 PM EST
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form Placeholder */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <p className="text-muted-foreground mb-4">
                For urgent matters, please use the email addresses provided. We
                typically respond within 24-48 hours.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="How can we help you?"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700"
                    disabled
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Your message..."
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700"
                    disabled
                  />
                </div>

                <button
                  className="w-full bg-theme text-white py-2 px-4 rounded-md hover:bg-theme/90 transition-colors"
                  disabled
                >
                  Send Message (Coming Soon)
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
          <p className="text-muted-foreground mb-6">
            Stay connected with NewzToday on social media for the latest
            updates.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#"
              className="p-3 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-200 dark:hover:bg-blue-900/40 transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
