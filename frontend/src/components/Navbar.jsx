function Navbar(props) {
    return (
        <nav className="fixed w-full top-0 z-50 bg-indigo-600 p-4 text-white text-center shadow-lg" >
            <h2 className="text-xl font-bold">{props.title}</h2>

        </nav>
    );
}

export default Navbar;
