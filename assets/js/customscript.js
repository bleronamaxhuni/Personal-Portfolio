// DARK MODE
document.body.style="transition: 0.2s;"
const sun = "https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg";
const moon = "https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg"

var theme = "dark";
	const page = document.getElementById("page");
	const container = document.getElementsByClassName("theme-container")[0];
	const themeIcon = document.getElementById("theme-icon");
	const logoName = document.getElementById("logo");
	const firstCard = document.getElementById("firstCard");
	const secondCard = document.getElementById("secondCard");
	const skills = document.getElementById("skills");
	const workingSkills = document.getElementById("workingSkills");
	const nav = document.getElementById("nav");
	const page1 = document.getElementById("page1");
	const page2 = document.getElementById("page2");
	const page3 = document.getElementById("page3");
	const page4 = document.getElementById("page4");
	const MyName = document.getElementById("myName");
	const myOccupation = document.getElementById("myOccupation");
	const skillTitle = document.getElementById("skillTitle");
	const aboutMe = document.getElementById("aboutMe");
	const aboutMeParagraph = document.getElementById("aboutMeParagraph");
	const whatIDo = document.getElementById("whatIDo");
	const resumeTitle = document.getElementById("resumeTitle");
	const projectTitle = document.getElementById("projectTitle");
	const contactTitle = document.getElementById("contactTitle");
	const contact1 = document.getElementById("contact1");
	const contact2 = document.getElementById("contact2");
	const darkHr = document.getElementById("darkHr");
	const darkHr1 = document.getElementById("darkHr1");
	const darkHr2 = document.getElementById("darkHr2");
	const darkHr3 = document.getElementById("darkHr3");
	const fb = document.getElementById("fb");
	const link = document.getElementById("link");
	const ig = document.getElementById("ig");
	const myData = document.getElementById("myData");
	const phone = document.getElementById("phone");
	const birthday = document.getElementById("birthday");
	const map = document.getElementById("location");
	const email = document.getElementById("email");
	const design = document.getElementById("design");
	const management = document.getElementById("management");
	const web = document.getElementById("web");
	const responsivity = document.getElementById("responsivity");
	const testing = document.getElementById("testing");
	const clientSide = document.getElementById("client-side");

	container.addEventListener("click", setTheme);
	function setTheme() {
		switch (theme) {
			case "light":
				setDark();
				theme = "dark";
			break;
			case "dark":
				setLight();
				theme = "light";
			break;
		}
	}

function setLight() {
    page.classList.remove("bg-black");
    container.classList.remove("shadow-dark");
	logoName.classList.remove("text-white");
	MyName.classList.remove("text-white");
	myOccupation.classList.remove("text-white");
	aboutMe.classList.remove("text-white");
	aboutMeParagraph.classList.remove("text-white");
	whatIDo.classList.remove("text-white");
	resumeTitle.classList.remove("text-white");
	skillTitle.classList.remove("text-white");
	projectTitle.classList.remove("text-white");
	contactTitle.classList.remove("text-white");
	contact1.classList.remove("text-white");
	contact2.classList.remove("text-white");
	map.classList.remove("text-white");
	email.classList.remove("text-white");
	birthday.classList.remove("text-white");
	phone.classList.remove("text-white");
	firstCard.classList.remove("bg-dark");
	secondCard.classList.remove("bg-dark");
	nav.classList.remove("bg-dark");
	skills.classList.remove("bg-blue");
	workingSkills.classList.remove("bg-blue");
	page1.classList.remove("bg-dark-hover");
	page2.classList.remove("bg-dark-hover");
	page3.classList.remove("bg-dark-hover");
	page4.classList.remove("bg-dark-hover");
	design.classList.remove("bg-darkViolet");
	clientSide.classList.remove("bg-darkYellow");
	responsivity.classList.remove("bg-darkRed");
	web.classList.remove("bg-darkBlue");
	testing.classList.remove("bg-darkViolet");
	management.classList.remove("bg-darkPink");
	darkHr.classList.remove("darkHr");
	darkHr1.classList.remove("darkHr");
	darkHr2.classList.remove("darkHr");
	darkHr3.classList.remove("darkHr");
    
	setTimeout(() => {
		page.classList.add("bg-light");
		container.classList.add("shadow-light");
		logoName.classList.add("text-black");
		MyName.classList.add("text-black");
		myOccupation.classList.add("text-black");
		aboutMe.classList.add("text-black");
		aboutMeParagraph.classList.add("text-black");
		whatIDo.classList.add("text-black");
		resumeTitle.classList.add("text-black");
		skillTitle.classList.add("text-black");
		projectTitle.classList.add("text-black");
		contactTitle.classList.add("text-black");
		contact1.classList.add("text-black");
		contact2.classList.add("text-black");
		map.classList.add("text-black");
		birthday.classList.add("text-black");
		email.classList.add("text-black");
		phone.classList.add("text-black");
		firstCard.classList.add("bg-white");
		secondCard.classList.add("bg-white");
		nav.classList.add("bg-white");
		skills.classList.add("bg-[#F8FBFB]");
		workingSkills.classList.add("bg-[#F8FBFB]");
		page1.classList.add("bg-light-hover");
		page2.classList.add("bg-light-hover");
		page3.classList.add("bg-light-hover");
		page4.classList.add("bg-light-hover");
		design.classList.add("bg-[#fcf4ff]");
		clientSide.classList.add("bg-[#fefaf0]");
		responsivity.classList.add("bg-[#fff4f4]");
		web.classList.add("bg-[#f3faff]");
		testing.classList.add("bg-[fcf4ff]");
		management.classList.add("bg-[fff0f8]");
		darkHr.classList.add("lightHr");
		darkHr1.classList.add("lightHr");
		darkHr2.classList.add("lightHr");
		darkHr3.classList.add("lightHr");
	
		themeIcon.classList.remove("change");
    }, 200);
    themeIcon.classList.add("change");
    themeIcon.src = sun;
}

function setDark() {
	page.classList.remove("bg-light");
    container.classList.remove("shadow-light");
	logoName.classList.remove("text-black");
	MyName.classList.remove("text-black");
	myOccupation.classList.remove("text-black");
	aboutMe.classList.remove("text-black");
	aboutMeParagraph.classList.remove("text-black");
	whatIDo.classList.remove("text-black");
	resumeTitle.classList.remove("text-black");
	projectTitle.classList.remove("text-black");
	contactTitle.classList.remove("text-black");
	contact1.classList.remove("text-black");
	contact2.classList.remove("text-black");
	map.classList.remove("text-black");
	birthday.classList.remove("text-black");
	email.classList.remove("text-black");
	phone.classList.remove("text-black");
	firstCard.classList.remove("bg-white");
	secondCard.classList.remove("bg-white");
	nav.classList.remove("bg-white");
	skills.classList.remove("bg-[#F8FBFB]");
	workingSkills.classList.remove("bg-[#F8FBFB]");
	page1.classList.remove("bg-light-hover");
	page2.classList.remove("bg-light-hover");
	page3.classList.remove("bg-light-hover");
	page4.classList.remove("bg-light-hover");
	design.classList.remove("bg-[#fcf4ff]");
	clientSide.classList.remove("bg-[#fefaf0]");
	responsivity.classList.remove("bg-[#fff4f4]");
	web.classList.remove("bg-[#f3faff]");
	testing.classList.remove("bg-[fcf4ff]");
	management.classList.remove("bg-[fff0f8]");
	fb.classList.remove("bg-[#F3F6F6]");
	link.classList.remove("bg-[#F3F6F6]");
	ig.classList.remove("bg-[#F3F6F6]");
	myData.classList.remove("bg-[#F3F6F6]");
	darkHr.classList.remove("lightHr");
	darkHr1.classList.remove("lightHr");
	darkHr2.classList.remove("lightHr");
	darkHr3.classList.remove("lightHr");
	
    setTimeout(() => {
		page.classList.add("bg-black");
		container.classList.add("shadow-dark");
		logoName.classList.add("text-white");
		MyName.classList.add("text-white");
		myOccupation.classList.add("text-white");
		aboutMe.classList.add("text-white");
		aboutMeParagraph.classList.add("text-white");
		whatIDo.classList.add("text-white");
		skillTitle.classList.add("text-white");
		resumeTitle.classList.add("text-white");
		projectTitle.classList.add("text-white");
		contactTitle.classList.add("text-white");
		contact1.classList.add("text-white");
		contact2.classList.add("text-white");
		map.classList.add("text-white");
		email.classList.add("text-white");
		birthday.classList.add("text-white");
		phone.classList.add("text-white");
		firstCard.classList.add("bg-dark");
		secondCard.classList.add("bg-dark");
		nav.classList.add("bg-dark");
		skills.classList.add("bg-blue");
		workingSkills.classList.add("bg-blue");
		page1.classList.add("bg-dark-hover");
		page2.classList.add("bg-dark-hover");
		page3.classList.add("bg-dark-hover");
		page4.classList.add("bg-dark-hover");
		design.classList.add("bg-darkViolet");
		clientSide.classList.add("bg-darkYellow");
		responsivity.classList.add("bg-darkRed");
		web.classList.add("bg-darkBlue");
		testing.classList.add("bg-darkViolet");
		management.classList.add("bg-darkPink");
		darkHr.classList.add("darkHr");
		darkHr1.classList.add("darkHr");
		darkHr2.classList.add("darkHr");
		darkHr3.classList.add("darkHr");
	
		themeIcon.classList.remove("change");
    }, 200);
    themeIcon.classList.add("change");
    themeIcon.src = moon;
}
// DARK MODE

// RESPONSIVE NAVBAR
const toggle = () => {
    const nav = document.getElementById("topnav");
    nav.className === "topnav" ? nav.className += " responsive" : nav.className = "topnav";
};
// RESPONSIVE NAVBAR


// JAVASCRIPT SLIDERSHOW
var timer = 4000;

var i = 0;
var max = $('#c > li').length;

	$("#c > li").eq(i).addClass('active').css('left','0');
	$("#c > li").eq(i + 1).addClass('active').css('left','25%');
	$("#c > li").eq(i + 2).addClass('active').css('left','50%');
	$("#c > li").eq(i + 3).addClass('active').css('left','75%'); 

	setInterval(function(){ 

		$("#c > li").removeClass('active');

		$("#c > li").eq(i).css('transition-delay','0.25s');
		$("#c > li").eq(i + 1).css('transition-delay','0.5s');
		$("#c > li").eq(i + 2).css('transition-delay','0.75s');
		$("#c > li").eq(i + 3).css('transition-delay','1s');

		if (i < max-4) {
			i = i+4; 
		}

		else { 
			i = 0; 
		}  

		$("#c > li").eq(i).css('left','0').addClass('active').css('transition-delay','1.25s');
		$("#c > li").eq(i + 1).css('left','25%').addClass('active').css('transition-delay','1.5s');
		$("#c > li").eq(i + 2).css('left','50%').addClass('active').css('transition-delay','1.75s');
		$("#c > li").eq(i + 3).css('left','75%').addClass('active').css('transition-delay','2s');
	
	}, timer);
// JAVASCRIPT SLIDERSHOW


// NAV TABS
var links = document.querySelectorAll('nav ul a');
var content = document.querySelectorAll('div.content');
var border = document.querySelector('span');
var lis = document.querySelectorAll('nav ul a');

for (let i = 0; i < links.length; i++){
	links[i].addEventListener('click', function(e){
      	e.preventDefault();
		var activLinks = document.querySelector('nav ul a.activ');
		var activContent = document.querySelector('section>div.activ');

		activLinks.classList.remove('activ');
		activContent.classList.remove('activ');

		this.classList.add('activ');
		var attr = this.getAttribute('href');

		var activ = document.querySelector(attr);

		activ.classList.add('activ');

	});
}
// NAV TABS


// SEND EMAIL
function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
    const serviceID = "service_40kbdgs";
    const templateID = "template_l0skm5n";
    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully!!");
    })
    .catch(err=>console.log(err));
}

// SEND EMAIL

// ALERT
$(".close").click(function(){
    $(this).parent().fadeOut();
});