@ECHO OFF
setlocal DISABLEDELAYEDEXPANSION
SET BIN_TARGET=%~dp0/../yurunsoft/pay-sdk/src/Weixin/Tool/CertificateDownloader.php
php "%BIN_TARGET%" %*
