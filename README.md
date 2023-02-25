# News-HomePage
News Homepage one page website
# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview
Building a news homepage from frontend challenge..
### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./assets/images/Screenshot%202023-02-25%20at%2014-04-34%20Frontend%20Mentor%20News%20homepage.png)
![](./assets/images/Screenshot%202023-02-25%20at%2014-06-50%20Frontend%20Mentor%20News%20homepage.png)
![](./assets/images/Screenshot%202023-02-25%20at%2014-07-14%20Frontend%20Mentor%20News%20homepage.png)


### Links

- Solution URL: [Add solution URL here](http://127.0.0.1:5500/index.html)
- Live Site URL: [Add live site URL here](https://dolly-pee.github.io/News-HomePage/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow


### What I learned

Am so proud of being able to use grid for my layout

```css
.flex-container {
    display: grid;
    width: 100%;
    padding: 5px 15%;
    height: 68vh;
    margin-bottom: 4%;
}

.home-image {
    background-image: url(../assets/images/image-web-3-desktop.jpg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    grid-column: 1 / span 5;
    grid-row: 1;
    width: 39rem;
    height: 15rem;
    margin-right: 2%;
}

.side-blog {
  grid-column: 6;
  grid-row: 1 / span 2;
  width: 18rem;
  background-color: hsl(240, 100%, 5%);
  color: #fff;
  padding: 25px 30px 15px;
}
```

I have always wanted to learn how to use javascript to create animated sidebar menu 
```js
const navbar = document.querySelector('nav ul');
const navToggle = document.querySelector('.mobile-nav-toggle');
const body = document.querySelector('body')

navToggle.addEventListener('click', () => {
   
    

    const visibility = navbar.getAttribute('data-visible');

    if( visibility === 'false' ){
        navbar.setAttribute('data-visible', true);

        navToggle.setAttribute('aria-expanded', true)
        body.style.backgroundColor = 'hsl(233, 8%, 79%)'
    }

    else{
        navbar.setAttribute('data-visible', false);

        navToggle.setAttribute('aria-expanded', false)
        body.style.backgroundColor = '#fff'

        navToggle.style.position = 'fixed';
    }
    

})
```


### Continued development

I want to focus more on how to use grid and flex for my layout
i also want to keep developing my javaScript skills


### Useful resources

- [side bar resources](https://www.example.com) - Kevin Powell youTube video helped me in creating my SideBar

## Author

- Website - [Dolly-Pee](https://dolly-pee.github.io/News-HomePage/)
- Frontend Mentor - [@Dolly-Pee](https://www.frontendmentor.io/profile/Dolly-Pee)
- Twitter - [@Akele_DollyPee](https://www.twitter.com/@Akele_DollyPee)


## Acknowledgments

Big Kudos to Kevin Powell YouTube Videos

