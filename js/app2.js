// alert("チェック")

// グルーバル変数の宣言
const droparea = $("#droparea"); //ドロップエリアのオブジェクト情報を取得
const comment=$("#comment"); //コメントのオブジェクト情報を取得
const preview=$("#preview"); //プレビューエリアのオブジェクト情報を取得
let filedata=null; //ファイルデータを入れる関数
let count=0; //ドラッグアンドドロップした回数をカウントする用の変数

console.log("変数の定義成功")

$(document).ready(function(){
    // ドラッグイベントのデフォルト動作をキャンセル
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(function(eventName) {
        droparea.on(eventName, function(e) {
            e.preventDefault();
        });
    });
    console.log("デフォルトのドラッグイベントのキャンセルに成功")

    //ファイルがドロップされた時の処理
    droparea.on("drop",function(e){ //dropareaで"drop"イベントが発生した場合
        let files = e.originalEvent.dataTransfer.files; 
        //originalEventでdropイベントが起きたことを指定
        //dataTransferでドラッグアンドドロップされたデータ取得
        //filesで取得したデータがアイテムの場合、それぞれのファイルのリストを保持。ファイルAPIというやつらしい
        console.log("画像のドロップに成功")

        if(files.length>0){ //fileが1つ以上あるかチェック
            filehandle(files[0]); //filehandle関数を実行する。引数にfiles[0]を代入
        }

    });

    //ドロップされたファイルの処理
    function filehandle(file){
        const reader = new FileReader();//ファイルAPIの呼び出し
        console.log("ファイルAPIの読み出し")
        reader.readAsDataURL(file) //FileReaderのメソッドを呼び出し、fileの内容を読み込む.これが実行されたらonloadが開始される
        console.log("ファイルの読み込み")
        reader.onload = function(e){ //ファイルの読み込みが完了した時に実行されるイベント
            preview.attr("src",e.target.result).show()
            console.log("プレビュー表示")
            //attrでsrc 属性の値にe.target.resultを代入
            //target.resultにより読み込んだファイルの取得
            //show()でpreview領域がdisplay:noneであっても表示できる
            filedata=e.target.result //読み込んだファイルデータをfileDataという変数で保存
            console.log("ファイルの一時保存")
        };
    }
    
    //postボタンを押されたときの処理
    $("#post").on("click",function(){

        if(filedata && comment.val()){
            let obj ={} //画像とコメントを格納する用のobjectを作成
            count ++ //アップロードされた回数をカウント。これがlocalstorageに入れるキーになる
            console.log("postボタン押下後の変数定義に成功")

            obj={
                img:filedata,
                comment:comment.val()
            }
            console.log("objへの代入に成功")
       
            localStorage.setItem(count.toString(),JSON.stringify(obj));
            console.log("localstrageへの保存に成功")
        }else{
            alert("画像とコメントを入力してください。")
        }
    })
})


