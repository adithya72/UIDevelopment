/*This native Javascript Xhttp based function, that will accept stockname and it will display the stockinfomraiton
  Parm: stockname 
  return JSON Stock object*/
function GetStocksData_xHttp(stockname) {
    var stockAPI = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" + stockname + "&interval=5min&apikey=0JCYJ2YYBI90E8W9";
    //Construct a xhttp object
    var xhttp = new XMLHttpRequest();
    //now calling onreadystatechange, this will be called when http response is available
    xhttp.onreadystatechange = function () {
        //this condition will verify if the call response is succesful 
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            //the incoming object is a JSON object but it will be in the form of text, so we need to convert that in to a json object.
            var stockinfomraiton = JSON.parse(xhttp.responseText);
        }
    }
    xhttp.open('GET', stockAPI, true);
    xhttp.send();
}
//GetStocksData_xHttp("MSFT");


//Jquery way of doing the same thing
$(document).ready(function(){
    //this will fire on document is ready
    var stockname = "MSFT";
    var stockAPI = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" + stockname + "&interval=5min&apikey=0JCYJ2YYBI90E8W9";

    //Now you need to make an ajax call from Jquery to get the data form the api
    $.ajax({url: stockAPI, success: function(result){
            /*lets loop through the data
            for(i=0;i<Object.keys(result).length;i++)
            {
                console.log(Object.keys(result)[i])
            }
            array.forEach(function(result, index, arr){
                conosole.log(arr)
            })*/
            //Jquery For each
            var table = $("#tblStocks");
            $.each(result,function(key,value){
                //Add a row
                $.each(value,function(inKey,invalue){
                    //Add a cell
                    console.log(inKey);
                    console.log(invalue)
                })
                
            })
        }
    })
})
