// Created by Vaughn Hatherall
// Created On October 5
// It purpose is to calculate the area and perimeter of a trapezoid
game.splash("We are going to Calculate the area and perimeter of a trapezoid")
let Width = game.askForNumber("Please Enter Width")
let Length = game.askForNumber("Please Enter Length")
let Height = game.askForNumber("Please Enter Height")
let Area_Part_1 = Width + Length
let Area_Part_2 = Area_Part_1 * Height
let Area_Total = Area_Part_2 / 2
game.splash("The Area is", convertToText(Area_Total))
