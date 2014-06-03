function isPrime(n){
	var cache = {0 : false, 1 : false, 2 : true, 3 : true};
	isPrime = function (n){
		if (typeof cache[n] !== "undefined"){
			console.log("From cache... result = ", cache[n]);
			return;
		}
		cache[n] = true;
		for(var i=2;i<=(n/2);i++)
			if (n % i === 0){
				cache[n] = false;
				break;
			}
		console.log("Freshly brewed... result = ", cache[n]);
	}
	isPrime(n);
}

function isPrime(n){
	var cache = isPrime.cache || {0 : false, 1 : false, 2 : true, 3 : true};
	if (typeof cache[n] !== "undefined"){
		console.log("From cache... result = ", cache[n]);
		return;
	}
	cache[n] = true;
	for(var i=2;i<=(n/2);i++)
		if (n % i === 0){
			cache[n] = false;
			break;
		}
	console.log("Freshly brewed... result = ", cache[n]);
	isPrime.cache = cache;
}
	


var products = [
	{id :1, name :"pen", cost :10, units :5},
	{id :5, name :"den", cost :50, units :8},
	{id :8, name :"hen", cost :30, units :3},
	{id :3, name :"len", cost :70, units :9},
	{id :9, name :"zen", cost :40, units :1},
	{id :2, name :"ken", cost :20, units :7}
]