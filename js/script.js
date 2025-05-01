// Copyright (c) 2025 BrandonBCode All rights reserved
//
// Created by: BrandonBCode
// Created on: March 2025
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates the celsius from fahrenheit
 */
function intakeAge() {
    // input that takes the fahrenheit from the user and converts it.
    let userAge = parseInt(document.getElementById("userAge").value);
    let display = "";

    if (userAge >= 17){
        display = "You can see a Rated R Movie Alone!"
    }
    else if (userAge >= 13) {
        display = "You can see a PG-13 movie alone!"
    } else if (userAge >= 5) {
        display = "You can see a G or PG movie alone!"
    } else {
        display = "You're too young for most movies unfortunately"
    }

  // output that displays the celsius
    document.getElementById("outputAge").innerHTML = display;

}