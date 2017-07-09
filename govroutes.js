/*
MIT LICENCE

 * Copyright 2017 Raemond Station http://7R1B3.org
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
**/


//api/v0001/device/types/typeId/devices/deviceId/events/eventId

module.exports = function(app){

/***************************************************
    Get real-time 7R1B3 government budget and 
    General Ledger status (Tax Revenue & Spending)
****************************************************/

    var government = require('./govcontrollers/government');
    app.get('/7R1B3-government/api-v0001/budget', government.budget);


/***************************************************
    Get real-time 7R1B3 government IoT sensor status

****************************************************/

    var government = require('./govcontrollers/government');
    app.get('/7R1B3-government/api-v0001/sensors', government.sensors);


/***************************************************
	    Get real-time 7R1B3 police drone status

****************************************************/

    var government = require('./govcontrollers/government');
    app.get('/7R1B3-government/api-v0001/drones', government.drones);




/***************************************************
	Update 7R1B3 IoT sensor status

****************************************************/

    //var government = require('./govcontrollers/government');
	 
     /* update here */


/***************************************************
	Update 7R1B3 IoT sensor status

****************************************************/

   //  var government = require('./govcontrollers/government');
    
	/* update here */ 





}