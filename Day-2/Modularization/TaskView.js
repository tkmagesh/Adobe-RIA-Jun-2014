define(['jquery'], function($){
	return function TaskView(model){
		this.task = model;
		var $root = this.$root = $("<li></li>");

		this.initialize = function(){
			/*Respond to UI events*/
			this.$root.on("click",function(){
				model.toggleCompletion();
			});

			/*Respond to Model Changes*/
			model.addChangeSubscriber('isCompleted', function(){
				if (model.get('isCompleted')){
					$root.addClass("completed");
				} else {
					$root.removeClass("completed");
				}
			});

			model.addChangeSubscriber('remove', function(){
				$root.remove();
			});

		};

		this.render = function(){
			this.$root.text(model.get('name'));
			if (model.get('isCompleted')){
				$root.addClass("completed");
			} else {
				$root.removeClass("completed");
			}
			return this;
		};
	}
});