import styles from '@/styles/location.module.scss';

export default function location() {
    return (
        <>
            <div className={`container ${styles.mapcontainer}`}>
                <div className={`${styles.mapouter}`}>
                    <div className={`${styles.gmap_canvas}`}>
                        <iframe
                            className={`${styles.gmap_iframe}`}
                            frameBorder="0"
                            scrolling="no"
                            marginHeight="0"
                            marginWidth="0"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d608.6089837610234!2d77.85438846567895!3d30.356283459307953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f2b2647ef66d7%3A0x782445f36e051c10!2sCollection%20O%20Bartwal%20Guest%20House!5e0!3m2!1sen!2sin!4v1708752481726!5m2!1sen!2sin"
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}