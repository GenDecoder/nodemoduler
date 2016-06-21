module.exports = {
	alias: 'userService',

	models: [
		'User'
	],

	createUser: function(user) {
		var me = this;
		var newUser = me.userModel(user);

		console.log(user);

		return newUser.save();		
	},

	getList: function() {
		var me = this;

		return me.userModel.findAll().then(function(list) {
			// This is a sample operation, but the goal of using services is to
			// manage and prepare the data, in order to return it to the resource 
			return list.concat([1, 2, 3]); 
		});
	}

};