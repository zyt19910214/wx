import os
import time
import requests
import hashlib
import traceback
import sys
import re
import json
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse


@csrf_exempt
def start(request):
    date = time.strftime('%Y%m%d')
    UPLOAD_FILE_PATH = '/home/**/FDFS-upload/%s/' % date
    isExists = os.path.exists(UPLOAD_FILE_PATH)
    if not isExists:
        os.makedirs(UPLOAD_FILE_PATH)
    else:
        print('path isexist!')

    request_params = (request.body).decode('utf-8')
    request_params = json.loads(request_params)
    print(request_params)
    url = request_params['url']
    zip_file_tuple = download_log(url, UPLOAD_FILE_PATH)
    if zip_file_tuple:
        zip_file_name = zip_file_tuple[0]
        md5sum = zip_file_tuple[1]
    else:
        return JsonResponse({})
    file_name = os.path.join(UPLOAD_FILE_PATH, zip_file_name)
    print('file name:' + file_name)
    std = os.popen("fdfs_test ../static/client.conf upload %s" %file_name).read()
    print('*********** fastdfs excute start ***********')
    print(std)
    print('*********** fastdfs excute end ***********')
    match = re.search('.*?example file url: (\S+)', std)
    if match:
        download_url = match.group(1)
        response = dict()
        response['url'] = download_url
        return JsonResponse(response)
    else:
        return JsonResponse({})


def download_log(uri, dest_dir):
    try:
        os.makedirs(dest_dir, exist_ok=True)
        zip_name = uri.rsplit('/', 1)[1]
        zip_whole_name = os.path.join(dest_dir, zip_name)
        r = requests.get(uri)
        fd = open(zip_whole_name, 'wb')
        fd.write(r.content)
        fd.close()
        md5sum = hashlib.md5(r.content).hexdigest()
    except Exception as ex:
        traceback.print_exc(file=sys.stdout)
        return None
    if r.status_code == 404:
        return None
    return (zip_whole_name, md5sum)
