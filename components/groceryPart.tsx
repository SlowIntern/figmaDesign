import Image from "next/image";
import { Button } from "./ui/button";

export default function GroceryPart() {
    const fruitBanners = [
        {
            img: "/fm1.png",
            btnClass: "bg-red-600 hover:bg-red-700",
        },
        {
            img: "/fm2.png",
            btnClass: "bg-[#C485274D] hover:bg-[#C485274D]",
        },
        {
            img: "/fm3.png",
            btnClass: "bg-green-600 hover:bg-green-700",
        },
    ];

    return (
        <main className="px-4 md:px-8 lg:px-16 py-10 space-y-10">

           
            <div className="relative w-full overflow-hidden rounded-lg">
                <Image
                    src="/Frame.png"
                    alt="Grocery banner"
                    width={1200}
                    height={500}
                    className="w-full h-50 sm:h-25 md:h-37.5 lg:h-50 object-cover"
                    priority
                />

                <div className="absolute inset-0 flex flex-col justify-center gap-4 px-4 sm:px-6 md:px-12">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-lato">
                        Grocery Delivered Fast
                    </h3>

                    <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-md">
                        Quality Products, quick delivery, great price
                    </p>

                    <Button className="w-fit bg-orange-600 hover:bg-orange-700">
                        Shop Now
                    </Button>
                </div>
            </div>

           
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {fruitBanners.map((item, index) => (
                    <div
                        key={index}
                        className="relative w-full overflow-hidden rounded-lg"
                    >
                        <Image
                            src={item.img}
                            alt="Fruit banner"
                            width={600}
                            height={400}
                            className="w-full h-[200px] sm:h-[240px] md:h-[260px] object-cover"
                        />

                        <div className="absolute inset-0 flex flex-col justify-center gap-2 px-4">
                            <h3 className="text-sm font-lato">
                                Handpicked grocery for everyday living
                            </h3>

                            <p className="text-xs sm:text-sm text-gray-600">
                                Quality products at the best price
                            </p>

                            <Button
                                size="sm"
                                className={`w-fit ${item.btnClass}`}
                            >
                                Shop Now
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
