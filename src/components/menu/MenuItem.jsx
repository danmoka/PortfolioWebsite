const MenuItem = ({ href, setMenuOpen, children }) => {
    return (
        <li onClick={() => setMenuOpen(false)}>
            <a href={href}>{children}</a>
        </li>
    );
};

export default MenuItem;