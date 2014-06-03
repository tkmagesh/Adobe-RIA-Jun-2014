define([], function(){

	return function Task(defaults){
		var modelState = defaults || {name : '', isCompleted : false};
		this.set = function(attrName,value){
			modelState[attrName] = value;
			this.triggerChange(attrName);
		};
		this.get = function(attrName){
			return modelState[attrName];
		};

		var changeSubscribers = {};
		this.addChangeSubscriber = function(attrName, callback){
			changeSubscribers[attrName] = changeSubscribers[attrName] || [];
			changeSubscribers[attrName].push(callback);
		};
		this.triggerChange = function(attrName){
			var subscribers = changeSubscribers[attrName] || [];
			var that = this;
			subscribers.forEach(function(callback){
				callback.call(that);
			});
		};
		this.toggleCompletion = function(){
			this.set('isCompleted', !this.get('isCompleted'));
		}
		this.remove = function(){
			this.triggerChange('remove');
		}
	}
});