import React from "react";
import bootstrap from "../icons/bootstrap-svgrepo-com.svg";

function Header() {
    return <div className="container py-4">
        <header className="pb-3 mb-4 border-bottom">
        <a href="/" class="d-flex align-items-center text-body-emphasis text-decoration-none">
        <img className="img" height={57} width={72} src={bootstrap} alt="bootstrap" />
        <span class="fs-4">Jumbotron example</span>
      </a>
            
            
            {/* <hr /> */}
        </header>
    </div>

}

export default Header;