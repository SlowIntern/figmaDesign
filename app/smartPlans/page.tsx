import { Navbar } from "@/components/finalNavbar";
import Planss from "@/components/gpsmart";


export default function SmartPlan()
{
    return (
          <div className="min-h-screen bg-gray-50">
                            {/* Navbar */}
                            <Navbar/>
                
                            {/* Main Content */}
                            <main>
                          <Planss/>
                            </main>
                        </div>

    );
}