var socket_list = function(list) {
	var retval = [];	
	var workval = {};
	if (list.length)	{
		for(var i=0;i<list.length;i++){
			if(i in list) {
				var ret = list[i].split('.');
				var r = parseInt(ret[0]);
				var n = parseInt(ret[1]);
				if (!workval[r])
					workval[r] = [];
				workval[r].push(n);
			}
		}

		for (var i in workval) {
			val = workval[i];
			val = val.sort((a,b)=>a-b);;			
			var start, end;
			for(var j=0;j<val.length;j++){
				if (j===0) {
					start = end = val[j];
				}
				if ( (end + 1) === val[j]) {
					end = val[j];
				}
				if ( end !== val[j] ) {
					if(start===end)
						retval.push(i + '.' + start);					
					else
						retval.push(i + '.' + start + '-' + i + '.' + end);					
					start = end = val[j];
				}
				if ( (j+1)===val.length) {
					if(start===end)
						retval.push(i + '.' + start);					
					else
						retval.push(i + '.' + start + '-' + i + '.' + end);					
				}
			}
		}
	}
	return retval;
};
module.exports = socket_list;
