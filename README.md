# SlugSense-Web-Application
### SlugSense Demo Version Web Application
#### The first commit of this version was built within two days during HACK UCSC 2017.
###### - Backend: Web2py
###### - Frontend: JQuery, Vue.js

#### Web2py Setup
  1. Go to the offical [web2py download page](http://www.web2py.com/init/default/download) to download the correct OS version web2py for your computer.
  2. Clone this repo into location: `web2py/application`.
 
#### Use python2.7
  1. Download `Anaconda`. 
  There are other ways, but I prefer using conda.
  2. Run `conda create --name python2.7 python=2.7` to create a python2.7 environment
    * if conda is not found, try run `export PATH="~/anaconda3/bin:$PATH"` in your terminal
  3. To start this environment, 
     type `source activate python2.7`, 
     and `source deactivate` to end.
  4. Use `python --version` to check.
  
#### Dependency
  1. Install bs4: `pip install bs4`
  2. Install pytz: `pip install pytz`
     * pytz is not necessary, if you do not want to download, comment out `import pytz` in controllers/api.py.
  3. Install twilio.rest: `pip install twilio.rest`
     * twilio.rest is not necessary, if you do not want to download, comment out `from twilio.rest import TwilioRestClient ` in controllers/api.py.
  
#### Start running the App
  1. Go back to your root folder of web2py and run `python web2py.py -e`.
  2. Navigate to the correct app using the top bar of the website. It might require the admin passwd that you set up in the previous step.

