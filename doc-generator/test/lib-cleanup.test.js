var expect = require('chai').expect;

var cleanup = require('../lib/cleanup');

suite("cleanup.js", function() {

	test("Hello World", function() {
		expect( cleanup(['Hello World']) ).to.deep.equal(['Hello World']);
	});
	test("nothing", function() {
		expect( cleanup([]) ).to.deep.equal([]);
	});
	test("real value", function() {
		expect( cleanup([ 'Seminarraum', 'Seminarraum', 'Serverraum' ]) ).to.deep.equal([ 'Seminarraum', 'Serverraum' ]);
	});

});
