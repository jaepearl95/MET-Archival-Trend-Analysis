
let deptObjs = "https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=8";

// alert box 

document.getElementById("alert").addEventListener("click",
	function (){
		alert("I was clicked");
	});


// fetch MET departments

document.getElementById("departments").addEventListener("click", getDepartment);
function getDepartment() {
	let url = "https://collectionapi.metmuseum.org/public/collection/v1/departments";
	fetch(url)
	.then(function(response){
		return response.json();
	})
	.then(function(resp) {
		console.log(JSON.stringify(resp));
		document.getElementById("output").innerHTML = JSON.stringify(resp.activity);
	})
	.catch(function(error){
		document.getElementById("output").innerHTML = "There was an error" + error;
    });
}

// fetch Costume Instutitute

document.getElementById("costume").addEventListener("click", getCostume);
function getCostume() {
	let url = "https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=8&q=cat";
	fetch(url)
	.then(function(response){
		return response.json();
	})
	.then(function(resp) {
        // console.log(JSON.stringify(resp));
        console.log((resp));
		// document.getElementById("output").innerHTML = JSON.stringify(resp.activity);
	})
	// .catch(function(error){
	// 	document.getElementById("output").innerHTML = "There was an error" + error;
    // });
}


// fetch Costume Objects

document.getElementById("objects").addEventListener("click", getObject);
function getObject() {
	
	fetch(deptObjs)
	.then(function(response){
		return response.json();
	})
	.then(function(resp) {
        console.log((resp))
		// console.log(JSON.stringify(resp));
		// document.getElementById("output").innerHTML = JSON.stringify(resp.activity);
	})
	// .catch(function(error){
	// 	document.getElementById("output").innerHTML = "There was an error" + error;
    // });
}

document.getElementById("dept-objs").addEventListener("click", getImages);
    function getImages() {

        fetch(deptObjs)
        .then(function(response){
            return response.json();
        })
        .then(function(resp){
            console.log((deptObjs))
            
        })

    }