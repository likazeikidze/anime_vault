import { DM_Sans } from "next/font/google";

import "../styles/globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <main className="min-h-screen bg-[#0F1117]">{children}</main>
      </body>
    </html>
  );
}
