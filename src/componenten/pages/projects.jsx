import {Link} from "react-router";


function Projects() {

    return (
        <>
            <div className={'projectContainer'}>
                {/* Navbar */}
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

                <main className={'projectsMain'}>

                    <article>
                        <img src="img/commiebot.jpg" alt="picture of commiebot interface"/>
                        <br/>

                        <h1>commiebot</h1>

                        <p> AI-chatbot demo showcase built with Azure OpenAI LLM using prompt engineering and
                            embedding </p>
                        <br/>
                        <a href="https://github.com/yimingeling/schie-zo-friends-redux">link</a>

                    </article>

                    <article>
                        <h1>schiezofriends redux</h1>
                        the goal of this project is to clean/rewrite the code of the original hackaton game and
                        implement/improve on missing features and bugfixes. <br/>
                        <br/>
                        <a href="https://github.com/yimingeling/schie-zo-friends-redux">link</a>

                    </article>
                    <article>
                        <img src="img/schiezofriends.gif" alt="picture of schiezofriends game"/>
                        <br/>
                        <h1>schiezofriends</h1>
                        2-player coop-game developed in excalibur.js for arcade machines in the university buildings
                        <br/>
                        <br/>
                        <a href="https://github.com/surelynobody161/cle4">link</a>

                    </article>

                    <article>
                        <h1>yimingdoesdev</h1>
                        <p> My personal portfolio website that you are looking at!</p>
                    </article>


                </main>
            </div>
        </>
    )
}

export default Projects