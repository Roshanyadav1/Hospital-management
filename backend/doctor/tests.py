from django.test import TestCase
from django.test import TestCase
from rest_framework.test import APITestCase
from django.urls import reverse
import pdb
import uuid
from doctor.serializers import DoctorSerializer
from doctor.models import Doctor

class TestSetUp(APITestCase):
    def setUp(self):
        self.doctor_add = reverse('doctor register')
        self.doctor_view = reverse('doctor profile view')

        self.test = uuid.uuid4()
        self.doctor_view_url = reverse(
            'doctor profile view by id', kwargs={'input': self.test})
        self.doctor_delete_url = reverse(
            'doctor profile delete', kwargs={'input': self.test})
        self.doctor_update_url = reverse(
            'doctor profile update', kwargs={'input': self.test})
        self.doctor_data = {
            "disease_specialist":"test",
            "doctor_type":"test"
            
        }
        return super().setUp()

    def tearDown(self):
        return super().tearDown()


class Testview(TestSetUp):
    def test_doctor_can_add(self):
        res = self.client.post(self.doctor_add,self.doctor_data,format='json')
        self.assertEqual(res.status_code, 200)

    def test_doctor_cannot_add(self):
        res = self.client.post(self.doctor_add)
        self.assertEqual(res.status_code, 400)

    def test_doctor_view(self):
        res = self.client.get(self.doctor_view)
        self.assertEqual(res.status_code, 200)

    def test_doctor_cannot_view(self):
        res = self.client.post(self.doctor_view)
        self.assertEqual(res.status_code, 405)

    def test_doctor_view_by_id(self):
        res = self.client.get(self.doctor_view_url, input=self.test)
        self.assertEqual(res.status_code, 200)

    def test_doctor_cannot_view_by_id(self):
        res = self.client.post(self.doctor_view_url, input=75421)
        self.assertEqual(res.status_code, 405)

    def test_doctor_update_(self):
        res = self.client.patch(self.doctor_update_url, input=self.test)
        self.assertEqual(res.status_code, 200)

    def test_doctor_can_update_(self):
        res = self.client.post(self.doctor_update_url,input=85874984)
        self.assertEqual(res.status_code, 405)

    def test_doctor_delete(self):
        res = self.client.delete(self.doctor_delete_url, input=self.test)
        self.assertEqual(res.status_code, 200)
    def test_doctor_cannot_delete(self):
        res = self.client.post(self.doctor_delete_url, input=self.test)
        self.assertEqual(res.status_code, 405)

class DoctorSerializerTest(TestCase):
    def test_serializer(self):
        self.doctor_data = {
            "disease_specialist":"test",
            "doctor_type":"test"
            
        }
        serializer = DoctorSerializer(data=self.doctor_data)
        self.assertTrue(serializer.is_valid())
        self.assertEqual(serializer.errors, {})


class TestDoctorModel(TestCase):
    def test_model(self):
       disease_specialist = "test"
       doctor_type = "test"

       doctor = Doctor.objects.create(disease_specialist = disease_specialist,doctor_type = doctor_type)
       self.assertEqual(disease_specialist, doctor.disease_specialist)
       self.assertEqual(doctor_type, doctor.doctor_type)
    


      


