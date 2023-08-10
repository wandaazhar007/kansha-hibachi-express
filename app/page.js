import BannerHero from './components/home/bannerHero/BannerHero'
import Counter from './components/home/Counter'
import Reviews from './components/home/reviews/Reviews'
import ContactSection from './components/home/contactSection/ContactSection'
import GaleryBox from './components/galery/GaleryBox'
import FaqComponent from './components/faq/FaqComponent'
import Head from 'next/head';
import GoToMenu from './components/home/goToMenu/GoToMenu'

export const metadata = {
  title: 'Kansha Hibachi Express - Authentic Hibachi Delights',
  description: 'Indulge in Authentic Hibachi Delights at Kansha Hibachi Express. Unleash your taste buds with flavorful creations brought to life through sizzling hibachi cuisine. Join us for an unforgettable dining experience. Call us now to reserve your table and embark on a culinary journey.',
}

export default function Home() {
  return (
    <>
      <Head>
        <meta
          property="og:image"
          content="/images/logo-kansha-header.png"
        />

        <link rel="icon" href="/images/logo-kansha-header.png" />
      </Head>
      <BannerHero />
      <GoToMenu />
      <FaqComponent />
      <Reviews />
      <GaleryBox />
      <Counter />
      <ContactSection />
    </>
  )
}
