import os.path

daemon=True
capture_output=True

accesslog_location = './logs/access_log.txt'
errorlog_location = './logs/error_log.txt'

for location in [accesslog_location, errorlog_location]:
    if not os.path.exists(location):
        open(location,'w').close()

accesslog = accesslog_location
errorlog = errorlog_location
