APP_DEBUG = true

[APP]
DEFAULT_TIMEZONE = Asia/Shanghai

[DATABASE]
TYPE = mysql
HOSTNAME = {{$dbhost}}
DATABASE = {{$dbname}}
USERNAME = {{$dbuser}}
PASSWORD = {{$dbpass}}
HOSTPORT = {{$dbport}}
CHARSET = utf8
DEBUG = true
PREFIX = {{$dbpk}}

[CACHE]
HOSTNAME = 127.0.0.1
PORT = 6379
PASSWORD =
PREFIX = 5e35013:

[LANG]
default_lang = zh-cn