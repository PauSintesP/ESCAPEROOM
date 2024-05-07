import requests

response = requests.get('localhosts:3000/intro')

# Ensure the request was successful
if response.status_code == 200:
    data = response.json()
    print(data)
else:
    print(f"GET request failed with status code: {response.status_code}")