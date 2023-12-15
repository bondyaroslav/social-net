import React from "react";
import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div>
            <div>Page not found</div>
            <Link to={"/profile"}><p>go to profile</p></Link>
        </div>
    )
}

export default NotFoundPage