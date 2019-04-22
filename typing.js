var typeSpeed = 1;

$(document).ready(function () {
	new TypeIt('#date', {
	  strings: '28. April 2019',
		speed: typeSpeed,
		afterComplete: (instance) => {
			typeNextText(typeTitle);
		}
	}).go();
});

function typeNextText(x) {
	$(".ti-cursor").remove();
	x();
}

function typeTitle() {
	new TypeIt('#title', {
		deleteSpeed: 80,
		speed: typeSpeed,
		afterComplete: (instance) => {
			typeNextText(typeIntroduction);
		}
	})
	.type('Dear <span id="lexi">Lexi</span>')
	.pause(300)
	.delete(4)
	.pause(250)
	.type('<span id="lexi">Alexandria</span>,')
	.go();
}

function typeIntroduction() {
	new TypeIt('#introduction', {
		deleteSpeed: 80,
		speed: typeSpeed,
		afterComplete: (instance) => {
			typeNextText(typeLastLine);
		}
	})
	.type('It has now been a solid month since we started dating and exactly 2 months and a day since we started talking. ')
	.pause(250)
	.type('During that time I have had a ton of joy, laughter and also remorse or regret about some of my actions. ')
	.pause(250)
	.type('But that is what love is about, having a rollercoaster of emotions. ')
	.pause(250)
	.type('You cannot imagine how glad I am that I met You. I love that You are reasonable, smart and at first shy, but when You do open up, You sure as hell blossom. I would never trade You for anyone, my sweet princess. ')
	.pause(300)
	.type('<br>')
	.go();
}

function typeLastLine() {
	new TypeIt('#lastLine', {
		deleteSpeed: 80,
		speed: typeSpeed,
		afterComplete: (instance) => {
			typeNextText(typePoem);
			audio.play();
		}
	})
	.pause(250)
	.type('<br> I hope you enjoy my cringey poem. ❤️')
	.go();
}

function typePoem() {
	new TypeIt('#poem', {
		deleteSpeed: 80,
		speed: typeSpeed,
		
		afterString: (step, queue, instance) => {
		     $("html, body").animate({ scrollTop: $(document).height() }, 1000);
		  },
  		afterComplete: (instance) => {
  			typeNextText(typeCongratulations);
  		}
	})
	.pause(250)
	.type('<br>')
	.type('Roses are red<br>Violets are blue<br>I didnt know true love<br>Was real before you<br>')
	.pause(250)
	.type('<br>')
	.type('You make my days shine<br>And my nights too<br>Oh how I love<br>Spending time with you<br>')
	.pause(250)
	.type('<br>')
	.type('As an unpoetic person<br>And an unemotional hoe<br>You pushed me so far<br>To write a poem for you<br>')
	.pause(250)
	.type('<br>')
	.type('I know it sounds cheesy<br>And it probably is<br>But I hope our love\'s longer<br>Than our snapchat streaks<br>')
	.go();
}

function typeCongratulations() {
	new TypeIt('#congratulations', {
		deleteSpeed: 80,
		speed: typeSpeed,
		
		afterString: (step, queue, instance) => {
		     $("html, body").animate({ scrollTop: $(document).height() }, 1000);
		  }
	})
	.pause(250)
	.type('<br>')
	.type('Happy monthversary, my one and only, <span id="lexi">Lexi</span>')
	.type('<br>')
	.go();
}