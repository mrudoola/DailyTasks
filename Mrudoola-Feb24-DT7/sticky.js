$(document).ready(function(){
	loadStoredNotes();	
	$(document).on('click', '#crteStkyBtn', addNote);
	$(document).on('click', '#addBtn', showOvrly);
	$(document).on('click', '#cnclStkyBtn', cnclOvrly);
	$(document).on('click', '#clnStorge', cleanNotes);
	$(document).on('click', '#wrapper', nclOvrlyc);

$("textarea").on("change keyup input",function(){
	if($(this).val().length>0)$("#crteStkyBtn").removeClass("ntActv");
	else if($(this).val().length>100)
	this.value=this.value.substring(0,max);
	else $("#crteStkyBtn").addClass("ntActv")});
	console.log(localStorage.length);
});

function cleanNotes(){
	localStorage.clear();
	$('#stkyNts').empty();	
}

function getStoredNotes(){
	var storedNotes= new Array();
	storedNotes = JSON.parse(localStorage.getItem("notes"));
	return storedNotes;
}

function loadStoredNotes(){
	var pastNotes= getStoredNotes()
	console.log(getStoredNotes());
	if(pastNotes != null && pastNotes.length > 1){
		for (var i = 0; i < pastNotes.length;i++){
			createSticky(JSON.parse(pastNotes[i]));
		}
	}else {
			createSticky(pastNotes);
	}
}

function showOvrly(){
	$('#stkyOvrly').removeClass('hidden');
	$('#wrapper').addClass('hideOvrly');
}

function cnclOvrly(){
	$('#stkyOvrly').addClass('hidden');
	$('#wrapper').removeClass('hideOvrly');
	$('.txtBox').val('');
}

function addNote(){
     var usrInput = $('.txtBox').val();
	  var title = $('.txtitle').val();
	 //console.log(usrInput);

	if(usrInput.length > 0){
		console.log($(this));
		$('#').removeClass('ntActv');
		addtoSticky({title: title, text:usrInput});
		cnclOvrly();
		//console.log(notes);
	}else{

	}
}

function addtoSticky(note){
	if(note != null){
		console.log(note);
		createSticky(note);
		var current = JSON.parse(localStorage.getItem("notes"));
    if(current == null) current = [];
		current.push(JSON.stringify(note));
		localStorage.setItem('notes', JSON.stringify(current));
	}
}

function createSticky(note){
  if(note == null) return;
	$('#stkyNts').append('<li class="box"><h3>' + note.title + '</h3>'+note.text+'</li>');
}