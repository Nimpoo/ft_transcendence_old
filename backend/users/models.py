from django.db import models
<<<<<<< Updated upstream

# Create your models here.
=======
from django.utils import timezone
from random_username.generate import generate_username

def random_username():
  return generate_username()[0]

# Create your models here.
class User(models.Model):
  nickname = models.CharField(max_length=30, default=random_username)

  fortytwo_token = models.CharField(max_length=70, null=True)
  fortytwo_refresh_token = models.CharField(max_length=70, null=True)

  github_token = models.CharField(max_length=70, null=True)
  github_refresh_token = models.CharField(max_length=70, null=True)

  discord_token = models.CharField(max_length=70, null=True)
  discord_refresh_token = models.CharField(max_length=70, null=True)

  dfa_secret = models.CharField(max_length=50, null=True)

  created_at = models.DateTimeField("date published", default=timezone.now)
>>>>>>> Stashed changes
