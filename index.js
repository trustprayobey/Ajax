console.log('Time to put the xml in ECMAScript')

//What is Ajax?
//Async Js and Xml
//Set of web technologies
//Send and receive data asynchronously
//Does not intefere with the current web page
//JSON has replaced XML for the most part


//xml http request (XHR Object)

//api in the form of an object
//Provided by the browser's js environment
//Methods transfer data between client/server
//Can be used with other protocols than HTTP
//Can work with data other than XML(JSON.plain text)

//Ajax call is made with
//first is using the XHR
//Libraries and other methods used to make calls are
/*
jQuery
Axios
Superagent
FetchAPI(part of the browser)
Prototype
Node HTTP(using node js)
*/


document.getElementById('button').addEventListener('click', loadText)
function loadText(){
    //Creating the xhr object here
    var xhr = new XMLHttpRequest()
    //OPEN type url asyn or not
    xhr.open('GET','sample.txt',true)

    console.log('READYSTATE: ',xhr.readyState)

    //OPTIONAL - Used for loaders
    xhr.onprogress = function(){
        console.log('READYSTATE: ',xhr.readyState)
    }

    // xhr.onload = function(){
    //     console.log('READYSTATE: ',xhr.readyState)
    //     if(xhr.status == 200){
    //         console.log(this.responseText)
    //     }
    //     //Onload has to be ready to  work
    // }

    //Instead of using the onload
    // xhr.onreadystatechange = function(){
    //     //Unlike onload this goes 1234
    //     console.log('READYSTATE: ',xhr.readyState)
    //     if(this.readyState == 4 && this.status == 200){
    //         console.log(this.responseText)
    //     }
    // }

    //ready state values are:
    //0 - request not intialized
    //1 - server connection established
    //2 - request received
    //3 - processing request
    //4 - request finished and response is ready


    //sends request
    xhr.send()

    //HTTP Statuses
    //200 means okay
    //404 means not found
    //403 means forbidden
    
}