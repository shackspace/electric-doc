var cleanup = function(list) {
	var retval = [];	

	if(!list) {
		return retval;
	}
	for(var i=0;i<list.length;i++){
		var found = false;
		for(var j=0;j<retval.length;j++){
			if (retval[j] == list[i])
				found = true;
		}
		if (found == false)
			retval.push( list[i] );
	}

	return retval;
};
module.exports = cleanup;
