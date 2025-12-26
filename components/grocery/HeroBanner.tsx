import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroBanner() {
    return (
        <div className="w-full rounded-2xl bg-[#FFE2C5] overflow-hidden">
            <div className="grid md:grid-cols-2 items-center p-8 gap-6">

                {/* Left content */}
                <div className="space-y-4">
                    <h1 className="text-2xl md:text-3xl font-semibold">
                        Groceries, Delivered Fast
                    </h1>

                    <p className="text-gray-600">
                        Quality products, quick delivery,<br />
                        great prices
                    </p>

                    <Button className="bg-orange-500 hover:bg-orange-600 w-fit">
                        Shop Now
                    </Button>
                </div>

                {/* Right image */}
                <div className="flex justify-end">
                    <Image
                        src="/Frame.png"
                        alt="Grocery basket"
                        width={400}
                        height={300}
                        className="rounded-xl object-cover"
                    />
                </div>
            </div>
        </div>
    )
}
