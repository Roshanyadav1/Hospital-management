from rest_framework import serializers
from appointment.models import Appointment
from doctor.serializers import DoctorRelation
from patient.serializers import PatientRelation
from disease.serializers import DiseaseRelation

# Appointment Serializer Class
class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = '__all__'

class AppointmentAddSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = '__all__'

class AppointmentViewSerializer(serializers.ModelSerializer):
    doctor = DoctorRelation()
    patient = PatientRelation()
    disease = DiseaseRelation()

    class Meta:
        model = Appointment
        fields = '__all__'