import {Link} from "react-router";


function Projects() {
    return (
        <>
            {/* Navbar */}
            <header className="fixed top-0 left-0 w-full  ">

                <div className="max-w-6xl mx-auto flex items-center justify-between py-2">
                    {/* Logo */}
                    <Link to={'/'}  className="logo">
                        <img
                            src="./src/img/bird1.png"
                            alt="Tetris logo"
                            className="w-12 h-12"
                        />
                    </Link>


                </div>
            </header>
Projects

        </>
    )
}

export default Projects