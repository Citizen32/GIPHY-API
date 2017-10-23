// Create an array of strings, each one related to a topic that interests you. Save it into a variable called "topics"


// Your app should take the topics in this array and create buttons in your HTML.

// When tyhe user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on a page

// When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

// Under every gif, display its rating (PG, G, so on).----This data is provided by the GIPHY API.----Only once you get images displaying with button presses should you move on the next step----

// Add a form to your page takes the value from the user input box and adds it into your "topics" array. Then make a -function call- that takes each topic in the array remakes the buttons on the page.

$(document).ready(function() {
    
	var topics = ["dog", "lion", "eagle", "bear"];

		
	function renderButtons(){
	
		$("#topics-view").empty();

	for (var i = 0; i < topics.lenght; i++){
		
		var mkButton = $("<button>");
			mkButton.addClass("topic");
			mkButton.attr("data-name", topics[i]);
			mkButton.append(topics[i]);
		
		$("#topics-view").append(a);


	}

		
}

	$("#find-topic").on("click", function(event){
		event.preventDefault();
		var topic = $("#topic-input").val().trim();
		topics.push(topic);
		renderButtons();
	});

	renderButtons();
});
