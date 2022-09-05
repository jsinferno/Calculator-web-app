$("document").ready(() => {

    let calculations = [""]
    let indexOfCalc = 1
    let reset = false

    $(".number").on("click", addtototal)
    
    function addtototal() {
        console.log()
        let adder = $(this).html()
        const header = $("#total")
        if (reset) {
            if ($(this).attr("class").split(" ").includes("oper")) {
                header.html(header.html()+adder)
                reset=false
                return
            }
            header.html(adder)
            reset = false
        }else{
            header.html(header.html()+adder)
        }
    }

    $(".equals").on("click", makeequals)

    function makeequals() {

        let tester = $("#total").html().split("")
    
        for (let index = 0; index < tester.length; index++) {
            if (tester[index] == "×") {
                tester[index] = "*"
            }else if (tester[index] == "÷") {
                tester[index] = "/"
            };
        }
        
        try {
            $("#total").html(eval(tester.join("")))
            calculations.push(tester.join("")) 
            
        } catch (error){
            $("#total").html("")
        }
        indexOfCalc = calculations.length
        reset = true
    }

    $(".space").click(() => {
        $("#total").html("")
        indexOfCalc = calculations.length
    })

    $(".arrow").on("click", scroll)

    function scroll() {
        const header = $("#total")
        const id = $(this).attr("id")
        if (id == "left" && indexOfCalc>0){
            indexOfCalc--
            header.html(calculations[indexOfCalc])
        } else if (id == "right" && indexOfCalc<calculations.length-1){
            indexOfCalc++
            header.html(calculations[indexOfCalc])
        } else if (id == "right" && indexOfCalc==calculations.length-1){
            indexOfCalc++
            header.html(eval(calculations[calculations.length-1].toString()))
        }
    }

    
})
