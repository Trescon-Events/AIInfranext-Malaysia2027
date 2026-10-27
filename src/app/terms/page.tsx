import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms & Conditions | AI InfraNext | Malaysia 2027',
  description: 'Terms governing participation, admission, and commercial engagement at AI InfraNext | Malaysia 2027.',
};

export default function TermsPage() {
  return (
    <>
      <Header />

      <main>
        <section className="section section-light" style={{ padding: '64px 0 96px' }}>
          <div className="container-narrow">
            <div className="eyebrow eyebrow-dark">Event Governance</div>
            <h1 style={{ marginBottom: '24px' }}>Terms and Conditions</h1>

            <p style={{ fontSize: '16px', lineHeight: 1.7, marginBottom: '24px' }}>
              These terms govern participation, admission, and commercial engagement at AI InfraNext | Malaysia 2027, organised by Trescon Events Organizing Ltd.
            </p>

            <h2 style={{ fontSize: '20px', marginTop: '36px', marginBottom: '12px' }}>1. Admission and Qualification</h2>
            <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--slate-mid)', marginBottom: '20px' }}>
              Complimentary Delegate Passes are strictly non-transferable and subject to validation by the steering committee based on enterprise seniority and active infrastructure mandate. The organisers reserve the right to revoke or reclassify passes that do not meet verification criteria.
            </p>

            <h2 style={{ fontSize: '20px', marginTop: '36px', marginBottom: '12px' }}>2. Business Pass Terms</h2>
            <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--slate-mid)', marginBottom: '20px' }}>
              Business Passes (USD 499) grant access for vendor, consulting and commercial delegates across both conference days. Cancellations received in writing 30 days prior to the summit are eligible for transfer or refund minus administrative fees.
            </p>

            <h2 style={{ fontSize: '20px', marginTop: '36px', marginBottom: '12px' }}>3. Intellectual Property &amp; Brand Usage</h2>
            <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--slate-mid)', marginBottom: '20px' }}>
              &ldquo;AI InfraNext&rdquo; is a registered proprietary trademark of Trescon. All session recordings, presentation materials, transcripts, and official photography remain the property of the organisers and respective keynote presenters.
            </p>

            <h2 style={{ fontSize: '20px', marginTop: '36px', marginBottom: '12px' }}>4. Chatham House Rule</h2>
            <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--slate-mid)', marginBottom: '20px' }}>
              Closed-door sessions including the CXO Boardrooms operate under the Chatham House rule. Participants are free to use the information received, but neither the identity nor the affiliation of the speaker(s), nor that of any other participant, may be revealed.
            </p>

            <div style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid var(--slate-border)' }}>
              <Link href="/" className="btn btn-outline" style={{ display: 'inline-flex' }}>
                Return to home &rarr;
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
