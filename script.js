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