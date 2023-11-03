from rest_framework import status
from rest_framework.test import APITestCase
from django.urls import reverse
from user.models import User  

class UserViewTestCaseSetup(APITestCase):
    def setUp(self):
        self.add_url = reverse('user')
        self.view_url = reverse('user')
        self.update_url = reverse('user',kwargs={'input':self.test})
        self.delete_url = reverse('user',kwargs={'input':self.test})
        self.user_data = {
                'username': 'test',
                'password': 'test',
        }
        return super().setUp()
        
    def tearDown(self):
        return super().tearDown()

class UserTestViews(UserViewTestCaseSetup):
        def test_user_can_register(self):
            res = self.client.post(self.add_url, self.user_data, format='json')
            self.assertEqual(res.status_code, 200)

        def test_user_cannot_register(self):
            res = self.client.post(self.add_url)
            self.assertEqual(res.status_code, 400 )
