import { motion } from "framer-motion";

const TermsAndConditions = () => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    id="terms"
    className="py-12 bg-black-100 min-h-screen"
  >
    <div className="container mx-auto px-4 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6 text-white-800">
        Terms and Conditions
      </h1>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="bg-black p-6 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
        <p className="text-white-600 mb-4">
          By accessing or using Nexora WebApp, you agree to be bound by these
          Terms and Conditions. If you do not agree, please do not use our
          services.
        </p>
        <h2 className="text-2xl font-semibold mb-4">2. Use of Services</h2>
        <p className="text-white-600 mb-4">
          You agree to use our services only for lawful purposes and in a manner
          that does not infringe the rights of others or restrict their use of
          the services.
        </p>
        <h2 className="text-2xl font-semibold mb-4">
          3. Intellectual Property
        </h2>
        <p className="text-white-600 mb-4">
          All content on Nexora WebApp, including text, graphics, and code, is
          the property of Nexora WebApp or its licensors and is protected by
          copyright laws.
        </p>
        <h2 className="text-2xl font-semibold mb-4">
          4. Limitation of Liability
        </h2>
        <p className="text-white-600 mb-4">
          Nexora WebApp is provided "as is" without warranties of any kind. We
          are not liable for any damages arising from your use of our services.
        </p>
        <h2 className="text-2xl font-semibold mb-4">5. Contact Us</h2>
        <p className="text-white-600">
          For questions about these Terms and Conditions, please contact us at{" "}
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

export default TermsAndConditions;
