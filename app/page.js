import BannerHero from './components/home/bannerHero/BannerHero'
import Menu from './components/home/Menu'
import Counter from './components/home/Counter'
import Reviews from './components/home/Reviews'
import ContactSection from './components/home/ContactSection'
import GaleryBox from './components/galery/GaleryBox'
import FaqComponent from './components/faq/FaqComponent'

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
