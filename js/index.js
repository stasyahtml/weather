$(document).mouseup(function (e) {

	var hide_heart = $(".hidde_heart_table.open");
	var burger_heart = $(".logo_heart");
	var hide = $(".hidde_heart_table");

 	///***  нажимаем на свободную область , прячем папаб, меняем цвет сердца   ***//
    if (hide_heart.has(e.target).length === 0){
        hide_heart.removeClass("open");
        $(".logo_heart img").attr("src","img/heart_outlook.png");
    }

    ///***  нажимаем на сердце   ***//
    burger_heart.click(function(){
		hide.toggleClass("open");

		///***  меняется картинка сердца (цвет ее)  ***//
		if (hide.hasClass("open")) {
    		$(".logo_heart img").attr("src","img/heart-white.png");
    	}
    	else {
    		$(".logo_heart img").attr("src","img/heart_outlook.png");
    	}

    	///***   прячутся соседние открытые ПАПАБЫ    ***//
    	var lang = $(".language .lang_chosen");
		var lang_list = $(".language .language-list");
		var icon = $(".language .lang_chosen i");

		$(".heder_menu_hidden.open").removeClass("open");
		$(".setting_hidde_block.open").removeClass("open");

		 if (lang_list.hasClass("open")) {
		 	lang_list.removeClass("open");
		 	//***    меняем цвет языка и стрелки   ***///
		 	lang.css("color", "#9fc920");
			icon.removeClass("ion-arrow-up-b");
			icon.addClass("ion-arrow-down-b");
		 }
	});	
});


$(document).mouseup(function (e) {

	var set = $(".header_sitting.header_item");
	var set_open = $(".setting_hidde_block");

	//***  нажимаем на свободную область , прячем папаб  ***//

	if (set.has(e.target).length === 0){
        set_open.removeClass("open");
    }	

});

$(document).ready(function () {

	var set = $(".header_sitting.header_item");
	var set_open = $(".setting_hidde_block");

	set.click(function(){
		set_open.toggleClass("open");

		$(".hidde_heart_table.open").removeClass("open");
		$(".logo_heart img").attr("src","img/heart_outlook.png");

		$(".heder_menu_hidden.open").removeClass("open");

		//***  для языка -  ***//
		var lang = $(".language .lang_chosen");
		var lang_list = $(".language .language-list");
		var icon = $(".language .lang_chosen i");
		if (lang_list.hasClass("open")) {
		 	lang_list.removeClass("open");
		 	//***    меняем цвет языка и стрелки   ***///
		 	lang.css("color", "#9fc920");
			icon.removeClass("ion-arrow-up-b");
			icon.addClass("ion-arrow-down-b");
		 }
	});	

});


$(document).ready(function(){  

	var input_search = $(".show_more_1366 input[type=search]");
	var input_search_list_open = $(".show_more_1366 .datalist_search");
	
	 input_search.click(function(){
		input_search_list_open.toggleClass("open");
		 if(input_search_list_open.hasClass("open")) {
		 	input_search.css("background", "#fff");
		 }
		 else {
		 	input_search.css("background", "#000");
		 }
	});	

	$('input').on('blur', function(){
	    input_search_list_open.removeClass("open");
	    input_search.css("background", "#000");
	});

////////////********************* SECOND INPUT  show_less_1366  *********************////////

	var input_search_less = $(".show_less_1366 input[type=search]");
	var input_search_list_open_less = $(".show_less_1366 .datalist_search");
	
	 input_search_less.click(function(){
		input_search_list_open_less.toggleClass("open");
		 if(input_search_list_open_less.hasClass("open")) {
		 	input_search_less.css("background", "#fff");
		 }
		 else {
		 	input_search_less.css("background", "#000");
		 }
	});	

	 $('input').on('blur', function(){
	    input_search_list_open_less.removeClass("open");
	    input_search_less.css("background", "#000");
	});

});


$(document).mouseup(function (e) {

	var menu = $(".header_menu_burger.header_item");
	var menu_open = $(".heder_menu_hidden");

	//***  нажимаем на свободную область , прячем папаб  ***//

	if (menu.has(e.target).length === 0){
        menu_open.removeClass("open");
    }	

});

$(document).ready(function(){  

	var menu = $(".header_menu_burger.header_item");
	var menu_open = $(".heder_menu_hidden");
	
	menu.click(function(){
		menu_open.toggleClass("open");

		$(".hidde_heart_table.open").removeClass("open");
		$(".logo_heart img").attr("src","img/heart_outlook.png");

		$(".setting_hidde_block.open").removeClass("open");

		//***  для языка -  ***//
		var lang = $(".language .lang_chosen");
		var lang_list = $(".language .language-list");
		var icon = $(".language .lang_chosen i");
		if (lang_list.hasClass("open")) {
		 	lang_list.removeClass("open");
		 	//***    меняем цвет языка и стрелки   ***///
		 	lang.css("color", "#9fc920");
			icon.removeClass("ion-arrow-up-b");
			icon.addClass("ion-arrow-down-b");
		 }
	});	

});	


$(document).mouseup(function (e) {

	var lang = $(".language .lang_chosen");
	var lang_list = $(".language .language-list");
	var icon = $(".language .lang_chosen i");

	 	/***  нажимаем на свободную область   ***/
    if (lang.has(e.target).length === 0){
        lang_list.hide();
        lang_list.removeClass("open");
        lang.css("color", "#9fc920");
		icon.removeClass("ion-arrow-up-b");
		icon.addClass("ion-arrow-down-b");
    }

    lang.click(function(){
		if (lang_list.hasClass("open")) {
			lang_list.show();
		}
		else {
			lang_list.hide();
		}
	});

});


$(document).ready(function () {

	var lang = $(".language .lang_chosen");
	var lang_list = $(".language .language-list");
	var icon = $(".language .lang_chosen i");

	lang.click(function(){
		lang_list.toggleClass("open");

		$(".heder_menu_hidden.open").removeClass("open");
		$(".setting_hidde_block.open").removeClass("open");
		$(".hidde_heart_table.open").removeClass("open");

		if (lang_list.hasClass("open")) {
			lang.css("color", "#fff");
			icon.removeClass("ion-arrow-down-b");
			icon.addClass("ion-arrow-up-b");
		}
		else {
			lang.css("color", "#9fc920");
			icon.removeClass("ion-arrow-up-b");
			icon.addClass("ion-arrow-down-b");
		}
	});	

});

$(document).ready(function () {
	var day = $(".days_new i");
var day_but = $(".days_new");
	var day1 = $(".yearly_monthly .right .right_list_yearly_monthly li:nth-child(4)");
	var day2 = $(".yearly_monthly .right .right_list_yearly_monthly li:nth-child(5)");
	var day3 = $(".yearly_monthly .right .right_list_yearly_monthly li:nth-child(6)");
	var day4 = $(".yearly_monthly .right .right_list_yearly_monthly li:nth-child(7)");
	var day5 = $(".yearly_monthly .right .right_list_yearly_monthly li:nth-child(8)");
	var day6 = $(".yearly_monthly .right .right_list_yearly_monthly li:nth-child(9)");
	var day7 = $(".yearly_monthly .right .right_list_yearly_monthly li:last-child");

	day_but.click(function(){
		day1.toggleClass("open");
		day2.toggleClass("open");
		day3.toggleClass("open");
		day4.toggleClass("open");
		day5.toggleClass("open");
		day6.toggleClass("open");
		day7.toggleClass("open");

		if (day1.hasClass("open")) {
			day.removeClass("ion-arrow-down-b");
			day.addClass("ion-arrow-up-b");
		}
		 else {
			day.removeClass("ion-arrow-up-b");
			day.addClass("ion-arrow-down-b");
		}
	});

});


$(document).ready(function () {
	var other = $(".list_evr_day li.other i");

	var other_li = $(".list_evr_day li.other");
	var outl_li = $(".list_evr_day li.outl");
	var a_outl_li = $(".list_evr_day li.outl a");

	var evr_day1 = $(".outlook .list_week .list_evr_day li:nth-child(3)");
	var evr_day2 = $(".outlook .list_week .list_evr_day li:nth-child(4)");
	var evr_day3 = $(".outlook .list_week .list_evr_day li:nth-child(5)");
	var evr_day4 = $(".outlook .list_week .list_evr_day li:nth-child(6)");
	var evr_day5 = $(".outlook .list_week .list_evr_day li:nth-child(7)");
	var evr_day6 = $(".outlook .list_week .list_evr_day li:nth-child(8)");
	var evr_day7 = $(".outlook .list_week .list_evr_day li:nth-child(9)");
	var evr_day8 = $(".outlook .list_week .list_evr_day li:nth-child(10)");
	var evr_day9 = $(".outlook .list_week .list_evr_day li:nth-child(11)");
	var evr_day10 = $(".outlook .list_week .list_evr_day li:nth-child(12)");
	var evr_day11 = $(".outlook .list_week .list_evr_day li:nth-child(13)");
	var evr_day12 = $(".outlook .list_week .list_evr_day li:nth-child(14)");
	var evr_day13 = $(".outlook .list_week .list_evr_day li:nth-child(15)");

	other_li.click(function(){

		evr_day1.toggleClass("open");
		evr_day2.toggleClass("open");
		evr_day3.toggleClass("open");
		evr_day4.toggleClass("open");
		evr_day5.toggleClass("open");
		evr_day6.toggleClass("open");
		evr_day7.toggleClass("open");
		evr_day8.toggleClass("open");
		evr_day9.toggleClass("open");
		evr_day10.toggleClass("open");
		evr_day11.toggleClass("open");
		evr_day12.toggleClass("open");
		evr_day13.toggleClass("open");

		var report_list = $(".latest_weather_report_item1 .item2  .latest_weather_report_item2_list");
		var icon_report = $(".latest_weather_report_item1 .item2 i");

		if (evr_day1.hasClass("open")) {
			report_list.removeClass("open");

			icon_report.removeClass("ion-arrow-up-b");
			icon_report.addClass("ion-arrow-down-b");


			other.removeClass("ion-arrow-down-b");
			other.addClass("ion-arrow-up-b");

			other_li.css("background", "#fff");
			other_li.css("color", "#000");

			outl_li.css("background", "#9fc920");
			a_outl_li.css("color", "#fff");
		}
		 else {
			other.removeClass("ion-arrow-up-b");
			other.addClass("ion-arrow-down-b");

			outl_li.css("background", "#fff");
			other_li.css("background", "#9fc920");

			a_outl_li.css("color", "#000");
			other_li.css("color", "#fff");
		}
	});

});


$(document).ready(function () {
	var see_more_1 = $(".see_more .ic_2");
	var see_more_2 = $(".see_more .ic_2");

	$(".see_more").click(function(){

		$(".outlook_weather_forecast .middle_w_f .mid_list1 li.mid_li_4").toggleClass("open");
		$(".outlook_weather_forecast .middle_w_f .mid_list1 li.mid_li_5").toggleClass("open");
		$(".outlook_weather_forecast .middle_w_f .mid_list1 li.mid_li_6").toggleClass("open");
		$(".outlook_weather_forecast .middle_w_f .mid_list1 li.mid_li_7").toggleClass("open");
		$(".outlook_weather_forecast .middle_w_f .mid_list1 li.mid_li_8").toggleClass("open");
		$(".outlook_weather_forecast .middle_w_f .mid_list1 li.mid_li_9").toggleClass("open");
		$(".outlook_weather_forecast .middle_w_f .mid_list1 li.mid_li_10").toggleClass("open");

		var li_4 = $(".outlook_weather_forecast .middle_w_f .mid_list1 li.mid_li_4");

		if (li_4.hasClass("open")) {
			see_more_1.removeClass("ion-chevron-down");
			see_more_1.addClass("ion-chevron-up");
			$(".outlook_weather_forecast").css("height", "940px");
			$(".mid_list1 .see_more").css("position", "absolute");
			$(".mid_list1 .see_more").css("margin-top", "330px");

			$(".see_more .see").css("display", "none");
			$(".see_more .closss").css("display", "block");

		}
		 else {
		 	see_more_1.removeClass("ion-chevron-up");
			see_more_1.addClass("ion-chevron-down");
			$(".outlook_weather_forecast").css("height", "600px");
			$(".mid_list1 .see_more").css("position", "relative");
			$(".mid_list1 .see_more").css("margin-top", "0");

			$(".see_more .see").css("display", "block");
			$(".see_more .closss").css("display", "none");
		}
	});

});

$(document).ready(function () {
	var print = $(".print");

	$(".close").click(function(){
		print.toggleClass("open");
		if (print.hasClass("open")) {
			$(".cl_icon i").removeClass("ion-navicon-round");
			$(".cl_icon i").addClass("ion-close-round");
		}
		else {
			$(".cl_icon i").removeClass("ion-close-round");
			$(".cl_icon i").addClass("ion-navicon-round");
		}

	});	

});

////////////******************************************////////
$(document).ready(function(){  
////////************    ПОДЧЕРКИВАНИЕ LATEST BLOG , ЗАГОЛОВКА ВМЕСТЕ С ТЕКСТОМ ОДНОВРЕМЕННО ********////////

	var first_BlPost = $(".latest_blog .latest_blog_content .lat_bl_con_1 .first_cont_1, .latest_blog .latest_blog_content .lat_bl_con_1 .second_cont_2");
	var second_BlPost = $(".latest_blog .latest_blog_content .lat_bl_con_2 .second_block_1 .first_cont_1 span, .latest_blog .latest_blog_content .lat_bl_con_2 .second_block_1 .second_cont_2");
	var third_BlPost = $(".latest_blog .latest_blog_content .lat_bl_con_2 .second_block_2 .first_cont_1, .latest_blog .latest_blog_content .lat_bl_con_2 .second_block_2 .second_cont_2");
	var fourth_BlPost = $(".latest_blog .second_latest_blog_content .second_item .first_cont_1, .latest_blog .second_latest_blog_content .second_item .second_cont_2");

	first_BlPost.hover(
		function(){
		 	first_BlPost.css({
				"cursor": "pointer",
				"text-decoration":"underline"
			});
		},
		function(){
		  	first_BlPost.css({
				"cursor": "none",
				"text-decoration":"none"
			});
		}
	);

	second_BlPost.hover(
		function(){
		 	second_BlPost.css({
				"cursor": "pointer",
				"text-decoration":"underline"
			});
		},
		function(){
		  	second_BlPost.css({
				"cursor": "none",
				"text-decoration":"none"
			});
		}
	);

	third_BlPost.hover(
		function(){
		 	third_BlPost.css({
				"cursor": "pointer",
				"text-decoration":"underline"
			});
		},
		function(){
		  	third_BlPost.css({
				"cursor": "none",
				"text-decoration":"none"
			});
		}
	);
	
	fourth_BlPost.hover(
		function(){
		 	fourth_BlPost.css({
				"cursor": "pointer",
				"text-decoration":"underline"
			});
		},
		function(){
		  	fourth_BlPost.css({
				"cursor": "none",
				"text-decoration":"none"
			});
		}
	);

});


$(document).ready(function(){  
	var button_report = $(".latest_weather_report_item1 .item2");
	var report_list = $(".latest_weather_report_item1 .item2  .latest_weather_report_item2_list");
	var icon_report = $(".latest_weather_report_item1 .item2 i");

	var other = $(".list_evr_day li.other i");
	var evr_day1 = $(".outlook .list_week .list_evr_day li:nth-child(3)");
	var evr_day2 = $(".outlook .list_week .list_evr_day li:nth-child(4)");
	var evr_day3 = $(".outlook .list_week .list_evr_day li:nth-child(5)");
	var evr_day4 = $(".outlook .list_week .list_evr_day li:nth-child(6)");
	var evr_day5 = $(".outlook .list_week .list_evr_day li:nth-child(7)");
	var evr_day6 = $(".outlook .list_week .list_evr_day li:nth-child(8)");
	var evr_day7 = $(".outlook .list_week .list_evr_day li:nth-child(9)");
	var evr_day8 = $(".outlook .list_week .list_evr_day li:nth-child(10)");
	var evr_day9 = $(".outlook .list_week .list_evr_day li:nth-child(11)");
	var evr_day10 = $(".outlook .list_week .list_evr_day li:nth-child(12)");
	var evr_day11 = $(".outlook .list_week .list_evr_day li:nth-child(13)");
	var evr_day12 = $(".outlook .list_week .list_evr_day li:nth-child(14)");
	var evr_day13 = $(".outlook .list_week .list_evr_day li:nth-child(15)");

    button_report.click(function(){
    	report_list.toggleClass("open");
    	if (report_list.hasClass("open")) {
    		icon_report.removeClass("ion-arrow-down-b");
			icon_report.addClass("ion-arrow-up-b");

			evr_day1.removeClass("open");
			evr_day2.removeClass("open");
			evr_day3.removeClass("open");
			evr_day4.removeClass("open");
			evr_day5.removeClass("open");
			evr_day6.removeClass("open");
			evr_day7.removeClass("open");
			evr_day8.removeClass("open");
			evr_day9.removeClass("open");
			evr_day10.removeClass("open");
			evr_day11.removeClass("open");
			evr_day12.removeClass("open");
			evr_day13.removeClass("open");
			other.removeClass("ion-arrow-up-b");
			other.addClass("ion-arrow-down-b");
    	}
    	else {
    		icon_report.removeClass("ion-arrow-up-b");
			icon_report.addClass("ion-arrow-down-b");
    	}
	});
});



