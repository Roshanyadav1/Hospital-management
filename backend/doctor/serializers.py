from rest_framework import serializers
from doctor.models import Doctor
from employee.serializers import EmployeeRelation

class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = '__all__'

class DoctorUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        exclude = ('employee', )

class DoctorViewSerializer(serializers.ModelSerializer):
    employee = EmployeeRelation()

    class Meta:
        model = Doctor
        fields = ['doctor_id', 'disease_specialist', 'times', 'day', 'per_patient_time', 'status', 'created_at', 'updated_at', 'employee']

class DoctorRelation(serializers.ModelSerializer):
    employee = EmployeeRelation()

    class Meta:
        model = Doctor
        fields = ['doctor_id', 'disease_specialist', 'times', 'day', 'per_patient_time', 'status', 'employee']