export const metadata = {
  title: "Catálogo ALS",
  description: "Loja online ALS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
