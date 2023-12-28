from django.http import JsonResponse, HttpRequest
from django.views.decorators.csrf import csrf_exempt
from .models import User
import jwt, requests, os

@csrf_exempt
def connect(request: HttpRequest) -> any:

  # ? Is method allowed
  if request.method != 'POST':
    return JsonResponse({ 'error': 'Method Not Allowed', 'message': 'this uri accept only POST.' }, status=405)


  # ? Is jwt valid
  try:
    data = jwt.decode(request.body, os.environ['JWT_SECRET'], algorithms=['HS256'])
  except jwt.DecodeError:
    return JsonResponse({ 'error': 'Forbidden', 'message': 'the given jwt is not valid.' }, status=403)

  token = data['access_token']
  provider = data['provider']
  provider_id = data['providerAccountId']


  # ? Is there all needed variables
  if (token == None):
    return JsonResponse({ 'error': 'Bad Request', 'message': 'no token.' }, status=400)

  if (provider == None):
    return JsonResponse({ 'error': 'Bad Request', 'message': 'no provider.' }, status=400)

  if (provider_id == None):
    return JsonResponse({ 'error': 'Bad Request', 'message': 'no provider id.' }, status=400)


  # * Provider and user check
  if (provider == '42-school'):

    response = requests.get('https://api.intra.42.fr/v2/me', headers={ 'Authorization': f'Bearer {token}' })
    if response.status_code != 200:
      return JsonResponse({ 'error': 'Forbidden', 'message': 'the given token is not valid.' }, status=403)

    try:
      data = response.json()
    except:
      return JsonResponse({ 'error': 'Gone', 'message': 'something went wrong, try again later.' }, status=410)

    if str(data['id']) != provider_id:
      return JsonResponse({ 'error': 'Forbidden', 'message': 'given id not valid.' }, status=403)

    try:
      user = User.objects.get(fortytwo_id=provider_id)
    except User.DoesNotExist:
      user = User(fortytwo_id=provider_id)
      user.save()

  elif (provider == 'github'):

    response = requests.get('https://api.github.com/user', headers={ 'Authorization': f'Bearer {token}' })
    if response.status_code != 200:
      return JsonResponse({ 'error': 'Forbidden', 'message': 'the given token is not valid.' }, status=403)

    try:
      data = response.json()
    except:
      return JsonResponse({ 'error': 'Gone', 'message': 'something went wrong, try again later.' }, status=410)

    if str(data['id']) != provider_id:
      return JsonResponse({ 'error': 'Forbidden', 'message': 'given id not valid.' }, status=403)

    try:
      user = User.objects.get(github_id=provider_id)
    except User.DoesNotExist:
      user = User(github_id=provider_id)
      user.save()

  elif (provider == 'discord'):

    response = requests.get('https://discord.com/api/users/@me', headers={ 'Authorization': f'Bearer {token}' })
    if response.status_code != 200:
      return JsonResponse({ 'error': 'Forbidden', 'message': 'the given token is not valid.' }, status=403)

    try:
      data = response.json()
    except:
      return JsonResponse({ 'error': 'Gone', 'message': 'something went wrong, try again later.' }, status=410)

    if str(data['id']) != provider_id:
      return JsonResponse({ 'error': 'Forbidden', 'message': 'given id not valid.' }, status=403)

    try:
      user = User.objects.get(discord_id=provider_id)
    except User.DoesNotExist:
      user = User(discord_id=provider_id)
      user.save()


  else:
    return JsonResponse({ 'error': 'Forbidden', 'message': 'the given provider is not valid.' }, status=403)


  # * Send back his nickname
  return JsonResponse({ 'nickname': user.nickname })