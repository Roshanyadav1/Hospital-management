from django.urls import path
from doctor.views import *


urlpatterns = [
    path('register/', DoctorRegister.as_view(), name = 'doctor register'),
    path('view/', DoctorView.as_view(), name = 'doctor profile view'),
<<<<<<< HEAD
    path('view/<uuid:input>', DoctorView.as_view(), name = 'doctor profile view by id'),
=======
    path('view/<uuid:input>', DoctorViewById.as_view(), name = 'doctor profile view by id'),
>>>>>>> 79599d2cde0f0f9c3ae17efbe816d69b234c1eb3
    path('update/<uuid:input>', DoctorUpdate.as_view(), name = 'doctor profile update'),
    path('delete/<uuid:input>', DoctorDelete.as_view(), name = 'doctor profile delete'),
]