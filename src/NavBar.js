const NavBar = (props) => {
    return (  

        <nav className="navbarr black">
        <div className="nav-wrapper row ">
          <a href="#" className="brand-logo col s4" id="name"><b>Reactart</b></a>
          <span className="right count col s4 row"><i className="fas fa-shopping-cart blue-text col s2"></i><span className="circle yellow col s4" id="counter">{props.count}</span></span>
        </div>
      </nav>


    );
}
 
export default NavBar;