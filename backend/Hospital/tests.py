from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from hospital.models import Hospital
from hospital.serializers import HospitalSerializer  

class HospitalModelViewSetTestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.hospital_data = {
            "hospital_name": "Sant Singaji Hospital",
            "hospital_email": "singaji@gmail.com",
            "hospital_phone": "9691279019",
            "hospital_owner_name": "Pranjal Dubey",
            "hospital_owner_phone": "9691279018",
            "hospital_owner_email": "admin@gmail.com",
            "hospital_address": "Sandalpur",
            "hospital_city": "Khategaon",
            "hospital_status": "True",
            "hospital_type": "Private",
            "hospital_category": "General",
            "username": "Admin",
            "password": "admin@123"
        }
        self.hospital = Hospital.objects.create()

    def test_list_hospital(self):
        response = self.client.get('/api/hospital/')
        hospital = Hospital.objects.all()
        serializer = HospitalSerializer(hospital, many=True)
        req_id = serializer.data[0]['hospital_id']
        res_id = str(response.data['data'][0]['hospital_id'])
        self.assertEqual(req_id, res_id)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_retrieve_hospital(self):
        response = self.client.get(f'/api/hospital/{self.hospital.hospital_id}/')
        hospital = Hospital.objects.get(hospital_id = self.hospital.hospital_id)
        serializer = HospitalSerializer(hospital)
        req_id = serializer.data['hospital_id']
        res_id = str(response.data['data'][0]['hospital_id'])
        self.assertEqual(req_id, res_id)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_create_hospital(self):
        response = self.client.post('/api/hospital/', self.hospital_data, format='json') 
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_update_hospital(self):
        updated_data = {'hospital_type': 'Government'}
        response = self.client.put(f'/api/hospital/{self.hospital.hospital_id}/', updated_data, format='json') 
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.hospital.refresh_from_db()
        self.assertEqual(self.hospital.hospital_type, updated_data['hospital_type'])

    def test_delete_hospital(self):
        response = self.client.delete(f'/api/hospital/{self.hospital.hospital_id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertFalse(Hospital.objects.filter(hospital_id = self.hospital.hospital_id).exists())

class HospitalModelTestCase(TestCase):
    def test_hospital_model(self):
        hospital_name = "Sant Singaji Hospital"
        hospital_email = "singaji@gmail.com"
        hospital_phone = 9691279019
        hospital_owner_name = "Pranjal Dubey"
        hospital_owner_phone = 9691279018
        hospital_owner_email = "admin@gmail.com"
        hospital_address = "Sandalpur"
        hospital_city = "Khategaon"
        hospital_status = False
        hospital_type = "Private"
        hospital_category = "General"
        username = "Admin"
        password = "admin@123"
        
        hospital = Hospital.objects.create(hospital_name=hospital_name,hospital_email=hospital_email,hospital_phone=hospital_phone,hospital_owner_name=hospital_owner_name,hospital_owner_phone=hospital_owner_phone,hospital_owner_email=hospital_owner_email,hospital_address=hospital_address,hospital_city=hospital_city,hospital_status=hospital_status,hospital_type=hospital_type,hospital_category=hospital_category,username=username,password=password)

        self.assertEqual(hospital_name,hospital.hospital_name)
        self.assertEqual(hospital_email,hospital.hospital_email)
        self.assertEqual(hospital_phone,hospital.hospital_phone)
        self.assertEqual(hospital_owner_name,hospital.hospital_owner_name)
        self.assertEqual(hospital_owner_phone,hospital.hospital_owner_phone)
        self.assertEqual(hospital_owner_email,hospital.hospital_owner_email)
        self.assertEqual(hospital_address,hospital.hospital_address)
        self.assertEqual(hospital_city,hospital.hospital_city)
        self.assertFalse(hospital_status,hospital.hospital_status)
        self.assertEqual(hospital_type,hospital.hospital_type)
        self.assertEqual(hospital_category,hospital.hospital_category)
        self.assertEqual(username,hospital.username)
        self.assertEqual(password,hospital.password)

class HospitalSerializerTestCase(TestCase):
    def test_hospital_serializer(self):
        self.hospital_data = {
            "hospital_name":"Sant Singaji Hospital",
            "hospital_email":"singaji@gmail.com",
            "hospital_phone":"9691279019",
            "hospital_owner_name":"Pranjal Dubey",
            "hospital_owner_phone":"9691279018",
            "hospital_owner_email":"admin@gmail.com",
            "hospital_address":"Sandalpur",
            "hospital_city":"Khategaon",
            "hospital_status":"True",
            "hospital_type":"Private",
            "hospital_category":"General",
            "username":"Admin",
            "password":"admin@123"
        }

        serializer = HospitalSerializer(data = self.hospital_data)
        self.assertTrue(serializer.is_valid())
        self.assertEqual(serializer.errors, {})