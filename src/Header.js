function Header()
{
    return (
        <div>
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{borderBottom: `1px solid #fff`}}>
            <div classNameName="container">
                <a className="navbar-brand" href="#!">MY WORLD</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    {
                    this.state.category ?
        this.state.category.map((cat,i)=>
                        <li className="nav-item"><a className="nav-link" style={{color: `#fff`,fontSize: `25px`, marginright: `15px`}} href="#">{cat.name}</a></li>
                        )
                        :
                        null
                    }
                    </ul>
                </div>
            </div>
        </nav>
        </div>
    )
}

export default Header