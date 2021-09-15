(function(){
    var myNode = document.createElement("div")
    document.getElementById("digitalClock").appendChild(myNode)
    setInterval(updateTime, 1000)
    function updateTime(){
        var myDate = new Date()
        myNode.innerHTML = myDate.toTimeString().substr(0, 8)
        var mySeconds = myDate.getSeconds()
        var rotSeconds = (mySeconds * 6) - 90
        document.getElementById('secondHand').style.transform = 
'rotate('+rotSeconds+'deg)'
var myMinutes = myDate.getMinutes()
var rotMinutes = (myMinutes * 6) -90
document.getElementById('minHand').style.transform = 'rotate('+rotMinutes+'deg)'
        var myHours = myDate.getHours()
        myHours = myHours + (myMinutes/60)
        var rotHours = (myHours * 30) -90
        document.getElementById('hrHand').style.transform = 'rotate('+rotHours+'deg)'
         
}
})();