import { NextPage } from 'next'
import Link from 'next/link'

interface Props {}

const NavbarMenu: NextPage<Props> = ({}) => {
  return     <>
  <div id="axil-sticky-placeholder"></div>
  <div className="axil-mainmenu">
    <div className="container">
      <div className="header-navbar">
        <div className="header-brand">
          <Link href="/index.html" className="logo logo-dark">
            <img src="/images/logo/logo.png" alt="Site Logo" />
          </Link>
          <Link href="/index.html" className="logo logo-light">
            <img src="/images/logo/logo-light.png" alt="Site Logo" />
          </Link>
        </div>
        <div className="header-main-nav">
          <nav className="mainmenu-nav">
            <button className="mobile-close-btn mobile-nav-toggler">
              <i className="fas fa-times"></i>
            </button>
            <div className="mobile-nav-brand">
              <Link href="/index.html" className="logo">
                <img src="/images/logo/logo.png" alt="Site Logo" />
              </Link>
            </div>
            <ul className="mainmenu">
              <li>
                <Link href="/#">Home</Link>
              </li>
              <li>
                <Link href="/shop.html">Shop</Link>
              </li>
              <li className="menu-item-has-children">
                <Link href="/#">Categories</Link>
                <ul className="axil-submenu">
                  <li>
                    <Link href="/wishlist.html">Wishlist</Link>
                  </li>
                  <li>
                    <Link href="/cart.html">Cart</Link>
                  </li>
                  <li>
                    <Link href="/checkout.html">Checkout</Link>
                  </li>
                  <li>
                    <Link href="/my-account.html">Account</Link>
                  </li>
                  <li>
                    <Link href="/sign-up.html">Sign Up</Link>
                  </li>
                  <li>
                    <Link href="/sign-in.html">Sign In</Link>
                  </li>
                  <li>
                    <Link href="/forgot-password.html">Forgot Password</Link>
                  </li>
                  <li>
                    <Link href="/reset-password.html">Reset Password</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy.html">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/coming-soon.html">Coming Soon</Link>
                  </li>
                  <li>
                    <Link href="/error-page.html">404 Error</Link>
                  </li>
                  <li>
                    <Link href="/typography.html">Typography</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/about-us.html">About</Link>
              </li>
              <li>
                <Link href="/contact.html">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header-action">
          <ul className="action-list">
            <li className="axil-search">
              <Link href="#" className="header-search-icon" title="Search">
                <i className="flaticon-magnifying-glass"></i>
              </Link>
            </li>
            <li className="wishlist">
              <Link href="/wishlist.html">
                <i className="flaticon-heart"></i>
              </Link>
            </li>
            <li className="shopping-cart">
              <Link href="/#" className="cart-dropdown-btn">
                <span className="cart-count">3</span>
                <i className="flaticon-shopping-cart"></i>
              </Link>
            </li>
            <li className="my-account">
              <Link href="/">
                <i className="flaticon-person"></i>
              </Link>
              <div className="my-account-dropdown">
                <span className="title">QUICKLINKS</span>
                <ul>
                  <li>
                    <Link href="/my-account.html">My Account</Link>
                  </li>
                  <li>
                    <Link href="/#">Initiate return</Link>
                  </li>
                  <li>
                    <Link href="/#">Support</Link>
                  </li>
                  <li>
                    <Link href="/#">Language</Link>
                  </li>
                </ul>
                <div className="login-btn">
                  <Link
                    href="/sign-in.html"
                    className="axil-btn btn-bg-primary"
                  >
                    Login
                  </Link>
                </div>
                <div className="reg-footer text-center">
                  No account yet?
                  <Link href="/sign-up.html" className="btn-link">
                    REGISTER HERE.
                  </Link>
                </div>
              </div>
            </li>
            <li className="axil-mobile-toggle">
              <button className="menu-btn mobile-nav-toggler">
                <i className="flaticon-menu-2"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</>
}

export default NavbarMenu