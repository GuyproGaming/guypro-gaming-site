export default function DeleteAccountPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-300">
            Guypro Gaming
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
            Delete Your Account
          </h1>
          <p className="mt-4 text-sm text-slate-300 md:text-base">
            Account deletion information for Guypro Gaming users
          </p>
        </div>

        <div className="space-y-8 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-10">
          <section>
            <p className="text-base leading-8 text-slate-200">
              Users of Guypro Gaming may request deletion of their account and
              associated personal data at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black">
              How to Request Account Deletion
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              You can request account deletion by sending a request to:
            </p>

            <div className="mt-4 rounded-2xl border border-white/10 bg-[#0b1023] p-4">
              <p className="text-lg font-semibold text-white">
                guyprogamingapp@gmail.com
              </p>
            </div>

            <p className="mt-5 text-base leading-8 text-slate-300">
              Please include the email address linked to your account so we can
              identify the correct profile.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black">Data That Will Be Deleted</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              When your request is processed, the following data may be
              permanently removed:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-300">
              <li>Email address</li>
              <li>Username</li>
              <li>Profile information</li>
              <li>Profile image</li>
              <li>User-generated content associated with your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black">Retention Period</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Account deletion requests are processed as soon as possible.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-300">
              All related data is permanently deleted within a maximum period of
              30 days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black">Limited Data Retention</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Some information may be temporarily retained if required to:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-300">
              <li>comply with legal obligations</li>
              <li>prevent fraud or abuse</li>
              <li>resolve disputes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black">Contact</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              For assistance:
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