import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyNotice = () => {
  useEffect(() => {
    document.title = "Privacy Notice";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="relative overflow-hidden bg-primary/20 pt-28 md:pt-32">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[-6rem] top-20 h-48 w-48 rounded-full bg-primary/30 blur-3xl md:h-72 md:w-72" />
          <div className="absolute right-[-4rem] top-40 h-40 w-40 rounded-full bg-accent/20 blur-3xl md:h-64 md:w-64" />
        </div>

        <section className="relative z-10 py-16 md:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="mb-10 md:mb-12">
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-secondary">
                  Legal
                </p>
                <h1 className="mb-4 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                  Privacy Notice
                </h1>
                <p className="text-base text-muted-foreground md:text-lg">
                  Bonsai HR Ltd
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Last updated: 1 April 2026
                </p>
              </div>

              <article className="rounded-3xl border border-border bg-card/95 p-6 shadow-sm backdrop-blur-sm md:p-10">
                <div className="space-y-8 text-sm leading-7 text-foreground md:text-[15px]">
                  <section className="space-y-4">
                    <p>
                      Bonsai HR Ltd, trading as Bonsai ("Bonsai", "we", "us", "our"), is committed to protecting your personal data and respecting your privacy.
                    </p>
                    <p>This Privacy Notice explains how we collect, use, store, and protect personal data when you:</p>
                    <ul className="list-disc space-y-2 pl-5 marker:text-secondary">
                      <li>visit our website</li>
                      <li>contact us</li>
                      <li>complete our AI Health Test</li>
                      <li>request a report, recommendations, or follow-up from us</li>
                      <li>engage us for services</li>
                    </ul>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold tracking-tight text-foreground">Who we are</h2>
                    <p>
                      For the purposes of UK data protection law, Bonsai HR Ltd is the data controller for the personal data we collect through our website, contact forms, AI Health Test, and related business activity.
                    </p>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold tracking-tight text-foreground">Contact details</h2>
                    <div className="space-y-1 text-muted-foreground">
                      <p className="text-foreground">Bonsai HR Ltd</p>
                      <p>
                        Email:{" "}
                        <a
                          href="mailto:hatty@bonsai-hr.co.uk"
                          className="text-secondary underline-offset-4 transition-colors hover:text-foreground hover:underline"
                        >
                          hatty@bonsai-hr.co.uk
                        </a>
                      </p>
                      <p>
                        Phone:{" "}
                        <a
                          href="tel:+447752269227"
                          className="text-secondary underline-offset-4 transition-colors hover:text-foreground hover:underline"
                        >
                          +44 (0) 7752 269227
                        </a>
                      </p>
                      <p>
                        Website:{" "}
                        <a
                          href="https://bonsai-hr.com/"
                          className="text-secondary underline-offset-4 transition-colors hover:text-foreground hover:underline"
                        >
                          https://bonsai-hr.com/
                        </a>
                      </p>
                    </div>
                    <p>
                      If you have any questions about this Privacy Notice or how we handle your personal data, please contact us using the details above.
                    </p>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold tracking-tight text-foreground">Who this notice applies to</h2>
                    <p>This notice applies to personal data we collect from:</p>
                    <ul className="list-disc space-y-2 pl-5 marker:text-secondary">
                      <li>website visitors</li>
                      <li>people who contact us with an enquiry</li>
                      <li>people who complete our AI Health Test</li>
                      <li>prospective clients</li>
                      <li>current and former clients</li>
                      <li>individuals whose personal data we process directly as part of our services</li>
                    </ul>
                    <p>
                      Where we process personal data solely on behalf of a client and under their instructions, that client will usually be the data controller and we will act as a data processor.
                    </p>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold tracking-tight text-foreground">The personal data we collect</h2>
                    <p>The personal data we collect depends on how you interact with us.</p>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">Website and enquiry data</h3>
                      <p>If you contact us through our website, email, or other channels, we may collect:</p>
                      <ul className="list-disc space-y-2 pl-5 marker:text-secondary">
                        <li>your name</li>
                        <li>your work email address</li>
                        <li>your telephone number</li>
                        <li>your company name</li>
                        <li>your job title</li>
                        <li>any information you include in your message</li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">AI Health Test data</h3>
                      <p>If you complete our AI Health Test, we may collect:</p>
                      <ul className="list-disc space-y-2 pl-5 marker:text-secondary">
                        <li>your name</li>
                        <li>your work email address</li>
                        <li>your company name</li>
                        <li>your role or job title</li>
                        <li>your responses to assessment questions</li>
                        <li>your score, category, or assessment outcome</li>
                        <li>any report, summary, or recommendation generated from your submission</li>
                        <li>a record that you acknowledged this Privacy Notice at the point of submission</li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">Technical and usage data</h3>
                      <p>When you use our website, we may collect limited technical information such as:</p>
                      <ul className="list-disc space-y-2 pl-5 marker:text-secondary">
                        <li>IP address</li>
                        <li>browser type</li>
                        <li>device information</li>
                        <li>pages visited</li>
                        <li>date and time of access</li>
                        <li>website interaction data</li>
                      </ul>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold tracking-tight text-foreground">Special category personal data</h2>
                    <p>We do not intend to collect special category personal data through our website or AI Health Test.</p>
                    <p>
                      The AI Health Test is a business assessment relating to AI usage, readiness, and organisational practices. It is not a medical or personal health assessment.
                    </p>
                    <p>
                      Please do not include health information or other sensitive personal data in form responses unless we have specifically asked for it and explained why.
                    </p>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold tracking-tight text-foreground">How we collect personal data</h2>
                    <p>We collect personal data:</p>
                    <ul className="list-disc space-y-2 pl-5 marker:text-secondary">
                      <li>directly from you when you complete a form, contact us, or engage with us</li>
                      <li>automatically through your use of our website</li>
                      <li>from your employer or organisation where they engage us</li>
                      <li>from publicly available business sources, such as company websites or professional networking platforms, where relevant and lawful</li>
                    </ul>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold tracking-tight text-foreground">How we use your personal data</h2>
                    <p>We use personal data to:</p>
                    <ul className="list-disc space-y-2 pl-5 marker:text-secondary">
                      <li>respond to enquiries</li>
                      <li>communicate with you about your request</li>
                      <li>provide our services</li>
                      <li>deliver AI Health Test results</li>
                      <li>prepare reports, recommendations, or follow-up materials connected to the AI Health Test</li>
                      <li>manage our relationship with prospective and current clients</li>
                      <li>improve our website, services, and assessment tools</li>
                      <li>maintain records for administration, compliance, and security</li>
                      <li>protect our business against misuse, fraud, or legal claims</li>
                    </ul>
                    <p>
                      We may also use assessment responses in an aggregated or de-identified form to analyse trends, improve our methodology, and develop benchmarking insights. We will not identify you or your organisation in any published or shared output without your permission.
                    </p>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold tracking-tight text-foreground">Our lawful bases for processing</h2>
                    <p>Under UK GDPR, we rely on one or more of the following lawful bases:</p>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">Legitimate interests</h3>
                      <p>We process personal data where it is necessary for our legitimate interests, including:</p>
                      <ul className="list-disc space-y-2 pl-5 marker:text-secondary">
                        <li>responding to business enquiries</li>
                        <li>delivering requested information, results, and follow-up</li>
                        <li>administering and improving our website and services</li>
                        <li>developing and refining our assessment tools and service offering</li>
                        <li>maintaining business records and internal reporting</li>
                        <li>keeping our systems secure</li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">Contract</h3>
                      <p>
                        Where you engage us to provide services, we may process personal data where this is necessary to perform a contract with you or to take steps at your request before entering into a contract.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">Consent</h3>
                      <p>
                        Where we ask for your consent, we will rely on consent as our lawful basis. For example, if we ever introduce optional marketing communications, we will ask for your consent first.
                      </p>
                      <p>
                        Where a checkbox appears on the AI Health Test form, this is used to confirm that you have read and understood this Privacy Notice before submitting your details.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">Legal obligation</h3>
                      <p>
                        We may process personal data where we need to do so to comply with a legal or regulatory obligation.
                      </p>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold tracking-tight text-foreground">If you do not provide your information</h2>
                    <p>
                      If you do not provide the information marked as required, we may not be able to deliver your AI Health Test results, report, or related follow-up, or respond fully to your enquiry.
                    </p>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold tracking-tight text-foreground">AI tools and generated outputs</h2>
                    <p>
                      As part of our services and the AI Health Test, we may use AI-supported tools to help generate outputs such as summaries, recommendations, or draft reports.
                    </p>
                    <p>Where AI tools are used:</p>
                    <ul className="list-disc space-y-2 pl-5 marker:text-secondary">
                      <li>they are used to support analysis and reporting, not to make legally binding decisions about you</li>
                      <li>outputs are intended to assist human judgement, not replace it</li>
                      <li>we aim to minimise the use of personal data and only use what is necessary</li>
                      <li>we take steps to review tools and usage for privacy, security, and appropriateness</li>
                    </ul>
                    <p>
                      AI-generated outputs may be incomplete or inaccurate and should be treated as decision-support material rather than absolute conclusions.
                    </p>
                    <p>
                      We do not use the AI Health Test to make automated decisions that produce legal or similarly significant effects on individuals.
                    </p>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold tracking-tight text-foreground">Sharing your personal data</h2>
                    <p>We do not sell your personal data.</p>
                    <p>
                      We may share your personal data with trusted third parties where necessary for our business operations and service delivery, including:
                    </p>
                    <ul className="list-disc space-y-2 pl-5 marker:text-secondary">
                      <li>website hosting and technology providers</li>
                      <li>cloud storage and productivity providers</li>
                      <li>form, data capture, reporting, and workflow tools</li>
                      <li>analytics providers</li>
                      <li>professional advisers such as lawyers, accountants, and insurers</li>
                      <li>regulators, law enforcement, or courts where required by law</li>
                    </ul>
                    <p>
                      Any third parties that process personal data on our behalf are expected to do so under appropriate contractual and security obligations.
                    </p>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold tracking-tight text-foreground">International data transfers</h2>
                    <p>Some of our service providers may process personal data outside the UK.</p>
                    <p>
                      Where personal data is transferred outside the UK, we will take steps to ensure appropriate safeguards are in place, such as:
                    </p>
                    <ul className="list-disc space-y-2 pl-5 marker:text-secondary">
                      <li>adequacy regulations</li>
                      <li>the UK International Data Transfer Agreement</li>
                      <li>other lawful transfer mechanisms recognised under UK data protection law</li>
                    </ul>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold tracking-tight text-foreground">How long we keep your personal data</h2>
                    <p>
                      We keep personal data only for as long as reasonably necessary for the purpose for which it was collected, including to satisfy legal, regulatory, tax, insurance, or reporting requirements.
                    </p>
                    <p>Our standard retention periods are:</p>
                    <ul className="list-disc space-y-2 pl-5 marker:text-secondary">
                      <li>enquiry data: up to 24 months from the last meaningful interaction</li>
                      <li>AI Health Test submissions and related reports: up to 24 months from submission or last meaningful interaction</li>
                      <li>client data: for the duration of the client relationship and afterwards in line with legal, contractual, and operational requirements</li>
                      <li>aggregated or de-identified data: may be retained for longer where it no longer identifies any individual</li>
                    </ul>
                    <p>
                      We may keep data for longer where required or permitted by law, or where necessary to establish, exercise, or defend legal claims.
                    </p>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold tracking-tight text-foreground">Data security</h2>
                    <p>
                      We take appropriate technical and organisational measures to protect personal data against unauthorised access, loss, misuse, alteration, or disclosure.
                    </p>
                    <p>These measures may include:</p>
                    <ul className="list-disc space-y-2 pl-5 marker:text-secondary">
                      <li>restricted access to personal data</li>
                      <li>password protection and access controls</li>
                      <li>secure cloud-based systems</li>
                      <li>appropriate internal handling practices</li>
                      <li>regular review of our data handling arrangements</li>
                    </ul>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold tracking-tight text-foreground">Your rights</h2>
                    <p>
                      Under UK data protection law, you have rights that may apply to your personal data, including the right to:
                    </p>
                    <ul className="list-disc space-y-2 pl-5 marker:text-secondary">
                      <li>request access to the personal data we hold about you</li>
                      <li>request correction of inaccurate or incomplete personal data</li>
                      <li>request erasure of your personal data in certain circumstances</li>
                      <li>request restriction of processing in certain circumstances</li>
                      <li>object to processing based on legitimate interests</li>
                      <li>request transfer of your personal data where applicable</li>
                      <li>withdraw consent where we rely on consent</li>
                    </ul>
                    <p>To exercise any of these rights, please contact us using the details in this notice.</p>
                    <p>We may need to verify your identity before responding to your request.</p>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold tracking-tight text-foreground">Complaints</h2>
                    <p>
                      If you have concerns about how we handle your personal data, please contact us first and we will try to resolve the issue.
                    </p>
                    <p>You also have the right to complain to the Information Commissioner’s Office (ICO):</p>
                    <div className="space-y-1 text-muted-foreground">
                      <p className="text-foreground">Information Commissioner’s Office</p>
                      <p>
                        <a
                          href="https://ico.org.uk/"
                          className="text-secondary underline-offset-4 transition-colors hover:text-foreground hover:underline"
                        >
                          https://ico.org.uk/
                        </a>
                      </p>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold tracking-tight text-foreground">Cookies and website tracking</h2>
                    <p>
                      Our website may use cookies or similar technologies to help it function properly and to understand how visitors use it.
                    </p>
                    <p>
                      Where required, we will provide additional information about cookies through a separate cookie notice or banner.
                    </p>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold tracking-tight text-foreground">Third-party websites</h2>
                    <p>
                      Our website may contain links to third-party websites or services. We are not responsible for their privacy practices. You should read their privacy notices before submitting personal data to them.
                    </p>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold tracking-tight text-foreground">Changes to this Privacy Notice</h2>
                    <p>
                      We may update this Privacy Notice from time to time to reflect changes in our services, legal obligations, or how we handle personal data.
                    </p>
                    <p>
                      The latest version will always be available on our website, together with the date it was last updated.
                    </p>
                  </section>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyNotice;
