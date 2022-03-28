// * Navbar Language
const navbarLanguageInfo = document.querySelector(".navbar__language-info");
const navbarLanguageIcon = document.querySelector(".navbar__language-info img");
const navbarLanguageOptionsBox = document.querySelector(".navbar__language-options");
const navbarLanguageOptions = document.querySelectorAll(".navbar__language-option");
const navbarLanguageMainImage = document.querySelector(".navbar__language-imgbox img");
const navbarLanguageMainText = document.querySelector(".navbar__language-text");
const navbarLanguageMainIcon = document.querySelector(".navbar__language-info img");


// * Responsive Navbar Language Section
window.addEventListener("resize", () => {
    resizeNavbarLanguage()
})
resizeNavbarLanguage()

// * Navbar Language Options Change Contents
navbarLanguageOptions.forEach((option) => {
    option.addEventListener('click', () => {
        navbarLanguageIcon.classList.remove("rotate-180deg")
        navbarLanguageOptionsBox.classList.remove("visible");
        let optionImage = option.children[0];
        let optionText = option.children[1];
        navbarLanguageMainImage.setAttribute("src", optionImage.src)
        navbarLanguageMainText.textContent = optionText.textContent;
    });
})


// * Navbar Menu 
const nav = document.querySelector(".nav");
const navOpenBtn = document.querySelector(".navbar--open--icon");
const navCloseBtn = document.querySelector(".navbar--close--icon");
const navLinks = document.querySelectorAll(".nav__link");

// * Navbar Menu Open 
navOpenBtn.addEventListener('click', () => {
    nav.classList.add("open");
});

// * Navbar Menu Close
navCloseBtn.addEventListener('click', () => {
    nav.classList.remove("open");
});

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        nav.classList.remove("open");
    });
})

// * Work Section 
const workData = [{
        title: `Заполните простую анкету`,
        description: `Расскажите, что вас беспокоит и что важно в психологе.`
    },
    {
        title: `Выберите способ связи с психологом`,
        description: `49руб/мин по
        <a href="#">
            аудио/видео связи
        </a>
        200руб за 24 часа
        <a href="#">
            чата + аудио сообщения
        </a>`
    },
    {
        title: `Выберите психолога`,
        description: `Выберите понравившегося психолога `
    },
    {
        title: `Начните общение`,
        description: `Все общение происходит через платформу SPEAK. Вслучае если психолог вам не понравится, вы можете заменить его без дополнительных переплат`
    },
];
const workItemTitle = document.querySelector(".work__item-mobile h4");
const workItemDescription = document.querySelector(".work__item-mobile span");
const paginationItems = document.querySelectorAll(".work__pagination-item");

// * Pagination Steps and Change Content
paginationItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        paginationItems.forEach(i => i.classList.remove("work--pagination--item--active"));
        item.classList.add("work--pagination--item--active");

        // * Change Content 
        workItemTitle.textContent = workData[index].title;
        workItemDescription.innerHTML = workData[index].description;
    });
})

// * Card Counter
const cardDecrementor = document.querySelector(".card__left")
const cardIncrementor = document.querySelector(".card__right")
const cardCount = document.querySelector(".card__count")
const cardPrice = document.querySelector("#card__price");

cardDecrementor.addEventListener('click', () => {
    +cardCount.textContent--;
    cardPrice.textContent = cardPrice.getAttribute("data-price") * cardCount.textContent
});
cardIncrementor.addEventListener('click', () => {
    +cardCount.textContent++;
    cardPrice.textContent = cardPrice.getAttribute("data-price") * cardCount.textContent
});





// * Functions
function resizeNavbarLanguage() {
    if (window.innerWidth <= 400) {
        navbarLanguageOpen(navbarLanguageMainImage)
    }
    navbarLanguageOpen(navbarLanguageInfo)
}

function navbarLanguageOpen(element) {
    element.addEventListener('click', () => {
        console.log("working...");
        editClassName(navbarLanguageOptionsBox,"visible")
        editClassName(navbarLanguageIcon,"rotate-180deg")
    });
}

function editClassName(element, className) {
    element.classList.contains(className) ?
        element.classList.remove(className) :
        element.classList.add(className);
}

// * Swiper Js

// * Sneakers Section
let swiper = new Swiper(".sneakers__cards", {
    slidesPerView: 5,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        992: {
            slidesPerView: 5,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        500: {
            slidesPerView: 3,
            spaceBetween: 12,
        },
        401: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        300: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
    }
});
// * Review Section 
let swiper2 = new Swiper(".review__cards", {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        577: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        300: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
    }
});