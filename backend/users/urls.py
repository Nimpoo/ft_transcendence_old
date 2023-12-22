from django.urls import path
<<<<<<< Updated upstream

urlpatterns = []
=======
from . import views

urlpatterns = [
	path("connect", views.connect)
]
>>>>>>> Stashed changes
