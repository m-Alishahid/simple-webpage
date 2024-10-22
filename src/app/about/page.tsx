import Link from "next/link";



export default function About() {
    return (
      <div>
        <nav className="navbar">
          <Link href="/">Home</Link> | 
          <Link href="/about"> About</Link> | 
          <Link href="/contact"> Contact</Link>
        </nav>
  
        <main className="main">
          <h1>About Us</h1>
          <p>This page tells you more about us.</p>
          <button className="button">Learn More</button>
        </main>
      </div>
    );
  }

