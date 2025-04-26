Области хранения данных:

- база данных на json-server
- BFF (Backenmd For Frontend)
- Redux store

Сущности приложения:

- пользователь: БД(список пользователей), BFF(сессия текущего), store(отображение в браузере)
- роль пользователя: БД(список ролей), BFF(сессия пользователя с ролью), store(использование на клиенте)
- статья: БД(список статей), store(отображение в браузере)
- комментарии: БД(список комментариев), store(отображение в браузере)

Таблицы БД:

- пользователи - users: id / login / password / registred_at / role_id
- роли - roles: id / name
- статьи - posts: id / title / img_url / content / published_at
- комментарии - comments: id / author_id / post_id / content

Схема состояния на BFF:

- сессия текущего пользователя: login / password / role

Схема для Redux store(на клиенте):

- user: id / login / roleId
- posts[]: id / tit;e / imgUrl / publishedAt / commentsCount
- post: id / title / imgUrl / content / publishedAt / comments[]: id / author / content / publishedAt
- users[]: id / login / registredAt/ role
