export default function Navbar() {
    return (
        <>
            <nav className="absolute top-0 left-0 z-20 bg-white/30 backdrop-blur px-8 py-4 rounded w-full">
                <ul className="flex justify-end space-x-8 text-xl mr-10 font-cinzel">
                    <li className="hover:bg-white/70 p-2 rounded">
                        <a href="./">Home</a>
                    </li>
                    <li className="hover:bg-white/70 p-2 rounded">
                        <a href="./products">Products</a>
                    </li>
                    <li className="hover:bg-white/70 p-2 rounded">
                        <a href="#">About</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}
