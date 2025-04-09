import { Link } from "react-router";

function PageNotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
            <h1 className="text-6xl font-bold text-red-500 dark:text-red-400">404</h1>
            <p className="text-xl mt-4">Page Not Found</p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
                The page you are looking for does not exist. 😢
            </p>

            <Link
                to="/setups"
                className="mt-6 px-6 py-3 bg-blue-500 dark:bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 dark:hover:bg-blue-700 transition duration-300"
            >
                Go Back
            </Link>
        </div>
    );
}

export default PageNotFound;
