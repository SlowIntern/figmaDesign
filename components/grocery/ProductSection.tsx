import ProductCard from "./ProductCard"

export default function ProductSection({ title }: { title: string }) {
    return (
        <section className="mt-10">
            <h2 className="text-xl font-semibold mb-4">{title}</h2>

            <div className="flex gap-6 overflow-x-auto">
                {Array.from({ length: 5 }).map((_, i) => (
                    <ProductCard key={i} />
                ))}
            </div>
        </section>
    )
}
