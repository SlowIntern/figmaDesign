import { Navbar } from "@/components/finalNavbar"
import DealCard from "@/components/partyBlastdeals/DealCard"


const deals = [
    {
        title: "Smart Savings",
        description: "1 Burger + 1 Pepsi @ 20% Off",
        price: 175,
        rating: 4.6,
        image: "/burger.jpg",
    },
    {
        title: "Family Biryani Pack",
        description: "₹150 OFF on Family Pack",
        price: 175,
        rating: 4.6,
        image: "/biryan.jpg",
    },
    {
        title: "Family Biryani Pack",
        description: "₹150 OFF on Family Pack",
        price: 175,
        rating: 4.6,
        image: "/biryan.jpg",
    },
    {
        title: "Smart Savings",
        description: "1 Burger + 1 Pepsi @ 20% Off",
        price: 175,
        rating: 4.6,
        image: "/biryan.jpg",
    },
    {
        title: "Family Biryani Pack",
        description: "₹150 OFF on Family Pack",
        price: 175,
        rating: 4.6,
        image: "/biryan.jpg",
    },
    {
        title: "Smart Savings",
        description: "1 Burger + 1 Pepsi @ 20% Off",
        price: 175,
        rating: 4.6,
        image: "/burger.jpg",
    },
]

export default function DealsPage() {
    return (
<>

        <Navbar/>
        <section className="px-6 py-8">
            {/* Title */}
            <h2 className="mb-6 text-2xl font-bold text-orange-500">
                Party Blast Deals
            </h2>

            {/* Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {deals.map((deal, index) => (
                    <DealCard key={index} {...deal} />
                ))}
            </div>
            </section>
        </>
    )
}
