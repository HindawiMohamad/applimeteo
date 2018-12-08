/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
    


    var onSuccess = function(position) {
       /* alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');*/

              var lat = position.coords.latitude;
              var lng = position.coords.longitude;


$.ajax({ //ajax weather recuperer donnees avec coord gps
                type: "GET",
                dataType: "json",
                url: "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lng+"&appid=c6f7c305685d791568deb77d851e9c3b&lang=fr",
                
                success: function(data) {


                    var city_name = data.name;
                    var general = data.weather[0].main;
                    var description = data.weather[0].description;
                    var icon = data.weather[0].icon;
                    var celsiusmin = Math.round(data.main.temp_min - 273.15);
                    var celsiusmax = Math.round(data.main.temp_max - 273.15);

                  console.log(city_name);


                  //on concatene la div en une variable
                    var weather_now = city_name+'<br>';
                    weather_now += '<img src="http://openweathermap.org/img/w/'+icon+'.png"><br>';
                    weather_now += description +'<br>';
                    weather_now += 'Temp min: '+ celsiusmin + '<br>';
                    weather_now += 'Temp max: '+ celsiusmax + '<br>';

        
        
                

                    //$("#meteo").html(weather_now);
                    $("#nom_ville").html('<p class="align-center test">'+city_name+'</p>');
                    $("#icone").html('<img src="img/'+icon+'.png">');
                    $("#description").html(description);
                    $("#temp_min").html('Minima : '+celsiusmin+'°C');
                    $("#temp_max").html('Maxima : '+celsiusmax+'°C');
        
        
                                  
         }, // success
                          
     }); ///END AJAX WEATHER////



    }; // on success recup geoloc

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);







$("#go").click(function(){
            
            var inputville = $("#inputville").val();
            
             
                    $.ajax({ //ajax weather recuperer donnees avec coord gps
                type: "GET",
                dataType: "json",
                url: "http://api.openweathermap.org/data/2.5/weather?q="+inputville+"&appid=c6f7c305685d791568deb77d851e9c3b&lang=fr",
                
                success: function(data) {


                    var city_name = data.name;
                    var general = data.weather[0].main;
                    var description = data.weather[0].description;
                    var icon = data.weather[0].icon;
                    var celsiusmin = Math.round(data.main.temp_min - 273.15);
                    var celsiusmax = Math.round(data.main.temp_max - 273.15);

                  console.log(city_name);


                  //on concatene la div en une variable
                    
        
        
                
                    $("#nom_ville2").html('<p class="align-center test">'+city_name+'</p>');
                    $("#icone2").html('<img src="img/'+icon+'.png">');
                    $("#description2").html(description);
                    $("#temp_min2").html('Minima : '+celsiusmin+'°C');
                    $("#temp_max2").html('Maxima : '+celsiusmax+'°C');
                                  
        
        
                                  
         }, // success
                          
     }); ///END AJAX WEATHER////
            
            
        }); // CLICK FONCTION









        }, // device ready

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();