# Memberbook integration using Ingest API

This document contains brief description of active directory integration using API based Push where the client push the data using our API.

### Step 1: Creating the Access token
 ```
 curl --location --request GET
'https://********.veris.in/access-token' \
--header 'client_id: <client_id>' \
--header 'client_secret: <client_secret>' \
--header 'x-api-key: <Token>'
```

**Expected Response:**
```
Status Code: 200
Json Response: {
"Status": "Sucess",
"AccessToken": <Access_token>,
"ValidTill": <valid_till>
}
```
The Access token is valid for 15 mins only.
The quota for this API is only 150 hits per day. It is recommended to fetch the access token only
when the previous one expires.

### Step 2: Sending member details
```
curl --location --request POST
'https://********.veris.in/members' \
--header 'Authorization: bearer <Access_token>' \
--header 'Content-Type: application/json' \
--data-raw '[{"first_name": "test", "last_name": "test",
"designation": "Project Manager", "email":
"test@veris.in", "phone": "Not Mandatory", "city":"test", "country":"India","status":
"active/in_active","unique_id": "test"}]'
```

**Expected Response**: 
```
Status Code: 200
JSON Response: {“OK”}
```
**Note :** The Credentials required can be obtained from Veris. They are client_id and client_secret.


#### Mandatory Fields:

| Field           | Data                         |
|-----------------|------------------------------|
|first_name:      |`"John"`                      |
|last_name:       |`"Doe"`                       |          
|designation:     |`"String type max length 128"`|
|email:           | `"adsd@veris.in"`            |
|country:         |`"String type, max length 64"`|
|status:          |`“active/in_active” (one of active or in_active) `|
|unique_id:       |`“String type, can be email” `|

#### Other required fields

| Field           | Data                         |
|-----------------|------------------------------|
|group:           |`“String type,example: 4.4A”` |
|department       | `“String type,example: Logistics” `|
