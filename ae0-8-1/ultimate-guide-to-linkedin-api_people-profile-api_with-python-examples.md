Q Proxycurl Products v Solutions v Pricing v Blog FAQ Log in
d
s 4
Getting people profiles data via LinkedIn API - with python code examples
29 NOVEMBER 2023 / LINKEDIN API
Ultimate Guide To The LinkedIn API: People Profile
API (with Python Examples)
Steven Goh
[3] World's laziest CEO - Why else do you think I'm SHARE Ly
seeking to automate everything menial?
Subscribe to our newsletter
Enter your email
Get the latest news from Proxycurl
| Types of LinkedIn APIs
Official LinkedIn API
Proxycurl API
Summarizing the State of LinkedIn Profile APIs
Let's kick off this article with a demo. Run the following command to see what an enriched
LinkedIn profile looks like when accessed through a 3rd-party Linkedin API:
$ \
-G \
-H \
--data-urlencode
Impressed by what you see? This is a demonstration of the Proxycurl API in action. There exists
the official LinkedIn API, as well as third-party LinkedIn APIs like Proxycurl.
As the CEO of Proxycurl, and a coder myself, I've garnered a few years of experience dealing
with LinkedIn data. In this guide, | aim to equip you with a comprehensive understanding of
LinkedIn APIs, both official and 3rd-party alternatives. Expect a deep dive from both a technical
and business perspective.
Types of LinkedIn APIs
Official People
LinkedIn Proxycurl PhantomBuster Data
API Labs
Business v Vv v
Reliability
Minimum $x0000/mo $10/one- $56/mo $98/mo
Spend time
Legal Vv v
Compliance
Risk of your v
account
being
banned?
Availability v Vv
of fresh data (Profiles
no older
than 29
days)
Can you get v v Vv
started
immediately?
LinkedIn APIs fall into two categories: the official LinkedIn API and 3rd-party LinkedIn APIs.
To gain access to the official LinkedIn API, you must be a LinkedIn Partner. This means you, the
developer, and your associated business will need to navigate through administrative hoops for
several months in hopes of getting approved. One of the criteria for being approved as a
LinkedIn Partner is that you cannot be a competitor to LinkedIn in any way. So, if you are in an
industry like HR tech, building an application that might compete with an existing LinkedIn
product, you're out of luck.
As far as I'm aware, another requirement for being a LinkedIn Partner is that you need to be
paying five-digit monthly fees to LinkedIn.
At the other end of the spectrum, we have 3rd-party LinkedIn APIs. The world of third-party
LinkedIn APIs is like the wild west.
Some 3rd-party vendors, like PhantomBuster, require you to supply your own LinkedIn
account(s). PhantomBuster is a great choice if you want to automate actions within your own
LinkedIn account and aren't scared of having your personal LinkedIn account banned.
There are also vendors like People Data Labs (PDL), which have obtained bulk LinkedIn data
from various vendors and resell access to this combined LinkedIn profile database. The data
from such resellers often tend to be out-of-date.
Then, there are 3rd-party vendors that scrape LinkedIn. There are variations in this category too.
Some of these scraping vendors engage in fraudulent behavior, such as registering fake
accounts and using private throwaway debit cards to sign up for free Sales Navigator trials, and
then using such whitelisted accounts to scrape LinkedIn at scale. Meanwhile, some vendors
strictly work with publicly accessible LinkedIn profiles.
The ramifications are significant. On one hand, companies that engage in fraud have been sued
and shut down. On the other hand, companies that work exclusively with public LinkedIn
profiles operate within a legally tested framework for compliance.
Here's a quick recap with the comparison table:
Official People
LinkedIn Proxycurl PhantomBuster Data
API Labs
Business v Vv v
Reliability
Minimum $x0000/mo $10/one- $56/mo $98/mo
Spend time
Legal Vv v
Compliance
Risk of your v
account
being
banned?
Availability v Vv
of fresh data (Profiles
no older
than 29
days)
Can you get v v Vv
started
immediately?
Interested in learning more about 3rd-party Linkedin APIs? We've compared 7 top LinkedIn
scraping tools. You can read more about it.
Official LinkedIn API
What Can You Do with the Official LinkedIn API?
LinkedIn is a formidable professional social network that serves as a treasure trove of data for
professionals and job listings. This data is something that a recruitment tech startup or a sales
automation product would love to integrate into their offerings. LinkedIn recognizes its value
and closed public access to their API in 2015. To access the official LinkedIn API, you'll need to
become a LinkedIn Partner.
Once you become a LinkedIn Partner, you'll gain access to a subset of the following APIs:

1. Profile API: Allows access to a user's LinkedIn profile information. You can access basic
profile details, pictures, and headlines.

2. Connections API: Allows access to a user's LinkedIn network. You can retrieve the list of
a user's connections.

3. Share API: Allows you to post shares for authenticated members. You can share text,
URLs, and media.

4. Invitation API: Allows you to invite others to connect on LinkedIn.

5. Organization API: Allows you to retrieve organization and brand data.

6. UGC (User Generated Content) API: Allows you to retrieve, create, and manage rich,
multi-faceted content.

7. Compliance API: Allows you to report content that violates LinkedIn's Professional
Community Policies.

Getting Approved as a LinkedIn Partner
The LinkedIn Partner Program is open to four types of businesses:

1. Talent Solutions, for HR tech companies.

2. Marketing Solutions, for marketing automation companies.

3. Sales Navigator Application Development, for startups looking to enhance Linkedin
Sales Navigator.

4. LinkedIn Learning Integration, for content companies.

From what | understand, it's a long and arduous process to get a company approved as a
LinkedIn Partner. Your best bet is to select the category that best fits your company's offerings
and apply to become a LinkedIn Partner.

Most of the impressive LinkedIn API features also require a paid subscription to LinkedIn
Developer Enterprise Products.

Profile Enrichment with the Official LinkedIn API

Most companies will want to start with LinkedIn's Consumer Solutions Platform (CSP). When
you think of LinkedIn, you likely think of the rich and bountiful profiles, and CSP is your access
point to these alluring profiles.

There are only two features of the CSP that allow you to extract profile data from LinkedIn:

1. sign In with LinkedIn provides the authentication layer to your product by allowing
users to sign in with their professional LinkedIn profiles.

2. profile API returns structured data of a profile programmatically.

"Sign In with LinkedIn" OAuth

Sign In with LinkedIn is an OAuth provider for your application. Most people assume that if you
use Sign In with Linkedin, LinkedIn will provide every user's LinkedIn profile. However, this is not
the case. What can be returned are:

1. First/Last name

2. Email address

3. Profile picture

Also, there is a rate limit of see requests per day.

In my opinion, Sign In with LinkedIn offers very little utility for most applications because the key
data you want to extract is the user's LinkedIn profile, not general information about the user
devoid of any data from their LinkedIn profile.

Fetch Person Profile Data via the Official LinkedIn Profile API
There are two ways to fetch the data of a profile via the official LinkedIn API:

1. The first "Sign In With LinkedIn" method is free and available to most developers.
However, you must obtain permission from each profile you wish to extract into your
application.

2. The second "Profile API" method is only available to approved developers with a paid
subscription to LinkedIn's Consumer Solution Platform. This allows you to fetch profile
data from any profile ID.

Using the "Sign In With LinkedIn" Method
The first method requires you, the developer, to seek permission from the user who owns the
profile. To do that, LinkedIn requires you to fetch an access_token via 3-legged OAuth, a fancy
term describing a two-step process to obtain an access token.
Step 0: Obtaina CLIENT_ID and CLIENT_SECRET by creating an app on the Linkedin
Developers page. (You can find this page through a Google search)
Step 1: To get permission from a user, you will generate an authorization URL to send your user
to LinkedIn, where they can permit your application to download their profile.
In this case, you must provide a REDIRECT URI , the webpage to which LinkedIn will send the
user back after they have finished granting permission.
(0):
LI_AUTH_URL
url requests.Request( >» LI_AUTH_URL,
params={
: >
: LINKEDIN_CLIENT_ID,
: LINKEDIN_REDIRECT_URI,
: secrets.token_hex(8).upper(),
3 .join([ 5 >
}) .prepare().url
url
Step 2: After a user permits you to access their profile, you'll receive an authorization code.
With this code, you will exchange it for an access_token to access the user's profile.
(authorization_code):
LI_ACCESS_TOKEN_EXCHANGE_URL
access_token requests.post(LI_ACCESS_TOKEN_EXCHANGE_URL, params={
: >
: authorization_code,
: LINKEDIN_REDIRECT_URI,
: LINKEDIN_CLIENT_ID,
: LINKEDIN_CLIENT_SECRET,
}).3son()[ 1
access_token
Step 3: Fetch the user's profile.
(access_token):
LI_PROFILE_API_ENDPOINT
r = requests.get(LI_PROFILE_API_ENDPOINT, headers={
H access_token})
r.json()
The working Python code for this method can be found in our linkedin-api-python3-examples
GitHub repository.
Using the "Profile API" Method
The second method does not require you to seek permission from the user. However, your
application must be approved to use the People's Profile API endpoint with a 2-legged OAuth.
Step 0: In your pre-approved LinkedIn App, obtain the cLTeNT 10 and cLTENT SEcReT fields.
Step 1: Using your application's cLIENT_ID and CLIENT_SECRET , exchange for an
access_token.
0:
LI_ACCESS_TOKEN_EXCHANGE_URL
access_token =requests.post(LI_ACCESS_TOKEN_EXCHANGE_URL, params={
: >
: LINKEDIN_CLIENT_ID,
: LINKEDIN_CLIENT_SECRET,
}).3son()[ 1
access_token
Step 2: Fetch any profile with profile_id.
(access_token, profile_id):
LI_PROFILE_API_ENDPOINT {profile_i
r = requests.get(LI_PROFILE_API_ENDPOINT, headers={
3 access_token,
: 19)
r.json()
The working Python code for this method can be found in our linkedin-api-python3-examples
GitHub repository.
Proxycurl API
The Proxycurl API offers B2B enrichment services quite like the official LinkedIn API. In some
respects, it even surpasses the capabilities of the official LinkedIn API, though it does have its
restrictions. It's worth noting that Proxycurl works exclusively with public LinkedIn profiles.
The Proxycurl API provides the following functions:

1. People API: This feature enriches people's profiles, identifies people from emails or
names, searches for prospects, and retrieves profile pictures.

2. Company API: Enrich LinkedIn company profiles, fetch funding data, list and search
employees, identify companies, and obtain the employee count.

3. Contact API: Use this to fetch personal phone numbers, personal and work email
addresses, and social media profiles of anyone with a LinkedIn profile via Proxycurl's
Contact API.

4. Jobs API: This function fetches up-to-date job posting data.

5. School API: List students and enrich school profiles.

6. Search API: Perform advanced searches for people and companies.

Enrich Person Profile Data via Proxycurl's Person Profile
Endpoint
Negotiating the challenges of LinkedIn's API can be daunting. Thankfully, there's Proxycurl,
which provides its LinkedIn API so you can get everything that LinkedIn's official Profile API
offers, and a whole lot more. To see what data fields are supported, check out Proxycurl's
Person Profile API documentation.
To get profile data from any profile ID, you just need to follow one method.
Step 0: Get a Proxycurl API key by signing into Proxycurl with your work email address.
Step 1: Query the Person Profile Endpoint with a LinkedIn Profile URL.
requests
PROXYCURL_API_KEY
(profile_id):

api_endpoint

header_dic = { : PROXYCURL_API_KEY}

params {

B {profile_id}"',
}
response requests.get(api_endpoint,
params=params,
headers=header_dic)
response.json()
You can find the working Python code for this method in our linkedin-api-python3-examples
Github repository.
What if you don't have the user's LinkedIn profile URL?
For some industries, like recruitment tech, identifying profiles of interest is a necessary step
before profile enrichment. The current solution for the non-tech native involves purchasing
LinkedIn Sales Navigator and performing a Boolean search. However, Proxycurl offers a
"headless" equivalent known as the Search API.
To perform a Boolean search on the Person Search Endpoint and identify people living in the US
who have previously worked at Google as Software Engineers, use the following code:
requests

YOUR_API_KEY

headers {

: {YOUR_API_KEY}',

}

params {

: >
: H
: >
}
response requests.get( > h
response.status_code :
data response.json()
(data)
( {response.status_code}")
The response will include a linkedin_profile_url that you can use within the Person Profile
Endpoint for enrichment.
Advanced Proxycurl Features
Proxycurl supports some advanced features that the LinkedIn API does not natively support.
Fetching Contact Information
For many use-cases, the natural next step after enriching a profile is to reach out to the person.
Proxycurl's Contact API allows you to fetch three different types of contact information.

1. Work emails via the Work Email Lookup Endpoint.

2. Personal (free) emails via the Personal Email Lookup Endpoint.

3. Personal phone numbers via the Personal Contact Number Lookup Endpoint.

This contact information is not sourced from LinkedIn, but from a myriad of other external
sources.
Listing Employees or Students
You can also fetch (or search for) a list of employees from any target company or school. To get
a list of past or present employees, you can use Proxycurl's Employee Listing Endpoint. The
Student Listing Endpoint is available for listing graduates of any school organization.
Identifying Key People in a Company
With Proxycurl's Role Lookup Endpoint, you can easily identify the key people you need to
reach out to within any company.
Profile Pictures and Company Logos
This is a freebie from Proxycurl. You can get business logos of any company with Proxycurl's
Company Profile Picture Endpoint. Similarly, you can get profile pictures of any LinkedIn Profile
with the Person Profile Picture Fndnoint Roth of these API endnaoints are free
Q Proxycurl Products v Solutions v Pricing v Blog FAQ Log in
d
s 4
Getting people profiles data via LinkedIn API - with python code examples
29 NOVEMBER 2023 / LINKEDIN API
Ultimate Guide To The LinkedIn API: People Profile
API (with Python Examples)
Steven Goh
[3] World's laziest CEO - Why else do you think I'm SHARE Ly
seeking to automate everything menial?
Subscribe to our newsletter
Enter your email
Get the latest news from Proxycurl
| Types of LinkedIn APIs
Official LinkedIn API
Proxycurl API
Summarizing the State of LinkedIn Profile APIs
Let's kick off this article with a demo. Run the following command to see what an enriched
LinkedIn profile looks like when accessed through a 3rd-party LinkedIn API:
$ \
-G \
-H \
--data-urlencode
Impressed by what you see? This is a demonstration of the Proxycurl API in action. There exists
the official LinkedIn API, as well as third-party LinkedIn APIs like Proxycurl.
As the CEO of Proxycurl, and a coder myself, I've garnered a few years of experience dealing
with LinkedIn data. In this guide, | aim to equip you with a comprehensive understanding of
LinkedIn APIs, both official and 3rd-party alternatives. Expect a deep dive from both a technical
and business perspective.
Types of LinkedIn APIs
Official People
LinkedIn Proxycurl PhantomBuster Data
API Labs
Business v Vv v
Reliability
Minimum $x0000/mo $10/one- $56/mo $98/mo
Spend time
Legal Vv v
Compliance
Risk of your v
account
being
banned?
Availability v Vv
of fresh data (Profiles
no older
than 29
days)
Can you get v v Vv
started
immediately?
LinkedIn APIs fall into two categories: the official LinkedIn API and 3rd-party LinkedIn APIs.
To gain access to the official LinkedIn API, you must be a LinkedIn Partner. This means you, the
developer, and your associated business will need to navigate through administrative hoops for
several months in hopes of getting approved. One of the criteria for being approved as a
LinkedIn Partner is that you cannot be a competitor to LinkedIn in any way. So, if you are in an
industry like HR tech, building an application that might compete with an existing LinkedIn
product, you're out of luck.
As far as I'm aware, another requirement for being a LinkedIn Partner is that you need to be
paying five-digit monthly fees to LinkedIn.
At the other end of the spectrum, we have 3rd-party LinkedIn APIs. The world of third-party
LinkedIn APIs is like the wild west.
Some 3rd-party vendors, like PhantomBuster, require you to supply your own LinkedIn
account(s). PhantomBuster is a great choice if you want to automate actions within your own
LinkedIn account and aren't scared of having your personal LinkedIn account banned.
There are also vendors like People Data Labs (PDL), which have obtained bulk LinkedIn data
from various vendors and resell access to this combined LinkedIn profile database. The data
from such resellers often tend to be out-of-date.
Then, there are 3rd-party vendors that scrape LinkedIn. There are variations in this category too.
Some of these scraping vendors engage in fraudulent behavior, such as registering fake
accounts and using private throwaway debit cards to sign up for free Sales Navigator trials, and
then using such whitelisted accounts to scrape LinkedIn at scale. Meanwhile, some vendors
strictly work with publicly accessible LinkedIn profiles.
The ramifications are significant. On one hand, companies that engage in fraud have been sued
and shut down. On the other hand, companies that work exclusively with public LinkedIn
profiles operate within a legally tested framework for compliance.
