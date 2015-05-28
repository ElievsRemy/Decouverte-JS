//Etape 1

function	decorate()
{
    $('body').append('<div>');
    $('div').attr("id","display").height("100%").width("100%").append('<div>').append('<div>').append('<div>').append('<div>').append('<div>').append('<div>');
    $($('div')[1]).attr("id", "elem_1").height("33.33333333333333%").width("33.33333333333333%").css({
	"background-color": "#111111",
	position: "absolute",
	top: "0%",
	left: "0%",
	float: "left"
    }).hide().animate("linear").slideDown(1000);
    $($('div')[2]).attr("id", "elem_2").height("33.33333333333333%").width("33.33333333333333%").css({
	"background-color": "#222222",
	position: "absolute",
	top: "0%",
	left: "33.33333333333333%",
	float: "left"
    }).hide().animate("linear").delay(1001).slideDown(1000);
    $($('div')[3]).attr("id", "elem_3").height("33.33333333333333%").width("33.33333333333333%").css({
	"background-color": "#333333",
	position: "absolute",
	top: "0%",
	left: "66.66666666666666%",
	float: "left"
    }).hide().animate("linear").delay(2002).slideDown(1000);
    $($('div')[4]).attr("id", "elem_4").height("33.33333333333333%").width("33.33333333333333%").css({
	"background-color": "#222222",
	position: "absolute",
	top: "33.33333333333333%",
	left: "0%",
	float: "left"
    }).hide().animate("linear").delay(3003).slideDown(1000);
    $($('div')[5]).attr("id", "elem_5").height("33.33333333333333%").width("33.33333333333333%").css({
	"background-color": "#444444",
	position: "absolute",
	top: "33.33333333333333%",
	left: "33.33333333333333%", 
	float: "left"
    }).hide().animate("linear").delay(4004).slideDown(1000);
    $($('div')[6]).attr("id", "elem_6").height("33.33333333333333%").width("33.33333333333333%").css({
	"background-color": "#666666",
	position: "absolute",
	top: "33.33333333333333%",
	left: "66.66666666666666%",
	float: "left"
    }).hide().animate("linear").delay(5005).slideDown(1000);
    $($('div')[7]).attr("id", "elem_7").height("33.33333333333333%").width("33.33333333333333%").css({
	"background-color": "#333333",
	position: "absolute",
	top: "66.66666666666666%",
	left: "0%",
	float: "left"
    }).hide().animate("linear").delay(6006).slideDown(1000);
    $($('div')[8]).attr("id", "elem_8").height("33.33333333333333%").width("33.33333333333333%").css({
	"background-color": "#666666",
	position: "absolute",
	top: "66.66666666666666%",
	left: "33.33333333333333%",
	float: "left"
    }).hide().animate("linear").delay(7007).slideDown(1000);
    $($('div')[9]).attr("id", "elem_9").height("33.33333333333333%").width("33.33333333333333%").css({
	"background-color": "#999999",
	position: "absolute",
	top: "66.66666666666666%",
	left: "66.66666666666666%",
	float: "left"
    }).hide().animate("linear").delay(8008).slideDown(1000);
}