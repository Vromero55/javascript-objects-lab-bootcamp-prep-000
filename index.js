function updateObjectWithKeyAndValue(object, key, value){
  //object[key]=value;
  //Object.assign({}, object, { key: [value] });
  var newobject=Object.assign({}, object, {[key]:value});
  return newobject;
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}
function deleteFromObjectByKey(object, key){
  var clone = Object. assign({}, object); 
  delete object[key];
  return clone;
}//function updateObjectWithKeyAndValue