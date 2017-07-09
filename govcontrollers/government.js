/*
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


/*****************************************************

7R1B3 Rest API - Sample Budget & Finance Payload

******************************************************/



exports.budget = function(req,res) {
	res.send([
 {
    "id": 1,
    "name": "7R1B3 General Fund",
    "revenue": "1,804,255",
    "expenses": "1,098,562"
 },

{
    "id": 2,
    "name": "7R1B3 Capitalization Life",
    "buildings": "50",
    "passenger vehicles": "5",
    "firefighting apparatus": "20",
    "fences, walls, trails": "20",
    "parks & playgrounds": "20",
    "golf course improvements": "15",
    "swimming pools": "15",
    "underground fuel tanks": "15",
    "curbs & sidewalks": "25",
    "parking lots": "25",
    "streets primary": "17",
    "streets secondary": "25",
    "sewers": "50",
    "signals and signs": "25"
},
{
    "id": 3,
    "name": "7R1B3 Assigned Revenue",
    "encumbrances": "51,600",
    "police purposes": "204,255",
    "fire department purposes": "149,178",
    "council chambers": "25,353",
    "parkland and trees": "137,780",
    "recreation": "109,166",
    "tax challenges": "14,264",
    "subsequent period budget": "46,829",
    "memorials": "49,540"
 }



]);
};


/*****************************************************

7R1B3 Rest API - Sample Sensor Data Payload

******************************************************/


exports.sensors = function(req,res) {
	res.send([
{
    "sentorid": "3B9AC9FF",
    "type": "temperature",
    "grid location": "1869F,17DF1",
    "value": "25.6"
},

{
    "sentorid": "469CC6FE",
    "type": "waste receptacle",
    "grid location": "1669E,27CF1",
    "value percent": "25"
},



]);
};



/*****************************************************

7R1B3 Rest API - Police Drone Status Payload

******************************************************/


exports.drones = function(req,res) {
	res.send([
{
    "droneid": "A9F",
    "battery voltage": "4.2",
    "battery current": "1.3",
    "velocity": "16",
    "pitch ": "5",
    "roll ": "9",
    "yaw ": "87",
    "status ": "armed",
    "GPS": "5",
    "mode ": "recon",
    "error status ": "none",
    "grid location": "4539A,22BE1"
}


]);
};
