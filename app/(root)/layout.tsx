import { Sidebar } from "lucide-react";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const loggedIn = {firstname: "Chatanya", lastname: "Pratap"}
    return (
        <main className="flex h-screen w-full font-inter">
            <Sidebar user={loggedIn} />
            {children} 
        </main>
    );
}
