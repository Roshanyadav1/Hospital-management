from django.urls import path
from user.views import *

urlpatterns= [
    path('register/', UserRegister.as_view(), name='user register'),
    path('login/', UserLogin.as_view(), name='user login'),
    path('view/',UserView.as_view(), name = 'user view'),
    path('view/<uuid:input>/', UserView.as_view(), name = 'user view by id'),
    path('delete/<uuid:input>/', UserDelete.as_view(), name = 'user delete'),
    path('update/<uuid:input>/', UserUpdate.as_view(), name = 'user update')
]