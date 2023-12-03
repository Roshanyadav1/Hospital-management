from rest_framework import serializers
from hospital.models import Hospital


class HospitalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hospital
        fields = '__all__'


class HospitalLoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hospital
        fields = ['username', 'password',]
