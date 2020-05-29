function updateObjectWithKeyAndValue(object, key, value){
  object[key]=value;
  //Object.assign({}, object, { key: [value] });
  object=Object.assign({}, object);

  //object.key=[value];
  return object;
}
//function updateObjectWithKeyAndValue