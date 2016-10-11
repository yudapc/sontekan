#
# This is sample implementation
# Request POST, GET, PUT, DELETE
# Login and get data
# source: http://docs.python-requests.org/en/master/user/quickstart/
#

import requests

# GET
r = requests.get('https://api.github.com/events')
r.status_code # get status code
r.headers # respon header

# POST
r = requests.post('http://httpbin.org/post', data = {'key':'value'})

# PUT
r = requests.put('http://httpbin.org/put', data = {'key':'value'})

# DELETE
r = requests.delete('http://httpbin.org/delete')

# HEAD
r = requests.head('http://httpbin.org/get')

# OPTIONS
r = requests.options('http://httpbin.org/get')


# GET with parameters
payload = {'key1': 'value1', 'key2': 'value2'}
r = requests.get('http://httpbin.org/get', params=payload)
print(r.url) # http://httpbin.org/get?key2=value2&key1=value1

# GET with parameters 2 (Array/Nested) parameters
payload = {'key1': 'value1', 'key2': ['value2', 'value3']}
r = requests.get('http://httpbin.org/get', params=payload)
print(r.url) # http://httpbin.org/get?key1=value1&key2=value2&key2=value3


# RESPONSE
r = requests.get('https://api.github.com/events')
r.text # response with text
r.json # response json


# Custom Header
url = 'https://api.github.com/some/endpoint'
headers = {'user-agent': 'my-app/0.0.1'}
r = requests.get(url, headers=headers)

# POST a Multipart-Encoded File
url = 'http://httpbin.org/post'
files = {'file': open('report.xls', 'rb')}
r = requests.post(url, files=files)
r.text
