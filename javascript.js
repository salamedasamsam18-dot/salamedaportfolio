var swiper = new Swiper(".swiper", {
            spaceBetween: 30,
            centeredSlides: true,
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });


const menuButton = document.getElementById('menuButton');
        const navlinkWrapper = document.getElementById('navlinkwrapper');
        const menuIcon = menuButton.querySelector('i');

        menuButton.addEventListener('click', () => {
            navlinkWrapper.classList.toggle('active');


            if (navlinkWrapper.classList.contains('active')) {
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-xmark');
            } else {
                menuIcon.classList.remove('fa-xmark');
                menuIcon.classList.add('fa-bars');
            }
        });