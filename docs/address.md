# Address  API Spec

## Create Address API

Endpoint : POST /api/contacts/:contactId/addresses

Headers :
- Authorization : token

Request Body :

```json
{
  "street": "Jalan Melati",
  "city": "Bogor",
  "province": "Jawa Barat",
  "country": "Indonesia",
  "postal_code": "16810"
}
```

Response Body Success : 

```json
{
  "data": {
    "id": 1,
    "street": "Jalan Melati",
    "city": "Bogor",
    "province": "Jawa Barat",
    "country": "Indonesia",
    "postal_code": "16810"
  }
}
```

Response Body Error :

```json
{
  "errors": "Country is required"
}
```

## Update Address API

Endpoint : PUT /api/contacts/:contactId/addresses/:addressId

Request Body :

```json
{
  "id": 1,
  "street": "Jalan Melati",
  "city": "Bogor",
  "province": "Jawa Barat",
  "country": "Indonesia",
  "postal_code": "16810"
}
```

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "street": "Jalan Melati",
    "city": "Bogor",
    "province": "Jawa Barat",
    "country": "Indonesia",
    "postal_code": "16810"
  }
}
```

Response Body Error :

```json
{
  "errors": "Email is not valid format"
}
```

## Get Address API

Endpoint : GET /api/contacts/:contactId/addresses/:addressId

Headers :
- Authorization : token

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "street": "Jalan Melati",
    "city": "Bogor",
    "province": "Jawa Barat",
    "country": "Indonesia",
    "postal_code": "16810"
  }
}
```

Response Body Error :

```json
{
  "errors": "Contacts is not found"
}
```

## List Addresses API

Endpoint : GET /api/contacts/:contactId/addresses

Headers :
- Authorization : token

Response Body Success :

```json
{
  "data": [
    {
      "id": 1,
      "street": "Jalan Melati",
      "city": "Bogor",
      "province": "Jawa Barat",
      "country": "Indonesia",
      "postal_code": "16810"
    },
    {
      "id": 2,
      "street": "Jalan Melati",
      "city": "Bogor",
      "province": "Jawa Barat",
      "country": "Indonesia",
      "postal_code": "16810"
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
  "errors": "contact is not found"
}
```

## Remove Address API

Endpoint : DELETE /api/contacts/:contactId/addresses/:addressId

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
  "errors": "Address is not found"
}
```
