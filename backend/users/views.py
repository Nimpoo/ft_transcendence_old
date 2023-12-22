<<<<<<< Updated upstream
from django.shortcuts import render

# Create your views here.
=======
from django.http import HttpRequest, HttpResponse, HttpResponseBadRequest, HttpResponseNotAllowed
from .models import User

# Create your views here.
def connect(request: HttpRequest):
  token = request.headers.get('Authorization').split()[1]
  provider = request.headers.get('Provider')

  print(token, provider)

  if (token == None):
    return HttpResponseBadRequest("no token")

  if (provider == None):
    return HttpResponseBadRequest("no provider")

  if (provider == '42-school'):
    try:
      user = User.objects.get(fortytwo_token=token)
    except User.DoesNotExist:
      user = User(fortytwo_token=token)
      user.save()

  elif (provider == 'github'):
    try:
      user = User.objects.get(github_token=token)
    except User.DoesNotExist:
      user = User(github_token=token)
      user.save()

  elif (provider == 'discord'):
    try:
      user = User.objects.get(discord_token=token)
    except User.DoesNotExist:
      user = User(discord_token=token)
      user.save()

  else:
    return HttpResponseNotAllowed(f"the provider '{provider}' isn't available.")

  return HttpResponse(user.nickname)
>>>>>>> Stashed changes
