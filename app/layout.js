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
import '../public/css/terms-conditions.css'
import '../public/css/login.css'
import '../public/css/responsive2.css'
import '../public/css/venobox.min.css'
import { Inter } from 'next/font/google'
import Topbar from './components/Topbar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CartProvider from './context/cartContext'
import SearchProvider from './context/searchContext'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <>

      <html lang="en">
        <CartProvider>
          <SearchProvider >
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
          </SearchProvider>
        </CartProvider>
      </html >
    </>
  )
}
