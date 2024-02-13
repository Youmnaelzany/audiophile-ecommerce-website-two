// Renders a header with a logo and cart icon
import "@/styles/globals.css";

function Navbar() {
  return (
    <header
      class="flex justify-between items-center h-24 bg-[#0E0E0E] text-[#FFFFFF]
       py-[2.31rem] px-[10.31rem] md:py-[4.63rem] md:px-[2.48rem] md:gap-[29.06rem]"
    >
      // Logo
      <div class="md:flex md:gap-[2.62rem] md:items-center">
        <button class="link hidden md:inline-block" data-dropdown-button>
          <img src="/images/shared/tablet/icon-hamburger.svg" alt="" class="" />
        </button>
        <img src="/images/shared/desktop/logo.svg" alt="logo" class="" />
      </div>
      // Cart
      <div class="">
        <a href="/checkout" class="" target="_blank">
          <img src="/images/shared/desktop/icon-cart.svg" alt="" class="" />
        </a>
      </div>
    </header>
  );
}

export default Navbar;
