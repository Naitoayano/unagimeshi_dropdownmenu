// Menu Toggle /////////////////////////////////////////////////////////////

const breakPoint = 768;

function ShowAndHide(win){
  if( win > breakPoint ){
    $('#menuButton').hide();
    $('#menuList').show();
    $('#menuList').css({'flex-direcrion':'row'});
  } else {
    $('#menuButton').show();
    $('#menuButton').removeClass('open');
    $('#menuList').hide();
  }
}

$(function (){

  ShowAndHide( $(window).width() );

  $('#menuButton a').on('click', function () {
    $('#menuList').slideToggle(500);
    console.log('ok');
  });

  $(window).resize(function(){
    ShowAndHide( $(window).width() );
  });

});

// Smooth Scrool /////////////////////////////////////////////////////////////

$(function (){

   // Smooth Scroll
   $('a[href^="#"]').click(function() {

      // スクロールの速度(ms)
      var speed = 500;

      // アンカーを取得
      var anchor = $(this).attr("href");

      // ターゲットの位置を取得
      var target = $(anchor == "#" || anchor == "" ? 'html' : anchor);
      var position = target.offset().top　-80;

      // スクロール（アニメーション）
      $('body,html').animate({scrollTop:position}, speed, 'swing');

      return false;

   });
//ドロップダウンの設定を関数でまとめる
function mediaQueriesWin(){
	var width = $(window).width();
	if(width <= 768) {//横幅が768px以下の場合 $(".has-child>a").off('click');	//has-childクラスがついたaタグのonイベントを複数登録を避ける為offにして一旦初期状態へ
		$(".has-child>a").on('click', function() {//has-childクラスがついたaタグをクリックしたら
			var parentElem =  $(this).parent();// aタグから見た親要素のliを取得し
			$(parentElem).toggleClass('active');//矢印方向を変えるためのクラス名を付与して
			$(parentElem).children('ul').stop().slideToggle(500);//liの子要素のスライドを開閉させる※数字が大きくなるほどゆっくり開く
			return false;//リンクの無効化
		});
	}else{//横幅が768px以上の場合
		$(".has-child>a").off('click');//has-childクラスがついたaタグのonイベントをoff(無効)にし
		$(".has-child").removeClass('active');//activeクラスを削除
		$('.has-child').children('ul').css("display","");//スライドトグルで動作したdisplayも無効化にする
	}
}

// ページがリサイズされたら動かしたい場合の記述
$(window).resize(function() {
	mediaQueriesWin();/* ドロップダウンの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load',function(){
	mediaQueriesWin();/* ドロップダウンの関数を呼ぶ*/
});
});
