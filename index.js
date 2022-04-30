$(document).ready(function () {

    // Experince Box working
    $(".experience").hover(function () {

        // Hover IN
        if ($('.AboutWrapper').find(".BoxWrapper").hasClass("active")) {

            if ($(this).hasClass("active")) {
                console.log("Do Nothing here");
            }
            else {

                $('.BoxWrapper').removeClass("active addTo_BigWrapper addTo_SmallWrapper");
                $('.mainStyling').removeClass("active bg_color to_big_box to_small_Box");

                $("#exp_edu").addClass("active addTo_BigWrapper");
                $("#train_certi").addClass("addTo_SmallWrapper");

                $(this).addClass("active bg_color to_big_box");
                $(".education").addClass("to_small_Box");

                $(".train").addClass("to_big_box");
                $(".Certi").addClass("to_small_Box");
            }

        }
        else {
            $("#exp_edu").addClass("active addTo_BigWrapper");
            $("#train_certi").addClass("addTo_SmallWrapper");

            $(this).addClass("active bg_color to_big_box");
            $(".education").addClass("to_small_Box");

            $(".train").addClass("to_big_box");
            $(".Certi").addClass("to_small_Box");
        }

    }, function () {

        // Hover Out
        console.log("Kuch nhi karna")

    });


    // Education Box Working
    $(".education").hover(function () {

        // Hover IN
        if ($('.AboutWrapper').find(".BoxWrapper").hasClass("active")) {

            if ($(this).hasClass("active")) {
                console.log("Do Nothing here");
            }
            else {

                $('.BoxWrapper').removeClass("active addTo_BigWrapper addTo_SmallWrapper");
                $('.mainStyling').removeClass("active bg_color to_big_box to_small_Box");


                $("#exp_edu").addClass("active addTo_BigWrapper");
                $("#train_certi").addClass("addTo_SmallWrapper");

                $(".experience").addClass("to_small_Box");
                $(this).addClass("active bg_color to_big_box");

                $(".train").addClass("to_small_Box");
                $(".Certi").addClass("to_big_box");
            }

        }
        else {
            $("#exp_edu").addClass("active addTo_BigWrapper");
            $("#train_certi").addClass("addTo_SmallWrapper");

            $(".experience").addClass("to_small_Box");
            $(this).addClass("active bg_color to_big_box");

            $(".train").addClass("to_small_Box");
            $(".Certi").addClass("to_big_box");
        }

    }, function () {

        // Hover Out
        console.log("Kuch nhi karna")

    });

    // Training Box Working
    $(".train").hover(function () {

        // Hover IN
        if ($('.AboutWrapper').find(".BoxWrapper").hasClass("active")) {

            if ($(this).hasClass("active")) {
                console.log("Do Nothing here");
            }
            else {

                $('.BoxWrapper').removeClass("active addTo_BigWrapper addTo_SmallWrapper");
                $('.mainStyling').removeClass("active bg_color to_big_box to_small_Box");


                $("#train_certi").addClass("active addTo_BigWrapper");
                $("#exp_edu").addClass("addTo_SmallWrapper");

                $(".experience").addClass("to_big_box");
                $(".education").addClass("to_small_Box");

                $(this).addClass("active bg_color to_big_box");
                $(".Certi").addClass("to_small_Box");
            }

        }
        else {
            $("#train_certi").addClass("active addTo_BigWrapper");
            $("#exp_edu").addClass("addTo_SmallWrapper");

            $(".experience").addClass("to_big_box");
            $(".education").addClass("to_small_Box");

            $(this).addClass("active bg_color to_big_box");
            $(".Certi").addClass("to_small_Box");
        }

    }, function () {

        // Hover Out
        console.log("Kuch nhi karna")

    });

    // Certificate Box Working
    $(".Certi").hover(function () {

        // Hover IN
        if ($('.AboutWrapper').find(".BoxWrapper").hasClass("active")) {

            if ($(this).hasClass("active")) {
                console.log("Do Nothing here");
            }
            else {

                $('.BoxWrapper').removeClass("active addTo_BigWrapper addTo_SmallWrapper");
                $('.mainStyling').removeClass("active bg_color to_big_box to_small_Box");


                $("#train_certi").addClass("active addTo_BigWrapper");
                $("#exp_edu").addClass("addTo_SmallWrapper");

                $(".experience").addClass("to_small_Box");
                $(".education").addClass("to_big_box");

                $(".train").addClass("to_small_Box");
                $(this).addClass("active bg_color to_big_box");
            }

        }
        else {
            $("#train_certi").addClass("active addTo_BigWrapper");
            $("#exp_edu").addClass("addTo_SmallWrapper");

            $(".experience").addClass("to_small_Box");
            $(".education").addClass("to_big_box");

            $(".train").addClass("to_small_Box");
            $(this).addClass("active bg_color to_big_box");
        }

    }, function () {

        // Hover Out
        console.log("Kuch nhi karna")

    });
});