from django.db import models



class Produit(models.Model):
    name = models.CharField(max_length=200)
    image = models.ImageField(upload_to='produits/')
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.IntegerField()
    categorie = models.CharField(max_length=100)
    date_add = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
