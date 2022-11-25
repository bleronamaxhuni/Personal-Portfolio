// DARK MODE
function myFunction() {
	var element = document.body;
	element.classList.toggle("dark-mode");
}
// DARK MODE

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

        var lisLength = lis.length;
        var lisWidth = 100 / lisLength;
        var position = i*lisWidth;
        border.style.left = position + '%';

	});
}
// NAV TABS


// SEND EMAIL
function sendEmail(){
	var params = {
		name:document.getElementById("name").value,
		email:document.getElementById("user_email").value,
		message:document.getElementById("message").value,
	};
	const serviceID="service_0iju4na";
	const templateID="template_l0skm5n";
	
	emailjs.send(serviceID,templateID,params).then(res => {
			document.getElementById("name").value ="";
			document.getElementById("user_email").value ="";
			document.getElementById("message").value ="";
			console.log(res);
			alert("Your message sent successfully");
		})
		.catch(err=> console.log(err));
}

// SEND EMAIL