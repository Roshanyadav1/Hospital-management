from rest_framework import serializers
from appointment.models import Appointment


# Appointment Serializer Class
class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = '__all__'

class AppointmentAddSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        exclude = ('patient_id', 'doctor_id', 'disease_id', )
        