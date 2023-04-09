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
const slidesToShow = 2;
const slidesToScroll = 1;
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

if(slidesToShow == 1) {
	track.style.columnGap = `${0}px`;
	movePosititon = (itemWidth * slidesToScroll);
}

items.forEach((item) => {
	item.style.minWidth = `${itemWidth}px`;
});
let i = 0;
btnNext.addEventListener('click', () => {
	const itemsLeft = itemCount - ((Math.abs(position) - 40 * i + (slidesToShow * itemWidth))) / itemWidth;

	position -= itemsLeft >= slidesToScroll ? movePosititon : (itemsLeft * itemWidth + 80);
	i++;
	setPosititon();
	checkBtns();
	console.log(position, i, itemsLeft);
});
btnPrev.addEventListener('click', () => {
	const itemsLeft = (Math.abs(position) - 40 * (i + 1)) / itemWidth;
	position += itemsLeft >= slidesToScroll ? movePosititon : (itemsLeft * itemWidth + 80);
	i--;
	setPosititon();
	checkBtns();
	console.log(position, i, itemsLeft);
});

const setPosititon = () => {
	track.style.transform = `translate(${position}px)`;
}

const checkBtns = () => {
		btnPrev.disabled = position === 0;
	  btnNext.disabled = position <= -(itemCount - slidesToShow) * itemWidth - (40 * (itemCount - slidesToShow));
}

checkBtns();
console.log(position);
console.log();
console.log(movePosititon);
