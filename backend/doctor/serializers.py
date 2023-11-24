from rest_framework import serializers
from doctor.models import Doctor


class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = '__all__'

class DoctorUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        exclude = ('employee', )

class DoctorRelation(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        exclude = ('created_at', 'updated_at', )