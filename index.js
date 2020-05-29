function updateObjectWithKeyAndValue(object, key, value){
  //object[key]=value;
  //Object.assign({}, object, { key: [value] });
  new newobject=Object.assign({}, object);

  //object.key=[value];
  return newobject;
}
//function updateObjectWithKeyAndValue