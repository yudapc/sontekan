import json
import requests

url = 'http://localhost:3000/api/v2/login'
payload = {"session":{"email":"email@domain.com","password":"123456"}}
headers = {'content-type': 'application/json'}
response = requests.post(url, data=json.dumps(payload), headers=headers)
token = response.cookies["remember_token"]
url = 'http://localhost:3000/api/v1/contents'
cookies = { 'remember_token': token }
r = requests.get(url, cookies=cookies)
r.json()
