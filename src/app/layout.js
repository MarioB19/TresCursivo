import "./globals.css";

export const metadata = {
  title: "Trescursivo",
  description: "Juego de tres en raya recursivo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/logo.jpg" />
   
      </head>
      <body className="bg-black text-green-400">
        {children}
      </body>
    </html>
  );
}