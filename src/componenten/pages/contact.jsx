import {Link} from "react-router";


function Contact() {
    return (
        <>

            <main className={'homeMain'}>
                <header className="">
                    <a className={'links '}>
                        <Link to={'/home'}>
                            ← back
                        </Link>
                    </a>
                    <div className="">
                        {/* Logo */}
                        <Link to={'/'} className="logo">
                            <img
                                src="img/bird1.png"
                                alt="Tetris logo"
                                className="w-12 h-12"
                            />
                        </Link>


                    </div>
                </header>
                <h1>
                    Contact
                </h1>
                <img id={'imgMe'} src={'assets/me2.jpg'} alt={"photo of yiming li"}/>
                <p>github:
                    <a href="https://github.com/yimingeling"> https://github.com/yimingeling</a>
                </p>
                <p>
                    email: yimingdoesdev@gmail.com
                </p>
                <a href="/assets/cv%202025.pdf">Click here to view CV</a>
            </main>
        </>

    )
}

export default Contact