import styles from '@/styles/Home.module.scss';
import Carousel from '@/components/carousel';
import Midbody from '@/components/midbody';
import Booking from '@/components/booking';
import Location from '@/components/location';

export default function Body() {
    return (
        <>
            <Carousel />
            <Midbody />
            <Booking />
            <Location />
        </>
    )
}