import { HelpCircle, Bell, UserCircle } from "lucide-react";
import Link from "next/link";

export function Navbar() {
    return (
        <header className="w-full bg-white shadow-sm">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                {/* Center Menu */}
                <nav className="absolute left-1/2 -translate-x-1/2 flex gap-8 text-sm text-gray-500">
                    <Link className="hover:text-orange-400" href={"#"}>Food Delivery</Link>
                    <Link className="hover:text-orange-400" href="#">Deals</Link>
                    <Link href={"/party"} className="hover:text-orange-400">
                        Party Blast
                    </Link>
                    <Link className="hover:text-orange-400" href={ "/subscription"}>Subscription</Link>
                </nav>

                {/* Right Icons */}
                <div className="ml-auto flex items-center gap-6 text-gray-600">
                    <div className="flex items-center gap-1 cursor-pointer">
                        <HelpCircle className="h-5 w-5" />
                        <span className="text-sm">Help</span>
                    </div>
                    <Bell className="h-5 w-5 cursor-pointer" />
                    <UserCircle className="h-6 w-6 cursor-pointer" />
                </div>
            </div>
        </header>
    );
}
