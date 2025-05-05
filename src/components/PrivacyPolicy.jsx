import { motion } from "framer-motion";

const PrivacyPolicy = () => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    id="privacy"
    className="py-12 bg-black min-h-screen"
  >
    <div className="container mx-auto px-4 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6 text-white-800">Privacy Policy</h1>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="bg-black p-6 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p className="text-white-600 mb-4">
          At Nexora WebApp, we are committed to protecting your privacy. This
          Privacy Policy outlines how we collect, use, and safeguard your
          personal information when you visit our website or use our services.
        </p>
        <h2 className="text-2xl font-semibold mb-4">
          2. Information We Collect
        </h2>
        <p className="text-white-600 mb-4">
          We do not collect personal information such as your name, address,
          email, or phone number unless you voluntarily provide it to us. We may
          collect non-personal information, such as browser type, IP address,
          and usage data, to improve our services.
        </p>
        <h2 className="text-2xl font-semibold mb-4">
          3. How We Use Your Information
        </h2>
        <p className="text-white-600 mb-4">
          Any information we collect is used to enhance your experience, improve
          our website, and communicate with you about our services. We do not
          sell or share your personal information with third parties, except as
          required by law.
        </p>
        <h2 className="text-2xl font-semibold mb-4">4. Cookies</h2>
        <p className="text-white-600 mb-4">
          We do not use cookies or similar tracking technologies. If this
          changes, we will update this policy and notify you accordingly.
        </p>
        <h2 className="text-2xl font-semibold mb-4">5. Contact Us</h2>
        <p className="text-white-600">
          If you have questions about this Privacy Policy, please contact us at{" "}
          <a
            href="mailto:support@nexorawebapp.com"
            className="text-blue-600 hover:underline"
          >
            info.nexoraarc@gmail.com
          </a>
          .
        </p>
      </motion.section>
    </div>
  </motion.div>
);

export default PrivacyPolicy;