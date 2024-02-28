import styles from '../styles/Home.module.scss';

export default function midbody() {
    return (
        <>
            <div className={`container ${styles.bdcontainer}`}>
                <div className="card">
                    <div className="card-header">
                        Bartwals Guest House is among the most preferred budget hotels in Selaqui Dehradun for both business travelers and tourists seeking a comfortable stay.
                    </div>
                    <div className="card-body">
                        <ul>
                            <li>It features contemporary rooms with modern amenities like a flat-screen TV, air conditioner and attached bathroom with hot and cold water supply.</li>
                            <li>Further, room service, 24-hour CCTV surveillance for maximum security, round-the-clock power backup and complimentary Wi-Fi access are provided for added convenience.</li>
                            <li>Our trained and hospitable staff at the front desk is always at your service, leaving no stone unturned in making your stay with us pleasant and enjoyable.</li>
                            <li>We also provide services like Loundry, Gym , Book Your Ride (book Car/ Cab) and Rental 2 wheelers Available, Dine-In (Authentic Indian Restaurant)</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={`container ${styles.roomcards}`}>
                <div className={`card ${styles.crd} ${styles.crdleft}`} style={{ 'width': '100%' }}>
                    {/* <img src="..." class="card-img-top" alt="..." /> */}

                    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                                <img src="/pemium room/rooms3.png" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src="/pemium room/rooms5.png" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="/pemium room/rooms6.png" className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                    <div className="card-body">
                        <div className="card-text">
                            <h3>Premium Room</h3>
                            <div className="row">
                                <div className={`${styles.col} attm`}>
                                    <img
                                        className="img-pn"
                                        src="/securitycam.png"
                                        alt="securitycamera"
                                    />
                                    <span>24X7 Security</span>
                                </div>
                                <div className={`${styles.col} attm`}>
                                    <img
                                        className="img-pn"
                                        src="/wifi.png"
                                        alt="freewifi"
                                    />
                                    <span>Free Wifi</span>
                                </div>
                                <div className={`${styles.col} attm`}>
                                    <img
                                        className="img-pn"
                                        src="/wardrop.png"
                                        alt="wardrop"
                                    />
                                    <span>Wardrobe or Closet</span>
                                </div>
                                <div className={`${styles.col} attm`}>
                                    <img
                                        className="img-pn"
                                        src="/water.png"
                                        alt="mineralwater"
                                    />
                                    <span>Mineral Water Bottle</span>
                                </div>
                                <div className={`${styles.col} attm`}>
                                    <img
                                        className="img-pn"
                                        src="/housekeeping.png"
                                        alt="dailyhousekeeping"
                                    />
                                    <span>Daily Housekeeping</span>
                                </div>
                                <div className={`${styles.col} attm`}>
                                    <img
                                        className="img-pn"
                                        src="/toilet.png"
                                        alt="freetoiletries"
                                    />
                                    <span>Free Toiletries</span>
                                </div>
                                <div className={`${styles.col} attm`}>
                                    <img className="img-pn" src="/tv.png" alt="lcdtv" />
                                    <span>LCD TV</span>
                                </div>
                                <div className={`${styles.col} attm`}>
                                    <img
                                        className="img-pn"
                                        src="/tick.png"
                                        alt="cleantowels"
                                    />
                                    <span>Clean Towels</span>
                                </div>
                                <div className={`${styles.col} attm`}>
                                    <img
                                        className="img-pn"
                                        src="/tick.png"
                                        alt="cleanlinen"
                                    />
                                    <span>Clean Linen</span>
                                </div>
                                <div className={`${styles.col} attm`}>
                                    <img
                                        className="img-pn"
                                        src="/tick.png"
                                        alt="toiletpaper"
                                    />
                                    <span>Toilet Paper</span>
                                </div>
                                <div className={`${styles.col} attm`}>
                                    <img
                                        className="img-pn"
                                        src="/tick.png"
                                        alt="dthchannels"
                                    />
                                    <span>DTH Channels</span>
                                </div>

                                <div className={`${styles.col} attm`}>
                                    <img
                                        className="img-pn"
                                        src="/tick.png"
                                        alt="24hrfrontdesk"
                                    />
                                    <span>24-Hour Front Desk</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`card ${styles.crd} ${styles.crdright}`} style={{ 'width': '100%' }}>
                    {/* <img src="..." class="card-img-top" alt="..." /> */}

                    <div id="carouselExampleInterval1" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                                <img src="/delux rooms/8.png" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src="/delux rooms/2.png" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="/delux rooms/3.png" className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval1" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval1" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                    <div className="card-body">
                        <div className="card-text">
                            <h3>Delux Room</h3>
                            <div className="row">
                                <div className={`${styles.col} attm`}>
                                    <img
                                        className="img-pn"
                                        src="/securitycam.png"
                                        alt="securitycamera"
                                    />
                                    <span>24X7 Security</span>
                                </div>
                                <div className={`${styles.col} attm`}>
                                    <img
                                        className="img-pn"
                                        src="/wifi.png"
                                        alt="freewifi"
                                    />
                                    <span>Free Wifi</span>
                                </div>
                                <div className={`${styles.col} attm`}>
                                    <img
                                        className="img-pn"
                                        src="/wardrop.png"
                                        alt="wardrop"
                                    />
                                    <span>Wardrobe or Closet</span>
                                </div>
                                <div className={`${styles.col} attm`}>
                                    <img
                                        className="img-pn"
                                        src="/water.png"
                                        alt="mineralwater"
                                    />
                                    <span>Mineral Water Bottle</span>
                                </div>
                                <div className={`${styles.col} attm`}>
                                    <img
                                        className="img-pn"
                                        src="/housekeeping.png"
                                        alt="dailyhousekeeping"
                                    />
                                    <span>Daily Housekeeping</span>
                                </div>
                                <div className={`${styles.col} attm`}>
                                    <img
                                        className="img-pn"
                                        src="/toilet.png"
                                        alt="freetoiletries"
                                    />
                                    <span>Free Toiletries</span>
                                </div>
                                <div className={`${styles.col} attm`}>
                                    <img className="img-pn" src="/tv.png" alt="lcdtv" />
                                    <span>LCD TV</span>
                                </div>
                                <div className={`${styles.col} attm`}>
                                    <img
                                        className="img-pn"
                                        src="/tick.png"
                                        alt="cleantowels"
                                    />
                                    <span>Clean Towels</span>
                                </div>
                                <div className={`${styles.col} attm`}>
                                    <img
                                        className="img-pn"
                                        src="/tick.png"
                                        alt="cleanlinen"
                                    />
                                    <span>Clean Linen</span>
                                </div>
                                <div className={`${styles.col} attm`}>
                                    <img
                                        className="img-pn"
                                        src="/tick.png"
                                        alt="toiletpaper"
                                    />
                                    <span>Toilet Paper</span>
                                </div>
                                <div className={`${styles.col} attm`}>
                                    <img
                                        className="img-pn"
                                        src="/tick.png"
                                        alt="dthchannels"
                                    />
                                    <span>DTH Channels</span>
                                </div>

                                <div className={`${styles.col} attm`}>
                                    <img
                                        className="img-pn"
                                        src="/tick.png"
                                        alt="24hrfrontdesk"
                                    />
                                    <span>24-Hour Front Desk</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`container ${styles.policies}`}>
                <h3>Bartwal Guest House Policies</h3>
                <div className={`${styles.polibody}`}>
                    <ul className={`${styles.lspolicy}`}>
                        <li>
                            <span>Check-in</span>
                            <strong>12:00 PM</strong>
                        </li>
                        <li>
                            <span>Check-out</span>
                            <strong>11:00 AM</strong>
                        </li>
                        <li>
                            <span>Children and Extra Beds</span>
                            <strong>Child upto 8 years is Allowed and Extra bed available (T&C)</strong>
                        </li>
                        <li>
                            <span>Local ID</span>
                            <strong>Allowed</strong>
                        </li>
                        <li>
                            <span>Couple Friendly</span>
                            <strong>Allowed</strong>
                        </li>
                        <li>
                            <span>Foreign Guest</span>
                            <strong>Allowed</strong>
                        </li>
                    </ul>
                    <div className={`${styles.strip}`}>
                        <ul className={`${styles.rmls}`}>
                            <li>
                                <strong>Local ID</strong>
                                <span>
                                    It is mandatory for all guests to present valid photo identification at the time of check-in. According to government regulations, a valid Photo ID has to be carried by every person above the age of 18 staying at the hotel. The identification proofs accepted are Aadhar Card, Driving License, Voter ID Card, and Passport. Note that PAN card is not acceptable. Without an original copy of a valid ID, you will not be allowed to check-in.
                                </span>
                            </li>

                            <li>
                                <strong>Early Check-in and Late Check-out</strong>
                                <span>
                                    Early check in - late check-out Charges (700rs)
                                </span>
                            </li>

                            <li>
                                <strong>Couple Friendly</strong>
                                <span>This hotel welcomes unmarried couples</span>
                            </li>

                            <li>
                                <strong>Foreign Guest</strong>
                                <span>
                                    Foreign guests are welcome. They are required to
                                    produce a valid passport and visa.
                                </span>
                            </li>
                            <li>
                                <span><strong>Cancellation Policy</strong></span>
                                <ul>
                                    <li>
                                        <strong>100% Free cancellation:</strong>
                                        <span>
                                            If cancelled greater than 72 hours before 12pm on
                                            check-in date
                                        </span>
                                    </li>
                                    <li>
                                        <strong>20% Charges apply on cancellation:</strong>
                                        <span>
                                            If cancelled greater than 48 hours before 12pm on
                                            check-in date
                                        </span>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <strong>Children Policy</strong>
                                <ul>
                                    <li>
                                        Maximum of one child up to the age of 8 years is
                                        allowed free of charge
                                    </li>
                                    <li>
                                        No complimentary breakfast and extra bed/mattress
                                        will be provided in such cases
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}