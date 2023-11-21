from icalendar import Calendar, Event
from datetime import datetime
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.base import MIMEBase
from email import encoders
from patient.models import Patient

smtp_server = "smtp.gmail.com"
smtp_port = 587  
smtp_username = "agrkeshav04@gmail.com"
smtp_password = "tynwieqbytissxtg"
from_email = "agrkeshav04@gmail.com"

def send_appointment_email(appointment):
    # print(appointment.patient_id)
    # patient = Patient.objects.filter(patient_id = appointment.patient_id)
    # print(patient)
    cal = Calendar()
    event = Event()
    event.add('summary', 'Appointment')
    event.add('dtstart', datetime(2023, 10, 31, 8, 0, 0))
    event.add('dtend', datetime(2023, 10, 31, 10, 0, 0))
    event.add('location', 'Event Location')
    event.add('description', 'Event Description')

    cal.add_component(event)

    ics_content = cal.to_ical().decode('utf-8')

    to_email = "keshava.bca2022@ssism.org"
    subject = "Appointment Booked Successfully"

    msg = MIMEMultipart()
    msg['From'] = from_email
    msg['To'] = to_email
    msg['Subject'] = subject

    attachment = MIMEBase('text', 'calendar')
    attachment.set_payload(ics_content)
    encoders.encode_base64(attachment)
    msg.attach(attachment)

    server = smtplib.SMTP(smtp_server, smtp_port)
    server.starttls()
    server.login(smtp_username, smtp_password)
    server.sendmail(from_email, to_email, msg.as_string())
    server.quit()

def send_verification_email():
    pass