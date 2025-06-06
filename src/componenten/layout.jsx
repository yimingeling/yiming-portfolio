import {Link, Outlet} from "react-router";

function Layout() {
    return (<div
        className="">
        {/* Navbar */}
        <header className="fixed top-0 left-0 w-full bg-[var(--white)] shadow-md">
            <div className="max-w-6xl mx-auto flex items-center justify-between px-8 py-4">
                {/* Logo */}
                <div className="flex items-center space-x-4 logo">
                    <img
                        src="/src/img/bird1.png"
                        alt="Tetris logo"
                        className="w-12 h-12"
                    />
                    <h1 className="text-2xl font-bold">Portfolio wip</h1>
                </div>

                {/* Navigation Links */}
                <nav className="flex space-x-8 text-lg">

                    <Link to="/" className="transition duration-300">
                        Home
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="house"
                             className="svg-inline--fa fa-house " role="img" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 576 512" alt="Strona Główna">
                            <path fill="currentColor"
                                  d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"></path>
                        </svg>
                    </Link>

                    <Link to="/projects"
                          className=" transition duration-300">
                        Projects
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="toolbox"
                             className="svg-inline--fa fa-toolbox " role="img" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 512 512" alt="Projekt">
                            <path fill="currentColor"
                                  d="M176 88l0 40 160 0 0-40c0-4.4-3.6-8-8-8L184 80c-4.4 0-8 3.6-8 8zm-48 40l0-40c0-30.9 25.1-56 56-56l144 0c30.9 0 56 25.1 56 56l0 40 28.1 0c12.7 0 24.9 5.1 33.9 14.1l51.9 51.9c9 9 14.1 21.2 14.1 33.9l0 92.1-128 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32-128 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L0 320l0-92.1c0-12.7 5.1-24.9 14.1-33.9l51.9-51.9c9-9 21.2-14.1 33.9-14.1l28.1 0zM0 416l0-64 128 0c0 17.7 14.3 32 32 32s32-14.3 32-32l128 0c0 17.7 14.3 32 32 32s32-14.3 32-32l128 0 0 64c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64z"></path>
                        </svg>
                    </Link>

                    <Link to="/contact"
                          className=" transition duration-300">
                        Contact
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope"
                             className="svg-inline--fa fa-envelope " role="img" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 512 512" alt="Kontakt">
                            <path fill="currentColor"
                                  d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>
                        </svg>
                    </Link>
                </nav>
            </div>
        </header>

        {/* Main Content */}
        <main className="pt-20  ">

            <Outlet/>
        </main>

        <footer className={'mt-96'}>
            Link1 link2 link3
        </footer>
    </div>);
}

export default Layout;
