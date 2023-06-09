function shout(string){
    return string.toUpperCase()
}

function whisper(string){
    return string.toLowerCase()
}

function logShout(string){
    console.log(string.toUpperCase())
}

function logWhisper(string){
    console.log(string.toLowerCase())
}

function sayHiToHeadphonedRoommate(string){
    if(string===string.toLowerCase){
        const response="I can't hear you!" 
        console.log(response)
        return response
        
    }else if(string===string.toUpperCase){
        const response="YES INDEED!"
        console.log(response)
        return response
        
    }else if(string==="Let's have dinner together!"){
        return "I would love to!"
        
    }
}