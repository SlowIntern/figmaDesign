"use client";

import { useState } from "react";
import { HelpCircle, Bell, UserCircle, Menu, X } from "lucide-react";
import Link from "next/link";

export function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
            <div className="relative mx-auto flex h-16 max-w-7xl items-center px-6">
                {/* Logo (optional) */}
                <div className="text-lg font-bold text-orange-500">
                 <Link href="/">ReadyCab</Link>
                </div>

                {/* Desktop Menu */}
                <nav className="absolute left-1/2 hidden -translate-x-1/2 gap-8 text-sm text-gray-500 md:flex">
                    <Link className="hover:text-orange-400" href="#">
                        Food Delivery
                    </Link>
                    <Link className="hover:text-orange-400" href="/deals">
                        Deals
                    </Link>
                    <Link className="hover:text-orange-400" href="/party">
                        Party Blast
                    </Link>
                    <Link className="hover:text-orange-400" href="/subscription">
                        Subscription
                    </Link>
                </nav>

                {/* Right Icons (Desktop) */}
                <div className="ml-auto hidden items-center gap-6 text-gray-600 md:flex">
                    <div className="flex cursor-pointer items-center gap-1">
                        <HelpCircle className="h-5 w-5" />
                        <span className="text-sm">Help</span>
                    </div>
                    <Bell className="h-5 w-5 cursor-pointer" />
                    <UserCircle className="h-6 w-6 cursor-pointer" />
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="ml-auto flex md:hidden"
                >
                    {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="border-t bg-white px-6 py-4 md:hidden">
                    <nav className="flex flex-col gap-4 text-sm text-gray-700">
                        <Link href="#" onClick={() => setOpen(false)}>
                            Food Delivery
                        </Link>
                        <Link href="/deals" onClick={() => setOpen(false)}>
                            Deals
                        </Link>
                        <Link href="/party" onClick={() => setOpen(false)}>
                            Party Blast
                        </Link>
                        <Link href="/subscription" onClick={() => setOpen(false)}>
                            Subscription
                        </Link>

                        <div className="mt-4 flex items-center gap-4 border-t pt-4">
                            <HelpCircle className="h-5 w-5" />
                            <Bell className="h-5 w-5" />
                            <UserCircle className="h-6 w-6" />
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
