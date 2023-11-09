window.onload = function(){
    console.log("ウィンドウを読み込みました")
    let canvas = $("#canvas_test"); //canvasのidを取得
    let ctx = canvas[0].getContext("2d"); //canvasが提供しているgetContext()というメソッドを利用。これを利用することでキャンバス上に図形やテキスト、画像などを描画できる ※getContext("2d")なので、今回の場合は2d描写
    let img=new Image(); //jsで画像データを扱うために利用するコード。js内で画像データを動的に扱うためのオブジェクトを作成
    console.log("変数を定義しました")
    // img.crossOrigin="anonymous";
    
    console.log("imgタグにsrcを指定します。")
    img.src="img/1.adventure mood.png";
    console.log("imgタグにsrcを指定しました。")

    img.onload=function(){ //画像が正常に読み込まれたときに実行する関数
        ctx.drawImage(img,0,0); //キャンバス上にimg変数に格納されている画像を描画。この画像はキャンバスの(0,0)の位置に描画される。
        console.log("画像を描画しました")
        window.localStorage["img"]=canvas[0].toDataURL();//キャンバスに描画された画像をimgというキーを使い、imgのデータURLを取得。
        console.log("画像をlocalstorageに保存しました。")
        // $("#canvas_test").attr("src",window.localStorage["img"]);    
    }

}



















// onload = function() {
//     draw();
//   };
  
//   function draw() {
//     var canvas = document.getElementById('rectangle');
//     if ( ! canvas || ! canvas.getContext ) {
//       return false;
//     }
//     var cvs = canvas.getContext('2d');
  
//     /* rectangle */
//     cvs.beginPath(); /* 図形を描き始めることを宣言 */
//     cvs.moveTo(50, 50); /* 図形の描き始めを移動 */
//     cvs.lineTo(150, 50); /* 図形の線の終わりを決める */
//     cvs.lineTo(150, 150);
//     cvs.lineTo(50, 150);
//     cvs.closePath(); /* 描いた線を閉じる */
//     cvs.stroke(); /* 描いた図形を線で表示させる */
//   }