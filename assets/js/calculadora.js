$(document).ready(function () {
    var N = new Array();
    var Nt = "0";


    //Limpiar pantalla con clear
    $("#btn_c").click(function () {
        $("#opr").text("")
        $("#tResult").val("")

    })

    //asignar valores a botones
    $("#btn_9").click( () => {
        seleccionNum("9", "9")
    });

    $("#btn_8").click( () => {
        seleccionNum("8", "8")
    });

    $("#btn_7").click( () => {
        seleccionNum("7", "7")
    });

    $("#btn_6").click( () => {
        seleccionNum("6", "6")
    });

    $("#btn_5").click( () => {
        seleccionNum("5", "5")
    });

    $("#btn_4").click( () => {
        seleccionNum("4", "4")
    });

    $("#btn_3").click( () => {
        seleccionNum("3", "3")
    });

    $("#btn_2").click( () => {
        seleccionNum("2", "2")
    });

    $("#btn_1").click( () => {
        seleccionNum("1", "1")
    });

    $("#btn_0").click( () => {
        seleccionNum("0", "0")
    });

    //asignar operaciones

    $("#btn_sum").click(function () {
        $("#opr").text($("#opr").text() + "+")
        N.push(Nt);
        Nt = "0"
        N.push("+")

    });

    $("#btn_rest").click(function () {
        $("#opr").text($("#opr").text() + "-")
        N.push(Nt);
        Nt = "0"
        N.push("-")

    });

    $("#btn_mul").click(function () {
        $("#opr").text($("#opr").text() + "*")
        N.push(Nt);
        Nt = "0"
        N.push("*")

    });

    $("#btn_div").click(function () {
        $("#opr").text($("#opr").text() + "/")
        N.push(Nt);
        Nt = "0"
        N.push("/")

    });

    $("#btn_ig").click(function () {
        N.push(Nt);
        Calc(N)
        Nt = null

    });

    //Mostrar en input la operacion

    function seleccionNum(n, num) {
        $("#opr").text($("#opr").text() + num)
        if (Nt == "0") {
            Nt = n
        }
        else {
            Nt += n
        }
    }

    //funcion calc para realizar las operaciones

    function Calc(v) {
        try {
            var r = eval(v.toString().replace(/[,null]/gi, ""));

            if ((isNaN(r)) || (!isFinite(r))) {

                $.notify("error en la entrada");
            }
            else {

                $("#tResult").val(r)
            }
        }

        catch (err) {

            $.notify("error en la entrada");
        }

    }

})

