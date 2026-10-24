/*-----------------------------------------------------------------------------------*/
/*	VIDEO
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function() {
	jQuery('.media').fitVids();
});

/*-----------------------------------------------------------------------------------*/
/*	CHAT STYLE
/*-----------------------------------------------------------------------------------*/
$(document).ready(function(){
	$('.format-chat li:even').css('background-color','#e9e9e9');
	$('.format-chat li:odd').css('background-color','#f4f4f4');
	searchText();
});



/*-----------------------------------------------------------------------------------*/
/*	SELECTNAV
/*-----------------------------------------------------------------------------------*/

$(document).ready(function() {
	selectnav('tiny', {
		label: '--- Navigation --- ',
		indent: '-'
	});
});

/*-----------------------------------------------------------------------------------*/
/*	IMAGE HOVER
/*-----------------------------------------------------------------------------------*/
$(document).ready(function() {
	if(!(navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/Android/i))) {
		$('.gallery-items li.item').mouseenter(function(e) {

			$(this).children('a').children('span').fadeIn(300);
		}).mouseleave(function(e) {

			$(this).children('a').children('span').fadeOut(400);
		});
	}
});

/*-----------------------------------------------------------------------------------*/
/*	SOCIAL HOVER
/*-----------------------------------------------------------------------------------*/

$(function() {
	$('.social img').css("opacity","1.0");	
	$('.social img').hover(function () {										  
		$(this).stop().animate({ opacity: 0.75 }, "fast"); },	
		function () {			
			$(this).stop().animate({ opacity: 1.0 }, "fast");
		});
});

/*-----------------------------------------------------------------------------------*/
/*	BUTTON HOVER
/*-----------------------------------------------------------------------------------*/


$(function() {
	$("a.button, .forms fieldset .btn-submit, #submit").css("opacity","1.0");
	$("a.button, .forms fieldset .btn-submit, #submit").hover(function () {
		$(this).stop().animate({ opacity: 0.85 }, "fast");  },
		function () {
			$(this).stop().animate({ opacity: 1.0 }, "fast");  
		}); 
});

/*-----------------------------------------------------------------------------------*/
/*	FORM
/*-----------------------------------------------------------------------------------*/

$(document).ready(function() {
	$('input[title]').each(function() {
		if($(this).val() === '') {
			$(this).val($(this).attr('title'));	
		}
		
		$(this).focus(function() {
			if($(this).val() == $(this).attr('title')) {
				$(this).val('').addClass('focused');	
			}
		});
		$(this).blur(function() {
			if($(this).val() === '') {
				$(this).val($(this).attr('title')).removeClass('focused');	
			}
		});
	});
});

/*-----------------------------------------------------------------------------------*/
/*	TOGGLE
/*-----------------------------------------------------------------------------------*/
$(document).ready(function(){
//Hide the tooglebox when page load
$(".togglebox").hide();
//slide up and down when click over heading 2
$("h4").click(function(){
// slide toggle effect set to slow you can set it to fast too.
$(this).toggleClass("active").next(".togglebox").slideToggle("slow");
return true;
});
});

/*-----------------------------------------------------------------------------------*/
/*	TABS
/*-----------------------------------------------------------------------------------*/
$(document).ready(function() {
	//Default Action
	$(".tab_content").hide(); //Hide all content
	$("ul.tabs li:first").addClass("active").show(); //Activate first tab
	$(".tab_content:first").show(); //Show first tab content
	
	//On Click Event
	$("ul.tabs li").click(function() {
		$("ul.tabs li").removeClass("active"); //Remove any "active" class
		$(this).addClass("active"); //Add "active" class to selected tab
		$(".tab_content").hide(); //Hide all tab content
		var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
		$(activeTab).fadeIn(); //Fade in the active content
		return false;
	});

});

/*-----------------------------------------------------------------------------------*/
/*	TWITTER
/*-----------------------------------------------------------------------------------*/

getTwitters('twitter', {
	id: 'elemisdesign', 
	count: 2, 
	enableLinks: true, 
	ignoreReplies: false,
	template: '<span class="twitterPrefix"><span class="twitterStatus">%text%</span><br /><em class="twitterTime"><a href="http://twitter.com/%user_screen_name%/statuses/%id%">%time%</a></em>',
	newwindow: true
});


/*-----------------------------------------------------------------------------------*/
/*	MENU
/*-----------------------------------------------------------------------------------*/
ddsmoothmenu.init({
	mainmenuid: "menu",
	orientation: 'h',
	classname: 'menu',
	contentsource: "markup"
});


/*-----------------------------------------------------------------------------------*/
/*	Search Content
/*-----------------------------------------------------------------------------------*/
var searchText = function()
{
	var homeContent = 'About How to say my name? Phuong Ho I am a PhD candidate at the University of Arizona My research interests are in Industrial Organization, Environmental Economics, and Applied Econometrics'
	+'Before going to Arizona, I finished my Bachelor degree in Economics and Finance and Bachelor Honours in Economics at the Victoria University of Wellington in New Zealand'
	+'Contact Email: phuongho@email.arizona.edu Postal mail Department of Economics 1130 E Helen St McClelland Hall 401 Tucson, AZ 85721-0108';

	var techingContent = 'econ/bnad/mgmt 276 Statistical Inference in management Syllabus Summer 2016 This is a first course in business statistics, with an emphasis on techniques for data analysis and inference in management'
	+ 'Students are assumed to be familiar with basic descriptive statistics probability theory and probability distributions Presentation'
	+' of technical material is combined with hands-on analysis of data to aid managerial decision making. Meeting will be a mix of lecture and problem-solving'
	+' There are two objectives for the course. First, to develop a conceptual understanding of statistics and the role of data analysis in management. Second, to master the mechanics of applied statistics';

	var bnad276Content = 'Class Schedule Monday to Friday: 1pm--3.50pm in MCLND 128 Office Hours Monday to Thursday: 4pm--5pm in MCLND 401A Course Materials I do not require any textbooks. You can use my lecture notes to study' 
	+' I recommend the followings for those who want to get more basic and intuitive insights of statistics Essentials of statistics for business and economics by David R. Anderson, Dennis J. Sweeney and Thomas A. Williams (ASW)' 
  +' This is one of the easy textbooks that will be of value to anyone who is interested in learning a bit more about economic statistics. The focus is on core topics but the book does do a good job of covering most of the topics that people will want to learn about this subject'
  +' Cartoon Guide to Statistics by Larry Gonick and Woollcott Smith This book is perfect for people who want a simple introduction to statistics. The cartoons make the subject easy to comprehend and are actually quite fun. Even some very complex statistical ideas are made easy through the use of cartoons'
  +' If you want to learn all about basic statistics without putting in a lot of effort then this might be the best book to choose Course Syllabus Course Outline and Lecture Notes Day 1 May 16 Data & Statistics. Descriptive Statistics I'
  +' Lecture note Reading in ASW: Ch. 1--2 Day 2 May 17 Descriptive Statistics II Reading in ASW: Ch. 2--3 Day 3. May 18 Probability Theory I Reading in ASW Probability Theory II  Day 5. May 20 Midterm 1 Probability Distribution Memorial Day No Class Discrete Probability Distribution Continuous Probability Distribution Midterm' 
  +' Introduction to Sampling Day 10 May 27 + Day 12 May 31 Interval Estimation Hypothesis Test Simple Linear Regression Final Exam Day 15 June 3 Day 14 June 2';  

  var researchContent = 'Research Interests Industrial Organization Environmental Energy Economics Econometric Modelling Working Papers Email me for more information';

  var resourcesConent = 'Useful Resources Misc U of A Department of Economics UA Student Access Center Employee Access Center Grad lecture notes W. Greene 1st year undergraduate statistic course PSID ICPSR World Bank OECD';

	$('.search-submit-button').click(function(event){
		var text = $('.search-text-box').val().toLowerCase();
		if( text == 'cv' || text == 'curriculum vitae' ) 
		{
			window.location.href = 'cv.html';
			return false;
		}

		if(researchContent.toLowerCase().indexOf(text.toLowerCase().trim()) != -1) 
		{
			window.location.href = 'research.html';
			return false;
		}

		if(homeContent.toLowerCase().indexOf(text.toLowerCase().trim()) != -1) 
		{
			window.location.href = 'index.html';
			return false;
		}	

		if(techingContent.toLowerCase().indexOf(text.toLowerCase().trim()) != -1) 
		{
			window.location.href = 'teaching.html';
			return false;
		}	
		
		if(bnad276Content.toLowerCase().indexOf(text.toLowerCase().trim()) != -1) 
		{
			window.location.href = 'bnad276.html';
			return false;
		}	

		if(resourcesConent.toLowerCase().indexOf(text.toLowerCase().trim()) != -1) 
		{
			window.location.href = 'resources.html';
			return false;
		}	
	
	});
	
}