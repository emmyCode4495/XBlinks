import localFont from "next/font/local";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import "./app.css";
import Header from "@/components/Header";
import AnimatedBackground from "@/components/animatebackground";

// Font files can be colocated inside of `app`
const PlusJakarta = localFont({
  src: "../../public/fonts/PlusJakartaSans-Variable.woff2",
  display: "swap",
  weight: "100 900",
  variable: "--plus-jakarta-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={PlusJakarta.variable}>
      <body className="max-w-full overflow-x-hidden bg-white">
        <AnimatedBackground />
        <Header />

        <main>{children}</main>
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
