import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";

export default function BookEvent() {
    return (
        <section className="bg-gray-50 py-16">
            {/* Heading */}
            <div className="text-center">
                <h1 className="text-3xl font-semibold text-gray-900">
                    Book Your Events
                </h1>
                <p className="mt-2 text-gray-600">
                    Big feasts for big celebrations. Custom menus, timely service, happy guests!
                </p>
            </div>

            {/* Form Card */}
            <div className="mx-auto mt-10 max-w-5xl rounded-xl bg-white p-8 shadow-lg">
                <form className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* Name */}
                    <div className="md:col-span-2">
                        <Label>Your Name *</Label>
                        <Input />
                    </div>

                    {/* Address */}
                    <div className="md:col-span-2">
                        <Label>Address *</Label>
                        <Input />
                    </div>

                    {/* Contact */}
                    <div>
                        <Label>Contact Number *</Label>
                        <Input />
                    </div>

                    {/* Email */}
                    <div>
                        <Label>Email Address *</Label>
                        <Input type="email" />
                    </div>

                    {/* Event Type */}
                    <div>
                        <Label>Event Type *</Label>
                        <Input />
                    </div>

                    {/* Guests */}
                    <div>
                        <Label>Number of Guests *</Label>
                        <Input type="number" />
                    </div>

                    {/* Date */}
                    <div>
                        <Label>Date *</Label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select date" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="today">Today</SelectItem>
                                <SelectItem value="tomorrow">Tomorrow</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Time */}
                    <div>
                        <Label>Time *</Label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select time" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="morning">Morning</SelectItem>
                                <SelectItem value="evening">Evening</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Additional Request */}
                    <div className="md:col-span-2">
                        <Label>Additional Request</Label>
                        <Textarea rows={4} />
                    </div>

                    {/* Food Preference */}
                    <div className="md:col-span-2">
                        <Label>Food Preferences *</Label>
                        <RadioGroup
                            defaultValue="mixed"
                            className="mt-2 flex gap-8"
                        >
                            <div className="flex items-center gap-2">
                                <RadioGroupItem value="veg" id="veg" />
                                <Label htmlFor="veg">Veg</Label>
                            </div>
                            <div className="flex items-center gap-2">
                                <RadioGroupItem value="nonveg" id="nonveg" />
                                <Label htmlFor="nonveg">Non Veg</Label>
                            </div>
                            <div className="flex items-center gap-2">
                                <RadioGroupItem value="mixed" id="mixed" />
                                <Label htmlFor="mixed">Mixed</Label>
                            </div>
                        </RadioGroup>
                    </div>

                    {/* Submit */}
                    <div className="md:col-span-2">
                        <Button className="w-full bg-orange-500 py-6 text-lg hover:bg-orange-600">
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    );
}
