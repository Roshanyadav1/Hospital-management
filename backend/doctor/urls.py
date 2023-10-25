from django.contrib import admin
from django.urls import path
from doctor.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('profile/register', DoctorRegistrationView.as_view()),
    path('profile/view', DoctorProfileView.as_view()),
    path('profile/view/<uuid:pk>', DoctorProfileView.as_view()),
    path('profile/update/<uuid:pk>', DoctorProfileUpdateView.as_view()),
    path('profile/delete/<uuid:pk>', DoctorProfileDeleteView.as_view()),
    path('profile/login', DoctorProfileLoginView.as_view()),
]