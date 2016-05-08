// Require chai.js expect module for assertions
var expect = require('chai').expect;

var socket_list = require('../lib/socket_list');

// Create a new test suite for our Bank Account
suite("socket list", function() {

    // Define a pending test
	test("nothing", function() {
		expect( socket_list([]) ).to.deep.equal([]);
	});
	test("should work 1", function() {
		expect( socket_list([ '9.3', '9.4', '9.5' ]) ).to.deep.equal(['9.3-9.5']);
	});
	test("should work 2", function() {
		expect( socket_list([ '9.3', '9.4', '9.3', '9.3' ]) ).to.deep.equal(['9.3-9.4']);
	});
	test("should work 3", function() {
		expect( socket_list([ '9.3', '9.4', '9.6' ]) ).to.deep.equal(['9.3-9.4','9.6']);
	});
	test("should work 4", function() {
		expect( socket_list([ '9.3' ]) ).to.deep.equal(['9.3']);
	});
	test("should work 5", function() {
		expect( socket_list([ '5.23','5.16','5.17','5.18','5.22','8.3','8.4','8.5','8.13','8.15','8.16','8.17' ]) )
			.to.deep.equal(['5.16-5.18','5.22-5.23','8.3-8.5','8.13','8.15-8.17']);
	});

});
