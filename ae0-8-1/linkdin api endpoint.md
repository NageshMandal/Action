i kh L383 J = /
7 Fo af
i \ ¥ X
Lo ae a
| Register now > | [ oo V
B® | Learn Discover v Product documentation v Development languages + Topics Q signin
LinkedIn Compliance Consumer Learning Marketing Sales Talent
~+/ Compliance API Partner Program / Compliance Snapshot API / ®
Article + 05/09/2023 + 10 contributors & Feedback
In this article
Usage
Retrieve Current Member's Profile
Retrieve Other Member's Profile
Field Selections
Show 4 more
© Note
The use of this API is restricted to those developers approved by LinkedIn and subject
to applicable data restrictions in their agreements.
The Profile API returns a member's LinkedIn profile, subject to the member's privacy
settings.
Usage
You must use an access token to make an authenticated call on behalf of a user.
© Note
You may only store data returned from the Profile API for the authenticated members
with their permission. Please refer to this document for guidance on storing
authenticated member data. You may never store data returned from the Profile API
for members other than the authenticated member.
. f .
Retrieve Current Member's Profile
Permissions
This API requires one of the following permissions:
2 Expand table
Permission Description
r liteprofile Required to retrieve name and photo for the authenticated user. Please review Lite
Profile Fields.
r_basicprofile Required to retrieve name, photo, headline, and vanity name for the authenticated
user. Please review Basic Profile Fields. Note that the v2 r_basicprofile permission
grants only a subset of fields provided in v1.
r_compliance [Private permission] Required to retrieve your activity for compliance monitoring and
archiving. This is a private permission and access is granted to select developers.
Request
To identify and retrieve the current member's profile based on the access token, simply
call:
https B copy
GET https://api.linkedin.com/v2/me
Sample Response
JSON D copy
{
“firstName":{
"localized": {
"en_US": "Bob"
13
“preferredLocale”:{
“country”: "Us",
SZ Filter by title Henge ET
}
13
Overview "localizedFirstName”: "Bob",
~ Compliance API Partner Program “headline”: {
"localized": {
Overview "en_US":"API Enthusiast at LinkedIn"
~ Compliance Snapshot API 3s
"preferredLocale”:{
Compliance Snapshot Overview API “country”: "US",
~ Integrations D lpctzeei hen
~ People Guide 1,
Profile API “localizedHeadline"”: "API Enthusiast at LinkedIn",
“vanityName”: “"bsmith",
Find Profile by VanityName API id": "yrzcpjazi2”,
i} "lastName": {
Profile Edit API "localized": {
Primary Contact API "en_US": "Smith"
. 13
Connections API “"preferredLocale”:{
Member Rich Content API “country”: "Us",
“language”: "en"
> Reputation Guide 1
> Share and Social Action Guide Loo
“localizedLastName”: "smith",
> Organizations Guide “profilePicture”: {
» Invitations Guide , displayImage": "urn:li:digitalmediaAsset:CADOOAAAADBCDEFGhi]
> Groups Guide }
> Messaging Guide
> Industries Guide
_ . f .
i Download POF Retrieve Other Member's Profile
To retrieve another member's profile, you will need access to the person 1D, available only
via certain limited access APIs and subject to member privacy settings.
https D copy
GET https://api.linkedin.com/v2/people/ (id: {person ID})
You can also retrieve multiple profiles at once:
https D copy
GET https://api.linkedin.com/v2/people?ids=List((id: {Person ID1}), (id: {Person ID2
© Note
In order to make the sample calls above succeed, you must include x-RestLi-
Protocol-Version:2.0.@ in your request header.
This API will only return data for members who haven't limited their Off-LinkedIn
Visibility 2.
Field Selections
By default, only the Lite Profile Fields are returned for a profile request. See the Profile
Fields document for a full list of supported fields.
To request more or less fields, you must have additional permissions that are only granted
to select partners. Please refer to the field projections on proper syntax. Below is a sample
request:
https B copy
GET https://api.linkedin.com/v2/people/(id: {profile ID})?projection=(id,firstName
Person ID
The id returned in the response is the unique identifier of the user. This should be stored
and referenced where possible as Linkedin APIs utilize both URNs and IDs. In our API
documentation, we reference this id as person ID.
© Note
Each member id is unique to the context of your application only. Sharing a person
1D across applications will not work and result in a 404 error.
Public Profile URL
The vanityName from Basic Profile Fields is used to represent the public profile URL in the
follow format: www. linkedin.com/in/{vanityName} .
New Location Display Name
The geolocation from Location Fields is the new location field. As LinkedIn transitions
through the Bing Geo location migration, we will try to maintain backwards compatibility
with the legacy location and locationName field as much as possible.
© Note
All use of the Microsoft Bing Maps location data is subject to Microsoft Bing Maps
and MapPoint Web Service End User Terms of Use and Embedded Maps Service
Terms of Use? and the Microsoft Privacy Statement. By accessing any Microsoft
Bing Maps location data, you are agreeing to be bound by these Microsoft terms.
To determine a member's profile location, refer to the geolocation field. If the
autoGenerated field is false, then the member's location has already migrated to Bing Geo
taxonomy. This means that the most up-to-date display name is retrieved from geo field in
geolocation. If the field is true, then you can rely on either location or geo in
geolocation.
In order to get the display name from the geo URN value of geo field, please use the Geo
APL. Alternatively, you can utilize decoration in your Profile request:
https D copy
GET https://api.linkedin.com/v2/me?projection=(geoLocation(geo~,autoGenerated))
GET https://api.linkedin.com/v2/people/(id: {person ID})?projection=(geolocation(g
JSON B copy
{
“geolocation”: {
"geo": "urn:li:geo:12345",
"autoGenerated”: false,
"geo~": {
"id": 12345,
“defaultLocalizedName": {
“locale”: {
“country”: "US",
“language”: "en"
18
"value": "San Francisco Bay Area"
}
}
}
}
Legacy Location Display Name
The location from Profile Fields contains several fields that are used to determine the
member's displayed location nam
If the userSelectedGeoPlaceCode is present, then you will need to call Places API - GET to
retrieve the name. To use the API, you will need to translate the countrycCode to a
countryURN by simply appending urn:1i:country: in front of the code. See below for an
example:
JSON D copy
{
"location": {
“postalCode”: "12345",
“standardizedlocationUrn™:"urn:1i:standardizedLocationKey: (us,12345)",
“userSelectedGeoPlaceCode": "1-1-0-23-30",
“countryCode": "us"
}
}
https D copy
GET https://api.linkedin.com/v2/places/country=urn:1i:country:us&placeCode=1-1-0-
If the userSelectedGeoPlaceCode is NOT present, then you will need to call Regions API -
FINDER standardizedLocation to retrieve the name. To use the API, you will input the
standardizedLocationUrn Value into the standardizedLocation parameter. See below for an
example:
JSON B copy
{
"location": {
“postalCode”: "12345",
“standardizedlocationUrn™:"urn:1i:standardizedLocationKey: (us,12345)",
“countryCode": "us"
}
}
https D copy
GET https: //api.linkedin.com/v2/regions?q=standardizedLocation&standardizedLocati
Once you make the appropriate request, you can simply retrieve the display location name
from the value of the name field for each respective API.
Feedback
PR
Provide product feedback
® English (United States) Your Privacy Choices 3% Theme
Previous Versions ~~ Blogs? ~~ Contribute Privacy” ~~ Terms of Use ~~ Trademarks & © Microsoft 2024
