import Link from 'next/link';
import Image from 'next/image';



export default function Home() {
  return (
    <div>
      <nav className="navbar">
        <Link href="/">Home</Link> | 
        <Link href="/about"> About</Link> | 
        <Link href="/contact"> Contact</Link>
      </nav>

      <main className="main">
        <h1>Welcome to the Home Page</h1>
        <p>This is a simple multi-page website built with Next.js.</p>
        <img src="/images.png" alt="Sample" className="image" />
     
        <button className="button">Click Me</button>
      </main>
    </div>
  );
}
       