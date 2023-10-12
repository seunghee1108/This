function a (callback) {
  return callback();
}

console.log(a(function(){
  // 저기요~
  console.log(this) ;
  console.log("------------------");
  // 직접적으로 식별
  console.log(global);
}))
