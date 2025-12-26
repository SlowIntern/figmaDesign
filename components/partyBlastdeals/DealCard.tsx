import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

interface DealCardProps {
    title: string
    description: string
    price: number
    rating: number
    image: string
}

export default function DealCard({
    title,
    description,
    price,
    rating,
    image,
}: DealCardProps) {
    return (
        <Card className="overflow-hidden rounded-xl border-none shadow-md">
            <div className="relative h-60 w-full">
                {/* Image */}
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                {/* Rating badge */}
                <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-orange-500 px-2 py-1 text-xs font-semibold text-white">
                    <Star size={12} fill="white" />
                    {rating}
                </div>

                {/* Content */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="text-lg font-semibold leading-tight">
                        {title}
                    </h3>
                    <p className="text-sm text-gray-200">
                        {description}
                    </p>
                    <p className="mt-2 text-lg font-bold text-orange-400">
                        ₹{price.toFixed(2)}
                    </p>
                </div>
            </div>
        </Card>
    )
}
