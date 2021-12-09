# Audiophile E-commerce Website

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

You should be able to:

- View the optimal layout for the website depending on your device's screen size
- See hover states for all interactive elements on the page
- Add/Remove products from the cart
- Edit product quantities in the cart
- Fill in all fields in the checkout
- Receive form validations if fields are missed or incorrect during checkout
- See correct checkout totals depending on the products in the cart
  - Shipping always adds $50 to the order
- See an order confirmation modal after checking out with an order summary


### Screenshot

![Desktop Homepage](screenshot/desktop-homepage.png)

![Desktop Products](screenshot/desktop-category.png)

![Desktop Specified Product](screenshot/desktop-specific-product.png)

For more photos, please see the screenshot folder.


### Links

- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process


### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Javascript
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Tailwind](https://tailwindcss.com/) - For styles


### What I learned

Use this section to recap over some of your major learnings while working
through this project. Writing these out and providing code samples of areas you
want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```

```css
.proud-of-this-css {
  color: papayawhip;
}
```


This is the first time I had to actively apply several React routings to switch between many different pages. 

Conditional renderings is another common theme throughout the process in which I had 


Deciding which component the states should stay in and writing their respective handlers 
also proved to be quite an interesting task. As I moved on to working on new pages, I discovered that 
some states are more convenient to retrieve in lower levels as supposed to storing all of them in App.js. 

Handlers are a great way to add interactivity to the website, but they can get confusing really quickly without 
some pre-planned logic. For example, the handler below attempts to add a new product with x quantity to the cart, 
and if it's already added, it will only update the product's quantity in the cart as supposed to adding a duplicated
product:
```js
const handleAddtoCart = (id, product, quantity) => {
    const selectedProduct = cart.filter((item) => item.id === id);
    if (selectedProduct.length) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, amount: item.amount + quantity } : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          id: id,
          name: product.name.substring(0, product.name.lastIndexOf(" ")),
          price: product.price,
          amount: quantity,
        },
      ]);
    }
  };
```


### Continued development

For further development, I would focus on polishing the responsive designs, especially for tablet, as
this project is my first time attempting to optimize the layout for different screen sizes.

Another thing I would like to work on is improving the animation on some of the components, 
for instance making the drop down menu slide down gradually or incorporate a locomotive scroll in which 
the images ease in slowly by the time I scroll down to their sections. 

Lastly, this project is great for backend development, so I believe I will come back to this project to
work on the backend side when I feel comfortable in applying those required tech.


### Useful resources

- [Tailwind Documentation](https://tailwindcss.com/docs) - This helped me
  immensely as the documentation had easy and clear styling and animation
  examples, and I will use it going forward.
  

## Author

- Website - [Kaixin Huang](https://www.your-site.com)
