var dealData = function (data) {
  var finalData = data;
  if(data && data.error && !data.error.error_id){
    finalData = data.data;
  }else{
    finalData = data.error.error_str;
  }
  return finalData;
}
