from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination


class CustomPagination(PageNumberPagination):
    page_size_query_param = 'pageSize'
    page_query_param = 'pageNo'

    def paginate_queryset(self, queryset, request, view=None):
        self.page_size = request.query_params.get(self.page_size_query_param)
        page_number = request.query_params['pageNo']

        if self.page_size == "":
            self.page_size = 10

        if page_number == "":
            page_number = 1

        return super().paginate_queryset(queryset, request, view)

    def get_paginated_response(self, data):
        return Response({
            'count': self.page.paginator.count,
            'total_pages': self.page.paginator.num_pages,
            'current_page_number': self.page.number,
            'page_size': int(self.page_size),
            'results': data
        })
