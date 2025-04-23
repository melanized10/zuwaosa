// app/layout.js

import NavBar from './navbar';  // Import the NavBar component
import Footer from './Footer';   // Import the Footer component

export default function Layout({ children }) {
  return (
    <>
      <html lang="en">  {/* The root HTML element */}
        <body className="min-h-screen flex flex-col bg-pink-50">  {/* The body element */}
          <NavBar />  {/* Your NavBar */}
          <main className="flex-grow">{children}</main> {/* Page content */}
          <Footer />  {/* Your Footer */}
        </body>
      </html>
    </>
  );
}
