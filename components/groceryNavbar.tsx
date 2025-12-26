import Image from "next/image"
import { Button } from "./ui/button"
import {
    Bell,
    HelpCircle,
    UserCircle,
    Search,
} from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu"

export default function GroceryNavbar() {
    return (
        <header className="w-full bg-white shadow-sm">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">

                {/* LEFT (Logo / Location placeholder) */}
                <div className="text-sm font-semibold">
                    Grocery
                </div>

                {/* CENTER SEARCH (hidden on small screens) */}
                <div className="hidden md:flex items-center gap-2">
                    <input
                        type="text"
                        placeholder="Search for dishes & restaurants"
                        className="h-9 w-72 rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <Button size="icon" className="bg-orange-500 hover:bg-orange-600">
                        <Search className="h-4 w-4 text-white" />
                    </Button>
                </div>

                {/* RIGHT ICONS */}
                <div className="flex items-center gap-4 text-gray-600">

                    {/* Help (hide text on mobile) */}
                    <div className="flex items-center gap-1 cursor-pointer">
                        <HelpCircle className="h-5 w-5" />
                        <span className="hidden md:block text-sm">Help</span>
                    </div>

                    {/* Notification */}
                    <Bell className="h-5 w-5 cursor-pointer" />

                    {/* Profile Dropdown */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                className="flex items-center gap-1 px-2"
                            >
                                <UserCircle className="h-6 w-6" />
                                <span className="hidden md:block text-sm">
                                    Akshay
                                </span>
                            </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem className="text-red-500">
                                Logout
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            {/* MOBILE SEARCH BAR */}
            <div className="md:hidden px-4 pb-3">
                <div className="flex items-center gap-2">
                    <input
                        type="text"
                        placeholder="Search groceries"
                        className="h-9 w-full rounded-md border border-gray-300 px-3 text-sm"
                    />
                    <Button size="icon" className="bg-orange-500">
                        <Search className="h-4 w-4 text-white" />
                    </Button>
                </div>
            </div>
        </header>
    )
}
