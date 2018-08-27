
function isItemInObjArr(item, objArr) {
	for(var i=0; i<objArr.length; i++) {
		var obj = objArr[i];
		// 0 key, 1 value
		var key = obj[0];	
		if(item == key) {
			return obj;
		} else {
			continue;	
		}
	}

	return false;
}

function pushItem(item, value, objArr) {
	var obj = [item, value];
	objArr.push(obj);
}

function countRemove(objArr) {
	var count = 0;
	for(var i=0; i<objArr.length; i++) {
		if(i == 0) {
			continue;
		}

		var obj = objArr[i];
		count = count + obj[1];	
	}

	return count;
}


function equalizeArray(arr) {
	var objArr = []; 
	for(var i=0; i<arr.length; i++) {
		var item = arr[i];
		var obj;
		if( (obj = isItemInObjArr(item, objArr)) !== false ) {
			obj[1] += 1;	
		} else {
			pushItem(item, 1, objArr);	
		}
	}	

	objArr.sort(function(a, b) {
    return b[1] - a[1];
	});

	// Count remove item
	return countRemove(objArr);
}

var arr = [ 3, 3, 2, 1, 3 ];
//var arr = [2, 1, 3, 3, 3]
var out = equalizeArray(arr);
console.log(out);

