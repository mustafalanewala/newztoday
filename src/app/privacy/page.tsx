export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground">
            How we collect, use, and protect your information
          </p>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <p className="text-sm text-muted-foreground mb-8">
            Last updated: September 29, 2025
          </p>

          <p className="text-lg leading-relaxed mb-8">
            NewzToday ("we," "our," or "us") is committed to protecting your
            privacy and ensuring the security of your personal information. This
            Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you visit our website or use our services.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Information We Collect
          </h2>

          <h3 className="text-lg font-medium mb-3">Personal Information</h3>
          <p className="mb-4">
            We may collect personal information that you voluntarily provide to
            us when you:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-1">
            <li>Register for an account</li>
            <li>Subscribe to our newsletter</li>
            <li>Contact us through our website</li>
            <li>Participate in surveys or promotions</li>
            <li>Use interactive features of our service</li>
          </ul>

          <p className="mb-6">
            This information may include your name, email address, mailing
            address, phone number, and any other information you choose to
            provide.
          </p>

          <h3 className="text-lg font-medium mb-3">
            Automatically Collected Information
          </h3>
          <p className="mb-4">
            When you access our website, we automatically collect certain
            information about your device, including:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-1">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Referring website URLs</li>
            <li>Pages viewed and time spent on our site</li>
            <li>Device identifiers</li>
          </ul>

          <h3 className="text-lg font-medium mb-3">
            Cookies and Tracking Technologies
          </h3>
          <p className="mb-6">
            We use cookies, web beacons, and similar technologies to enhance
            your experience, analyze site usage, and assist in our marketing
            efforts. You can control cookie settings through your browser
            preferences.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            How We Use Your Information
          </h2>
          <p className="mb-4">
            We use the information we collect for various purposes, including:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-1">
            <li>Providing and maintaining our services</li>
            <li>Processing transactions and sending related information</li>
            <li>
              Sending newsletters and marketing communications (with your
              consent)
            </li>
            <li>
              Responding to your comments, questions, and customer service
              requests
            </li>
            <li>Improving our website and developing new features</li>
            <li>Analyzing usage patterns and trends</li>
            <li>Preventing fraud and ensuring security</li>
            <li>Complying with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">
            Information Sharing and Disclosure
          </h2>
          <p className="mb-4">
            We do not sell, trade, or otherwise transfer your personal
            information to third parties without your consent, except as
            described in this policy:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-1">
            <li>
              <strong>Service Providers:</strong> We may share information with
              trusted third-party service providers who assist us in operating
              our website and conducting our business.
            </li>
            <li>
              <strong>Legal Requirements:</strong> We may disclose information
              if required by law or in response to legal processes.
            </li>
            <li>
              <strong>Business Transfers:</strong> In the event of a merger,
              acquisition, or sale of assets, your information may be
              transferred.
            </li>
            <li>
              <strong>Protection of Rights:</strong> We may disclose information
              to protect our rights, property, or safety, or that of our users.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <p className="mb-6">
            We implement appropriate technical and organizational security
            measures to protect your personal information against unauthorized
            access, alteration, disclosure, or destruction. However, no method
            of transmission over the internet is 100% secure.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Your Rights and Choices
          </h2>
          <p className="mb-4">
            You have the following rights regarding your personal information:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-1">
            <li>
              <strong>Access:</strong> Request access to your personal
              information
            </li>
            <li>
              <strong>Correction:</strong> Request correction of inaccurate
              information
            </li>
            <li>
              <strong>Deletion:</strong> Request deletion of your personal
              information
            </li>
            <li>
              <strong>Portability:</strong> Request transfer of your information
            </li>
            <li>
              <strong>Opt-out:</strong> Unsubscribe from marketing
              communications
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
          <p className="mb-6">
            Our services are not intended for children under 13 years of age. We
            do not knowingly collect personal information from children under
            13. If we become aware that we have collected personal information
            from a child under 13, we will take steps to delete such
            information.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Changes to This Privacy Policy
          </h2>
          <p className="mb-6">
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the "Last updated" date.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy or our privacy
            practices, please contact us:
          </p>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:privacy@newztoday.com"
                className="text-theme hover:underline"
              >
                privacy@newztoday.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
