import {Link, Outlet} from "react-router";

function Layout() {
    return (<div
        className="">

        {/* Main Content */}
        <section className="">

            <Outlet/>
        </section>


    </div>);
}

export default Layout;
