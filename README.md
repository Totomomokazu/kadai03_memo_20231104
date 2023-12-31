# insta

## DEMO

  - デプロイしている場合はURLを記入（任意）

## 紹介と使い方

  - インスタグラムをイメージして作成しました
  - ファイルアップロードエリアでドラッグアンドドロップすると画像をアップロードできます。
  - また、画像へのコメントも残せます。
  - 画像とコメントをlocalstorageに保存し、投稿された画像とコメントを閲覧できます。
  - 本当は投稿された画像とコメントに「いいね！」ボタンを押すと、いいね数がカウントされます。
  - いいねした内容に沿ってレコメンドがされる想定です。

## 工夫した点

  - localStorageに保存するキーをカウントした数字にし、画像とコメントを一緒に保存できるようにしました。
  - 画像とコメントを一緒に扱えるようにjson形式に変換するコードを書きました
  - 画像を保存できるようにbase64を使いました
  - いいねボタンを押下するとカウントされるようになりました。
  - いいねした内容に沿ってレコメンドがされます。

## 苦戦した点

  - ファイルアップロードのコード作成に時間がかかりました。chatGPTにお世話になりました。
  - いいねボタンをカウントさせるのが難しかったです。
  - レコメンドロジックの作り込みが難しかったです。かなりChatGPTと議論しながら作りました。
  - localstorageに格納されている関数が奇数の場合の、偶数の場合でレコメンドされる内容を分解するためにif文、関数、forを使えばロジックを作れることがわかりました。

## 参考にした web サイトなど

  - ChatGPT
  - localStotageで複数のデータを保存する方法
  - https://www.tam-tam.co.jp/tipsnote/javascript/post5978.html
  - https://qiita.com/w-tdon/items/81034bd3006806f7d7c3
  - 画像をjson形式にして保存する方法
  - https://www.en-pc.jp/tech/base64.php
  - https://qiita.com/shimtaro_sakai/items/c29cf477503bd157632d
  - ドラッグアンドドロップによるデータの受け渡し
  -   https://javascript.keicode.com/webapi/drag-and-drop.php
  -   写真を1MB以下にする方法
  -   https://azby.fmworld.net/support/corner/denki/028/
  -   ファイルAPI
  -   https://html5exam.jp/measures/dojo_1_08.html
