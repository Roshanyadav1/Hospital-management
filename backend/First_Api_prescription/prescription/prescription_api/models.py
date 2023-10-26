from django.db import models

# Create your models here.

class Prescription(models.Model):
    medication_name = models.CharField(max_length=200)
    Dosage = models.CharField(max_length=10)
    Frequency = models.CharField(max_length=50)
    Route = models.CharField(max_length=50, choices=(('oral','oral'),
                                                     ('Intravenous', 'Intravenous'),
                                                     ('Intramuscular','Intramuscular'),
                                                     ('Subcutaneous','Subcutaneous'),
                                                     ('Topical','Topical'),
                                                     ('Inhalation', 'Inhalation')))
    Duration = models.CharField(max_length=50)