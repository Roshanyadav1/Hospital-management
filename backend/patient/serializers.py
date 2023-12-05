from rest_framework import serializers
from patient.models import Patient


# Patient Serializer Class
class PatientRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        exclude = ('patient_age',)


class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = '__all__'  

class PatientLoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = ['patient_email', 'password']

class PatientRelation(serializers.ModelSerializer):
    class Meta:
        model = Patient
        exclude = ('password', 'created_at', 'updated_at',)
        