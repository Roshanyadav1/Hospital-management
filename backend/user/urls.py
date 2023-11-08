from user.views import *
from rest_framework.routers import DefaultRouter
from django.urls import path, include

router = DefaultRouter()

urlpatterns = [
    path('login/', UserLoginView.as_view()),
    path('view/', UserView.as_view()),
    path('delete/<uuid:input>', UserLoginView.as_view()),
    path('update/<uuid:input>', UserLoginView.as_view()),
]