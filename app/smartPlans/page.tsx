import { Navbar } from "@/components/finalNavbar";
import FatLossMeals from "@/components/smart";
import SubscriptionGrid from "@/components/subscription";
import Meals from "@/components/viewsmart";

export default function SmartPlan()
{
    return (
          <div className="min-h-screen bg-gray-50">
                            {/* Navbar */}
                            <Navbar/>
                
                            {/* Main Content */}
                            <main>
                          <Meals/>
                            </main>
                        </div>

    );
}