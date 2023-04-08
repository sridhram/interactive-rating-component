class Rating{
    constructor(){
        this.ratingChosen = 0;
        this.attachEvents();
    }

    attachEvents(){
        this.ratingCont = document.querySelector('.rating-container');
        document.getElementsByTagName('button')[0].addEventListener('click',() => {this.addRatingEvent();});
        document.querySelectorAll('.rating-child').forEach((el, index) => {this.calcRating(el ,index);});
    }

    addRatingEvent(){
        if(!this.ratingChosen){
            return;
        }
        document.getElementsByClassName('rating-span')[0].innerText = this.ratingChosen;
        const cards = document.getElementsByClassName('main-card');
        cards[0].classList.add('hide');
        cards[1].classList.remove('hide');
        cards[1].classList.add('show');
    }
    calcRating(el,index){
        el.rating = index+1;
        el.addEventListener('click',() => {this.act()});
    }
    act(){
        this.ratingChosen && this.ratingCont.children[this.ratingChosen-1].classList.remove('rating-child-active');
        this.ratingChosen = event.target.rating;
        event.target.classList.add('rating-child-active');
        document.getElementsByTagName('button')[0].classList.remove('disabled');
    }
}

new Rating();