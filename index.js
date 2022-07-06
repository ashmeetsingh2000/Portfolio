$(document).ready(function () {

    // Experince Box working
    $(".experience").hover(function () {

        // Hover IN
        if ($('.AboutWrapper').find(".BoxWrapper").hasClass("active")) {

            if ($(this).hasClass("active")) {
                console.log("Do Nothing here");
            }
            else {

                // to add Height of the container
                $('.BoxWrapper').removeClass("active addTo_BigWrapper addTo_SmallWrapper");
                $('.mainStyling').removeClass("active bg_color to_big_box to_small_Box");

                // to add width of the container
                $("#exp_edu").addClass("active addTo_BigWrapper");
                $("#train_certi").addClass("addTo_SmallWrapper");

                // to add color effect to the open box
                $(this).addClass("active bg_color to_big_box");
                $(".education").addClass("to_small_Box");

                // to add width of the boxes
                $(".train").addClass("to_big_box");
                $(".Certi").addClass("to_small_Box");

                // headings show / hide
                $(".exp_heading").css("display", "block");

                $(".edu_Heading").css("display", "none");
                $(".certi_heading").css("display", "none");

                //show / hide paragraph
                $("#about_IMG").css("display", "none");
                $(".about_Heading").css("display", "none");

                setTimeout(() => {
                    $(".about_para").css("display", "block");
                    $(this).addClass("open_BoxStyling");
                }, 600)

                //removing others para
                $(".edu_para").css("display", "none");
                $(".exp_para").css("display", "none");
                $(".certi_para").css("display", "none");

                //removing others box adjustment
                $(".education").removeClass("open_BoxStyling");
                $(".train").removeClass("open_BoxStyling");
                $(".Certi").removeClass("open_BoxStyling");

                // getting back the SVG Images
                $("#edu_IMG").css("display", "block");
                $("#train_IMG").css("display", "block");
                $("#Certi_IMG").css("display", "block");
            }

        }
        else {
            $("#exp_edu").addClass("active addTo_BigWrapper");
            $("#train_certi").addClass("addTo_SmallWrapper");

            $(this).addClass("active bg_color to_big_box");
            $(".education").addClass("to_small_Box");

            $(".train").addClass("to_big_box");
            $(".Certi").addClass("to_small_Box");

            $(".edu_Heading").css("display", "none");
            $(".certi_heading").css("display", "none");

            $("#about_IMG").css("display", "none");
            $(".about_Heading").css("display", "none");

            setTimeout(() => {
                $(".about_para").css("display", "block");
                $(this).addClass("open_BoxStyling");
            }, 600)
        }

    }, function () {

        // Hover Out
        console.log("No action Required on hover out")

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

                $(".about_Heading").css("display", "none");
                $(".exp_heading").css("display", "none");

                $(".edu_Heading").css("display", "block");
                $(".certi_heading").css("display", "block");

                $("#edu_IMG").css("display", "none");
                $(".edu_Heading").css("display", "none");

                setTimeout(() => {
                    $(".edu_para").css("display", "block");
                    $(this).addClass("open_BoxStyling");
                }, 600)

                $(".about_para").css("display", "none");
                $(".exp_para").css("display", "none");
                $(".certi_para").css("display", "none");

                $(".experience").removeClass("open_BoxStyling");
                $(".train").removeClass("open_BoxStyling");
                $(".Certi").removeClass("open_BoxStyling");

                $("#about_IMG").css("display", "block");
                $("#train_IMG").css("display", "block");
                $("#Certi_IMG").css("display", "block");
            }

        }
        else {
            $("#exp_edu").addClass("active addTo_BigWrapper");
            $("#train_certi").addClass("addTo_SmallWrapper");

            $(".experience").addClass("to_small_Box");
            $(this).addClass("active bg_color to_big_box");

            $(".train").addClass("to_small_Box");
            $(".Certi").addClass("to_big_box");

            $(".about_Heading").css("display", "none");
            $(".exp_heading").css("display", "none");

            $("#edu_IMG").css("display", "none");
            $(".edu_Heading").css("display", "none");

            setTimeout(() => {
                $(".edu_para").css("display", "block");
                $(this).addClass("open_BoxStyling");
            }, 600)
        }

    }, function () {

        // Hover Out
        console.log("No action Required on hover out")

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

                $(".about_Heading").css("display", "block");
                $(".exp_heading").css("display", "block");

                $(".edu_Heading").css("display", "none");
                $(".certi_heading").css("display", "none");

                $("#train_IMG").css("display", "none");
                $(".exp_heading").css("display", "none");

                setTimeout(() => {
                    $(".exp_para").css("display", "block");
                    $(this).addClass("open_BoxStyling");
                }, 600)

                $(".about_para").css("display", "none");
                $(".edu_para").css("display", "none");
                $(".certi_para").css("display", "none");

                $(".experience").removeClass("open_BoxStyling");
                $(".education").removeClass("open_BoxStyling");
                $(".Certi").removeClass("open_BoxStyling");

                $("#about_IMG").css("display", "block");
                $("#edu_IMG").css("display", "block");
                $("#Certi_IMG").css("display", "block");

            }

        }
        else {
            $("#train_certi").addClass("active addTo_BigWrapper");
            $("#exp_edu").addClass("addTo_SmallWrapper");

            $(".experience").addClass("to_big_box");
            $(".education").addClass("to_small_Box");

            $(this).addClass("active bg_color to_big_box");
            $(".Certi").addClass("to_small_Box");

            $(".edu_Heading").css("display", "none");
            $(".certi_heading").css("display", "none");

            $("#train_IMG").css("display", "none");
            $(".exp_heading").css("display", "none");

            setTimeout(() => {
                $(".exp_para").css("display", "block");
                $(this).addClass("open_BoxStyling");
            }, 600)
        }

    }, function () {

        // Hover Out
        console.log("No action Required on hover out")

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

                $(".about_Heading").css("display", "none");
                $(".exp_heading").css("display", "none");

                $(".edu_Heading").css("display", "block");
                $(".certi_heading").css("display", "block");

                $("#Certi_IMG").css("display", "none");
                $(".certi_heading").css("display", "none");

                setTimeout(() => {
                    $(".certi_para").css("display", "block");
                    $(this).addClass("open_BoxStyling");
                }, 600)

                $(".about_para").css("display", "none");
                $(".exp_para").css("display", "none");
                $(".edu_para").css("display", "none");

                $(".experience").removeClass("open_BoxStyling");
                $(".train").removeClass("open_BoxStyling");
                $(".education").removeClass("open_BoxStyling");

                $("#about_IMG").css("display", "block");
                $("#train_IMG").css("display", "block");
                $("#edu_IMG").css("display", "block");
            }

        }
        else {
            $("#train_certi").addClass("active addTo_BigWrapper");
            $("#exp_edu").addClass("addTo_SmallWrapper");

            $(".experience").addClass("to_small_Box");
            $(".education").addClass("to_big_box");

            $(".train").addClass("to_small_Box");
            $(this).addClass("active bg_color to_big_box");

            $(".about_Heading").css("display", "none");
            $(".exp_heading").css("display", "none");

            $("#Certi_IMG").css("display", "none");
            $(".certi_heading").css("display", "none");

            setTimeout(() => {
                $(".certi_para").css("display", "block");
                $(this).addClass("open_BoxStyling");
            }, 600)
        }

    }, function () {

        // Hover Out
        console.log("No action Required on hover out")

    });
});