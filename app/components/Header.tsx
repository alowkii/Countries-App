import { NavLink } from 'react-router';

export default function Header() {
    return (
        <header>
            <div className="site-logo">
                <NavLink to={"/"}><h1>Countries<span>Explorer</span></h1></NavLink>
            </div>
            <nav>
                <ul>
                    <li><NavLink to={"/"}>Home</NavLink></li>
                    <li><NavLink to={"/countries"}>Countries</NavLink></li>
                    <li><NavLink to={"/about"}>About</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}