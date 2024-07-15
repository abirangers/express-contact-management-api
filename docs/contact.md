# Contact  API Spec

## Create Contact API

Endpoint : POST /api/contacts

Headers :
- Authorization : token

Request Body :

```json
{
  "first_name" : "ahmad",
  "last_name" : "abby",
  "email" : "abby@gmail.com",
  "phone" : "0898129831"
}
```

Response Body Success : 

```json
{
  "data": {
    "id" : 1,
    "first_name" : "ahmad",
    "last_name" : "abby",
    "email" : "abby@gmail.com",
    "phone" : "0898129831"
  }
}
```

Response Body Error :

```json
{
  "errors": "Email is not valid format"
}
```

## Update Contact API

Endpoint : PUT /api/contacts/:id

Request Body :

```json
{
  "first_name" : "ahmad2",
  "last_name" : "abby2",
  "email" : "abby2@gmail.com",
  "phone" : "08981298312"
}
```

Response Body Success :

```json
{
  "data": {
    "id" : 1,
    "first_name" : "ahmad2",
    "last_name" : "abby2",
    "email" : "abby2@gmail.com",
    "phone" : "08981298312"
  }
}
```

Response Body Error :

```json
{
  "errors": "Email is not valid format"
}
```

## Get Contact API

Endpoint : GET /api/contacts/:id

Headers :
- Authorization : token

Response Body Success :

```json
{
  "data": {
    "id" : 1,
    "first_name" : "ahmad2",
    "last_name" : "abby2",
    "email" : "abby2@gmail.com",
    "phone" : "08981298312"
  }
}
```

Response Body Error :

```json
{
  "errors": "Contacts is not found"
}
```

## Search Contact API

Endpoint : GET /api/contacts

Headers :
- Authorization : token

Query params :
- name : Search by first_name or last_name, using like, optional
- email : Search by email using like, optional,
- phone : Search by phone using like, optional,
- page : number of page, default 1
- size : size per page, default 10

Response Body Success :

```json
{
  "data": [
    {
      "id" : 1,
      "first_name" : "ahmad2",
      "last_name" : "abby2",
      "email" : "abby2@gmail.com",
      "phone" : "08981298312"
    },
    {
      "id" : 2,
      "first_name" : "ahmad2",
      "last_name" : "abby2",
      "email" : "abby2@gmail.com",
      "phone" : "08981298312"
    }
  ],
  "paging": {
    "page": 1,
    "total_page": 3,
    "total_item": 30
  }
}
```

Response Body Error :

```json
{
  "errors": "Unauthorized"
}
```

## Remove Contact API

Endpoint : DELETE /api/contacts/:id

Headers :
- Authorization : token

Response Body Success :

```json
{
  "data": "OK"
}
```

Response Body Error :

```json
{
  "errors": "Contacts is not found"
}
```
