function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  
}

function logShout(string) {
  
}

function sayHiToGrandma(string) {
  var lowercase = string.toLowerCase()
  var uppercase = string.toUpperCase()
  if (string === lowercase) {
    return "I can\'t hear you!"
  } 
  else if (string === uppercase) {
    return "YES INDEED!"
  }
  else {
    return "I love you, too."
  }
  
}