// FatLossMeals.tsx
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function FatLossMeals() {
    return (
        <div className="max-w-4xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Section */}
            <Card>
                <CardHeader>
                    <CardTitle>Fat Loss Meals</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <ul className="list-disc list-inside text-sm text-muted-foreground">
                        <li>Low-calorie, high-fiber recipes</li>
                        <li>Lean protein + slow carbs</li>
                        <li>No added sugar, minimal oil</li>
                        <li>Fresh seasonal ingredients</li>
                        <li>Smart portion meals</li>
                        <li>Great taste every day</li>
                    </ul>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Meal Type</label>
                        <Select defaultValue="nonveg">
                            <SelectTrigger>
                                <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="veg">Veg</SelectItem>
                                <SelectItem value="nonveg">Non Veg</SelectItem>
                                <SelectItem value="egg">Egg</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Plan Duration</label>
                        <Select defaultValue="weekend">
                            <SelectTrigger>
                                <SelectValue placeholder="Select duration" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="weekdays">Weekdays</SelectItem>
                                <SelectItem value="weekend">Weekend</SelectItem>
                                <SelectItem value="custom">Custom</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Customize Your Meal</label>
                        <Textarea placeholder="Spice level, Allergy notes, No onion/garlic" />
                    </div>
                </CardContent>
                <CardFooter className="text-sm text-muted-foreground">
                    Price per meal: <span className="font-semibold text-primary ml-2">Rs. 299</span>
                </CardFooter>
            </Card>

            {/* Right Section */}
            <Card>
                <CardHeader>
                    <CardTitle>Select Meal Times</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Breakfast</label>
                        <div className="space-y-1">
                            <Checkbox defaultChecked /> 6:00AM to 7:00AM
                            <Checkbox /> 7:00AM to 8:00AM
                            <Checkbox /> 8:00AM to 9:00AM
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Lunch</label>
                        <div className="space-y-1">
                            <Checkbox /> 12:00PM to 1:00PM
                            <Checkbox defaultChecked /> 1:00PM to 2:00PM
                            <Checkbox /> 2:00PM to 3:00PM
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Dinner</label>
                        <div className="space-y-1">
                            <Checkbox /> 7:00PM to 8:00PM
                            <Checkbox /> 8:00PM to 9:00PM
                            <Checkbox defaultChecked /> 9:00PM to 10:00PM
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="w-full">Subscribe</Button>
                </CardFooter>
            </Card>
        </div>
    );
}
