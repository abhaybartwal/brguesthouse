export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Bartwals Guest House</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Rooms & Rates/ Amenties</a>
                            </li>
                        </ul>
                        <div className="d-flex" role="search">
                            <div className="navbar-brand" style={{ 'fontSize': '16px' }}>Guest house in selaqui</div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}