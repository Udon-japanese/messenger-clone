import "./globals.css";
import ToasterContext from "./context/ToasterContext";
import AuthContext from "./context/AuthContext";
import { Inter } from "next/font/google";
import ActiveState from "./components/ActiveState";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Messenger Clone",
  description: "Messenger Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <AuthContext>
          <ToasterContext />
          <ActiveState />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
