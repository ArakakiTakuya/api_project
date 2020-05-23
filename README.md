# Gurume API

Gurume API shows information of restaurants.

「このリポジトリは Code Chrysalis の生徒であるときに作成しました（This was created during my time as a student at Code Chrysalis）」
Japanes description is below.

## To Get Started

Before starting to use it, you need to set up Postgres which is one of the open source databases.

1. install Postgres

2. create database. For database name, anything is fine.

3. create config file for your database.

This is a sample. Use it, and rewrite some points if you need to do so.

```
module.exports = {
  // database connection configs
  db: {
    client: "pg",
    connection: process.env.DB_URL || {
      host: process.env.DB_HOST || "127.0.0.1",
      port: process.env.DB_PORT || 5432,
      database: process.env.DB_NAME || "soloproject", // put your database name
      user: process.env.DB_USER || "postgres", // put your user name of Postgres, default is postgres.
      password: process.env.DB_PASSWORD || "postgres", // put your password of Postgres, default is postgres.
    },
  },
};
```

4. yarn or yarn install

install packages

5. yarn migrate

You can create table in your database.

6. In Postres, type \i /put/correct/path/insert_restaurants.sql

You can insert data into your table you created before.

7. yarn start

start server, Go to http://localhost:3000

## endpoint

GET http://localhost:3000/api/restaurants

GET http://localhost:3000/api/restaurants/:budget

POST http://localhost:3000/api/restaurants

PATCH http://localhost:3000/api/restaurants/:id

DELETE http://localhost:3000/api/restaurants/:id

# Gurume API

グルメ API はレストランの情報を表示します。

#　最初に

まずはオープンソースのデータベースの１つである Postgres をインストールする必要があります。

1. Postgres をインストールしてください。

2. Postgres 内にデータベースを作ってください。データベース名はなんでも可能です。

3. config.js を作ってください。　上記のコードを参考にしてください。

4. yarn or yarn install

パッケージをインストールしてください。

5. yarn migrate

データベース内に restaurants というテーブルができます。

6. In Postres, type \i /put/correct/path/insert_restaurants.sql

さきほど作ったデータベースにデータを挿入します。 insert_restaurants.sql までのパスを正しく入れてください。

7. yarn start

サーバーを起動します。 http://localhost:3000へ行ってください。

## エンドポイント

GET http://localhost:3000/api/restaurants

GET http://localhost:3000/api/restaurants/:budget

POST http://localhost:3000/api/restaurants

PATCH http://localhost:3000/api/restaurants/:id

DELETE http://localhost:3000/api/restaurants/:id
