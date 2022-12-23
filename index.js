const makePromiseWithConstructor=(itShouldResolve)=>{
			 const promise=new Promise((resolve,reject)=>{
			 	if(itShouldResolve==3){
					
					resolve("Truthy");
				}
			 	
			 	else if(itShouldResolve=="boo!"){
			 		
					reject("Falsy");

			 	}
				});
			 return promise;
		}


 makePromiseWithConstructor(3)
		 .then((value)=>{
			console.log(value);
		})
		 .catch((error)=>{
			console.log(error);
		});

function simulate(value,delays) {
return new Promise((resolve,reject)=>{
setTimeout(()=>{
resolve(`promise is resolved, value is = ${value}`)
},delays)
})
}
simulate(50,5000)
.then((res)=> console.log(res));


  
