function updateObjectWithKeyAndValue(object, key, value){
  object[key]=value;
  //Object.assign({}, object, { key: [value] });
  var newobject=Object.assign({}, object, {key:[value]});

  //object.key=[value];
  return newobject;
}
//function updateObjectWithKeyAndValue