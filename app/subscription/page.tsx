import BookEvent from "@/components/BookEvent";
import { Navbar } from "@/components/finalNavbar";
import SubscriptionGrid from "@/components/subscription";

export default function Subscription() {
    return (

          <div className="min-h-screen bg-gray-50">
                    {/* Navbar */}
                    <Navbar />
        
                    {/* Main Content */}
                    <main>
                        <SubscriptionGrid/>
                    </main>
                </div>


    );
}