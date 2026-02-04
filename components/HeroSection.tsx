import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-overlay" />
      <div className="hero-bg-wrapper">
        <Image
          src="/hero-img.png"
          alt="Himalayan trekking adventure"
          className="hero-bg"
          fill
          priority
          sizes="100vw"
        />
      </div>
      <div className="hero-content">
        <p className="hero-subtitle">Your gateway to the Himalayas</p>
        <h1 className="hero-title">Trekkers Heaven</h1>
        <p className="hero-desc">
          Top Himalayan Treks 2025 — Adventure trekking tours with experienced
          local guides. Your journey to the mountains starts here.
        </p>
      </div>
    </section>
  );
}
