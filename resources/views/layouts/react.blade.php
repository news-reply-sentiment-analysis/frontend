<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet">
    <script type="text/javascript" src="https://developers.kakao.com/sdk/js/kakao.js"></script>
    @yield('header')
    <script type="text/javascript">
        Kakao.init('c1e74c9d4e2471b9a9595aafd356a86c');
    </script>
</head>

<body>
    @yield('body')
    <div id="app" class="j2kb"></div>
    @yield('footer')
    <script defer src="{{ mix('/js/app.js') }}" type="text/javascript"></script>
</body>

</html>
