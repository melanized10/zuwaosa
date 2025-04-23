import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex gap-4 p-4 justify-center bg-pink-100 text-pink-800 font-semibold shadow-md">
       <Link href="/home">🏠 Home</Link> {/* Link to your intro page */}
      <Link href="/love/game">💖 Love</Link>
      <Link href="/love/about">👩‍❤️‍👨 About Us</Link>
      <Link href="/love/quiz">🧠 Quiz</Link>
      <Link href="/love/moments">📷 Moments</Link> {/* 💡 New Link */}
     
    </nav>
  );
}
