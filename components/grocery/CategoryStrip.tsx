import Image from "next/image"

const categories = [
    "Vegetables",
    "Fruits",
    "Oil",
    "Dry Fruits",
    "Biscuits",
]

export default function CategoryStrip() {
    return (
        <div className="flex gap-8 overflow-x-auto py-6 px-2">
            {categories.map((cat, i) => (
                <div
                    key={i}
                    className="flex flex-col items-center text-sm cursor-pointer"
                >
                    <Image
                        src="/fm1.png"
                        alt={cat}
                        width={40}
                        height={40}
                    />
                    <span className="mt-2">{cat}</span>
                </div>
            ))}
        </div>
    )
}
