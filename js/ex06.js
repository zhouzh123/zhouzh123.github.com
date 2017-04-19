/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-04-13 14:03:43
 * @version $Id$
 */
$(document).ready(function() {
    $(".show").hide();
	$(".imgbackground").hide();
	$(".ui-inbox").click(function() {
		$(".showimg").attr("src",$(this).children('img').attr("src"));
		$(".show").show();
		$(".imgbackground").show();
	});
	$(".imgbackground").click(function() {
		$(".show").hide();
		$(".imgbackground").hide();
	});
});

$(document).ready(function() {
	$(".ui-head tr td:eq(0)").css("background-color","rgb(192,192,192)");
	$("#ui-content2").hide();
	$("#ui-content3").hide();
	$(".ui-head tr td:eq(0)").click(function() {
		$(".ui-head tr td:eq(0)").css("background-color","rgb(192,192,192)");
		$(".ui-head tr td:eq(1)").css("background-color","white");
		$(".ui-head tr td:eq(2)").css("background-color","white");
		$("#ui-content1").show();
		$("#ui-content2").hide();
		$("#ui-content3").hide();
	});
	$(".ui-head tr td:eq(1)").click(function() {
		$(".ui-head tr td:eq(1)").css("background-color","rgb(192,192,192)");
		$(".ui-head tr td:eq(0)").css("background-color","white");
		$(".ui-head tr td:eq(2)").css("background-color","white");
		$("#ui-content2").show();
		$("#ui-content1").hide();
		$("#ui-content3").hide();
	});
	$(".ui-head tr td:eq(2)").click(function() {
		$(".ui-head tr td:eq(2)").css("background-color","rgb(192,192,192)");
		$(".ui-head tr td:eq(1)").css("background-color","white");
		$(".ui-head tr td:eq(0)").css("background-color","white");
		$("#ui-content3").show();
		$("#ui-content2").hide();
		$("#ui-content1").hide();
	});
});

$(document).ready(function() {
	function inorder(index) {
		$(this).find('.ui-li-table-order').text(index+1);
	}
	function del() {
		$(this).parents(".ui-li").remove();
		$("li").each(inorder);
	}
	$("li").each(inorder);
	$('.ui-li-table-del').bind('click',del);
	$(".add").click(function() {
		$("ul").append("<li class='ui-li'></li>");
		$("li:last").append("<table class='ui-li-table'></table>");
	    $("li:last").children('.ui-li-table').append("<tr class='ui-tr'></tr>");
		$("li:last").find('.ui-tr').append("<td class='ui-li-table-order'></td>");
		$("li:last").find('.ui-tr').append("<td class='ui-li-table-content'></td>");
		$("li:last").find('.ui-tr').append("<td class='ui-li-table-del'>Delete</td>");
		$("li").each(inorder);
		$('.ui-li-table-del').bind('click',del);
		});
	$("li").each(inorder);
    $('.ui-li-table-del').bind('click',del);
});