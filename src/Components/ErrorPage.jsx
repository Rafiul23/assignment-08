import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex justify-center">
            <div className="text-center py-10">
            <h1 className="text-red-600 text-3xl">Error: Something went wrong</h1>
            <Link to="/"><button className="btn btn-warning my-4 mx-auto">Go to Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;