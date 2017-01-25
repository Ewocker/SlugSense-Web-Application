from datetime import datetime, timedelta
import time
import json

import urllib2
from bs4 import BeautifulSoup

import datetime
import pytz
from twilio.rest import TwilioRestClient 

import math

humid =  40
solar = 30
temp = 40
moist = 80

Scott = '+18312959447'
Ewing = '+18314359273'
# last_message_sent = datetime.datetime(2016,1,1,0,0)
Sent = False
# ajax_num = 0

def sent_message(type):
    account_sid = 'AC6da74d51b4d54ffad5400bc6314441f6'
    auth_token = 'eb467ca1019e5c4917d30c73e2095358'
    client = TwilioRestClient(account_sid, auth_token)
    message_body = 'Alert'
    if type is 'moist':
        message_body = "SlugSense: High Moisture Alert! Make sure to protect your plant"

    message = client.messages.create(to=Ewing, from_="+18317131564", body=message_body)


# Celsius Fahrenheit convert
def Celsius(Fahrenheit):
    return (Fahrenheit - 32)*5/9


# def scraping():
#     while True:
#         page = urllib2.urlopen('http://172.20.10.8/')
#         soup = BeautifulSoup(page, 'html.parser')
#         humid = soup.find(id='humid')
#         solar = soup.find(id='solar')
#         temp = soup.find(id='temp')
#         moist = soup.find(id='moist')
#         time.sleep(1)


# Ask the Server to start scraping from client site.
def scrape():

    # page = urllib2.urlopen('http://172.20.10.9/')
    # soup = BeautifulSoup(page, 'html.parser')
    # moist = int(soup.find(id='moist').string)*100/250

    # page = urllib2.urlopen('http://172.20.10.8/')
    # soup = BeautifulSoup(page, 'html.parser')
    # solar = 123-int(soup.find(id='solar').string)

    # page = urllib2.urlopen('http://172.20.10.10/')
    # soup = BeautifulSoup(page, 'html.parser')
    # humid = int(soup.find(id='hum').string)
    # temp = int(math.floor(float(soup.find(id='temp').string)))


    # print ((humid, solar, temp, moist))
    # test()

    return (humid, solar, temp, moist)



def get_values():
    # global last_message_sent
    (humid, solar, temp, moist) = scrape()

    # print(datetime.datetime.utcnow() - last_message_sent)
    # print(datetime.datetime.utcnow())
    # print(last_message_sent)
    # if moist > 70 and (datetime.datetime.utcnow() - last_message_sent) > datetime.timedelta(seconds=30):
    #     # global last_message_sent
    #     last_message_sent = datetime.datetime.utcnow()

    #     # print(last_message_sent)
    #     # sent_message('moist')
    #     print ('Send Message')
    # print(last_message_sent)


    return response.json(
        dict(humid=humid,
             solar=solar,
             temp=temp,
             moist=moist)
    )
