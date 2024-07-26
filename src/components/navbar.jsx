import Link from "next/link"

const Navbar = () => {
    return (
        <div className="bg-dark ">
            <ul className=" list-unstyled d-flex justify-content-around text-decoration-none p-3 ">
                <Link href="/"><li className="text-white">Home</li></Link>
                <Link href="/about"><li className="text-white">About</li></Link>
                <Link href="/contact"><li className="text-white">Contact Us</li></Link>
            </ul>
        </div>
    )
}

export default Navbar
