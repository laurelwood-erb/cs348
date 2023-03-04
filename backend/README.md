<!-- @format -->

### Setup

# 1. run `npm i` on the root level of the backend direcotyr

# 2. you must have mysql downloaded. You can download it from "https://dev.mysql.com/downloads/mysql/". Once downloaded, it will prompt you to set your password. Please replace DATABASE_PASSWORD in script/populate.js and script/tables.js.

# 3. run `node script/tables`. This will create all our tables.

# 4. run `node script/populate`. This will populate our data.

# 5. finally, run `node app.js` to start up the backend server. We have one endpoint `/api/query` which is a post request that will execute a query from the body. (query can be SELECT, INSERT, UPDATE, DELETE, etc).

# e.g. POST to http://localhost:8081/api/query with header set to { 'Content-Type': 'application/json' } and body set to { 'query': 'SELECT \* FROM airplane LIMIT 10' }
