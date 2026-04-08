export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-300">
            Guypro Gaming
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-slate-300 md:text-base">
            Last updated: 08 April 2026
          </p>
        </div>

        <div className="space-y-8 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-10">
          <section>
            <p className="text-base leading-8 text-slate-200">
              By using the Guypro Gaming application, you agree to the following
              Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black">Eligibility</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              You must be at least 13 years old to use this application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black">User Accounts</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Users are responsible for maintaining the confidentiality of their
              login credentials.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-300">
              You agree to provide accurate account information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black">Acceptable Use</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Users agree not to:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-300">
              <li>upload harmful or illegal content</li>
              <li>impersonate others</li>
              <li>attempt unauthorized system access</li>
              <li>distribute spam or malicious material</li>
            </ul>

            <p className="mt-5 text-base leading-8 text-slate-300">
              We reserve the right to remove content violating these rules.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black">User Content</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Users retain ownership of content they publish.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-300">
              However, by posting content inside the application, you grant
              Guypro Gaming permission to display and manage that content within
              the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black">Account Suspension</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              We may suspend or terminate accounts that:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-300">
              <li>violate these Terms</li>
              <li>harm other users</li>
              <li>threaten platform security</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black">Service Availability</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              We do not guarantee uninterrupted access to the application.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Features may change or be discontinued at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black">Limitation of Liability</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Guypro Gaming is provided “as is” without warranties of any kind.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-300">
              We are not responsible for damages resulting from misuse of the
              application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black">Changes to Terms</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              These Terms may be updated periodically.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Continued use of the app implies acceptance of updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black">Contact</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              For questions:
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