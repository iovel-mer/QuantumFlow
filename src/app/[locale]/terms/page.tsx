import Link from "next/link";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 to-white flex items-center justify-center px-4 py-16">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl p-6 sm:p-10 border border-gray-200">
        <div className="mb-6">
          <Link
            href="/"
            className="text-sm text-blue-600 hover:underline transition-all"
          >
            ← Go Back Home
          </Link>
        </div>
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Terms & Conditions</h1>

        <section className="space-y-10 text-gray-700 leading-relaxed">
          <div>
            <h2 className="text-2xl font-semibold mb-2">1. Agreement to Terms</h2>
            <p>
              By accessing our website or using our services, you confirm your agreement to be bound by these Terms of
              Use. If you do not agree, you may not access or use our platform.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">2. Overview of Services</h2>
            <p>
              We provide digital tools and features to help users manage content, collaborate, and optimize workflows.
              Specific features may change over time as we improve our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">3. Account Responsibilities</h2>
            <p>
              You are responsible for keeping your login credentials secure. All activities under your account are your
              responsibility. Report any unauthorized access immediately.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">4. Acceptable Use</h2>
            <p>
              You agree to use our platform respectfully and lawfully. Any abusive behavior, spam, or interference with
              other users will result in immediate termination of your account.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">5. Payment Terms</h2>
            <p>
              Certain features may require payment. All charges and billing information are listed transparently. You
              are responsible for any applicable taxes or fees.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">6. Intellectual Property</h2>
            <p>
              All site content—including branding, design, and code—is the property of our team and may not be copied,
              distributed, or reused without permission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">7. Disclaimers</h2>
            <p>
              Our services are provided "as is." We make no guarantees about reliability or availability and are not
              liable for any losses arising from usage or interruptions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">8. Changes to Terms</h2>
            <p>
              We reserve the right to update these terms at any time. Continued use of our platform indicates your
              acceptance of any changes made.
            </p>
          </div>
        </section>

        <footer className="mt-12 text-center text-sm text-gray-500">
          Last updated: July 18, 2025
        </footer>
      </div>
    </main>
  );
}
