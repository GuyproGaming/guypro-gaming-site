export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-300">
            Guypro Gaming
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-slate-300 md:text-base">
            Last updated: 08 April 2026
          </p>
        </div>

        <div className="space-y-8 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-10">
          <section>
            <p className="text-base leading-8 text-slate-200">
              Guypro Gaming (“we”, “our”, “us”) respects your privacy and is
              committed to protecting your personal data. This Privacy Policy
              explains how we collect, use, and protect your information when
              you use the Guypro Gaming mobile application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black">Information We Collect</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              We may collect the following types of information:
            </p>

            <div className="mt-5 space-y-5">
              <div>
                <h3 className="text-lg font-bold text-white">
                  Account Information
                </h3>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-300">
                  <li>Email address</li>
                  <li>Username</li>
                  <li>Profile image (if provided)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">User Content</h3>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-300">
                  <li>Posts and content shared within the application</li>
                  <li>Interactions with other users</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">
                  Usage Information
                </h3>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-300">
                  <li>App interactions</li>
                  <li>Feature usage</li>
                  <li>Device-related technical data such as crash logs and performance data</li>
                </ul>
              </div>
            </div>

            <p className="mt-5 text-base leading-8 text-slate-300">
              We do not collect sensitive personal data such as financial,
              biometric, or health information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black">Authentication</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Users may create an account using:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-300">
              <li>Email and password</li>
              <li>Google Sign-In (OAuth)</li>
            </ul>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Authentication services are provided securely via Firebase
              Authentication.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black">How We Use Information</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              We use collected information to:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-300">
              <li>Provide access to your account</li>
              <li>Enable app features</li>
              <li>Improve application performance</li>
              <li>Ensure security and prevent abuse</li>
              <li>Respond to support requests</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black">Data Sharing</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              We do not sell or rent your personal data.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-300">
              We may share limited data with trusted service providers such as:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-300">
              <li>Google Firebase (authentication and database hosting)</li>
            </ul>
            <p className="mt-5 text-base leading-8 text-slate-300">
              These providers process data securely on our behalf.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black">Data Security</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              All transmitted data is encrypted using HTTPS.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-300">
              We take appropriate technical and organizational measures to
              protect your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black">Data Retention</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Your personal data is retained only as long as necessary to
              provide services or comply with legal obligations.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Users may request deletion at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black">Account Deletion</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Users may request account deletion by visiting:
            </p>
            <div className="mt-4 rounded-2xl border border-white/10 bg-[#0b1023] p-4 text-slate-200">
              <p>https://guyprogaming.app/delete-account</p>
              <p className="mt-2">or contacting:</p>
              <p className="mt-2 font-semibold">guyprogamingapp@gmail.com</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black">Children’s Privacy</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Guypro Gaming is not intended for children under 13.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-300">
              We do not knowingly collect personal data from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black">Changes to This Policy</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              We may update this Privacy Policy periodically. Updates will be
              reflected on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black">Contact</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              For privacy-related questions:
            </p>
            <p className="mt-3 text-base font-semibold text-white">
              guyprogamingapp@gmail.com
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}