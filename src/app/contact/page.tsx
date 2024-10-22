import Link from 'next/link';

export default function Contact() {
  return (
    <div>
      <nav className="navbar">
        <Link href="/">Home</Link> | 
        <Link href="/about"> About</Link> | 
        <Link href="/contact"> Contact</Link>
      </nav>

      <main className="main">
        <h1>Contact Us</h1>
        <p>Reach out to us through this page.</p>
        <button className="button">Send Message</button>
      </main>
    </div>
  );
}