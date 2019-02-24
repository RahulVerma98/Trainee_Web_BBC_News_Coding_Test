
function article_1(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
	   		var response = JSON.parse(xhttp.responseText);
	   		
	   		var title = response.title;
			document.write('<title>'+title+'</title>');

			var heading = response.body[0].model.text;
			document.write('<h1>'+heading+'</h1>');
			
			var paragraph_1 = response.body[1].model.text;
			document.write('<p>'+paragraph_1+'</p>');

			var image = response.body[2].model.url
			var altText = response.body[2].model.altText
			var height = response.body[2].model.height
			var width = response.body[2].model.width
			var output = "<img src =" + image + " alt= " + altText + " width="+width + " height="+ height +">";
			document.write('<p>'+output+'</p>');
	

			var paragraph_2 = response.body[3].model.text
			document.write('<p>'+paragraph_2+'</p>');

			var paragraph_3 = response.body[4].model.text
			document.write('<p>'+paragraph_3+'</p>');

			var list = response.body[5].model.items[0]
			document.write('<li>'+list+'</li>');
		
			document.write('<button onclick="location.reload();">BACK BUTTON</button>')
			document.write('<style>h1{color:white;text-decoration: underline;text-transform: capitalize;}</style>')

			document.write('<style>body{background-color: #7F0000;color: white;text-align: center;}</style>');
		}
	};
	xhttp.open("GET", "article-1.json", true);
	xhttp.send();
};

function article_2(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
	   		var response = JSON.parse(xhttp.responseText);
	   		
	   		var title = response.title;
			document.write('<title>'+title+'</title>');

			var heading = response.body[0].model.text;
			document.write('<h1>'+heading+'</h1>');
			
			var image = response.body[1].model.url
			var altText = response.body[1].model.altText
			var height = response.body[1].model.height
			var width = response.body[1].model.width
			var output = "<img src =" + image + " alt= " + altText + " width="+width + " height="+ height +">";
			document.write('<p>'+output+'</p>');

			var paragraph_1 = response.body[2].model.text;
			document.write('<p>'+paragraph_1+'</p>');
			
			var paragraph_2 = response.body[3].model.text;
			document.write('<p>'+paragraph_2+'</p>');;


			var image_2 = response.body[4].model.url
			var altText2 = response.body[4].model.altText
			var height2 = response.body[4].model.height
			var width2 = response.body[4].model.width
			var image2_output = "<img src =" + image_2 + " alt= " + altText2 + " width="+width2 + " height="+ height2 +">";
			document.write('<p>'+image2_output+'</p>');

			var paragraph_3 = response.body[5].model.text;
			document.write('<p>'+paragraph_3+'</p>');
			


			var image_3 = response.body[6].model.url
			var altText3 = response.body[6].model.altText
			var height3 = response.body[6].model.height
			var width3 = response.body[6].model.width
			var image3_output = "<img src =" + image_3 + " alt= " + altText3 + " width="+width3 + " height="+ height3 +">";
			document.write('<p>'+image3_output+'</p>');
			
			var paragraph_4 = response.body[7].model.text;
			document.write('<p>'+paragraph_4+'</p>');

			document.write('<button onclick="location.reload();">BACK BUTTON</button>')
			document.write('<style>h1{color:white;}</style>')
			document.write('<style>body{background-color: #7F0000;color: white;text-align: center;}</style>');

		}
	};
	xhttp.open("GET", "article-2.json", true);
	xhttp.send();
}

function article_3(){

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
	   		var response = JSON.parse(xhttp.responseText);
	   		
	   		var title = response.title;
			document.write('<title>'+title+'</title>');

			var heading = response.body[0].model.text;
			document.write('<h1>'+heading+'</h1>');

			var paragraph_1 = response.body[1].model.text;
			document.write('<p>'+paragraph_1+'</p>');

			var paragraph_2 = response.body[2].model.text;
			document.write('<p>'+paragraph_2+'</p>');

			var paragraph_3 = response.body[3].model.text;
			document.write('<p>'+paragraph_3+'</p>');
			
			var paragraph_4 = response.body[4].model.text;
			document.write('<p>'+paragraph_4+'</p>');

			var paragraph_5 = response.body[5].model.text;
			document.write('<p>'+paragraph_5+'</p>');
			
			var paragraph_6 = response.body[6].model.text;
			document.write('<p>'+paragraph_6+'</p>');

			var paragraph_7 = response.body[7].model.text;
			document.write('<p>'+paragraph_7+'</p>');
			
			var paragraph_8 = response.body[8].model.text;
			document.write('<p>'+paragraph_8+'</p>');

			document.write('<button onclick="location.reload();">BACK BUTTON</button>')
			document.write('<style>h1{color:white;}</style>')
			document.write('<style>body{background-color: #7F0000;color: white;text-align: center;}</style>');
		}
	};
	xhttp.open("GET", "article-3.json", true);
	xhttp.send();
};

function article_4(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
	   		var response = JSON.parse(xhttp.responseText);
	   		
	   		var title = response.title;
			document.write('<title>'+title+'</title>');

			var heading = response.body[0].model.text;
			document.write('<h1>'+heading+'</h1>');
			
			var paragraph_1 = response.body[1].model.text;
			document.write('<p>'+paragraph_1+'</p>');

			var list = response.body[2].model.items[0]
			document.write('<li>'+list+'</li>');



			var paragraph_2 = response.body[3].model.text
			document.write('<p>'+paragraph_2+'</p>');

			var list_2 = response.body[4].model.items[0]
			document.write('<li>'+list_2+'</li>');
			//Only one of the list bullet points

			var paragraph_3 = response.body[5].model.text
			document.write('<p>'+paragraph_3+'</p>');


			document.write('<button onclick="location.reload();">BACK BUTTON</button>')
			document.write('<style>h1{color:white;text-decoration: underline;text-transform: capitalize;}</style>')

			document.write('<style>body{background-color: #7F0000;color: white;text-align: center;}</style>');
		}
	};
	xhttp.open("GET", "article-4.json", true);
	xhttp.send();
};

function article_5(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
	   		var response = JSON.parse(xhttp.responseText);
	   		
	   		var title = response.title;
			document.write('<title>'+title+'</title>');

			var heading = response.body[0].model.text;
			document.write('<h1>'+heading+'</h1>');
			
			var image = response.body[1].model.url
			var altText = response.body[1].model.altText
			var height = response.body[1].model.height
			var width = response.body[1].model.width
			var output = "<img src =" + image + " alt= " + altText + " width="+width + " height="+ height +">";
			document.write('<p>'+output+'</p>');

			var image_2 = response.body[2].model.url
			var altText2 = response.body[2].model.altText
			var height2 = response.body[2].model.height
			var width2 = response.body[2].model.width
			var image2_output = "<img src =" + image_2 + " alt= " + altText2 + " width="+width2 + " height="+ height2 +">";
			document.write('<p>'+image2_output+'</p>');

			var paragraph_1 = response.body[3].model.text;
			document.write('<p>'+paragraph_1+'</p>');
			



			document.write('<button onclick="location.reload();">BACK BUTTON</button>')
			document.write('<style>h1{color:white;text-decoration: underline;text-transform: capitalize;}</style>')
			document.write('<style>li{color:black;}</style>')
			document.write('<style>body{background-color: #7F0000;color: white;text-align: center;}</style>');
		}
	};
	xhttp.open("GET", "article-5.json", true);
	xhttp.send();
};