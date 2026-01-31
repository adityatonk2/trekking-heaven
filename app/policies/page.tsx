import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Policies | Trekkers Heaven — Disclaimer, Terms, Privacy & More',
  description:
    'Read Trekkers Heaven policies: Disclaimer, Terms & Conditions, Privacy Policy, Environmental Policy, and Cancellation Policy.',
};

export default function PoliciesPage() {
  return (
    <main className="policies-page">
      <section className="policies-hero">
        <div className="policies-hero-content">
          <h1>Policies</h1>
          <p>Disclaimer, Terms, Privacy, and more</p>
        </div>
      </section>

      <section className="policies-section">
        <div className="policies-container">
          <nav className="policies-nav">
            <a href="#disclaimer">Disclaimer</a>
            <a href="#terms">Terms & Conditions</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#environmental">Environmental Policy</a>
            <a href="#cancellation">Cancellation Policy</a>
          </nav>

          <div className="policies-content">
            <article id="disclaimer" className="policy-block">
              <h2>Disclaimer</h2>
              <p>
                Trekkers Heaven provides trekking, bike tours, and village tour
                services. Trekking and adventure activities carry inherent risks.
                Participants must be in good physical health and are responsible
                for disclosing any medical conditions. We take all reasonable
                precautions for safety; however, we are not liable for injury,
                loss, or damage arising from participation in our trips. By
                booking, you acknowledge these risks and agree to our terms.
              </p>
              <p>
                Information on this website is for general guidance. Routes,
                timings, and conditions may change due to weather, trail
                conditions, or local regulations. We reserve the right to modify
                itineraries for safety.
              </p>
            </article>

            <article id="terms" className="policy-block">
              <h2>Terms & Conditions</h2>
              <p>
                By using Trekkers Heaven&apos;s services or website, you agree to
                these Terms & Conditions. All bookings are subject to
                availability and our Cancellation Policy. Payment terms will be
                communicated at the time of booking.
              </p>
              <p>
                Participants must follow the instructions of our guides and
                staff. We reserve the right to refuse or terminate participation
                if behaviour threatens safety or disrupts the experience of
                others. Trekkers Heaven is not responsible for loss or damage to
                personal belongings during trips.
              </p>
              <p>
                We may update these terms from time to time. Continued use of our
                services after changes constitutes acceptance. For questions,
                contact us at info@trekkersheaven.com.
              </p>
            </article>

            <article id="privacy" className="policy-block">
              <h2>Privacy Policy</h2>
              <p>
                Trekkers Heaven respects your privacy. We collect information
                you provide when booking, inquiring, or subscribing—such as
                name, email, phone, and address—to process bookings and
                communicate with you about your trip.
              </p>
              <p>
                We do not sell your personal data. We may share information with
                service providers (e.g. payment processors, logistics partners)
                solely to deliver our services. We retain data as needed for
                legal and operational purposes.
              </p>
              <p>
                You may request access, correction, or deletion of your data by
                contacting info@trekkersheaven.com. By using our website and
                services, you consent to this Privacy Policy.
              </p>
            </article>

            <article id="environmental" className="policy-block">
              <h2>Environmental Policy</h2>
              <p>
                Trekkers Heaven is committed to sustainable and responsible
                trekking. We follow Leave No Trace principles: pack out all
                waste, minimise campfire impact, respect wildlife, and stay on
                designated trails.
              </p>
              <p>
                We work with local communities to support conservation and
                reduce environmental impact. We encourage participants to carry
                reusable bottles, avoid single-use plastics, and respect flora
                and fauna. We aim to leave the mountains better than we find
                them.
              </p>
            </article>

            <article id="cancellation" className="policy-block">
              <h2>Cancellation Policy</h2>
              <p>
                Cancellations must be communicated in writing. Refunds depend on
                the notice period:
              </p>
              <ul>
                <li>
                  <strong>30+ days before departure:</strong> Full refund minus
                  processing fees (if any).
                </li>
                <li>
                  <strong>15–30 days:</strong> 75% refund.
                </li>
                <li>
                  <strong>7–15 days:</strong> 50% refund.
                </li>
                <li>
                  <strong>Less than 7 days:</strong> No refund. We may offer
                  transfer to a future date subject to availability.
                </li>
              </ul>
              <p>
                In case of cancellation by Trekkers Heaven due to weather,
                safety, or unforeseen circumstances, a full refund or alternate
                dates will be offered. For specific trip terms, please refer to
                your booking confirmation.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="policies-cta">
        <Link href="/contact" className="btn btn-primary">
          Contact Us
        </Link>
      </section>
    </main>
  );
}
