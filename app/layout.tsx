import { Nunito } from "next/font/google";
import "./globals.css";
import ClientOnly from "../components/ClientOnly";
import getCurrentUser from "@/lib/actions/getCurrentUser";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/Sidebar";
import UploadModal from "@/components/modals/UploadModal";
import ToasterProvider from "@/providers/ToasterProvider";
import EditVideoModal from "@/components/modals/EditVideoModal";

export const metadata = {
  title: "YouTube",
  description: "Nextjs App",
};

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en" style={{ overflow: "hidden" }}>
      <body className={font.className} style={{ overflow: "hidden" }}>
        <ClientOnly>
          <ToasterProvider />
          <Navbar currentUser={currentUser} />
          <UploadModal />
          <EditVideoModal />
        </ClientOnly>
        <main className="flex bg-[#121212]">
          <Sidebar />
          <div>{children}</div>
        </main>
      </body>
    </html>
  );
}
