const categories = [
    {
        name: 'Cherry MX Keyboards',
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1625130694338-4110ba634e59?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        name: 'Hot-Swappable Keyboards',
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1601952899827-3db57e7943f7?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        name: 'Ergonomic Keyboards',
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1613442986373-af81e5c618d3?q=80&w=2144&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        name: 'Compact Keyboards',
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1636257205635-7d9e7336b88e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        name: 'RGB Keyboards',
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1536059540012-f2ed455bc0b1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        name: 'RGB Keyboards',
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1711710326148-3f4280530048?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a2V5Ym9hcmQlMjBtZWNoYW5pY2FsfGVufDB8MXwwfHx8MA%3D%3D',
    },
];


export default function Category() {
    return (
        <div className="bg-white">
            <div className="py-16 sm:py-24 xl:mx-auto xl:max-w-7xl xl:px-8">
                <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Popular Categories</h2>
                </div>

                <div className="mt-4 flow-root">
                    <div className="-my-2">
                        <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
                            <div className="absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-6 xl:gap-x-8 xl:space-x-0 xl:px-0">
                                {categories.map((category) => (
                                    <a
                                        key={category.name}
                                        href={category.href}
                                        className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
                                    >
                                        <span aria-hidden="true" className="absolute inset-0">
                                            <img src={category.imageSrc} alt="" className="h-full w-full object-cover object-center" />
                                        </span>
                                        <span
                                            aria-hidden="true"
                                            className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                                        />
                                        <span className="relative mt-auto text-center text-xl font-bold text-white">{category.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
