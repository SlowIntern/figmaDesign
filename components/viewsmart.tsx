import Image from "next/image";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { Textarea } from "./ui/textarea";

export default function Meals() {
    return (
        <main className="px-4 md:px-8 lg:px-16 py-10 ">
            <h2 className="text-xl md:text-2xl font-bold text-orange-500 mb-6">Smart Plans</h2>
          
            <div className="relative w-full h-72 rounded-sm overflow-hidden">
                <img
                    src="/vegetable.png"
                    alt="Fat Loss Meals"
                    className="w-full h-full object-cover object-center"
                />
                <p className="absolute bottom-3 left-8  bg-opacity-50 text-white text-sm font-medium px-2 py-1 rounded">
                    Fat Loss Meals
                </p>
            </div>


            <div className="grid grid-cols-2 gap-6 mt-10">

                

                <div className="grid sm:grid-cols-1 px-10 md:grid-cols-2 lg:grid-cols-2   ">
                    <div className="grid grid:row gap-4">
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li className="font-bold">Low-calorie, high-fiber recipes</li>
                        <li className="font-bold">Lean protein + slow carbs</li>
                        <li className="font-bold">No added sugar, minimal oil</li>
                        <li className="font-bold">Fresh seasonal ingredients</li>
                    </ul>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Meal Type</label>
                            <div className="space-y-2">
                                <Checkbox defaultChecked /> Veg
                                <Checkbox /> Non-veg
                                <Checkbox /> Egg
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Plan duration</label>
                            <div className="space-y-2">
                                <Checkbox defaultChecked /> Weekdays
                                <Checkbox /> Weekend
                                <Checkbox /> Custom
                            </div>
                        </div>
                        <div className="flex flex-col mb-4">
                            <Label htmlFor="additional-request" className="mb-1 font-medium text-gray-700">
                                Customize your meals
                            </Label>
                            <Textarea
                                id="additional-request"
                                rows={3}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none"
                                placeholder="Enter any additional requests..."
                            />
                        </div>

                        
                    </div>
                
                    
                </div>

                <div className="grid sm:grid-cols-1 px-10 md:grid-cols-2 lg:grid-cols-2">
                    <p>Meal Time</p>
                </div>
                
            </div>

          
            
        </main>
    );
}