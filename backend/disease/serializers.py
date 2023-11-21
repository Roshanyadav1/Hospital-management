from rest_framework import serializers
from disease.models import Disease

class DiseaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Disease
        exclude = ('created_by', 'updated_by', )
        