import Card, { IProduct } from "./Card";

const products: IProduct[] = [
    {
        _id: "66914fb7f1ed9dbc761c38ee",
        image: "https://images.unsplash.com/photo-1536059540012-f2ed455bc0b1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Mechanical Gaming Keyboard",
        brand: "KeyMaster",
        availableQuantity: 49,
        price: 99.99,
        rating: 4.5,
        description: "A high-performance mechanical keyboard with RGB lighting and programmable keys."
    },
    {
        _id: "66914fb7f1ed9dbc761c38ee",
        image: "https://images.unsplash.com/photo-1536059540012-f2ed455bc0b1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Mechanical Gaming Keyboard",
        brand: "KeyMaster",
        availableQuantity: 49,
        price: 99.99,
        rating: 4.5,
        description: "A high-performance mechanical keyboard with RGB lighting and programmable keys."
    },
    {
        _id: "66914fb7f1ed9dbc761c38ee",
        image: "https://images.unsplash.com/photo-1536059540012-f2ed455bc0b1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Mechanical Gaming Keyboard",
        brand: "KeyMaster",
        availableQuantity: 49,
        price: 99.99,
        rating: 4.5,
        description: "A high-performance mechanical keyboard with RGB lighting and programmable keys."
    },
    {
        _id: "66914fb7f1ed9dbc761c38ee",
        image: "https://images.unsplash.com/photo-1536059540012-f2ed455bc0b1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Mechanical Gaming Keyboard",
        brand: "KeyMaster",
        availableQuantity: 49,
        price: 99.99,
        rating: 4.5,
        description: "A high-performance mechanical keyboard with RGB lighting and programmable keys."
    },
    {
        _id: "66914fb7f1ed9dbc761c38ee",
        image: "https://images.unsplash.com/photo-1536059540012-f2ed455bc0b1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Mechanical Gaming Keyboard",
        brand: "KeyMaster",
        availableQuantity: 49,
        price: 99.99,
        rating: 4.5,
        description: "A high-performance mechanical keyboard with RGB lighting and programmable keys."
    },
    {
        _id: "66914fb7f1ed9dbc761c38ee",
        image: "https://images.unsplash.com/photo-1536059540012-f2ed455bc0b1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Mechanical Gaming Keyboard",
        brand: "KeyMaster",
        availableQuantity: 49,
        price: 99.99,
        rating: 4.5,
        description: "A high-performance mechanical keyboard with RGB lighting and programmable keys."
    },
]

export default function FeatureProductSection() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <h2 className="text-2xl mb-4 font-bold tracking-tight text-gray-900">Feature Product</h2>
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
                    {products.map((product) => <Card key={product._id} product={product} />)}
                </div>
            </div>
        </div>
    )
}
