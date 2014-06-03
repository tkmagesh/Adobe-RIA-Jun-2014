var pubsub = (function(){
	var subscribers = {};
	var subscribe = function(eventName, callback){
		subscribers[eventName] = subscribers[eventName] || [];
		subscribers[eventName].push(callback);
	};
	var publish = function(eventName){
		var subscriptions = subscribers[eventName] || [];
		for(var i=0;i<subscriptions.length;i++){
			setTimeout(subscriptions[i]);
		}
	}
    return { 
        subscribe : subscribe,
        publish : publish
    }
})();

function f1(eventData){
	console.log("callback f1 invoked with data ", eventData);
}

function f2(eventData){
	throw new Error("intentional Error");
}

function f3(eventData){
	console.log("callback f3 invoked with data ", eventData);
}
pubsub.subscribe("dummyEvent",f1);
pubsub.subscribe("dummyEvent",f2);
pubsub.subscribe("dummyEvent",f3);

pubsub.publish("dummyEvent","dummyData")