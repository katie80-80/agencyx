// JavaScript Document// JavaScript Document
(function() {
	console.log('SEAF fired');

//variables 
var pages = [
	
	{content: "<div id='homeHeader'><h1 class='caption1'>TRAIN WITH</h1><h1 class='caption2'>THE BEST.</h1></div><section id='homeCon'><h2 class='hide'>Home Page Section Begins</h2><section id='gallery'  class='row'><h2 class='centeredText titles'>GALLERY</h2><img src='img/fitpic1.png' alt='Woman and Man Planking' class='small-12 medium-4 large-4 galleryPics columns'><img src='img/fitpic3.png' alt='Man Lifting Weights' class='small-12 medium-4 large-4 galleryPics columns'><img src='img/fitpic2.png' alt='Woman Lighting Weights' class='small-12 medium-4 large-4 galleryPics columns'></section><section id='tests' class='darkBg row'><h2 class='centeredText titles'>TESTIMONIALS</h2><div class='small-12 medium-4 large-4 darkBg columns'><blockquote>“Has et atqui vitae sententiae, pro purto nominavi disputando at. Et has debitis molestie eleifend, ut eirmod petentium nam.' –Hillman Curtis</blockquote><p>Te eum postea verear, quod nisl erat ad sea, veri nominavi definitionem duo in. Ludus adipiscing qui ut, deserunt antiopam pri no. Id his quando veritus, molestie lobortis mnesarchum no vis. His id causae dissentiet. Dicta assueverit et vim, quo ne gloriatur mnesarchum. Dicta simul explicari ut pri, ex nam vide delenit.</p></div><div class='small-12 medium-4 large-4 columns'><blockquote>“Tale graecis ceteros cum eu. Eripuit pertinacia eum te, stet laoreet mentitum ad vis. Etiam quidam pro et, ex dicat debet copiosae qui.' –Hillman Curtis</blockquote><p>Te eum postea verear, quod nisl erat ad sea, veri nominavi definitionem duo in. Ludus adipiscing qui ut, deserunt antiopam pri no. Id his quando veritus, molestie lobortis mnesarchum no vis. His id causae dissentiet. Dicta assueverit et vim, quo ne gloriatur mnesarchum. Dicta simul explicari ut pri, ex nam vide delenit.</p></div><div class='small-12 medium-4 large-4 columns'><blockquote>“Id his quando veritus, molestie lobortis mnesarchum no vis. His id causae dissentiet.' –Hillman Curtis</blockquote><p>Te eum postea verear, quod nisl erat ad sea, veri nominavi definitionem duo in. Ludus adipiscing qui ut, deserunt antiopam pri no. Id his quando veritus, molestie lobortis mnesarchum no vis. His id causae dissentiet. Dicta assueverit et vim, quo ne gloriatur mnesarchum. Dicta simul explicari ut pri, ex nam vide delenit.</p></div></section></section>"},
	
	{content: "<div id='aboutHeader'><h1 class='caption1'>GET TO</h1><h1 class='caption2'>KNOW US.</h1></div><section id='aboutCon'><h2 class='hide'>About Page Section Begins</h2><section id='aboutUs'><h2 class='centeredText titles'>ABOUT US</h2><p class='centeredText'>Vivamus et erat iaculis, ullamcorper lacus et, venenatis mi. Etiam condimentum, ligula nec feugiat ultrices, lectus diam tempor lectus, vel posuere nisl ex ut sem. In et sagittis dui, in iaculis lorem. In hac habitasse platea dictumst. Praesent condimentum aliquam orci, eu pulvinar lectus vulputate sit amet. Nam at cursus ipsum, ac interdum nulla. Etiam blandit ante ligula, id pulvinar purus viverra vitae. Donec est sem, sagittis vitae augue vitae, porttitor cursus lacus. Vivamus sed lacus quis dui ultricies accumsan sit amet vitae mi. Sed sit amet pretium mauris. Vestibulum pulvinar sit amet mi sollicitudin posuere. Morbi at velit sit amet erat eleifend pharetra at quis eros. Maecenas et pharetra mi. Aliquam arcu dolor, venenatis et sapien dapibus, pellentesque fermentum neque. Nunc in nisi ipsum.</p></section><section id='theTeam' class='row darkBg'><h2 class='centeredText titles'>THE TEAM</h2><div class='small-12 medium-6 columns'><img src='img/kate.png' class='teamPics' alt='Photo of co-owner Kate'><h2 class='centeredText titles'>KATE SPENCE</h2><p class='centeredText'>In et sagittis dui, in iaculis lorem. In hac habitasse platea dictumst. Praesent condimentum aliquam orci, eu pulvinar lectus vulputate sit amet. Nam at cursus ipsum, ac interdum nulla. Etiam blandit ante ligula, id pulvinar purus viverra vitae. Donec est sem, sagittis vitae augue vitae, porttitor cursus lacus.</p></div><div class='small-12 medium-6 columns'><img src='img/lauren.png' class='teamPics' alt='Photo of co-owner Lauren'><h2 class='centeredText titles'>LAUREN AVERY</h2><p class='centeredText'>Etiam blandit ante ligula, id pulvinar purus viverra vitae. Donec est sem, sagittis vitae augue vitae, porttitor cursus lacus. Vivamus sed lacus quis dui ultricies accumsan sit amet vitae mi. Sed sit amet pretium mauris. Vestibulum pulvinar sit amet mi sollicitudin posuere. Morbi at velit sit amet erat eleifend.</p></div></section><section id='ourGoal'><h2 class='centeredText titles'>OUR GOAL</h2><p class='centeredText'>Vivamus et erat iaculis, ullamcorper lacus et, venenatis mi. Etiam condimentum, ligula nec feugiat ultrices, lectus diam tempor lectus, vel posuere nisl ex ut sem. In et sagittis dui, in iaculis lorem. In hac habitasse platea dictumst. Praesent condimentum aliquam orci, eu pulvinar lectus vulputate sit amet. Nam at cursus ipsum, ac interdum nulla. Etiam blandit ante ligula, id pulvinar purus viverra vitae. Donec est sem, sagittis vitae augue vitae, porttitor cursus lacus. Vivamus sed lacus quis dui ultricies accumsan sit amet vitae mi. Sed sit amet pretium mauris. Vestibulum pulvinar sit amet mi sollicitudin posuere. Morbi at velit sit amet erat eleifend pharetra at quis eros. Maecenas et pharetra mi. Aliquam arcu dolor, venenatis et sapien dapibus, pellentesque fermentum neque. Nunc in nisi ipsum.</p></section></section>"},

	{content: "<div id='contactHeader'><h1 class='caption1'>ALRIGHT,</h1><h1 class='caption2'>LET'S TALK.</h1></div><section id='contactCon'><h2 class='hide'>Contact Page Section Begins</h2><h2 class='centeredText titles'>LET'S BE FRIENDS.</h2><p id='contactText' class='small-12 centeredText columns'>SEND US A MESSAGE AND WE WILL GET BACK TO YOU AS SOON AS WE CAN.</p><form><div class='small-12 medium-6-centered formStyle columns'><input class='formStyle' required type='text' placeholder='Name' name='name'><input class='formStyle' required type='email' placeholder='Email' name='email'><input class='formStyle' type='tel' placeholder='Phone Number' name='phone'></div><div class='small-12 medium-6-centered formStyle columns'><input class='formStyle' id='message' placeholder='Your message here' name='message' required><input class='formButton small-12 medium-6-centered columns' type='submit' name='button' value='SEND ME'></div></form><h3 class='centeredText thanks titles'>THANKS FOR VISITING!</h3></section>"}


];



var navButtons = document.querySelectorAll('.navButtons'),
container = document.querySelector('#container');


//functions

function basic(){
	container.innerHTML = pages[0].content;
}


function changeContent(e) {
	console.log('you clicked a button');
	target = document.querySelector('#'+e.target.id);
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
window.addEventListener("load", basic, false);

})();