# DATABASE

This folder should contain your DB conneciton logic and query logic.

Ideally, you would have queries and connection separated and contained by data domain.

- db - handles the connection/auth with the DB.
- users - handles all logic with the user table as the primary table
- roles - handles CRUD queries user roles
- widgets - handles CRUD queries for widgets
- doodads - handles CRUD queries for doodads

This does not prevent table `JOIN`s, but rather gives your fellow developers a place to look for specific data queries.