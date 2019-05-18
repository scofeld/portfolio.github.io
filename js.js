;(function(){
	let modernBroBtn,IeBtn,pageColor;
	let block="";
	let userBrowser="";
	let openModBrow = false;
	let browserVersionView = "modern";
	const MODERN_BROWSERS =["Firefox","Edge","Chrome","Safari"];
	const AVAILABLE_WIDTH = 700;

	let contentBlock = document.getElementById("content");
	let page = document.getElementById("page");
	let nav = document.getElementById("nav");
	let cvBtn = document.getElementById("cv");
	let browser = navigator.userAgent.split(/[\s]/g).reverse().join();
	let userViewPort = document.body.clientWidth;

	let CV_WRAP = '<div class="cv_wrap">'+
		'	<h1 class="cv__name">Vladyslav Kukhlii</h1>'+
		'	<div class="cv__top">'+
		'		<div>'+
		'			<p class="cv__sub_title">Address</p>'+
		'			<p class="page_text">Viliamsa St., Odessa, Ukraine</p>'+
		'		</div>'+
		'		<div>'+
		'			<p class="cv__sub_title">Contact</p>'+
		'			<div class="page_text marginB15">Phone number: <a href="" class="contact_link">+380973081413</a></div>'+
		'			<div class="page_text marginB15">E-Mail: <a href="" class="contact_link">Vladik59@gmail.com</a></div>'+
		'		</div>'+
		'		<div>'+
		'			<p class="cv__sub_title">Date of birth</p>'+
		'			<p class="page_text"><strong>13.03.1997</strong></p>'+
		'		</div>'+
		'	</div>'+
		'	<div class="cv__left">'+
		'		<div class="cv__block">'+
		'			<h1 class="cv__title"><span class="cv__icon cv__icon--edu"></span>Education</h1>'+
		'			<div class="education_item">'+
		'				<p class="page_text">2014-2018<br><strong>National University “Odessa Maritime Academy”</strong><br>'+
		'					Bachelor\'s degree in NAVIGATION'+
		'				</p>'+
		'			</div>'+
		'			<div class="education_item">'+
		'				<p class="page_text">2019 Additional Education:<br><strong>Hillel IT School</strong><br>Front-End Basic</p>'+
		'			</div>'+
		'		</div>'+
		'		<div class="cv__block">'+
		'			<h1 class="cv__title"><span class="cv__icon cv__icon--skills"></span>Skills</h1>'+
		'			<ul>'+
		'				<li class="cv__list-item">Knowlegde of HTML;</p></li>'+
		'				<li class="cv__list-item">CSS/LESS;</p></li>'+
		'				<li class="cv__list-item">Basic JS;</p></li>'+
		'				<li class="cv__list-item">Js constructors, XMLHttpRequest, YouTubeAPI;</p></li>'+
		'				<li class="cv__list-item">Basic knowledge of improving usability of websites;</p></li>'+
		'			</ul>'+
		'		</div>'+
		'		<div class="cv__block cv__block--hobbies">'+
		'			<h1 class="cv__title"><span class="cv__icon cv__icon--hob"></span>Hobbies</h1>'+
		'			<div class="hobbies_item" id="hobbies_item--run">'+
		'				<div class="hobbies_item__icon hobbies_item--run"></div>'+
		'				<p class="page_text">Runnung</p>'+
		'			</div>'+
		'			<div class="hobbies_item">'+
		'				<div class="hobbies_item__icon hobbies_item--dance"></div>'+
		'				<p class="page_text">Ballroom Dance</p>'+
		'			</div>'+
		'			<div class="hobbies_item">'+
		'				<div class="hobbies_item__icon hobbies_icon--chess"></div>'+
		'				<p class="page_text">Chess</p>'+
		'			</div>'+
		'			<div class="hobbies_item">'+
		'				<div class="hobbies_item__icon hobbies_icon--cycle">'+
		'					<svg viewBox="0 0 640 512">'+
		'						<use xlink:href="#bicycle"></use>'+
		'					</svg>'+
		'				</div>'+
		'				<p class="page_text">Cycling</p>'+
		'			</div>'+
		'			<div class="hobbies_item">'+
		'				<div class="hobbies_item__icon hobbies_icon--volley">'+
		'					<svg viewBox="0 0 640 512">'+
		'						<use xlink:href="#volleyball"></use>'+
		'					</svg>'+
		'				</div>'+
		'				<p class="page_text">Volleyball</p>'+
		'			</div>'+
		'			<div class="hobbies_item" id="hobbies_item--billiard">'+
		'				<div class="hobbies_item__icon hobbies_icon--billiard"></div>'+
		'				<p class="page_text">Billiard</p>'+
		'			</div>'+
		'			<div class="hobbies_item">'+
		'				<div class="hobbies_item__icon hobbies_icon--tennis">'+
		'					<div class="tennis_ball"></div>'+
		'				</div>'+
		'				<p class="page_text">Table tennis</p>'+
		'			</div>'+
		'			<div class="hobbies_item" id="hobbies_item--hookah">'+
		'				<div class="hobbies_item__icon hobbies_icon--hookah">'+
		'				</div>'+
		'				<p class="page_text">Hookah</p>'+
		'			</div>'+
		'			<div class="hobbies_item">'+
		'				<div class="hobbies_item__icon hobbies_icon--guitar">'+
		'				</div>'+
		'				<p class="page_text">Guitar</p>'+
		'			</div>'+
		'			<div class="hobbies_item">'+
		'				<div class="hobbies_item__icon hobbies_icon--piano">'+
		'				</div>'+
		'				<p class="page_text">Piano</p>'+
		'			</div>'+
		'			<div class="hobbies_item">'+
		'				<div class="hobbies_item__icon hobbies_icon--guitar">'+
		'				</div>'+
		'				<p class="page_text">Ukulele</p>'+
		'			</div>'+
		'		</div>'+
		'	</div>'+
		'	<div class="cv__right">'+
		'		<div class="cv__block cv__block--personality">'+
		'			<h1 class="cv__title"><span class="cv__icon cv__icon--skills"></span>Personality</h1>'+
		'			<p>Communicative</p>'+
		'			<p>Command player</p>'+
		'			<p>Without bad habits</p>'+
		'			<p>Realist</p>'+
		'		</div>'+
		'		<div class="cv__block">'+
		'			<h1 class="cv__title"><span class="cv__icon cv__icon--languages"></span>Languages</h1>'+
		'			<p class="page_text">English: Upper-Intermediate;</p>'+
		'			<p class="page_text">Ukrainian: Native;</p>'+
		'			<p class="page_text">Russian: Native;</p>'+
		'		</div>'+
		'	</div>'+
		'</div>';
	let MAIN_WRAP =  '<div class="wrap">'+
						   '<a href="#" class="triang triang--1" style="top:0; right: 52%; background-image: url(img/1.png)"></a>'+
						   '<a href="#" class="triang triang--2" style="top:0; left: 52%; background-image: url(img/2.png)"></a>'+
						   '<a href="#" class="triang triang--3" style="bottom:50%; background-image: url(img/3.png)"></a>'+
						   '<a href="#" class="triang triang--4" style="top:51%; background-image: url(img/41.png)"></a>'+
						   '<a href="#" class="triang triang--1" style="bottom: 0; right: 52%; background-image: url(img/1_2.png)"></a>'+
						   '<a href="#" class="triang triang--2" style="bottom:0; left: 52%; background-image: url(img/2_22.png)"></a>'+
						   '<a href="#" class="triang triang--3" style="bottom:50%; right: 0; background-image: url(img/3_2.png)"></a>'+
						   '<a href="#" class="triang triang--4" style="top:51%; right: 0; background-image: url(img/4_2.png)"></a>'+
				     '</div>';
	let BRO_BTN = '<div id="ieBtn" class="nav__item nav__item--padding-5" title="IE portfolio Vesrion">'+
					'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"'+
					 'width="486.399px" height="486.399px" viewBox="0 0 486.399 486.399" '+
					 'xml:space="preserve"><use xlink:href="#IE_logo"></svg>'+
					'</div>'+
					'<div class="nav__item nav__item--modern_bro" id="modernBroBtn">'+
						'<div class="modern_browser_btn__shape"  title="Modern browser portfolio Vesrion">'+
							'<div class="modern_browser_btn__icon modern_browser_btn__icon--1"></div>'+
							'<div class="modern_browser_btn__icon modern_browser_btn__icon--2"></div>'+
							'<div class="modern_browser_btn__icon modern_browser_btn__icon--3"></div>'+
							'<div class="modern_browser_btn__icon modern_browser_btn__icon--4"></div>'+
						'</div>'+
					'</div>'+
					'<div id="pageColor" class="nav__item"><div class="page__color"></div></div>';
	let EXP_WRAP = 	'<div class="exp_wrap">'+
						'<a href="#" class="exp_wrap__block exp_wrap__block--open"><span class="exp_wrap__shape exp_wrap__shape--1"></span><span class="exp_wrap__shape exp_wrap__shape--2"></span></a>'+
						'<a href="#" class="exp_wrap__block exp_wrap__block--open"><span class="exp_wrap__shape exp_wrap__shape--1"></span><span class="exp_wrap__shape exp_wrap__shape--2"></span></a>'+
						'<a href="#" class="exp_wrap__block exp_wrap__block--open"><span class="exp_wrap__shape exp_wrap__shape--1"></span><span class="exp_wrap__shape exp_wrap__shape--2"></span></a>'+
						'<a href="#" class="exp_wrap__block exp_wrap__block--open"><span class="exp_wrap__shape exp_wrap__shape--1"></span><span class="exp_wrap__shape exp_wrap__shape--2"></span></a>'+
						'<a href="#" class="exp_wrap__block exp_wrap__block--open"><span class="exp_wrap__shape exp_wrap__shape--1"></span><span class="exp_wrap__shape exp_wrap__shape--2"></span></a>'+
						'<a href="#" class="exp_wrap__block exp_wrap__block--open"><span class="exp_wrap__shape exp_wrap__shape--1"></span><span class="exp_wrap__shape exp_wrap__shape--2"></span></a>'+
						'<a href="#" class="exp_wrap__block exp_wrap__block--open"><span class="exp_wrap__shape exp_wrap__shape--1"></span><span class="exp_wrap__shape exp_wrap__shape--2"></span></a>'+
						'<a href="#" class="exp_wrap__block exp_wrap__block--open"><span class="exp_wrap__shape exp_wrap__shape--1"></span><span class="exp_wrap__shape exp_wrap__shape--2"></span></a>'+
					'</div>';
	let fly = function(){
		block = document.querySelectorAll(".triang");
		if(!openModBrow){
			[].forEach.call(block, function(block){
				block.style.transform = 'translate('+getRandomInt(-1000,1000)+'px,'+
				''+getRandomInt(-1000,1000)+'px) rotate('+getRandomInt(-2000,2000)+'deg)';
				openModBrow = true;
			});
		}
		setTimeout(posEnd, 0000);
	}
	function getRandomInt(min, max){
	  min = Math.ceil(min);
	  max = Math.floor(max);
	  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
	}
	let posEnd = function(){
			[].forEach.call(block, function(block){
				block.style.transform = 'translate(0) rotate(0)';
				block.style.transitionDuration = "5s";
			})
			setTimeout(listeners,1000);
	}
	let listeners = function(){
		for(let i = 0,l = block.length; i < l;i++){
			block[i].addEventListener("mouseover", function(){
				block[i].style.transition = '0.5s linear';
				block[i].style.transform = 'scale(1.5)';
				block[i].classList.add("triang--open");
				block[i].style.backgroundImage = 'url('+data[i].img+')';
			});
			block[i].addEventListener("mouseout", function(){
				block[i].style.backgroundImage = 'url('+data[i].alt+')';
				block[i].classList.remove("triang--open");
				block[i].style.transform = 'scale(1)';
			});
		}
	}
	let clearContent = function(){
		contentBlock.innerHTML="";
	}

	let customForModern = function(){
		contentBlock.insertAdjacentHTML("beforeEnd",MAIN_WRAP);
		fly();
		if(browserVersionView == "modern" || browserVersionView == "cv"){
			modernBroBtn.classList.add("nav__item--active");
			IeBtn.classList.remove("nav__item--active");
			cvBtn.classList.remove("nav__item--active");
			browserVersionView = "IE";
		}
	}

	let cvCustom = function(){
		contentBlock.insertAdjacentHTML("beforeEnd",CV_WRAP);
		setTimeout(function(){
			let runBlock = document.getElementById("hobbies_item--run");
			let billiardBlock = document.getElementById("hobbies_item--billiard");
			let hookah = document.getElementById("hobbies_item--hookah");
			let runningAnim = new AnimationConstructor(runBlock,6,50,40);
			let billiardAnim = new AnimationConstructor(billiardBlock,6,50,150);
			let hookahAnim = new AnimationConstructor(hookah,6,50,150);
			cvBtn.classList.add("nav__item--active");
			IeBtn.classList.remove("nav__item--active");
			modernBroBtn.classList.remove("nav__item--active");
			browserVersionView = "cv";
		},0000)
	}
	let customForIe = function(){
		contentBlock.insertAdjacentHTML("beforeEnd",EXP_WRAP);
		setTimeout(function(){
			block = document.querySelectorAll(".exp_wrap__block");
			for(let i = 0,l = block.length;i < l; i++){
				block[i].style.backgroundImage = 'url("'+data[i].img+'")';
			}
		},0000)
		if(browserVersionView == "IE" || browserVersionView == "cv"){
			modernBroBtn.classList.remove("nav__item--active");
			cvBtn.classList.remove("nav__item--active");
			browserVersionView = "modern";
			IeBtn.classList.add("nav__item--active");
		}
		cvBtn.classList.remove("nav__item--active");
	}

	console.log(userViewPort);
	let checkUserAgent =function(){
		for(let i = 0,l = MODERN_BROWSERS.length;i < l; i++){
			if(browser.indexOf(MODERN_BROWSERS[i]) > -1 && userViewPort > AVAILABLE_WIDTH){
				console.log(MODERN_BROWSERS[i])
				if(MODERN_BROWSERS[i] !== "Edge"){
					nav.insertAdjacentHTML("beforeEnd",BRO_BTN);
					modernBroBtn = document.getElementById("modernBroBtn");
					pageColor = document.getElementById("pageColor");
					IeBtn = document.getElementById("ieBtn");
					pageColor.addEventListener("click", invert);
					IeBtn.addEventListener("click", function(){
						clearContent();
						customForIe();
					});
					modernBroBtn.addEventListener("click", function(){
						clearContent();
						customForModern();
					})
					userBrowser = MODERN_BROWSERS[i];
					customForModern();
					break;
				}else if(MODERN_BROWSERS[i] == "Edge"){
					break;
				}
			}			
		}
		if (userBrowser == ""){
			console.log("not chrome,firefox or safari");
			customForIe();
		}
	}
	let invert = function(){
		page.classList.toggle("page--white");
	}
	AnimationConstructor = function(block,maxIndex,slideWidth,animationTime){
		let self = this;
		self.element = block.querySelector(".hobbies_item__icon");
		const DEFAULT_SLIDE_WIDTH = 50;
		self.animationTime = animationTime;
		self.slideWidth = slideWidth;
		if(self.slideWidth == undefined)self.slideWidth = DEFAULT_SLIDE_WIDTH;
		if(self.animationTime == undefined)self.animationTime = 50;
		self.currentIndex = 0;
		self.start = function(){
			self.interval = setInterval(function() {
				self.element.style.backgroundPosition = ''+(-slideWidth*self.currentIndex)+'px 0px';
				self.currentIndex++;
				if (self.currentIndex > maxIndex) self.currentIndex = 0;
			},self.animationTime);
		}
		self.stop = function(){
			console.log(self.interval);
			clearInterval(self.interval);
		}
		block.addEventListener("mouseover",self.start);
		block.addEventListener("mouseout", self.stop);
	}
	checkUserAgent();
	cvBtn.addEventListener("click",function(){
		clearContent();
		cvCustom();
	})
})();
