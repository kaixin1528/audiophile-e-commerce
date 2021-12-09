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

As this is my first time doing responsive designs, the responsive background images proved to be a challenging 
task for me. Since I'm using Tailwind, it requires you to include all the many image URLs in their custom configuration file. 
Also, React doesn't allow direct image URLs linked to the src attribute, so I had to import locally everytime an 
image when needed, which was quite time-consuming.

Learning how to make these background images appear in their original size with empty content, making sure they are centered, 
and are adaptive to different screen sizes were what took me the majority of the time initially for this project.

```html
<div
   className={`d:grid bg-light-gray rounded-lg bg-no-repeat bg-center bg-cover bg-m-${product.slug} t:bg-t-${product.slug} d:bg-d-${product.slug} h-96 t:h-screen w-full`}
></div>
```

Deciding which component the states should stay in and writing their respective handlers 
also proved to be quite an interesting task. As I moved on to working on new pages, I discovered that 
some states were more convenient to retrieve in lower levels as supposed to storing all of them in App.js. 

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

Learning how to make a modal and turn it into a reusable component was another takeaway I had with this project.
For example, in the code snippet below, the outer container makes sure that the modal occupies the entire page 
with a background color set to moderate gray. The inner container with a background color of white contains all
the content I wanted to display to the user. 

```html
<div className='absolute inset-0 py-40 px-6 bg-gray-900 bg-opacity-50'>
  <div className='grid p-10 gap-8 t:w-3/5 t:mx-auto d:w-2/5 d:mx-auto bg-white rounded-lg'>
     ...
  </div>
</div>
```

This is the first time I had to actively apply several React routings to switch between many different pages.

Conditional renderings is another common theme throughout the process in which I had to make some components 
visible and hidden with a click.

```html
{dropMenu && <Menu onDropMenu={onDropMenu} />}
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
