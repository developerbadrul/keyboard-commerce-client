import React from "react";
import Rating from "react-rating";

export interface IProduct {
    _id: string;
    image: string;
    title: string;
    brand: string;
    availableQuantity: number;
    price: number;
    rating: number;
    description: string;
}

interface CardProps {
    product: IProduct;
}

const Card: React.FC<CardProps> = ({ product }) => {
    return (
        <div key={product._id} className="group text-sm">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-cover object-center"
                />
            </div>
            <h3 className="mt-4 font-medium text-gray-900">{product.title}</h3>
            <p className="italic text-gray-500">{product.brand}</p>
            <p className="text-gray-500">Available: {product.availableQuantity}</p>
            <p className="mt-2 font-medium text-gray-900">${product.price.toFixed(2)}</p>
            <div className="flex items-center mt-2">
                <Rating
                    initialRating={product.rating}
                    emptySymbol={<span className="text-gray-300">☆</span>}
                    fullSymbol={<span className="text-yellow-500">★</span>}
                    readonly
                />
                <span className="ml-2 text-gray-500">({product.rating.toFixed(1)})</span>
            </div>
            <a
                href="#"
                className="mt-4 w-full text-center inline-block rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
                See Details
            </a>
        </div>
    );
};

export default Card;
