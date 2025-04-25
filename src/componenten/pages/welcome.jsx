import { useEffect } from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

function Welcome() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/home");
        }, 2000); // wait 2 seconds before navigating

        return () => clearTimeout(timer); // cleanup
    }, [navigate]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <h1>Welcome to My App</h1>
            {/* other content */}
        </motion.div>
    );
}

export default Welcome;
