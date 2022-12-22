import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/globalContext";

const withActiveLink = Component => props => {
  const { to, className } = props;
  const { activePage, setActivePage } = useGlobalContext();
  const pageId = to.substr(1);
  const cssStyles =
    activePage === pageId ? className + " text-blue-500" : className;
  return (
    <Component
      {...props}
      className={cssStyles}
      onClick={() => setActivePage(pageId)}
    />
  );
};

const NavLink = withActiveLink(Link);

export const Header = () => {
  return (
    <div className="flex items-center w-full px-8 py-5 fixed top-0 z-50 bg-white">
      <h1 className="text-3xl font-light">
        Short<span className="text-blue-500">URL</span>
      </h1>
      <div className="flex items-center ml-auto">
        <NavLink to="/" className="mr-4 hover:text-blue-500">
          Home
        </NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </div>
  );
};
