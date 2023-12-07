from django.urls import path, include
from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()
router.register(r'auth0_user', views.TodoViewset)

urlpatterns = [
    path('', include(router.urls)),
]