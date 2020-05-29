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
  newobject=Object.assign({}, object, {key});
  delete newobject[key];
  return newobject;
}//function updateObjectWithKeyAndValue