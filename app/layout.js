// import './globals.css'
import '../public/css/all.min.css'
import '../public/css/animate.css'
import '../public/css/bootstrap.min.css'
import '../public/css/nice-select.css'
import '../public/css/responsive.css'
import '../public/css/slick.css'
import '../public/css/spacing.css'
import '../public/css/style.css'
import '../public/css/style2.css'
import '../public/css/cart.css'
import '../public/css/galery.css'
import '../public/css/terms-conditions.css'
import '../public/css/login.css'
import '../public/css/responsive2.css'
import '../public/css/venobox.min.css'
import { Inter } from 'next/font/google'
import Topbar from './components/Topbar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CartProvider from './context/cartContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kansha Hibachi Express - Authentic Hibachi Delights',
  description: 'Indulge in Authentic Hibachi Delights at Kansha Hibachi Express. Unleash your taste buds with flavorful creations brought to life through sizzling hibachi cuisine. Join us for an unforgettable dining experience. Call us now to reserve your table and embark on a culinary journey.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <CartProvider>
        <body className={inter.className}>
          <Topbar />
          <header>
            <Navbar />
          </header>
          <main>
            {children}
          </main>
          <Footer />
        </body>
      </CartProvider>
    </html>
  )
}
