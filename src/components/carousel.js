import styles from '../styles/Home.module.scss';

export default function carousel() {
    return (
        <>
            <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className="active" aria-current="true"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className={`carousel-item ${styles.hero}`}>
                        {/* <img className="bd-placeholder-img" style={{ 'min-height': '100px', 'width': '100%' }} src="/Hero/rooms1.png" alt="" /> */}
                        <img width="100%" height="500px" className="bd-placeholder-img" src="/Hero/rooms1.png" />
                        <div className="container">
                            <div className="carousel-caption text-start">
                                <h1>Diane von Furstenberg</h1>
                                <p className="opacity-75">A good hotel room can make you feel inspired, refreshed, and invigorated.</p>

                            </div>
                        </div>
                    </div>
                    <div className={`carousel-item ${styles.hero} active`}>
                        <img width="100%" height="500px" className="bd-placeholder-img" src="/Hero/rooms2.png" />
                        {/* <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg> */}
                        <div className="container">
                            <div className="carousel-caption">
                                <h1>Laura Marano</h1>
                                <p>A great hotel experience is not just about the accommodation, but the people who work there and the service they provide.</p>

                            </div>
                        </div>
                    </div>
                    <div className={`carousel-item ${styles.hero}`}>
                        {/* <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg> */}
                        <img width="100%" height="500px" className="bd-placeholder-img" src="/Hero/rooms4.png" />
                        <div className="container">
                            <div className="carousel-caption text-end">
                                <h1>Alice Cooper</h1>
                                <p>A hotel should feel like a home away from home, but with better room service.</p>

                            </div>
                        </div>
                    </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}
