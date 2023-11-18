from rest_framework import serializers
from hospital.models import Hospital
import phonenumbers

# Hospital Serializer Class
class HospitalSerializer(serializers.ModelSerializer): 
      
        class Meta:
          model = Hospital
          fields = '__all__'
        #    phone_number = serializers.CharField()

      

# Hospital Login Serializer Class
class HospitalLoginSerializer(serializers.ModelSerializer):
      class Meta:
           model = Hospital
           fields = ['username', 'password',]
        