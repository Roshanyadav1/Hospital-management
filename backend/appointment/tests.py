from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from appointment.models import Appointment
from appointment.serializers import AppointmentSerializer  

# class AppointmentModelViewSetTestCase(TestCase):
#     def setUp(self):
#         self.client = APIClient()
#         self.appointment_data = {
#             "appointment_time": "10:15",
#             "appointment_date": "2023-10-05",
#             "status": "Booked",
#         }
#         self.appointment = Appointment.objects.create()

#     def test_list_appointment(self):
#         response = self.client.get('/api/appointment/')
#         appointment = Appointment.objects.all()
#         serializer = AppointmentSerializer(appointment, many=True)
#         req_id = serializer.data[0]['appointment_id']
#         res_id = str(response.data['data'][0]['appointment_id'])
#         self.assertEqual(req_id, res_id)
#         self.assertEqual(response.status_code, status.HTTP_200_OK)

#     def test_retrieve_appointment(self):
#         response = self.client.get(f'/api/appointment/{self.appointment.appointment_id}/')
#         appointment = Appointment.objects.get(appointment_id = self.appointment.appointment_id)
#         serializer = AppointmentSerializer(appointment)
#         req_id = serializer.data['appointment_id']
#         res_id = str(response.data['data'][0]['appointment_id'])
#         self.assertEqual(req_id, res_id)
#         self.assertEqual(response.status_code, status.HTTP_200_OK)

#     def test_create_appointment(self):
#         response = self.client.post('/api/appointment/', self.appointment_data, format='json') 
#         self.assertEqual(response.status_code, status.HTTP_200_OK)

#     def test_update_appointment(self):
#         updated_data = {'status': 'Confirmed'}
#         response = self.client.put(f'/api/appointment/{self.appointment.appointment_id}/', updated_data, format='json') 
#         self.assertEqual(response.status_code, status.HTTP_200_OK)
#         self.appointment.refresh_from_db()
#         self.assertEqual(self.appointment.status, updated_data['status'])

#     def test_delete_appointment(self):
#         response = self.client.delete(f'/api/appointment/{self.appointment.appointment_id}/')
#         self.assertEqual(response.status_code, status.HTTP_200_OK)
#         self.assertFalse(Appointment.objects.filter(appointment_id = self.appointment.appointment_id).exists())

class AppointmentModelTestCase(TestCase):
    def test_appointment_model(self):
        appointment_time = "10:15"
        appointment_date = "2023-10-05"
        status = "Booked"
        
        appointment = Appointment.objects.create(appointment_time=appointment_time,appointment_date=appointment_date,status=status)

        self.assertEqual(appointment_time,appointment.appointment_time)
        self.assertEqual(appointment_date,appointment.appointment_date)
        self.assertEqual(status,appointment.status)

# class AppointmentSerializerTestCase(TestCase):
#     def test_appointment_serializer(self):
#         self.appointment_data = {
#             "status": "Booked",
#         }

#         serializer = AppointmentSerializer(data = self.appointment_data)
#         self.assertTrue(serializer.is_valid())
#         self.assertEqual(serializer.errors, {})