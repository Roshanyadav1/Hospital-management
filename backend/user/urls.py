from user.views import *
from rest_framework.routers import DefaultRouter
from django.urls import path, include

router = DefaultRouter()

urlpatterns = [
    path('user/login/', UserLoginView.as_view()),
    path('user/view/', UserView.as_view()),
    path('user/delete/<uuid:input>', UserLoginView.as_view()),
    path('user/update/<uuid:input>', UserLoginView.as_view()),
]