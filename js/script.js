// JavaScript Document
onload=init;
//create an array to keep track of items currently in play
var coin_array = new Array();
function init(){
	for (var i=0; i<20; i++){
	//make an object paste on the coin class:
	var anothercoin = new Coin();
	anothercoin.create();
	//put that new coin in array
	coin_array.push(anothercoin);
	//when the new coin is clicked, use its built-in destroy function, passing the event
	anothercoin.item_on_page.onclick = function(e){
		anothercoin.destroy(e);
	   }//end event handler
	}//close for loop
}//close init

//lets make a class (blueprint) for each coin we generate
function Coin(){
	this.x; //starts empty, will keep track of each coins left-right position on the stage
	this.y; //starts empty, will keep track of each coins up-down position on the stage
	this.item_on_page;
	/**function does lots of things when a coin gets created on the page
	 *
	*/
	this.create = function(){
		//make a section element in the HTML, store it into the item on page we set up above
	this.item_on_page = document.createElement("section");
		//store a random x and y position different for each coin. I'm using screen width of 500, height of 300:
	this.x = Math.floor(Math.random()*700);
	this.y = Math.floor(Math.random()*500);
	
		//use those x and y coordinates in the css to position the coins:
	this.item_on_page.style.left = this.x + "px";
	this.item_on_page.style.top = this.y + "px";
	
	 
		//attach the item to our HTML hierarchy, as a child of the body
	document.getElementsByTagName("body")[0].appendChild(
		this.item_on_page);
	}

	/**function does lots of things when a coin gets removed on the page
	 *
	*/
	this.destroy = function(e){
//		console.log("destroyed");
	document.getElementsByTagName("body")[0].removeChild(e.target);
	//figure out that coins position in the array
	var this_coins_index_number = coin_array.indexOf(this);
	//splice it out of the array
	coin_array.splice(this_coins_index_number,1);
	console.log(coin_array.length);
	}


}