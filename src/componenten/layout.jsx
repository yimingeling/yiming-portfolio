import {Link, Outlet} from "react-router";

function Layout() {
    return (<div
        className="">
        {/* Navbar */}
        <header className="fixed top-0 left-0 w-full bg-[var(--purple)] shadow-md">
            <div className="max-w-6xl mx-auto flex items-center justify-between px-8 py-4">
                {/* Logo */}
                <div className="flex items-center space-x-4 logo">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Tetris_T.svg/1280px-Tetris_T.svg.png"
                        alt="Tetris logo"
                        className="w-12 h-12"
                    />
                    <h1 className="text-2xl font-bold">Portfolio wip</h1>
                </div>

                {/* Navigation Links */}
                <nav className="flex space-x-8 text-lg">
                    <Link to="/" className="transition duration-300">
                        Home
                    </Link>
                    <Link to="/contact"
                          className=" transition duration-300">
                        Contact
                    </Link>
                </nav>
            </div>
        </header>

        {/* Main Content */}
        <main className="pt-20  ">
            <Outlet/>
        </main>
    </div>);
}

export default Layout;
