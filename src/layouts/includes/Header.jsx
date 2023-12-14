

const Header = () => {  

  

  return (
    <>
      {/* Navbar */}
      <nav className="main-header navbar navbar-expand border-bottom-0 navbar-dark navbar-primary">
        <ul className="navbar-nav">
          <li className="nav-item">
            <div className="nav-link" data-widget="pushmenu" role="button">
              <i className="fas fa-bars"/>
            </div>
          </li>
          <li className="nav-item">
            <a href="model" className="nav-link font-weight-bold" data-toggle="modal" data-target="#ManualModal"><i className="mr-1 fas fa-book" /> คู่มือการใช้งานระบบ</a>
          </li>

          <li className="nav-item">
            <a href="model" className="nav-link font-weight-bold" data-toggle="modal" data-target="#ContactModal"><i className="mr-1 fas fa-phone-square-alt" /> ติดต่อสอบถาม</a>
          </li>

        </ul>
      </nav>
      {/* /.End Navbar */}




    </>
  );
};

export default Header;
