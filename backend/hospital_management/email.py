from icalendar import Calendar, Event
from datetime import datetime
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.base import MIMEBase
from email import encoders
from patient.models import Patient
from bs4 import BeautifulSoup
from pathlib import Path

smtp_server = "smtp.gmail.com"
smtp_port = 587  
smtp_username = "achieversgrand@gmail.com"
smtp_password = "bpfhbemqsenjkqud"
from_email = "achieversgrand@gmail.com"
BASE_DIR = Path(__file__).resolve().parent.parent

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

def send_verification_email(url, user_email):
    html_content = ""

    try:
        with open(BASE_DIR/'templates/verification.html', 'r') as file:
            html_content = file.read()
    except FileNotFoundError:
        print("File not found. Please provide a valid file path.")

    new_url = url
    soup = BeautifulSoup(html_content, 'html.parser')
    a_tag = soup.find('a')

    if a_tag:
        a_tag['href'] = new_url

    html_content = str(soup)

    url_element = soup.find(id='url')
    if url_element:
        url_element['href'] = new_url
    html_content = str(soup)

    img_element = soup.find(id='logo-img')
    new_src = "https://hoapitalmanagement.s3.ap-south-1.amazonaws.com/SGA+logo+(1).png"
    if img_element:
        img_element['src'] = new_src
    html_content = str(soup)

    message = MIMEMultipart("alternative")
    message["Subject"] = "Verification Email"
    message["From"] = from_email
    message["To"] = user_email
    to_email = user_email
    # Attach HTML content
    html_part = MIMEText(html_content, "html")
    message.attach(html_part)
    server = smtplib.SMTP(smtp_server, smtp_port)
    server.starttls()
    server.login(smtp_username, smtp_password)
    server.sendmail(from_email, to_email, message.as_string())
    server.quit()

