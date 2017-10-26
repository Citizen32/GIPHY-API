// Create an array of strings, each one related to a topic that interests you. Save it into a variable called "topics"

// Your app should take the topics in this array and create buttons in your HTML.

// When tyhe user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on a page

// When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

// Under every gif, display its rating (PG, G, so on).----This data is provided by the GIPHY API.----Only once you get images displaying with button presses should you move on the next step----

// Add a form to your page takes the value from the user input box and adds it into your "topics" array. Then make a -function call- that takes each topic in the array remakes the buttons on the page.

$(document).ready(function() {

	var topics = ["dog", "lion", "eagle", "bear"];

	function gifs(){
		$("#topicView").empty();

		var animalsClicked = $(this).attr("data-name");

		var jqxhr = $.get("https://api.giphy.com/v1/gifs/search?q=" + animalsClicked + "&api_key=9dDor3gmivO76TVIyLdGL84slUIBchH5&limit=10");

		jqxhr.done(function(data) { 

			for (var i = 0; i < 10; i++){

				console.log(data);

				var createDiv = $("<div>");
				createDiv.addClass("gifWrap");

				var addRating = $("<h4>");
				addRating.append("rating: " + data.data[i].rating);

				//Need to 
				var gif = $("<img>");
				gif.attr("data-gif1", data.data[i].images.fixed_height_still.url)
				gif.attr("data-gif2", data.data[i].images.fixed_height.url)
				gif.attr("scr", data.data[i].images.fixed_height_still.url)

				createDiv.append(gif)
				createDiv.append(addRating)

				$("#topicView").append(createDiv)

				makeButtons();
			}

			$("img").click(function(){

				if($(this).attr("scr") === $(this).attr("data-gif1")){

					$(this).attr("scr", $(this).attr("data-gif2"))
				}
				else{
					$(this).attr("scr", $(this).attr("data-gif1"))
				}
			})


			console.log("success got data", data);

		});


	}

	function makeButtons(){

		$("#topicButtons").empty();

		for (var i = 0; i < topics.length; i++){

			var getButton = $("<button>");

			getButton.addClass("animalButton")

			getButton.attr("data-name", topics[i]);

			getButton.append(topics[i]);

			$("#topicButtons").append(getButton);
		}
	}

	$("#searchAnimal").on("click", function(event){

		if ($("#inputLabel").val() === ""){
			alert("Plase input an animal")
		}

		else{

			topics.push($("#inputLabel").val())

			console.log(topics)

			event.preventDefault();

			$("#topicButtons").empty();
			$("#inputLabel").empty()

			makeButtons();

		}
	});

	$(document).on("click", ".animalButton", gifs);

	makeButtons();

});

