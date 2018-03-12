from django.shortcuts import HttpResponseRedirect
try:
    from django.utils.deprecation import MiddlewareMixin  # Django 1.10.x
except ImportError:
    MiddlewareMixin = object  # Django 1.4.x - Django 1.9.x

class SimpleMiddleware(MiddlewareMixin):
    def process_request(self, request):
        if request.path != '/admin/login' and request.path != '/admin/checks':
            if request.session.get('adminUser', None):
                pass
            else:
                return HttpResponseRedirect('/admin/login')

    def process_response(self, request, response):
        return response