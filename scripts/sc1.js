
$(document).ready(function(){
	/* This code is executed after the DOM has been completely loaded */
	
	$('nav a,footer a.up').click(function(e){
										  
		// If a link has been clicked, scroll the page to the link's hash target:
		
		$.scrollTo( this.hash || 0, 1500);
		e.preventDefault();
	});
	
	
	sc1.addTab(sc1.id_p2,sc1.title_p2,sc1.tab1_p2,sc1.tab2_p2);
    sc1.addProject(sc1.id_p1,sc1.title_p1,sc1.para_p1,sc1.pic_p1,sc1.detail_p1,sc1.repo_p1,0);
	sc1.addProject(sc1.id_p3,sc1.title_p3,sc1.para_p3,sc1.pic_p3,sc1.detail_p3,sc1.repo_p3,0);
	sc1.addProject(sc1.id_p4,sc1.title_p4,sc1.para_p4,sc1.pic_p4,sc1.detail_p4,sc1.repo_p4,0);
	
});


var sc1={
	
	id_p2:"#project2",
	title_p2:"Graduate Assistant Projects (Javascript,CSS, HTML)",
	tab1_p2:"Pairs & Tuples",
	tab2_p2:"Constraint Graphs",
	cont:"#s",
	tabs:[["tab1"],["tab2"]],
	
	
	para_p2_1:"Javascript,Html,Css project add on for \"Smart Sparrow\".The program auto generates questions on pairs and tuples. The user must answer 5 questions right in order to complete the exercise.<br><br> My contribution to this project was to create a generator of random questions. In the js file app/scripts/questionbankmodel.js I wrote the following methods:<br> <br>  createQuestionA(), <br> createQuestionB(), <br> getRandomValue(),<br> getRandomValues(maxLength),<br> getListValues(),<br> getSubList(str,numero). ",
	pic_p2_1:"img/pairs.png",
	repo_p2_1:"https://github.com/fabiocasagrande/Pairs-and-Other-Tuples-Review",
	detail_p2_1:"https://rawgit.com/fabiocasagrande/Pairs-and-Other-Tuples-Review/master/index.html",
	
	
	para_p2_2:"Javascript,Html,Css project add on for \"Smart Sparrow\". The program auto generates graphs. The user must answer 5 set of 5 questions each right in order to complete the exercise.<br><br> My contribution to this project was to create a generator of random graphs.  I created all the files in the folder app/scripts/graphScripts/ which are the following: <br><br> circle.js,<br>line.js<br>square.js<br>graphGenerator.js . ",
	pic_p2_2:"img/constraint.png",
	repo_p2_2:"https://github.com/fabiocasagrande/Constraint-Graphs",
	detail_p2_2:"https://rawgit.com/fabiocasagrande/Constraint-Graphs/master/index.html",
	
	
	
	
	id_p1:"#project1",
	title_p1:"Research Project Microsoft Kinect SDK v1.8",
	para_p1:"This project is a component based application, which means that existing programs have been used and customized according to this project’s requirements. I based this project mainly on two programs available to download on Microsoft Windows SDK 1.8: <br><br> Control Basics <br><br> Avateering XNA <br><br> To build an interactive menu I used the Control Basics application which is a basic example on how to create a custom menu. Regarding the gameplay, I used the Avateering XNA application which was an example that showed a user body tracked avatar. Therefore, after I had these two components, my sole focus was to code and customize these two applications in order to create the NYIT application. ",
	pic_p1:"img/nyit.png",
	repo_p1:"https://github.com/fabiocasagrande/Research_Project_Microsoft_Kinect_SDK1.8",
	detail_p1:"microsoft/indexMs.html",
	
	
	id_p3:"#project3",
	title_p3: "Drowsiness Monitoring System",
	para_p3: "Drowsiness Monitoring System using Arduino microcontrollers,an Android Tablet,and a 4D Systems LCD Display <br><br> This is a project I did in my Senior Design class.<br><br>The purpose of this project was to create a system that allows the user to safely drive while being monitored. This system would track the driver’s eyes in real time and if he or she falls asleep, the system would turn up the volume of the radio and slow down the car until it stops.",
	pic_p3:"drowsiness/images/picture.png",
	repo_p3:"https://github.com/fabiocasagrande/Drowsiness-Monitoring-System",
	detail_p3:"drowsiness/index.html",
	
	
	
	id_p4:"#project4",
	title_p4: "Tuscany In Your Pocket",
	para_p4: "Windows Pc/Tablet application developed in javascript,css, and HTML5.<br><br> Tuscany In Your Pocket is a is a free travel guide for English speaking tourists visiting the Tuscany region of Italy. App includes maps of the top cities in Tuscany, local attractions and descriptions of each attraction.",
	pic_p4:"img/tuscany.jpg",
	repo_p4:"null",
	detail_p4:"https://www.microsoft.com/en-us/store/apps/tuscany-in-your-pocket/9wzdncrdhkrz",
	
}



sc1.addTab =function(id,title,tab1,tab2){
	
	$(id).append("<h2>"+title+"</h2> <div class= \" line \"></div> <div class= \"articleBody clear \"></div>");
	$(id).append("<button id=\"tab1\" onclick=\"sc1.addContentTab1()\">"+tab1+"</button> <button id=\"tab2\" onclick=\"sc1.addContentTab2()\">"+tab2+"</button> <div class=\"line\"></div> <div id=\"s\"></div>");
	sc1.changeColor("tab1");
	sc1.addProjectToTab(sc1.cont,sc1.tab1_p2,sc1.para_p2_1,sc1.pic_p2_1,sc1.detail_p2_1,sc1.repo_p2_1,0);
	
	
}


sc1.addContentTab1 = function(){

	$(sc1.cont).empty();
	sc1.changeColor("tab1");
	sc1.addProjectToTab(sc1.cont,sc1.tab1_p2,sc1.para_p2_1,sc1.pic_p2_1,sc1.detail_p2_1,sc1.repo_p2_1,0);
}




sc1.addContentTab2 = function(){
	$(sc1.cont).empty();
	sc1.changeColor("tab2");
	sc1.addProjectToTab(sc1.cont,sc1.tab2_p2,sc1.para_p2_2,sc1.pic_p2_2,sc1.detail_p2_2,sc1.repo_p2_2,0);
}


sc1.changeColor = function(tab){
	
	for(var i=0;i<sc1.tabs.length;i++){
		
		if(sc1.tabs[i]==tab){
			document.getElementById(sc1.tabs[i]).style.backgroundColor="#5e6cf6";
		}else{
			document.getElementById(sc1.tabs[i]).style.backgroundColor="#ffffff";
			
		}
		
	}
	
	
}






sc1.addProjectToTab = function(id,title,paragraph1,pic,detail,repo,type){
	
	
	$(id).append("<h2>"+title+"</h2> <div class= \" line \"></div> <div class= \"articleBody clear \"> <figure> <a><img src="+pic+" width=\"620\" height=\"340\" /></a> </figure> <p>"+paragraph1+"</p></div>");
	
	if(detail!="null" && type=="0" ){
		
		$(id).append("<a href="+detail+"><button>DEMO</button></a>");
		
	}
	else if(detail!="null" && type=="1" ){
		
		$(id).append("<a><button onclick=\"sc1.clickButton('"+detail+"')\">DEMO</button></a>");
		
		
	}
	
	if(repo!="null"){
		
		$(id).append("<a href="+repo+"><button>Go to Repository</button></a>");
	
		
	}
	
}



sc1.addProject = function(id,title,paragraph1,pic,detail,repo,type){
	
	$(id).append("<h2>"+title+"</h2> <div class= \" line \"></div> <div class= \"articleBody clear \"> <figure> <a><img src="+pic+" width=\"620\" height=\"340\" /></a> </figure> <p>"+paragraph1+"</p></div>");
	
	if(detail!="null" && type=="0" ){
		
		$(id).append("<a href="+detail+"><button>Full Details</button></a>");
		
	}
	else if(detail!="null" && type=="1" ){
		
		$(id).append("<a><button onclick=\"sc1.clickButton('"+detail+"')\">Full Details</button></a>");
		
		
	}
	
	if(repo!="null"){
		
		$(id).append("<a href="+repo+"><button>Go to Repository</button></a>");
	
		
	}
	
}


sc1.clickButton = function(framee){
	
	document.getElementById(framee).style.display="block";
}


sc1.hideOpenFrame = function(){	
	if(document.getElementById("frame2").style.display=="block"){
		document.getElementById("frame2").style.display="none";
	}
	else if(document.getElementById("frame").style.display=="block"){
		document.getElementById("frame").style.display="none";
	}
	else if(document.getElementById("frame1").style.display=="block"){
		document.getElementById("frame1").style.display="none";
	}
	else if(document.getElementById("frame3").style.display=="block"){
		document.getElementById("frame3").style.display="none";
	}
}






