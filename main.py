#!/usr/bin/env python
#
# Copyright 2015 Jing Studio.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import webapp2
from sendgrid import SendGridClient
from sendgrid import Mail


class MainHandler(webapp2.RequestHandler):
    def get(self):
        self.response.write('Hello world!')


class SendEmailHandler(webapp2.RequestHandler):
    def get(self):
        # make a secure connection to SendGrid
        #sg = SendGridClient('userid', 'password', secure=True)
        print sg

        # make a message object
        message = Mail()
        message.set_subject('message subject')
        message.set_html('<strong>HTML message body</strong>')
        message.set_text('plaintext message body')
        message.set_from('from@example.com')

        # add a recipient
        message.add_to('Name <email>')

        # use the Web API to send your message
        sg.send(message)
        self.response.write('email sent.')


app = webapp2.WSGIApplication([
    ('/api/', MainHandler),
    ('/api/send/', SendEmailHandler),
], debug=True)
