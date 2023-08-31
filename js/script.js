$(function () {
  // slick.js
  // $(function () {
  //   $("#js-slider-2").slick({
  //     arrows: false, // 前・次のボタンを表示する
  //     dots: false, // ドットナビゲーションを表示する
  //     appendDots: $(".dots-2"), // ドットナビゲーションの生成位置を変更
  //     speed: 1000, // スライドさせるスピード（ミリ秒）
  //     slidesToShow: 1, // 表示させるスライド数
  //     centerMode: true, // slidesToShowが奇数のとき、現在のスライドを中央に表示する
  //     variableWidth: true, // スライド幅の自動計算を無効化
  //     autoplay: true,
  //     infinite: true, //永久にループさせる
  //   });
  // });
});

$(function () {
  $(".slider").slick({
    arrows: false, // 前・次のボタンを表示する
    dots: false, // ドットナビゲーションを表示する
    autoplay: true,
    infinite: true, //永久にループさせる
    speed: 1000, // スライドさせるスピード（ミリ秒）
    // dots: true,
    //     appendDots: $(".dots-2"), // ドットナビゲーションの生成位置を変更
  });
});
////////////////

$(".hoge-item .img-box > img").click(function () {
  var src = $(this).attr("src");
  var cap = $(this).attr("alt");
  $(".modal-block").fadeIn().css("display", "flex");

  $("#popup").attr("src", src);
  $(".caption").text(cap);
});

$(".modal-block").click(function (e) {
  // モーダルの外側をクリックした場合にのみモーダルを閉じる
  if (e.target === this) {
    $(this).css("display", "none");
  }
});

$(".img-section > span").click(function () {
  // モーダルを閉じるボタンがクリックされた場合にモーダルを閉じる
  $(".modal-block").css("display", "none");
});
