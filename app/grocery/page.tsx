import CategoryStrip from "@/components/grocery/CategoryStrip";
import HeroBanner from "@/components/grocery/HeroBanner";
import ProductSection from "@/components/grocery/ProductSection";
import PromoCards from "@/components/grocery/PromoCards";
import GroceryNavbar from "@/components/groceryNavbar";
import GroceryPart from "@/components/groceryPart";

export default function Grocery(){
    return (
        <div className="min-h-screen bg-gray-50">
                    {/* Navbar */}
                    <GroceryNavbar/>
                    {/* Main Content */}
            <main className="max-w-7xl mx-auto px-6 space-y-10">
                <HeroBanner />
                <PromoCards />
                <CategoryStrip />
                <ProductSection title="Fruits" />
                <ProductSection title="Vegetables" />
            </main>
                </div>
    );
}