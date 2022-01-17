module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      manrope: "Manrope",
    },
    borderColor: (theme) => ({
      ...theme("colors"),
      "moderate-orange": "#D87D4A",
      "light-gray": "#F1F1F1",
    }),
    backgroundColor: (theme) => ({
      ...theme("colors"),
      "moderate-orange": "#D87D4A",
      "light-gray": "#F1F1F1",
      footer: "#101010",
      "rice-white": "#FAFAFA",
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      "moderate-orange": "#D87D4A",
      "light-gray": "#F1F1F1",
    }),
    ringColor: (theme) => ({
      ...theme("colors"),
      "moderate-orange": "#D87D4A",
      "light-gray": "#F1F1F1",
    }),
    extend: {
      screens: {
        m: "375px",
        t: "768px",
        d: "1024px",
      },
      backgroundImage: {
        // homepage
        circles: "url('./assets/home/desktop/pattern-circles.svg')",
        "m-header": "url('./assets/home/mobile/image-header.jpg')",
        "t-header": "url('./assets/home/tablet/image-header.jpg')",
        "d-header": "url('./assets/home/desktop/image-hero.jpg')",
        "m-speaker": "url('./assets/home/mobile/image-speaker-zx7.jpg')",
        "t-speaker": "url('./assets/home/tablet/image-speaker-zx7.svg')",
        "d-speaker": "url('./assets/home/desktop/image-speaker-zx7.jpg')",
        "m-earphone": "url('./assets/home/mobile/image-earphones-yx1.jpg')",
        "t-earphone": "url('./assets/home/tablet/image-earphones-yx1.jpg')",
        "d-earphone": "url('./assets/home/desktop/image-earphones-yx1.jpg')",
        "m-bestgear": "url('./assets/shared/mobile/image-best-gear.jpg')",
        "t-bestgear": "url('./assets/shared/tablet/image-best-gear.jpg')",
        // categories
        "m-yx1-earphones-preview":
          "url('./assets/product-yx1-earphones/mobile/image-category-page-preview.jpg')",
        "t-yx1-earphones-preview":
          "url('./assets/product-yx1-earphones/tablet/image-category-page-preview.jpg')",
        "d-yx1-earphones-preview":
          "url('./assets/product-yx1-earphones/desktop/image-category-page-preview.jpg')",
        "m-xx59-headphones-preview":
          "url('./assets/product-xx59-headphones/mobile/image-category-page-preview.jpg')",
        "t-xx59-headphones-preview":
          "url('./assets/product-xx59-headphones/tablet/image-category-page-preview.jpg')",
        "d-xx59-headphones-preview":
          "url('./assets/product-xx59-headphones/desktop/image-category-page-preview.jpg')",
        "m-xx99-mark-one-headphones-preview":
          "url('./assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg')",
        "t-xx99-mark-one-headphones-preview":
          "url('./assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg')",
        "d-xx99-mark-one-headphones-preview":
          "url('./assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg')",
        "m-xx99-mark-two-headphones-preview":
          "url('./assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg')",
        "t-xx99-mark-two-headphones-preview":
          "url('./assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg')",
        "d-xx99-mark-two-headphones-preview":
          "url('./assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg')",
        "m-zx7-speaker-preview":
          "url('./assets/product-zx7-speaker/mobile/image-category-page-preview.jpg')",
        "t-zx7-speaker-preview":
          "url('./assets/product-zx7-speaker/tablet/image-category-page-preview.jpg')",
        "d-zx7-speaker-preview":
          "url('./assets/product-zx7-speaker/desktop/image-category-page-preview.jpg')",
        "m-zx9-speaker-preview":
          "url('./assets/product-zx9-speaker/mobile/image-category-page-preview.jpg')",
        "t-zx9-speaker-preview":
          "url('./assets/product-zx9-speaker/tablet/image-category-page-preview.jpg')",
        "d-zx9-speaker-preview":
          "url('./assets/product-zx9-speaker/desktop/image-category-page-preview.jpg')",
        //image
        "m-yx1-earphones":
          "url('./assets/product-yx1-earphones/mobile/image-product.jpg')",
        "t-yx1-earphones":
          "url('./assets/product-yx1-earphones/tablet/image-product.jpg')",
        "d-yx1-earphones":
          "url('./assets/product-yx1-earphones/desktop/image-product.jpg')",
        "m-xx59-headphones":
          "url('./assets/product-xx59-headphones/mobile/image-product.jpg')",
        "t-xx59-headphones":
          "url('./assets/product-xx59-headphones/tablet/image-product.jpg')",
        "d-xx59-headphones":
          "url('./assets/product-xx59-headphones/desktop/image-product.jpg')",
        "m-xx99-mark-one-headphones":
          "url('./assets/product-xx99-mark-one-headphones/mobile/image-product.jpg')",
        "t-xx99-mark-one-headphones":
          "url('./assets/product-xx99-mark-one-headphones/tablet/image-product.jpg')",
        "d-xx99-mark-one-headphones":
          "url('./assets/product-xx99-mark-one-headphones/desktop/image-product.jpg')",
        "m-xx99-mark-two-headphones":
          "url('./assets/product-xx99-mark-two-headphones/mobile/image-product.jpg')",
        "t-xx99-mark-two-headphones":
          "url('./assets/product-xx99-mark-two-headphones/tablet/image-product.jpg')",
        "d-xx99-mark-two-headphones":
          "url('./assets/product-xx99-mark-two-headphones/desktop/image-product.jpg')",
        "m-zx7-speaker":
          "url('./assets/product-zx7-speaker/mobile/image-product.jpg')",
        "t-zx7-speaker":
          "url('./assets/product-zx7-speaker/tablet/image-product.jpg')",
        "d-zx7-speaker":
          "url('./assets/product-zx7-speaker/desktop/image-product.jpg')",
        "m-zx9-speaker":
          "url('./assets/product-zx9-speaker/mobile/image-product.jpg')",
        "t-zx9-speaker":
          "url('./assets/product-zx9-speaker/tablet/image-product.jpg')",
        "d-zx9-speaker":
          "url('./assets/product-zx9-speaker/desktop/image-product.jpg')",
        //gallery
        "m-yx1-earphones-gallery-1":
          "url('./assets/product-yx1-earphones/mobile/image-gallery-1.jpg')",
        "t-yx1-earphones-gallery-1":
          "url('./assets/product-yx1-earphones/tablet/image-gallery-1.jpg')",
        "d-yx1-earphones-gallery-1":
          "url('./assets/product-yx1-earphones/desktop/image-gallery-1.jpg')",
        "m-yx1-earphones-gallery-2":
          "url('./assets/product-yx1-earphones/mobile/image-gallery-2.jpg')",
        "t-yx1-earphones-gallery-2":
          "url('./assets/product-yx1-earphones/tablet/image-gallery-2.jpg')",
        "d-yx1-earphones-gallery-2":
          "url('./assets/product-yx1-earphones/desktop/image-gallery-2.jpg')",
        "m-yx1-earphones-gallery-3":
          "url('./assets/product-yx1-earphones/mobile/image-gallery-3.jpg')",
        "t-yx1-earphones-gallery-3":
          "url('./assets/product-yx1-earphones/tablet/image-gallery-3.jpg')",
        "d-yx1-earphones-gallery-3":
          "url('./assets/product-yx1-earphones/desktop/image-gallery-3.jpg')",

        "m-xx59-headphones-gallery-1":
          "url('./assets/product-xx59-headphones/mobile/image-gallery-1.jpg')",
        "t-xx59-headphones-gallery-1":
          "url('./assets/product-xx59-headphones/tablet/image-gallery-1.jpg')",
        "d-xx59-headphones-gallery-1":
          "url('./assets/product-xx59-headphones/desktop/image-gallery-1.jpg')",
        "m-xx59-headphones-gallery-2":
          "url('./assets/product-xx59-headphones/mobile/image-gallery-2.jpg')",
        "t-xx59-headphones-gallery-2":
          "url('./assets/product-xx59-headphones/tablet/image-gallery-2.jpg')",
        "d-xx59-headphones-gallery-2":
          "url('./assets/product-xx59-headphones/desktop/image-gallery-2.jpg')",
        "m-xx59-headphones-gallery-3":
          "url('./assets/product-xx59-headphones/mobile/image-gallery-3.jpg')",
        "t-xx59-headphones-gallery-3":
          "url('./assets/product-xx59-headphones/tablet/image-gallery-3.jpg')",
        "d-xx59-headphones-gallery-3":
          "url('./assets/product-xx59-headphones/desktop/image-gallery-3.jpg')",

        "m-xx99-mark-one-headphones-gallery-1":
          "url('./assets/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg')",
        "t-xx99-mark-one-headphones-gallery-1":
          "url('./assets/product-xx99-mark-one-headphones/tablet/image-gallery-1.jpg')",
        "d-xx99-mark-one-headphones-gallery-1":
          "url('./assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg')",
        "m-xx99-mark-one-headphones-gallery-2":
          "url('./assets/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg')",
        "t-xx99-mark-one-headphones-gallery-2":
          "url('./assets/product-xx99-mark-one-headphones/tablet/image-gallery-2.jpg')",
        "d-xx99-mark-one-headphones-gallery-2":
          "url('./assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg')",
        "m-xx99-mark-one-headphones-gallery-3":
          "url('./assets/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg')",
        "t-xx99-mark-one-headphones-gallery-3":
          "url('./assets/product-xx99-mark-one-headphones/tablet/image-gallery-3.jpg')",
        "d-xx99-mark-one-headphones-gallery-3":
          "url('./assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg')",

        "m-xx99-mark-two-headphones-gallery-1":
          "url('./assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg')",
        "t-xx99-mark-two-headphones-gallery-1":
          "url('./assets/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg')",
        "d-xx99-mark-two-headphones-gallery-1":
          "url('./assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg')",
        "m-xx99-mark-two-headphones-gallery-2":
          "url('./assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg')",
        "t-xx99-mark-two-headphones-gallery-2":
          "url('./assets/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg')",
        "d-xx99-mark-two-headphones-gallery-2":
          "url('./assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg')",
        "m-xx99-mark-two-headphones-gallery-3":
          "url('./assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg')",
        "t-xx99-mark-two-headphones-gallery-3":
          "url('./assets/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg')",
        "d-xx99-mark-two-headphones-gallery-3":
          "url('./assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg')",

        "m-zx7-speaker-gallery-1":
          "url('./assets/product-zx7-speaker/mobile/image-gallery-1.jpg')",
        "t-zx7-speaker-gallery-1":
          "url('./assets/product-zx7-speaker/tablet/image-gallery-1.jpg')",
        "d-zx7-speaker-gallery-1":
          "url('./assets/product-zx7-speaker/desktop/image-gallery-1.jpg')",
        "m-zx7-speaker-gallery-2":
          "url('./assets/product-zx7-speaker/mobile/image-gallery-2.jpg')",
        "t-zx7-speaker-gallery-2":
          "url('./assets/product-zx7-speaker/tablet/image-gallery-2.jpg')",
        "d-zx7-speaker-gallery-2":
          "url('./assets/product-zx7-speaker/desktop/image-gallery-2.jpg')",
        "m-zx7-speaker-gallery-3":
          "url('./assets/product-zx7-speaker/mobile/image-gallery-3.jpg')",
        "t-zx7-speaker-gallery-3":
          "url('./assets/product-zx7-speaker/tablet/image-gallery-3.jpg')",
        "d-zx7-speaker-gallery-3":
          "url('./assets/product-zx7-speaker/desktop/image-gallery-3.jpg')",

        "m-zx9-speaker-gallery-1":
          "url('./assets/product-zx9-speaker/mobile/image-gallery-1.jpg')",
        "t-zx9-speaker-gallery-1":
          "url('./assets/product-zx9-speaker/tablet/image-gallery-1.jpg')",
        "d-zx9-speaker-gallery-1":
          "url('./assets/product-zx9-speaker/desktop/image-gallery-1.jpg')",
        "m-zx9-speaker-gallery-2":
          "url('./assets/product-zx9-speaker/mobile/image-gallery-2.jpg')",
        "t-zx9-speaker-gallery-2":
          "url('./assets/product-zx9-speaker/tablet/image-gallery-2.jpg')",
        "d-zx9-speaker-gallery-2":
          "url('./assets/product-zx9-speaker/desktop/image-gallery-2.jpg')",
        "m-zx9-speaker-gallery-3":
          "url('./assets/product-zx9-speaker/mobile/image-gallery-3.jpg')",
        "t-zx9-speaker-gallery-3":
          "url('./assets/product-zx9-speaker/tablet/image-gallery-3.jpg')",
        "d-zx9-speaker-gallery-3":
          "url('./assets/product-zx9-speaker/desktop/image-gallery-3.jpg')",

        //others
        "m-xx59-headphones-others":
          "url('./assets/shared/mobile/image-xx59-headphones.jpg')",
        "t-xx59-headphones-others":
          "url('./assets/shared/tablet/image-xx59-headphones.jpg')",
        "d-xx59-headphones-others":
          "url('./assets/shared/desktop/image-xx59-headphones.jpg')",
        "m-xx99-mark-one-headphones-others":
          "url('./assets/shared/mobile/image-xx99-mark-one-headphones.jpg')",
        "t-xx99-mark-one-headphones-others":
          "url('./assets/shared/tablet/image-xx99-mark-one-headphones.jpg')",
        "d-xx99-mark-one-headphones-others":
          "url('./assets/shared/desktop/image-xx99-mark-one-headphones.jpg')",
        "m-xx99-mark-two-headphones-others":
          "url('./assets/shared/mobile/image-xx99-mark-two-headphones.jpg')",
        "t-xx99-mark-two-headphones-others":
          "url('./assets/shared/tablet/image-xx99-mark-two-headphones.jpg')",
        "d-xx99-mark-two-headphones-others":
          "url('./assets/shared/desktop/image-xx99-mark-two-headphones.jpg')",
        "m-zx7-speaker-others":
          "url('./assets/shared/mobile/image-zx7-speaker.jpg')",
        "t-zx7-speaker-others":
          "url('./assets/shared/tablet/image-zx7-speaker.jpg')",
        "d-zx7-speaker-others":
          "url('./assets/shared/desktop/image-zx7-speaker.jpg')",
        "m-zx9-speaker-others":
          "url('./assets/shared/mobile/image-zx9-speaker.jpg')",
        "t-zx9-speaker-others":
          "url('./assets/shared/tablet/image-zx9-speaker.jpg')",
        "d-zx9-speaker-others":
          "url('./assets/shared/desktop/image-zx9-speaker.jpg')",

        //cart
        "yx1-earphones": "url('./assets/cart/image-yx1-earphones.jpg')",
        "xx59-headphones": "url('./assets/cart/image-xx59-headphones.jpg')",
        "xx99-mark-one-headphones":
          "url('./assets/cart/image-xx99-mark-one-headphones.jpg')",
        "xx99-mark-two-headphones":
          "url('./assets/cart/image-xx99-mark-two-headphones.jpg')",
        "zx7-speaker": "url('./assets/cart/image-zx7-speaker.jpg')",
        "zx9-speaker": "url('./assets/cart/image-zx9-speaker.jpg')",
      },
    },
  },
  variants: {
    extend: {
      flexDirection: ["even"],
    },
  },
  plugins: [],
};
