from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from .models import Todo
from .serializer import TodoSerializer


class TodoViewset(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer