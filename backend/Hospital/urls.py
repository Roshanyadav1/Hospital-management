from django.contrib import admin
from django.urls import path
from .views import HospitalRegisterView,HospitalInformationView, UpdateInformationView,DeleteInformationView

urlpatterns = [
    path('admin/', admin.site.urls),
    # for registration
    path('register/',HospitalRegisterView.as_view(),name='register'),
     path('info/',HospitalInformationView.as_view(),name='info'),
     path('update/<uuid:uid>',UpdateInformationView.as_view(),name='update'),
        path('delete/<uuid:uid>',DeleteInformationView.as_view(),name='delete'),
]