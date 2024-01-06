import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{
                    textDecoration: 'none',
                    color: match ? "var(--twitter-color)" : "black"
                }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
}

export default CustomLink;



// Notes:
/**
 *  so useResolvedPath and useMatch are react hooks from react-router-dom

 * useResolvedPath : It resolves the provided to path into an absolute path, accounting for any dynamic or nested routes. it then stores into varaible resolved
 * useMatch : Here, the useMatch hook from React Router is used to check if the current    URL matches the resolved pathname obtained in the previous step.
It takes an object with configuration options. path specifies the path to match against, and end: true means it should check for an exact match of the pathname.

so these 2 hooks are basically used to make the color of text skyblue which page is currently opened 

later in css part the match variabke is checked if its true then sky-blue color is applied or black

*/
