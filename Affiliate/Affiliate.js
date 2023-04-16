let menuBtn = document.querySelector('.menu__burger');
let navbar = document.querySelector('.header__nav');
let links = document.querySelectorAll('.header__link');
let singUp =document.querySelector('.header__singUp');

menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('active');
		navbar.classList.toggle('active');
});

for(let i = 0; i < links.length; i++) {
	links[i].addEventListener('click', function() {
		navbar.classList.remove('active');
		menuBtn.classList.remove('active');
	});
}

singUp.addEventListener('click', function() {
	navbar.classList.remove('active');
	menuBtn.classList.remove('active');
});

let position = 0;
let slidesToShow = 3;
let slidesToScroll = 3;
if (window.innerWidth <= 576) {
	slidesToScroll = 1;
	slidesToShow = 1;
} else if (window.innerWidth < 850) {
	slidesToScroll = 2;
	slidesToShow = 2;
} 
const itemPadding = 40 * (slidesToShow - 1);
const container = document.querySelector('.aff-reviews__gridbox');
const track = document.querySelector('.slider-track');
const item = document.querySelector('.aff-reviews__card');
const items = document.querySelectorAll('.aff-reviews__card');
const itemCount = document.querySelectorAll('.aff-reviews__card').length;
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const itemWidth = Math.round((container.clientWidth - itemPadding) / slidesToShow);
let movePosititon = (itemWidth * slidesToScroll) + (itemPadding / (slidesToShow - 1) * slidesToScroll);


console.log(window.innerWidth >= 850);

if(slidesToShow == 1) {
	movePosititon = (itemWidth * slidesToScroll + 40 * slidesToScroll);
}

items.forEach((item) => {
	item.style.minWidth = `${itemWidth}px`;
});
let i = 0;
let a = 0;
btnNext.addEventListener('click', () => {
	const itemsLeft = itemCount - ((Math.abs(position) - 40 * i * (slidesToScroll) + (slidesToShow * itemWidth))) / itemWidth;

	if (itemsLeft >= slidesToScroll) {
		position -= movePosititon;
	} else {
		position -= itemsLeft * itemWidth + 40 * itemsLeft;
	}

	//position -= itemsLeft 2>= slidesToScroll ? movePosititon : (Math.round(itemsLeft) * itemWidth);
	i++;
	if (itemsLeft >= slidesToScroll) {
		a += slidesToScroll;
	} else {
		a += itemsLeft;
	}
	setPosititon();
	checkBtns();
	console.log(position, i, movePosititon, itemsLeft, a);
	
});
btnPrev.addEventListener('click', () => {
	const itemsRight = (Math.abs(position) - 40 * a) / itemWidth;

	if (itemsRight >= slidesToScroll) {
		position += movePosititon;
	} else {
		position += itemsRight * itemWidth + 40 * itemsRight;
	}

	if (a >= slidesToScroll) {
		a -= slidesToScroll;
	} else {
		a -= a;
	}
	i--;
	console.log(position, i, movePosititon, itemsRight, a);
	setPosititon();
	checkBtns();
});

const setPosititon = () => {
	track.style.transform = `translate(${position}px)`;
}

const checkBtns = () => {
		btnPrev.disabled = position === 0;
	  btnNext.disabled = position <= -(itemCount - slidesToShow) * itemWidth - (40 * (itemCount - slidesToShow));
}

checkBtns();
let birdie = document.querySelectorAll('.birdie');
let birdieBox = document.querySelectorAll('.birdie-box');
let contents = document.querySelectorAll('.footer__content');

for(let i = 0; i < birdieBox.length; i++) {
	birdieBox[i].addEventListener('click', () => {

		birdie[i].classList.toggle('active');

		let content = contents[i];

		content.classList.toggle('active');

		if (content.style.maxHeight) {
			content.style.maxHeight = null;
		} else {
			contents.forEach((elem) => {
				elem.style.maxHeight = null;
				elem.classList.remove('active');
				birdie.forEach((elem) => {
					elem.classList.remove('active');
				});
			})
			content.classList.add('active')
			birdie[i].classList.add('active');
			content.style.maxHeight = content.scrollHeight + 'px';			
		}

	});
}
console.log(Array.from(contents));
/*birdieBox[0].addEventListener('click', () => {
	latesBlogs.classList.toggle('active');
	
});
birdieBox[1].addEventListener('click', () => {
	browserBody.classList.toggle('browser-body__active');
});*/
