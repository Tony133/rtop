/**
 * 
 * Process monitor sensor
 *
 * (c) 2014 James Hall
 */

var os = require('os-utils');

var plugin = {
	/**
	 * This appears in the title of the graph
	 */
	title: 'Process List',
	/**
	 * The type of sensor
	 * @type {String}
	 */
	type: 'table',
	/**
	 * The default interval time in ms that this plugin should be polled.
	 * More costly benchmarks should be polled less frequently.
	 */
	interval: 100,

	columns: ['Name', 'Count', 'CPU', 'Memory'],
	currentValue: [{
		'Name': 'Google Chrome',
		'Count': '4',
		'CPU': '0.4%',
		'Memory': '10%'
	}],


	/**
	 * Grab the current value for the table
	 */
	poll: function() {
		// 
	}
};

module.exports = exports = plugin;