from django.urls import path, include
from prescription_api.views import *

urlpatterns= [
    path('Prescription/', AddPrescriptionView.as_view(), name='AddPrescription'),
    path('GetPrescription/',GetPrescriptionView.as_view(), name = 'GetPrescription'),
    path('GetPrescription/<int:pk>', GetPrescriptionView.as_view(), name = 'GetPrescription'),
    path('DeletePrescription/<int:pk>/', DeletePrescription.as_view(), name = 'DeletePrescription'),
    path('UpdatePrescription/<int:pk>/', UpdatePrescription.as_view(), name = 'UpdatePrescription')
]