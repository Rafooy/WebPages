//Vars for Pic Slider
var images = [
	"http://images4.fanpop.com/image/photos/19800000/Cherry-Blossom-Tree-trees-19838737-1152-720.jpg",
	"https://mariafaysakura.files.wordpress.com/2012/01/sakura_tree__watercolor_sketch_by_crimsonsanctuary.jpg",
	"http://4.bp.blogspot.com/-pBQ77ZE66GA/UlKapK3MVRI/AAAAAAAACi8/jWq8jNaL9Os/s1600/Sakura+Tree+HD+Wallpapers+0+(2).jpg",
	"https://window2nature.files.wordpress.com/2011/04/zsakura-with-mr1-fuji1.jpg"
	];
	
var num = 0;


//Next() and prev() functions for Pic Slider
function next(){
	var slider = document.getElementById("slider");
	num++;
	if(num >= images.length){
		num = 0;
	}
	slider.src=images[num];
}

function prev(){
	var slider = document.getElementById("slider");
	num--;
	if(num<0){
		num = images.length-1;
	}
	slider.src=images[num];
}

//function for saying Hello to person from prompt
function hello_person(){
	var person = prompt("Enter your name: ", "Enter here");
	
	if (person != null){
		document.getElementById("person").innerHTML = "Hello, " + person + ".";
	}
}