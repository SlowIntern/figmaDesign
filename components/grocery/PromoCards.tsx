import { Button } from "@/components/ui/button"
import Image from "next/image"

const cards = [
    {
        title: "Everyday Fresh",
        desc: "Handpicked groceries for everyday living",
        bg: "bg-red-500",
        image: "/fm1.png",
    },
    {
        title: "Quality Dry Fruits",
        desc: "Fresh, pure, and responsibly sourced",
        bg: "bg-[#D7B26D]",
        image: "/fm2.png",
    },
    {
        title: "Pay Less, Get More",
        desc: "Quality groceries at the lowest cost",
        bg: "bg-green-700",
        image: "/fm3.png",
    },
]

export default function PromoCards() {
    return (
        <div className="grid md:grid-cols-3 gap-6 mt-8">
            {cards.map((card, i) => (
                <div
                    key={i}
                    className={`${card.bg} rounded-xl p-6 text-white flex justify-between`}
                >
                    <div className="space-y-3">
                        <p className="text-sm opacity-90">{card.desc}</p>
                        <h2 className="text-xl font-semibold">{card.title}</h2>
                        <Button variant="secondary">Shop Now</Button>
                    </div>

                    <Image
                        src={card.image}
                        alt={card.title}
                        width={120}
                        height={120}
                        className="object-cover rounded-lg"
                    />
                </div>
            ))}
        </div>
    )
}
