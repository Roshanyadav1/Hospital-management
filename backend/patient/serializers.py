from rest_framework import serializers
from patient.models import Patient


# Patient Serializer Class
class PatientSerializer(serializers.ModelSerializer):
    patient_profile_picture = serializers.ImageField(required=False)
    class Meta:
        model = Patient
        fields = '__all__'
        