from rest_framework import serializers
from appointment.models import Appointment
from doctor.serializers import DoctorViewSerializer
from patient.serializers import PatientAppointmentRelation


class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = '__all__'


class AppointmentAddSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = '__all__'


class AppointmentViewSerializer(serializers.ModelSerializer):
    doctor = DoctorViewSerializer()
    patient = PatientAppointmentRelation()

    class Meta:
        model = Appointment
        fields = ['appointment_id', 'appointment_number',
                  'appointment_time', 'appointment_date', 'doctor', 'patient']
