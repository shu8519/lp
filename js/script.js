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

$(function () {
  // タイトルをクリックすると
  $(".js-accordion-title").on("click", function () {
    // クリックした次の要素を開閉
    $(this).next().slideToggle(100);
    // タイトルにopenクラスを付け外しして矢印の向きを変更
    $(this).toggleClass("open", 100);
  });
});
