// JavaScript Document
(function() {
	console.log("SEAF fired");

//variables 
var pages = [
	
	{content: "<h2 class='hide'>Home Page Section Begins</h2><div class='mainImg' data-interchange='[images/rope.png, small], [images/ropeM.png, medium], [images/ropeLg.png, large]''><h1 class='caption1'>TRAIN WITH</h1><h1 class='caption2'>THE BEST.</h1></div><section id='gallery' class='row'><h2 class='centeredText'>GALLERY</h2><img src='images/fitpic1.png' alt='Woman and Man Planking' class='small-12 medium-4 large-4 columns'><img src='images/fitpic3.png' alt='Woman and Man Planking' class='small-12 medium-4 large-4 columns'><img src='images/fitpic2.png' alt='Woman and Man Planking' class='small-12 medium-4 large-4 columns'></section><section id='tests'><h2 class='centeredText'>TESTIMONIALS</h2><div class='small-12 medium-4 large-4 columns'><blockquote>'The goal of a designer is to listen, observe, understand, sympathize, empathize, synthesize, and glean insights that enable him or her to ‘make the invisible visible.’ –Hillman Curtis</blockquote><p>I'm in a committed relationship with creative design, and I wont settle for anything less than 'wow'. I pride myself in coming up with expressive design ideas that make people feel something. From car companies to tea shops, sports bars to event invitations, I've got a design for that.</p></div><div class='small-12 medium-4 large-4 columns'><blockquote>“The goal of a designer is to listen, observe, understand, sympathize, empathize, synthesize, and glean insights that enable him or her to ‘make the invisible visible.’ –Hillman Curtis</blockquote><p>I'm in a committed relationship with creative design, and I wont settle for anything less than 'wow'. I pride myself in coming up with expressive design ideas that make people feel something. From car companies to tea shops, sports bars to event invitations, I've got a design for that.</p></div><div class='small-12 medium-4 large-4 columns'><blockquote>“The goal of a designer is to listen, observe, understand, sympathize, empathize, synthesize, and glean insights that enable him or her to ‘make the invisible visible.’ –Hillman Curtis</blockquote><p>I'm in a committed relationship with creative design, and I wont settle for anything less than 'wow'. I pride myself in coming up with expressive design ideas that make people feel something. From car companies to tea shops, sports bars to event invitations, I've got a design for that.</p></div></section>" },
	
	{content: "<section id='aboutCon'><h2 class='hide'>About Page Section Begins</h2><div class='mainImg' data-interchange='[images/weights.png, small], [images/weightsM.png, medium], [images/weightsLg.png, large]'><h1 class='caption1'>GET TO</h1><h1 class='caption2'>KNOW US.</h1></div><section id='aboutUs'><h2 class='centeredText'>ABOUT US</h2><p class='centeredText'>Vivamus et erat iaculis, ullamcorper lacus et, venenatis mi. Etiam condimentum, ligula nec feugiat ultrices, lectus diam tempor lectus, vel posuere nisl ex ut sem. In et sagittis dui, in iaculis lorem. In hac habitasse platea dictumst. Praesent condimentum aliquam orci, eu pulvinar lectus vulputate sit amet. Nam at cursus ipsum, ac interdum nulla. Etiam blandit ante ligula, id pulvinar purus viverra vitae. Donec est sem, sagittis vitae augue vitae, porttitor cursus lacus. Vivamus sed lacus quis dui ultricies accumsan sit amet vitae mi. Sed sit amet pretium mauris. Vestibulum pulvinar sit amet mi sollicitudin posuere. Morbi at velit sit amet erat eleifend pharetra at quis eros. Maecenas et pharetra mi. Aliquam arcu dolor, venenatis et sapien dapibus, pellentesque fermentum neque. Nunc in nisi ipsum.</p></section><section id='theTeam' class='row'><h2 class='centeredText'>THE TEAM</h2><div class='small-12 medium-6 columns'><img src='images/kate.png' alt='Photo of co-owner Kate'><h2 class='centeredText'>KATE SPENCE</h2><p class='centeredText'>In et sagittis dui, in iaculis lorem. In hac habitasse platea dictumst. Praesent condimentum aliquam orci, eu pulvinar lectus vulputate sit amet. Nam at cursus ipsum, ac interdum nulla. Etiam blandit ante ligula, id pulvinar purus viverra vitae. Donec est sem, sagittis vitae augue vitae, porttitor cursus lacus.</p></div><div class='small-12 medium-6 columns'><img src='images/lauren.png' alt='Photo of co-owner Lauren'><h2 class='centeredText'>LAUREN AVERY</h2><p class='centeredText'>Etiam blandit ante ligula, id pulvinar purus viverra vitae. Donec est sem, sagittis vitae augue vitae, porttitor cursus lacus. Vivamus sed lacus quis dui ultricies accumsan sit amet vitae mi. Sed sit amet pretium mauris. Vestibulum pulvinar sit amet mi sollicitudin posuere. Morbi at velit sit amet erat eleifend.</p></div><h2 class='centeredText'>OUR GOAL</h2><p class='centeredText'>Vivamus et erat iaculis, ullamcorper lacus et, venenatis mi. Etiam condimentum, ligula nec feugiat ultrices, lectus diam tempor lectus, vel posuere nisl ex ut sem. In et sagittis dui, in iaculis lorem. In hac habitasse platea dictumst. Praesent condimentum aliquam orci, eu pulvinar lectus vulputate sit amet. Nam at cursus ipsum, ac interdum nulla. Etiam blandit ante ligula, id pulvinar purus viverra vitae. Donec est sem, sagittis vitae augue vitae, porttitor cursus lacus. Vivamus sed lacus quis dui ultricies accumsan sit amet vitae mi. Sed sit amet pretium mauris. Vestibulum pulvinar sit amet mi sollicitudin posuere. Morbi at velit sit amet erat eleifend pharetra at quis eros. Maecenas et pharetra mi. Aliquam arcu dolor, venenatis et sapien dapibus, pellentesque fermentum neque. Nunc in nisi ipsum.</p></section></section>"},

	{content: "<h2 class='hide'>Contact Page Section Begins</h2><div class='mainImg' data-interchange='[images/back.png, small], [images/back.png, medium], [images/back.png, large]'><h1>LET'S TALK.</h1></div><h2 class='centeredText'>LET'S BE FRIENDS.</h2><p id='contactText' class='small-12 centeredText columns'>SEND US A MESSAGE AND WE WILL GET BACK TO YOU AS SOON AS WE CAN.</p><form><div class='small-12 medium-6 formStyle columns'><input class='formStyle' required type='text' placeholder='Name' name='name'><input class='formStyle' required type='email' placeholder='Email' name='email'><input class='formStyle' type='tel' placeholder='Phone Number' name='phone'></div><div class='small-12 medium-6 formStyle columns'><input class='formStyle' id='message' placeholder='Your message here' name='message' required><input class='formButton' type='submit' name='button' value='SEND ME'></div></form><h3 class='centeredText'>THANKS FOR VISITING!</h3>"}


];



var navButtons = document.querySelectorAll(".navButtons"),
container = document.querySelector("#container");


//functions
function changeContent(e) {
	console.log("you clicked a button");
	target = document.querySelector("#"+e.target.id);
	console.log(target.id);
	if(target.id =='home'){
		container.innerHTML = pages[0].content;
	}else if(target.id == 'about'){
		container.innerHTML = pages[1].content;
	}else{
		container.innerHTML = pages[2].content;
	}
	

}

//listeners
for(var i=0; i<navButtons.length; i++){
navButtons[i].addEventListener('click', changeContent, false)
}

})();