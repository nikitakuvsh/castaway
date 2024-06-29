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
});