from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Produit
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
from django.views import View





# Create your views here.
class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]






class ListeProduitsView(APIView):
    permission_classes = [AllowAny]
    def get(self, request, *args, **kwargs):
        produits = Produit.objects.all()
        produits_data = [
            {
                "id": produit.id,
                "name": produit.name,
                "image": request.build_absolute_uri(produit.image.url),
                "description": produit.description,
                "price": produit.price,
                "stock": produit.stock,
                "categorie": produit.categorie,
            }
            for produit in produits
        ]
        return Response(produits_data)


class ProduitDetailView(View):
    def get(self, request, id, *args, **kwargs):
        try:
            produit = Produit.objects.get(id=id)
            produit_data = {
                "id": produit.id,
                "name": produit.name,
                "image": request.build_absolute_uri(produit.image.url),
                "description": produit.description,
                "price": produit.price,
                "stock": produit.stock,
                "categorie": produit.categorie,
                "date_add": produit.date_add,
            }
            return JsonResponse(produit_data)
        except Produit.DoesNotExist:
            return JsonResponse({"error": "Produit non trouvé"}, status=404)
