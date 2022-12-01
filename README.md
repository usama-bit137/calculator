# calculator
## Introduction

This is the final keystone project for the Odin Foundations course. The purpose is to create a calculator user-interface with clickable buttons which displays the calculation. It is modelled after the CASIO fx-991EX CLASSWIZZ, though to avoid copyright infringement, it is named TESSIO after the most evocative and simultaneously forgettable character in The Godfather series.

This app uses the object `calculation` to construct a calculation based on keys pressed. The object is predefined with keys `a`, `b`, and `operation`. We delineate between operational keys such as `*/-+` by using an `if (statement)` which can be seen in the line: 

` if (list[i].textContent == '*' || list[i] == '/' || list[i]=='+' || list[i]=='-'){


                    let operation = list[i].textContent;
    
    
                    calculation.operation = list[i].textContent;


};`

This code block says that if the key pressed has one of the characters in `*/-+`, then the `textContent` of this item should occupy the `operation` key value in `calculations`.   