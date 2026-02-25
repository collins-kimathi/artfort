// App component/page file.
import { useEffect, useMemo, useState } from 'react'
import './App.css'
import CartDrawer from './components/CartDrawer'
import Footer from './components/Footer'
import Header from './components/Header'
import ProductModal from './components/ProductModal'
import SkeletonLoader from './components/SkeletonLoader'
import ArtistsPage from './pages/ArtistsPage'
import CheckoutPage from './pages/CheckoutPage'
import ContactPage from './pages/ContactPage'
import FaqPage from './pages/FaqPage'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import {
  paintings as catalogPaintings,
  buildCollectionsFromPaintings,
} from './data/paintingsCatalog'
import { faqs } from './data/shopData'

const currencyConfig = {
  KES: { rate: 129, locale: 'en-KE' },
  USD: { rate: 1, locale: 'en-US' },
  EUR: { rate: 0.92, locale: 'en-IE' },
  GBP: { rate: 0.79, locale: 'en-GB' },
}

const pageIds = ['home', 'shop', 'artists', 'faq', 'contact', 'checkout']
const siteLogoPath = '/logo.png'

function App() {
  const [isInitialLoading, setIsInitialLoading] = useState(true)
  const [activePage, setActivePage] = useState('home')
  const [cartItems, setCartItems] = useState([])
  const [orderPlaced, setOrderPlaced] = useState(null)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [selectedArtwork, setSelectedArtwork] = useState(null)
  const [activeCollection, setActiveCollection] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('featured')
  const [selectedCurrency, setSelectedCurrency] = useState(() => {
    const storedCurrency = localStorage.getItem('artfort-currency')
    if (storedCurrency && currencyConfig[storedCurrency]) {
      return storedCurrency
    }

    return 'KES'
  })

  const formatPrice = useMemo(() => {
    const { rate, locale } = currencyConfig[selectedCurrency]
    const formatter = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: selectedCurrency,
      maximumFractionDigits: selectedCurrency === 'KES' ? 0 : 2,
    })

    return (baseUsdValue) => formatter.format(baseUsdValue * rate)
  }, [selectedCurrency])

  const catalogCollections = useMemo(
    () => buildCollectionsFromPaintings(catalogPaintings),
    [],
  )

  const visibleArtworks = useMemo(() => {
    let filtered = [...catalogPaintings]

    if (activeCollection !== 'All') {
      filtered = filtered.filter((item) => item.collection === activeCollection)
    }

    if (searchTerm.trim()) {
      const query = searchTerm.toLowerCase()
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.artist.toLowerCase().includes(query) ||
          item.medium.toLowerCase().includes(query),
      )
    }

    if (sortBy === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'newest') {
      filtered.sort((a, b) => Number(b.year) - Number(a.year))
    }

    return filtered
  }, [activeCollection, searchTerm, sortBy])

  const cartCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems],
  )

  const cartSubtotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems],
  )

  const handleNavigate = (pageId) => {
    if (!pageIds.includes(pageId)) {
      return
    }

    setActivePage(pageId)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleCheckoutStart = () => {
    setIsCartOpen(false)
    setOrderPlaced(null)
    handleNavigate('checkout')
  }

  const handlePlaceOrder = ({ customerName, email, total }) => {
    setOrderPlaced({
      customerName,
      email,
      total,
      orderNumber: `AF-${Date.now().toString().slice(-6)}`,
    })
    setCartItems([])
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleAddToCart = (artwork) => {
    setCartItems((currentItems) => {
      const alreadyAdded = currentItems.find((item) => item.id === artwork.id)

      if (alreadyAdded) {
        return currentItems.map((item) =>
          item.id === artwork.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      }

      return [...currentItems, { ...artwork, quantity: 1 }]
    })
    setIsCartOpen(true)
  }

  const handleCartQuantity = (id, change) => {
    setCartItems((currentItems) =>
      currentItems.reduce((nextItems, item) => {
        if (item.id !== id) {
          nextItems.push(item)
          return nextItems
        }

        const updatedQty = item.quantity + change
        if (updatedQty > 0) {
          nextItems.push({ ...item, quantity: updatedQty })
        }

        return nextItems
      }, []),
    )
  }

  const handleRemoveCartItem = (id) => {
    setCartItems((currentItems) => currentItems.filter((item) => item.id !== id))
  }

  useEffect(() => {
    let isMounted = true
    let hasCompletedLoading = false
    let completeTimeoutId

    const completeLoading = () => {
      if (hasCompletedLoading) {
        return
      }

      hasCompletedLoading = true
      completeTimeoutId = window.setTimeout(() => {
        if (isMounted) {
          setIsInitialLoading(false)
        }
      }, 650)
    }

    if (document.readyState === 'complete') {
      completeLoading()
    } else {
      window.addEventListener('load', completeLoading, { once: true })
    }

    const fallbackTimeoutId = window.setTimeout(completeLoading, 1800)

    return () => {
      isMounted = false
      clearTimeout(completeTimeoutId)
      clearTimeout(fallbackTimeoutId)
      window.removeEventListener('load', completeLoading)
    }
  }, [])

  useEffect(() => {
    const hashPage = window.location.hash.replace('#', '').toLowerCase()
    if (pageIds.includes(hashPage)) {
      setActivePage(hashPage)
    }
  }, [])

  useEffect(() => {
    window.history.replaceState(null, '', `#${activePage}`)
  }, [activePage])

  useEffect(() => {
    localStorage.setItem('artfort-currency', selectedCurrency)
  }, [selectedCurrency])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedArtwork(null)
        setIsCartOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    const shouldLockScroll = Boolean(selectedArtwork) || isCartOpen
    document.body.style.overflow = shouldLockScroll ? 'hidden' : 'auto'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [selectedArtwork, isCartOpen])

  const pageProps = {
    home: {
      artworks: catalogPaintings,
      formatPrice,
      onNavigate: handleNavigate,
    },
    shop: {
      collections: catalogCollections,
      activeCollection,
      onCollectionChange: setActiveCollection,
      artworks: visibleArtworks,
      searchTerm,
      sortBy,
      onAddToCart: handleAddToCart,
      onPreview: setSelectedArtwork,
      onSearchChange: setSearchTerm,
      onSortChange: setSortBy,
      formatPrice,
    },
    artists: {},
    faq: { faqs },
    contact: {},
    checkout: {
      items: cartItems,
      subtotal: cartSubtotal,
      formatPrice,
      orderPlaced,
      onContinueShopping: () => handleNavigate('shop'),
      onPlaceOrder: handlePlaceOrder,
    },
  }

  const pageComponents = {
    home: HomePage,
    shop: ShopPage,
    artists: ArtistsPage,
    faq: FaqPage,
    contact: ContactPage,
    checkout: CheckoutPage,
  }

  const ActivePage = pageComponents[activePage] || HomePage

  if (isInitialLoading) {
    return <SkeletonLoader logoSrc={siteLogoPath} />
  }

  return (
    <div className="shop-page">
      <div className="ambient-shape ambient-shape-left" aria-hidden="true" />
      <div className="ambient-shape ambient-shape-right" aria-hidden="true" />

      <Header
        activePage={activePage}
        cartCount={cartCount}
        selectedCurrency={selectedCurrency}
        onCartOpen={() => setIsCartOpen(true)}
        onCurrencyChange={setSelectedCurrency}
        onNavigate={handleNavigate}
      />

      <main className={`main-view page-${activePage}`}>
        <ActivePage {...pageProps[activePage]} />
      </main>

      <Footer onNavigate={handleNavigate} />

      <ProductModal
        artwork={selectedArtwork}
        onAddToCart={handleAddToCart}
        onClose={() => setSelectedArtwork(null)}
        formatPrice={formatPrice}
      />

      <CartDrawer
        isOpen={isCartOpen}
        items={cartItems}
        subtotal={cartSubtotal}
        onClose={() => setIsCartOpen(false)}
        onCheckout={handleCheckoutStart}
        onItemQuantityChange={handleCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        formatPrice={formatPrice}
      />
    </div>
  )
}

export default App

