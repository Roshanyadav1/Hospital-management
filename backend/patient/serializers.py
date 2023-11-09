from rest_framework import serializers
from patient.models import Patient


# Patient Serializer Class
class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = '__all__'

class PatientLoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = ['patient_email', 'password']
        