var wkhtmltopdf = require('node-wkhtmltopdf');
var Handlebars = require('handlebars');
var json_data = require('./data/data.json');
var fs = require('fs');
var parse = require('csv-parse/lib/sync');

var content = fs.readFileSync('./data/powersocket.csv').toString();

var input = content.toString();
var records = parse(input, {columns: true, trim:true});

var source = fs.readFileSync('./template.hbs').toString();

var template = Handlebars.compile(source);
var data = [];

for(var i=0;i<json_data.huv_left.length;i++){
	var obj = json_data.huv_left[i];

	var roomlist = [];
	if(obj.room) {
		roomlist.push(obj.room);
	}
	var desclist = [];
	if(obj.name) desclist.push(obj.name);

	if (obj.hasOwnProperty("stk"))
	{
		obj.stk2 = [];
		for(var j=0;j<obj.stk.length;j++){
			obj.stk2.push(json_data.stk[obj.stk[j]]);
		}
	}

	if (obj.hasOwnProperty("stk2") && obj.stk2.length)
	{
		obj.stk2.sort();	

		for(var j=0;j<obj.stk2.length;j++){
			if(obj.stk2[j].hasOwnProperty("loc"))	
				roomlist.push(obj.stk2[j].loc);

			var roomnamearr = require('./lib/room')
			roomlist = roomlist.concat(roomnamearr(obj.stk2[j],json_data.room));

			if(obj.stk2[j].hasOwnProperty("desc"))	
				desclist.push(obj.stk2[j].desc);
		}
		var cleanup = require('./lib/cleanup')
		obj.room = cleanup(roomlist).join(', ');
		obj.name = cleanup(desclist).join();
	}

	if(!obj.room) obj.room = "-";
	if(!obj.name) obj.name = "-";

//	console.log(obj);
	data.push(obj);
}

var result = template({stk: json_data, path: __dirname,huv_left:data});

wkhtmltopdf(null, result, 'export.pdf');
