from rest_framework import serializers
from prescription.models import Prescription


# Prescription Serializer Class
class PrescriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prescription
        fields = ['appointment','prescription_photo']        
        