// 레이어 dim 팝업 높이값 
function popTopPosition(obj){
	var wHeight = $(window).height();
	var contHeight = obj.height();

	if(wHeight <= contHeight){
		obj.css({
			'top': '0'
		});
	} else {
		obj.css({
			'top':(wHeight/2)-(contHeight/2)+'px'
		});
	}
}
// 레이어 dim 팝업 on click
function popupBtnClick(e){
	e.preventDefault();
	var posY = $(window).scrollTop();
	$('body').addClass('scrollStop');
	$('#wrapper').css('top',-posY);
	$('.dim').css('z-index', '99').show();
}
//join02
/*function infouPwd01(){
	$('#upwd01, .upwd01').on('click, focus', function(){
		$(this).parent().find('.desc01.wh01').hide();
	});
	$('#upwd01, .upwd01').on('blur', function(){
		if($(this).val() != ''){
			$(this).parent().find('.desc01.wh01').hide();
		}else{
			$(this).val('');
			$(this).parent().find('.desc01.wh01').show();
		}
	});
}*/

$(document).ready(function(){
	//모바일 메뉴 클릭시
	$('#header .btnMenu').on('click', function(){
		$('#header nav, #header .util').animate({left:"0"}, 400);
		$('.dim').show();
	});

	//왼쪽메뉴 있을 때 메뉴 제외한 영역 클릭시 왼쪽메뉴 숨김
	$('.dim, #header .btnClose').on('click', function(){
		$('#header nav, #header .util').animate({left:"-600px"}, 400);
		$('.dim').hide();
	});
	
	//gnb
	$('#header nav li').hover(function(){
		$(this).addClass('on');
		$('ul:first',this).slideDown();
	}, function(){
		$(this).removeClass('on');
		$('ul:first',this).slideUp();
	});	
	$('#header nav li ul li:has(ul)').find('a:first').append(' » ');

	$('#footer .langBox .select a').click(function(){
		$('.langBox ul').slideToggle();
	});

	//join
	$('#uid, #upwd').on('click, focus', function(){
		$(this).parent().find('label').hide();
	});
	$('#uid, #upwd').on('blur', function(){
		if($(this).val() != ''){
			$(this).parent().find('label').hide();
		}else{
			$(this).val('');
			$(this).parent().find('label').show();
		}
	});

	//custom selectbox
	var select = $('select');
	for(var i = 0; i < select.length; i++){
		var idxData = select.eq(i).children('option:selected').text();
		select.eq(i).siblings('label').text(idxData);
	}
	select.change(function(){
		var select_name = $(this).children("option:selected").text();
		$(this).siblings("label").text(select_name);
	});

	//calendar
	$(function() {
		$( '.datepicker' ).datepicker({
			changeYear: true,
			changeMonth: true,
			dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
			dayNamesMin: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
			monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'],
			monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
			nextText: '다음 달',
			prevText: '이전 달' ,
			dateFormat:'yy-mm-dd',
			showMonthAfterYear: true
		});
	});

	$('.popCon').hide();
	$('.popCon:first').show();

	$('.tabList ul li').click(function(){
		if($(this).is('.on')){
		}else {
			$('.tabList ul li.on').removeClass('on');
			$(this).addClass('on');
			var indexTab = $(this).index(); //alert(indexTab);
			$('.popCon').hide();
			$('.popCon').eq(indexTab).show();
		}
	});
	
	//popup
	$('.layerPopWrap .popWrap .btnClose').click(function(evt){
		evt.preventDefault();
		var positionTop = Math.abs(parseInt($('#wrapper').css('top')));
		$(this).parent().parent().parent().hide();
		$('.dim').hide();
		$('body').removeClass('scrollStop');
		$('#wrapper').css('top','0');
		$(window).scrollTop(positionTop);
	});
	
	//모바일에서 적용
	if($(window).width() <= 767){
		//infouPwd01();
	}

	//리사이징
	$(window).resize(function() {
		/*if($(window).width() <= 767){
			infouPwd01();
		}*/
	});

});

function header(){
	document.write("<header id='header'>");
	document.write("		<span class='btnMenu'><a href='javascript:;'><img src='/img/common/layout/btnMenu.png' alt='MENU' /></a></span>");
	document.write("		<h1><a href='#'><img src='/img/common/layout/logo.jpg' alt='CDA' /></a></h1>");
	document.write("		<nav>");
	document.write("			<div class='mobile'>");
	document.write("				<span class='logo'><img src='/img/common/layout/logo.jpg' alt='CDA' /></span>");
	document.write("				<span class='btnClose'><a href='javascript:;'><img src='/img/common/layout/btnClose.gif' alt='CLOSE' /></a></span>");
	document.write("			</div>");
	document.write("			<ul>");
	document.write("				<li class='home'><a href='#'><span class='ico0000'></span>HOME</a>");
	document.write("				<li><a href='#'><span class='ico0100'></span>회사소개</a>");
	document.write("					<div class='depth02 dmL01'>");
	document.write("						<ul>");
	document.write("							<li class='on'><a href='#'><span class='ico0101'></span>회사 소개</a></li>");
	document.write("							<li><a href='#'><span class='ico0102'></span>Contact Us</a></li>");
	document.write("							<li class='last'><a href='#'><span class='ico0103'></span>해외 지사</a></li>");
	document.write("						</ul>");
	document.write("					</div>");
	document.write("				</li>");
	document.write("				<li><a href='#'><span class='ico0200'></span>취급품</a></li>");
	document.write("				<li><a href='#'><span class='ico0300'></span>품질 관리 현황</a></li>");
	document.write("				<li class='last'><a href='#'><span class='ico0400'></span>MY ACCOUNT</a>");
	document.write("					<div class='depth02 dmL04'>");
	document.write("						<ul>");
	document.write("							<li><a href='#'><span class='ico0401'></span>내 계정 정보</a></li>");
	document.write("							<li><a href='#'><span class='ico0402'></span>발주 내역</a></li>");
	document.write("							<li class='last'><a href='#'><span class='ico0403'></span>배송 추적</a></li>");
	document.write("						</ul>");
	document.write("					</div>");
	document.write("				</li>");
	document.write("			</ul>");
	document.write("		</nav>");
	document.write("		<div class='util'>");
	document.write("			<ul>");
	document.write("				<li><a href='#'>로그인</a></li>");
	document.write("				<li><a href='#'>회원가입</a></li>");
	document.write("			</ul>");
	document.write("		</div>");
	document.write("		<span class='btn'><a href='#'><span>재고 검색</span></a></span>");
	document.write("		<div class='dim'></div>");
	document.write("	</header>");
}

function footer(){
	document.write("<footer id='footer'>");
	document.write("		<div class='link'>");
	document.write("			<span class='btnLink'><a href='#'>PACIFIC FOCUS</a></span>");
	document.write("			<div class='langBox'>");
	document.write("				<span class='select'><a href='javascript:;'>LANGUAGE</a></span>");
	document.write("				<ul>");
	document.write("					<li><a href='#'>KOREAN</a></li>");
	document.write("					<li><a href='#'>ENGLISH</a></li>");
	document.write("				</ul>");
	document.write("			</div>");
	document.write("		</div>");
	document.write("		<ul class='agreeBox'>");
	document.write("			<li><a href='javascript:;' class='btnAgree'>서비스 이용 약관</a></li>");
	document.write("			<li><a href='javascript:;' class='btnAgree02'>개인 정보 취급 방침</a></li>");
	document.write("		</ul>");
	document.write("		<address>");
	document.write("			<p>경기도 성남시 분당구 쇳골로 81 <span class='var'></span> Tel. 031-717-7323 <span class='contactus'><span class='var'></span> Contact Us: cdasjy@cda-korea.com</span></p>");
	document.write("			<p>COPYRIGHT © 2016 CDA CO., LTD. ALL RIGHTS RESERVED.</p>");
	document.write("		</address>");
	document.write("	</footer>");
}