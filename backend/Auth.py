# import jwt
# from requests import request


# def get_user_details(self, response):
#         # Obtain JWT and the keys to validate the signature
#         id_token = response.get('id_token')
#         audience = self.setting('SOCIAL_AUTH_AUTH0_KEY')  # CLIENT_ID
#         jwks = request.urlopen(
#             'https://' + self.setting('SOCIAL_AUTH_AUTH0_DOMAIN') + '/.well-known/jwks.json')
#         issuer = 'https://' + self.setting('SOCIAL_AUTH_AUTH0_DOMAIN') + '/'

#         payload = jwt.decode(id_token, jwks.read(), algorithms=[
#                              'RS256'], audience=audience, issuer=issuer)

#         return {
#             'username': payload['nickname'],
#             'first_name': payload['name'],
#             'picture': payload['picture'],
#             'user_id': payload['sub'],
#             'role': payload['https://dev-o0hx8kbg.us.auth0.com/roles']
#         }

import requests
import json

url = "https://login.auth0.com/api/v2/roles/rol_Ju0Tv1HHkm4icsYh/users"
acesss_token = 

payload = json.dumps({
  "users": [
   "auth0|655c7eb631108fd1ba15efcd"
  ]
})
headers = {
  'Content-Type': 'application/json',
  'Authorization': f'Bearer {access_token}'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)