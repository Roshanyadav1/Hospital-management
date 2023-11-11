from django.urls import path
from appointment.views import *


urlpatterns = [
    path('add/', AppointmentAdd.as_view(), name = 'appointment add'),
    path('view/', AppointmentView.as_view(), name = 'appointment view'),
<<<<<<< HEAD
    path('view/<uuid:input>', AppointmentView.as_view(), name = 'appointment view by id'),
=======
    path('view/<uuid:input>', AppointmentViewById.as_view(), name = 'appointment view by id'),
>>>>>>> 79599d2cde0f0f9c3ae17efbe816d69b234c1eb3
    path('update/<uuid:input>', AppointmentUpdate.as_view(), name = 'appointment update'),
    path('delete/<uuid:input>', AppointmentDelete.as_view(), name = 'appointment delete'),
]