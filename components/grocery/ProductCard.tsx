import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

export default function ProductCard() {
    return (
        <div className="bg-white rounded-xl shadow-sm p-4 w-55">

            <div className="relative">
                <Image
                    src="/apple.png"
                    alt="Apple"
                    width={200}
                    height={150}
                    className="rounded-lg"
                />
                <Heart className="absolute top-2 right-2 w-5 h-5 text-gray-500" />
            </div>

            <div className="mt-3 space-y-1">
                <p className="text-sm text-gray-500">1 KG</p>
                <h3 className="font-medium">Red Apple</h3>
                <p className="text-sm text-gray-500">20–25 mins</p>

                <div className="flex justify-between items-center mt-2">
                    <span className="font-semibold text-orange-500">₹75.00</span>
                    <Button size="icon" className="bg-orange-500">
                        +
                    </Button>
                </div>
            </div>
        </div>
    )
}
