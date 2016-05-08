var expect = require('chai').expect;

var room = require('../lib/room');

suite("room.js", function() {

	test("Hello World", function() {
		expect( room(['Hello World']) ).to.deep.equal([]);
	});
	test("not exist", function() {
		expect(   room( {room:[39]} , {'38': 'Lounge'}) ).to.deep.equal([]);
	});
	test("wrong name", function() {
		expect(   room( {rooom:[38]} , {'38': 'Lounge'}) ).to.deep.equal([]);
	});
	test("real value", function() {
		expect(   room( {room:[38]} , {'38': 'Lounge'}) ).to.deep.equal(['Lounge']);
	});
	test("real value2", function() {
		expect(   room( {room:[38,39]} , {"40":"Testroom","38":"Lounge","39":"Lager","41":"LoungeTest"}) ).to.deep.equal(['Lounge','Lager']);
	});

});
