from rest_framework import serializers
from checkup.models import CheckUp


class CheckupSerializer(serializers.ModelSerializer):
    class Meta:
        model = CheckUp
        fields = '__all__'
