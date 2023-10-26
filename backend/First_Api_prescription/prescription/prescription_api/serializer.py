from rest_framework import serializers
from prescription_api.models import Prescription

class AddPrescriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prescription
        fields = '__all__'
        
        
class GetPresciptionSerializer(serializers.ModelSerializer):
     class Meta:
        model = Prescription
        fields = '__all__'        
   
class DeletePrescriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prescription
        fields ='__all__'    