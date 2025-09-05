import {Link} from "react-router";

function PageNotFound() {
    return (
        <>
            <div className="">
                <h1 className="text-6xl font-bold ">404</h1>
                <p className="text-xl mt-4">Page Not Found</p>
                <p className="text-gray-400 mt-2">
                    The page you are looking for does not exist. 😢
                </p>

            </div>

            <br/>
            <a className={'links '}>
                <Link to={'/home'}>
                    ← back
                </Link>
            </a>
        </>

    );
}

export default PageNotFound;
