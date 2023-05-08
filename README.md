# ローカルで試す

npm install と .env ファイルの設定が必要です

## env の設定

.env を .env.example を参考に設定します
<br>note: apollo key, apollo graph ref の設定は apollo の拡張を機能させるものなので不要です

1. prisma の database url を設定します

---

2. firebase の設定
   - firebase の基本的な登録はこれが分かりやすそうです
     https://zenn.dev/tentel/articles/cc76611f4010c9
   - authentication には google とメール・パスワードを設定してください
