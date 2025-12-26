import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function Planss() {
    return (
        <main className=" px-4 md:px-10 py-8">
            <h2 className="text-orange-500 text-xl font-semibold mb-4">
                Smart plans
            </h2>

            <Card className="overflow-hidden rounded-xl">
                {/* IMAGE HEADER */}
                <div className="relative h-65 w-full">
                    <Image
                        src="/vegetable.png"
                        alt="Fat Loss Meals"
                        fill
                        className="object-cover"
                    />
                    <span className="absolute bottom-4 left-4 text-white text-xl font-semibold">
                        Fat Loss Meals
                    </span>
                </div>

                {/* CONTENT */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
                    {/* LEFT SIDE */}
                    <div className="space-y-6">
                        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 font-medium">
                            <li>Low-calorie, high-fiber recipes</li>
                            <li>Lean protein + slow carbs</li>
                            <li>No added sugar, minimal oil</li>
                            <li>Fresh seasonal ingredients</li>
                            <li>Smart portion meals</li>
                            <li>Great taste every day</li>
                        </ul>

                        {/* MEAL TYPE */}
                        <div>
                            <p className="font-semibold mb-2">Meal Type</p>
                            <RadioGroup defaultValue="nonveg" className="flex gap-6">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="veg" id="veg" />
                                    <Label htmlFor="veg">Veg</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="nonveg" id="nonveg" />
                                    <Label htmlFor="nonveg">Non Veg</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="egg" id="egg" />
                                    <Label htmlFor="egg">Egg</Label>
                                </div>
                            </RadioGroup>
                        </div>

                        {/* PLAN DURATION */}
                        <div>
                            <p className="font-semibold mb-2">Plan Duration</p>
                            <RadioGroup defaultValue="weekend" className="flex gap-6">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="weekdays" id="weekdays" />
                                    <Label htmlFor="weekdays">Weekdays</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="weekend" id="weekend" />
                                    <Label htmlFor="weekend">Weekend</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="custom" id="custom" />
                                    <Label htmlFor="custom">Custom</Label>
                                </div>
                            </RadioGroup>
                        </div>

                        {/* CUSTOMIZE */}
                        <div>
                            <Label className="font-semibold">Customize Your Meal</Label>
                            <Textarea
                                placeholder="Spice level, Allergy notes, No onion/garlic"
                                className="mt-2"
                            />
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="space-y-4">
                        <p className="font-semibold">Meal Time</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {[
                                "Breakfast - 6:00AM to 7:00AM",
                                "Breakfast - 7:00AM to 8:00AM",
                                "Breakfast - 8:00AM to 9:00AM",
                                "Lunch - 12:00PM to 1:00PM",
                                "Lunch - 1:00PM to 2:00PM",
                                "Lunch - 2:00PM to 3:00PM",
                                "Dinner - 7:00PM to 8:00PM",
                                "Dinner - 8:00PM to 9:00PM",
                                "Dinner - 9:00PM to 10:00PM",
                            ].map((time) => (
                                <label
                                    key={time}
                                    className="flex items-center gap-2 border rounded-md px-3 py-2 text-sm cursor-pointer"
                                >
                                    <Checkbox />
                                    {time}
                                </label>
                            ))}
                        </div>

                        {/* PRICE + CTA */}
                        <div className="mt-6 bg-gray-100 rounded-lg p-4 flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500">Price per meal</p>
                                <p className="text-2xl font-bold">Rs. 299</p>
                            </div>
                            <Button className="bg-orange-500 hover:bg-orange-600">
                                Subscribe →
                            </Button>
                        </div>
                    </div>
                </div>
            </Card>
        </main>
    )
}
