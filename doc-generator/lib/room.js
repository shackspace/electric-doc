var roomname = function(stk, list) {
	var retval = [];	
	if (stk.hasOwnProperty("room"))	{
		for(var i=0;i<stk.room.length;i++){
			if(stk.room[i] in list) {
				retval.push( list[ stk.room[i] ] )
			}
		}
	}
	return retval;
};
module.exports = roomname;
