import requests

# Auth0 application credentials
client_id = 'QRJtB4IPy7p3JblHSuR6tysGRLhHalaG'
client_secret = 'BqbeBQtoITJwv5_qno5FwExKqtGCPaGXeCqrd2Fgu_3xi25s6A6UcOav8u2bka_d'
redirect_uri = 'http://localhost:3000/'

# Authorization endpoint URL
authorization_url = 'https://dev-wk502078emf2n02u.us.auth0.com/authorize'

# Token endpoint URL
token_url = 'https://dev-wk502078emf2n02u.us.auth0.com/oauth/token'

# Redirect the user to the Auth0 login page
auth_url = f'{authorization_url}?client_id={client_id}&redirect_uri={redirect_uri}&response_type=code&scope=openid%20profile&audience=your_api_audience'
print(f'Redirect the user to: {auth_url}')

# After the user logs in, Auth0 will redirect back to your specified redirect URI with an authorization code

# Exchange the authorization code for an access token
auth_code = 'code_received_from_auth0'
token_payload = {
    'grant_type': 'authorization_code',
    'client_id': client_id,
    'client_secret': client_secret,
    'redirect_uri': redirect_uri,
    'code': auth_code
}

token_response = requests.post(token_url, data=token_payload)

token_data = token_response.json()

# Check if the response contains an access token
if 'access_token' in token_data:
    access_token = token_data['access_token']
    print(f'Access Token: {access_token}')
else:
    print(f'Error: The response does not contain an access token. Response: {token_data}')

# Now you can use the access token in your requests to secure endpoints
