#
# This is sample implementation with cookies
# Request POST, GET
# Login and get data
#

import json
import requests

# request post (login)
url = 'http://localhost:3000/api/v2/login'
payload = {"session":{"email":"email@domain.com","password":"123456"}}
headers = {'content-type': 'application/json'}
response = requests.post(url, data=json.dumps(payload), headers=headers)
token = response.cookies["remember_token"]


# request get data
url = 'http://localhost:3000/api/v1/contents'
cookies = { 'remember_token': token }
r = requests.get(url, cookies=cookies) #get with cookies
r.json()
