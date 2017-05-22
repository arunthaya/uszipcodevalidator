
var express = require('express');
var app = express();
var bst = new BinarySearchTree();
var bodyParser = require('body-parser');
var fs = require('fs'),
readline = require('readline');

var rd = readline.createInterface({
	input: fs.createReadStream('./files/postalcode.txt')
});

var counter = 0;

app.use(function(req,res,next){
	console.log(req.method+" request for "+req.url);
	next();
});


rd.on('line', function(line) {
	counter++;
	var temp = parseInt(line);
	bst.push(temp);
});

rd.on('close', function() {
	console.log("There are "+counter+ " valid zip codes read from the file.");
	app.listen(8080, function() {
		console.log("Server listening on port 8080");
	});
	//var temper = 48890;
	//bst.contains(temper);
});

function Node(val){
	this.value = val;
	this.left = null;
	this.right = null;
}

function BinarySearchTree(){
this.root = null;
}

BinarySearchTree.prototype.push = function(val){
	var root = this.root;
	if(!root){
		this.root = new Node(val);
		return;
	}
	var currentNode = root;
	var newNode = new Node(val);
	while(currentNode){
		if(val < currentNode.value){
			if(!currentNode.left){
				currentNode.left = newNode;
				break;
			}else{
				currentNode = currentNode.left;
			}
		}	
		else{
			if(!currentNode.right){
				currentNode.right = newNode;
				break;
			}else{
				currentNode = currentNode.right;
			}
		}	
	}
}

BinarySearchTree.prototype.contains = function(value) {

	var current = this.root;

	while (current.value != value) {
		if( value < current.value) {
			current = current.left;
		} else {
			current = current.right;
		}
		if (current == null) {
			console.log("no");
			return false;
		}	
	}

	console.log("yes");
	return true;

};

app.use("/validate", bodyParser.urlencoded({extended:false}));
app.post("/validate", function(req, res){
	var temperorary1 = parseInt(req.body.code);
	var temp2 = bst.contains(temperorary1);
	var response = {answer: false};
	if (temp2) {
		response.answer = true;
		res.status(200).send(response);
	} else {
		res.status(200).send(response);
	}
});

app.use(express.static("./public"));

