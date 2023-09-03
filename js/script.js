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

// アコーディオン

$(function () {
  // タイトルをクリックすると
  $(".js-accordion-title").on("click", function () {
    // クリックした次の要素を開閉
    $(this).next().slideToggle(300);
    // タイトルにopenクラスを付け外しして　−を表示
    $(this).toggleClass("open", 300);
  });
});

// モーダル
$(function () {
  "use strict";

  //モーダル表示
  if ($(".js-modal-target").length > 0) {
    $(".js-modal-target").modaal();
  }
  if ($(".js-modal-button-target").length > 0) {
    var target = $(".js-modal-button-target").data("modal");
    $(".js-modal-button-target").modaal({
      content_source: target,
    });
  }
})(jQuery);

$(".js-modal-close").on("click", function () {
  // モーダルを閉じる
  $(".modal").modaal("close");
});

$(".modal").modaal({
  type: "inline",
  hide_close: false, // 閉じるボタンの表示・非表示の制御する
  background: "#000000", // 背景オーバーレイの色を設定
  overlay_opacity: 0.8, // 背景オーバーレイの透明度を設定
  overlay_close: true, // 背景オーバーレイをクリックしてモーダルが閉じるかどうかの制御
  animation_speed: 300, // トリガーをクリックしてから、モーダルが表示されるまでのスピード
  background_scroll: false, // モーダルを開いている間、背景をスクロールできるかどうか
  width: 400, // モーダルの幅を設定
  height: 300, // モーダルの高さを設定
});
