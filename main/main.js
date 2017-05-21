module.exports = function main(email, suffixes) {
  // Write your code here
    var e=email;
  var s=suffixes[0];
  if(e.indexOf(s)>=0)
    return true;
  else  
return false;
};
