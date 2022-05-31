#openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365
from http.server import HTTPServer, SimpleHTTPRequestHandler
import ssl

httpd = HTTPServer(('localhost', 8010), SimpleHTTPRequestHandler)

httpd.socket = ssl.wrap_socket(httpd.socket,
                               keyfile="./proxy/key.pem",
                               certfile='./proxy/cert.pem', server_side=True)

httpd.serve_forever()
