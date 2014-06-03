define(['Task'], function(Task){
	return function TaskCollection(){
		var list = [];
		this.add = function(taskName){
			var task = new Task({name : taskName, isCompleted : false});
			list.push(task);
			this.triggerChange('add',task);
			return task;
		};
		this.removeCompleted = function(){
			for(var i=list.length-1;i>=0;i--){
				var task = list[i];
				if (task.get('isCompleted')){
					list.splice(i,1);
					task.remove();
				}
			}
		}
		this.length = function(){
			return list.length;
		};
		
		var changeSubscribers = {};
		this.addChangeSubscriber = function(attrName, callback){
			changeSubscribers[attrName] = changeSubscribers[attrName] || [];
			changeSubscribers[attrName].push(callback);
		};
		this.triggerChange = function(attrName){
			var subscribers = changeSubscribers[attrName] || [];
			var args = Array.prototype.slice.call(arguments,1);
			var that = this;
			subscribers.forEach(function(callback){
				callback.apply(that,args);
			});
		};
	}
});