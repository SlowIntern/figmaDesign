import BookEvent from "@/components/BookEvent";
import { Navbar } from "@/components/finalNavbar";


export default function PartyBlastPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main>
                <BookEvent />
            </main>
        </div>
    );
}
