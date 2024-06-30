'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const navs = document.querySelectorAll('.nav'),
        social = document.querySelectorAll('.social');
    let activeNav = navs[0];
    
    navs.forEach(nav => {
        nav.addEventListener('click', () => {
            if (nav != activeNav) {
                activeNav.classList.remove('active', 'animate');
                nav.classList.add('active', 'animate');
                activeNav = nav;
            }
        });
    });

    for (let i = 1; i < social.length; i++){
        social[i].setAttribute('style', 'padding-left: 17px')
    }

    class EpisodeCard {
        constructor(src, alt, genre, count, title, descr, parentSelector, ...classes){
            this.src = src;
            this.alt = alt;
            this.genre = genre;
            this.count = count;
            this.title = title;
            this.descr = descr;
            this.parent = document.querySelector(parentSelector);
            this.classes = classes;
        }

        render(){
            const element = document.createElement('div');
            if (this.classes.length == 0) {
                this.element = 'episode';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }
            element.innerHTML = `
            <div class="episode-container">
                <div class="image-container">
                    <img class="episode-cover" src=${this.src} alt=${this.alt}>
                </div>
                <div class="content-container">
                    <button class="episode-genre">${this.genre}</button>
                    <a href="#" class="episode-count">${this.count}</a>
                    <h2 class="episode-title">${this.title}</h2>
                    <p class="episode-descr">${this.descr}</p>
                    <button class="episode-details">View Episode Details</button>
                </div>
            </div>
            `;
            this.parent.append(element);
        }
    }

    class createHostCard{
        constructor(name, src, parentSelector, ...descr){
            this.name = name;
            this.src = src;
            this.parent = document.querySelector(parentSelector);
            this.descr = descr;
        }

        render(){
            const element = document.createElement('div');
            element.classList.add('meet-host');
            element.innerHTML = `
            <div class="about-host">
                <button class="meet-your-host"><img class="right-vector" src="img/right-vector.png" alt="Done"></button>
                <a class="meet-your-host-link" href="#">Meet your host</a>
                <h2 class="name-host">${this.name}</h2>
                <p class="host-descr">
                    ${this.descr[0]}
                </p>
                <p class="host-descr">
                    ${this.descr[1]}
                </p>
            </div>
            <div class="container-host-img">
                <img class="host-img" src=${this.src} alt="host-image">
            </div>
            `
            this.parent.append(element);
        }
    }

    class createReview {
        constructor(ratingStarsCount, comments, author, parentSelector){
            this.ratingStarsCount = ratingStarsCount;
            this.comments = comments;
            this.author = author;
            this.parent = document.querySelector(parentSelector);
        }

        render(){
            const element = document.createElement('div');
            const rating = document.createElement('div');
            rating.classList.add('rating');
            if (this.ratingStarsCount > 0 && this.ratingStarsCount < 6) {
                for (let i = 0; i < this.ratingStarsCount; i++){
                    rating.innerHTML += `<img class="rating-star" src="img/rating-star.png" alt="Звезда">`
                }
                element.classList.add('review');
                element.append(rating);
                    
                element.innerHTML += `
                    <p class="comments">${this.comments}</p>
                    <p class="author">${this.author}</p>
                `
                this.parent.append(element);
            } else {
                console.log('the number of rating stars should be 1 <= x <= 5')
            }
        }
    }

    new EpisodeCard(
        "img/gear.png",
        "gear",
        "Gear",
        'Episode 3',
        'Should you get outboard audio gear?',
        'Is hardware really worth it when it comes to podcasting? The answer is...it depends. Here’s our reasons on why you might want to consider picking something up.',
        '.episodes-blocks',
    ).render();

    new EpisodeCard(
        "img/Tip&Tricks.png",
        "tip-and-tricks",
        "Tip & Tricks",
        'Episode 2',
        'Mic tricks to take you to the next level',
        'Stop rolling with those default settings on your mic. These small tweaks will take you from sounding good to great.',
        '.episodes-blocks'
    ).render();

    new EpisodeCard(
        "img/second-gear.png",
        "gear",
        "Gear",
        'Episode 1',
        'The best microphone under $200',
        'With so many microphones on the market, how are you supposed to know what’s the best? Take a look at our top picks.',
        '.episodes-blocks'
    ).render();

    new createHostCard(
        'Jacob Paulaner',
        "img/host-img.jfif",
        '.section-host .container',
        'Jacob has a background in audio engineering, and has been podcasting since the early days.',
        'He’s here to help you level up your game by sharing everything he’s learned along the way.'
    ).render();

    new createReview(
        5,
        'I can’t recommend this podcast enough',
        'Betty Lacey',
        '.reviews-block'
    ).render();

    new createReview(
        5,
        'Jacob is the best in the business',
        'Adam Driver',
        '.reviews-block'
    ).render();

    new createReview(
        5,
        'A wealth of audio knowledge',
        'Marcus Brown',
        '.reviews-block'
    ).render();

    new createReview(
        5,
        'Every episode is a gem!',
        'Jessica Knowl',
        '.reviews-block'
    ).render();

    new createReview(
        5,
        'Whoa whoa, let me take some notes!',
        'Scott Adams',
        '.reviews-block'
    ).render();

    new createReview(
        5,
        'I’ve upped my game considerably since I started listening',
        'Steven Blast',
        '.reviews-block'
    ).render();
});