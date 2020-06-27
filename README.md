# tomtsutom.com

tomtsutomの個人的なページのソースコード

## 環境構築

- node.jsをインストールします。
  ```bash
  brew install node  # Macの場合
  ```

- yarnをインストールします。
  ```bash
  npm install -g yarn
  ```

- 依存関係を解決します。
  ```bash
  yarn install
  ```

- ローカル用のサーバーを立ち上げます。
  ```bash
  yarn start
  ```

  以下のように表示されたら成功です。指示の通りブラウザで `http://localhost:3000` へアクセスしましょう。
  ```
  Compiled successfully!

  You can now view tomtsutom in the browser.

    Local:            http://localhost:3000
    On Your Network:  http://<your LAN address>:3000

  Note that the development build is not optimized.
  To create a production build, use yarn build.
  ```
