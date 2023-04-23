// Fix DOM matches function
if (!Element.prototype.matches) {
  Element.prototype.matches =
    Element.prototype.matchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector ||
    Element.prototype.oMatchesSelector ||
    Element.prototype.webkitMatchesSelector ||
    function(s) {
      var matches = (this.document || this.ownerDocument).querySelectorAll(s),
        i = matches.length;
      while (--i >= 0 && matches.item(i) !== this) {}
      return i > -1;
    };
}

// Get Scroll position
function getScrollPos() {
  var supportPageOffset = window.pageXOffset !== undefined;
  var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");

  var x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
  var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;

  return { x: x, y: y };
}

var _scrollTimer = [];

// Smooth scroll
function smoothScrollTo(y, time) {
  time = time == undefined ? 500 : time;

  var scrollPos = getScrollPos();
  var count = 60;
  var length = (y - scrollPos.y);

  function easeInOut(k) {
    return .5 * (Math.sin((k - .5) * Math.PI) + 1);
  }

  for (var i = _scrollTimer.length - 1; i >= 0; i--) {
    clearTimeout(_scrollTimer[i]);
  }

  for (var i = 0; i <= count; i++) {
    (function() {
      var cur = i;
      _scrollTimer[cur] = setTimeout(function() {
        window.scrollTo(
          scrollPos.x,
          scrollPos.y + length * easeInOut(cur/count)
        );
      }, (time / count) * cur);
    })();
  }
}


// このコードは、次の3つの関数を定義している。

// １）Fix DOM matches function（DOMマッチング関数の修正）：
// 　要素の matches メソッドが定義されていない場合に、標準の matchesSelector メソッドや
//  ベンダー固有のメソッドを使用して、指定されたセレクターに要素が一致するかどうかを確認する。

// ２）Get Scroll position（スクロール位置を取得する）：
// 　windowオブジェクトのページオフセットと、CSS1互換モードの設定を確認して、
// 　ページのスクロール位置を取得します。

// ３）Smooth scroll（スムーズスクロール）：
// 　アニメーション的にページをスクロールする関数。
// 　アニメーションを60フレーム（count）で分割し、カウントごとにスクロール位置を変更し、
// 　ページのスムーズなスクロールを実現する。
// 　この関数は、スクロールする位置と時間を引数として受け取り、時間が指定されていない場合は
// 　500msでスクロールする。
