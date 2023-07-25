import BannerHero from './components/home/bannerHero/BannerHero'
import Menu from './components/home/menu/Menu'
import Counter from './components/home/Counter'
import Reviews from './components/home/Reviews'
import ContactSection from './components/home/ContactSection'
import GaleryBox from './components/galery/GaleryBox'
import FaqComponent from './components/faq/FaqComponent'

export const metadata = {
  title: 'Kansha Hibachi Express - Authentic Hibachi Delights',
  description: 'Indulge in Authentic Hibachi Delights at Kansha Hibachi Express. Unleash your taste buds with flavorful creations brought to life through sizzling hibachi cuisine. Join us for an unforgettable dining experience. Call us now to reserve your table and embark on a culinary journey.',
}

export default function Home() {
  return (
    <>
      <BannerHero />
      <Menu />
      <FaqComponent />
      <Reviews />
      <GaleryBox />
      <Counter />
      <ContactSection />
    </>
  )
}
