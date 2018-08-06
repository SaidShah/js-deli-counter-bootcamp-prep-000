
  var katzDeli=[]



function takeANumber(line){
  var counter =0;
  counter++
  line.push(counter)
  return `Welcome! You're ticket number #${counter}`
}

takeANumber(line) // "Welcome! You're ticket number #1" [1]
takeANumber(line) // "Welcome! You're ticket number #2" [1, 2]

nowServing(line) // "Currently serving #1." [2]
nowServing(line) // "Currenlty serving #2." []

takeANumber(line) // "Welcome! You're ticket number #3" [3]


  
function takeANumber(line, name){


  line.push(name)
return "Welcome, "+name+". You are number "+ line.length +" in line."
}


function nowServing(line){
  if(line.length<1){
   return "There is nobody waiting to be served!"
  }else{
    var name = line.shift()
    return "Currently serving "+name+"."
  }
}

function currentLine(line){
  var newDeliLine=[]
  if((line===undefined)||(line.length<1)){
    return "The line is currently empty."
  }else{
    for(let i =0;i<line.length;i++){
   newDeliLine.push((i+1)+". "+line[i])
    }
    return "The line is currently: "+newDeliLine.join(", ")
  }
  
}

