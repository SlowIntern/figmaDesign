import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const subscriptionPlans = [
    {
        title: "Fat Loss Meals",
        description: ["Helps weight goals", "No added sugar, minimal oil", "High nutrients, big flavor"],
        price: 429,
        img: "/vegetable.png",
    },
    {
        title: "Protein Power",
        description: ["26–35g protein per meal", "Healthy fats, smart carbs", "Great for energy and recovery"],
        price: 399,
        img: "/vegetable.png",
    },
    {
        title: "Balanced Box",
        description: ["Everyday nutrition", "Portion controlled", "Fresh cooked meals"],
        price: 299,
        img: "/vegetable.png",
    },
    {
        title: "Kids Meals",
        description: ["Rich in calcium & iron", "No extreme spice or processed food"],
        price: 299,
        img: "/vegetable.png",
    },
    {
        title: "Immunity Meals",
        description: ["Everyday nutrition", "Portion controlled", "Fresh cooked meals"],
        price: 299,
        img: "/vegetable.png",
    },
    {
        title: "Immunity Meals",
        description: ["Everyday nutrition", "Portion controlled", "Fresh cooked meals"],
        price: 299,
        img: "/vegetable.png",
    },
    {
        title: "Immunity Meals",
        description: ["Everyday nutrition", "Portion controlled", "Fresh cooked meals"],
        price: 299,
        img: "/vegetable.png",
    },
    {
        title: "Immunity Meals",
        description: ["Everyday nutrition", "Portion controlled", "Fresh cooked meals"],
        price: 299,
        img: "/vegetable.png",
    },
    {
        title: "Immunity Meals",
        description: ["Everyday nutrition", "Portion controlled", "Fresh cooked meals"],
        price: 299,
        img: "/vegetable.png",
    },
    {
        title: "Immunity Meals",
        description: ["Everyday nutrition", "Portion controlled", "Fresh cooked meals"],
        price: 299,
        img: "/vegetable.png",
    },
    {
        title: "Immunity Meals",
        description: ["Everyday nutrition", "Portion controlled", "Fresh cooked meals"],
        price: 299,
        img: "/vegetable.png",
    },
]

export default function SubscriptionGrid() {
    return (
        <main className="px-4 md:px-8 lg:px-16 py-10">
            <h2 className="text-xl md:text-2xl font-bold text-orange-500 mb-6">Subscription Home Cooked</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {subscriptionPlans.map((plan, index) => (
                    <Card key={index} className="shadow-md hover:shadow-lg transition">
                        <img src={plan.img} alt={plan.title} className="w-full h-48 object-cover rounded-t-md" />
                        <CardContent className="space-y-3">
                            <CardHeader className="p-0">
                                <CardTitle className="text-orange-500 text-lg">{plan.title}</CardTitle>
                            </CardHeader>
                            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                                {plan.description.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                            <p className="text-sm font-medium">Starting at Rs. {plan.price}</p>
                            <Button className="w-full bg-orange-500 hover:bg-orange-600">View Details</Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </main>
    )
}
