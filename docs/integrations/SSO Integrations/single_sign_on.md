# SSO Integration

We at VERIS support SSO integration Using SAML2.0 and OPENID Connect. 


## Setup

It starts with a request from the client ones confirmed we create a SSO URL and  audience URI :
SSO URL:  https://**client-domain**/saml2/idpresponse   (if saml2)
Audience URI  : urn:amazon:cognito:sp:**client-userpoolid**

These are to be used  at client end to configure their AD. 

## Request from Client

Along with this we need few things from client side so at the time of Request we request a test user and how the credentials are mapped we basically ask for email and name and how they are mapped. 

## Client provide

Now Once above things are configured at clients end, we request a **meta data file** or a **url** which point to meta data file.
 once configured at our end we can test that with test user.

### we request to have a coordinated discussions for this integration.