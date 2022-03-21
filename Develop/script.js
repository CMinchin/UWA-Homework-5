var times = ["9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm"]

var t =  (f) => moment().format(f); // it just make the next line at all readable

console.log("Today is", t("dddd"), "the", t("Do"), "of", t("MMMM"));
$("#currentDay").text("Today is " + t("dddd") + " the " + t("Do") + " of "+ t("MMMM"));

var now = "past";

var cal = $(".container")
times.forEach(function(e){
    if (t("ha") == e){
        now = "present";
    }
    cal.append(
        $("<div>").addClass("row").append(
            $("<div>").addClass("hour col-1").text(e)
        ).append(
            $("<div>").addClass("time-block col-11").append(
                $("<input>").addClass(now).val(window.localStorage.getItem(e))
            )
        )
    );
    cal[0].children[cal[0].children.length-1].children[1].children[0].id=e;
    if (t("ha") == e){
        now = "future";
    }
});

$(".saveBtn").click(function(){
    times.forEach(function(e){
        window.localStorage.setItem(e,$("#"+e).val());
    });
});