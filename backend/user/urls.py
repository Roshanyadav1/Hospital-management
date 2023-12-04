from django.urls import path
from user.views import *
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


urlpatterns = [
    path('register/', UserRegister.as_view(), name='user register'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('login/', UserLoginView.as_view(), name='user login'),
    path('view/', UserView.as_view(), name='user view'),
    path('view/<uuid:input>/', UserView.as_view(), name='user view by id'),
    path('delete/<uuid:input>/', UserDelete.as_view(), name='user delete'),
    path('update/<uuid:input>/', UserUpdate.as_view(), name='user update'),
    path('verification/', UserVerificationView().as_view(), name='user verification')
]
