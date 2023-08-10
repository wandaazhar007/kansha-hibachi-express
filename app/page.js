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
  description: 'IExperience the art of hibachi cuisine at Kansha Hibachi Express. Indulge in sizzling grills, premium ingredients, and warm hospitality. Join us for an authentic culinary journey and unleash your taste buds with every flavorful dish.',
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
