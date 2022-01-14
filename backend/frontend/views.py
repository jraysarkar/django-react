from django import http
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework.renderers import JSONRenderer
from rest_framework.utils import json
from .models import Attack_data, attacker_table, Attack_data3, data222
from .serializers import Attack_dataSerializer, attacker_tableSerializer, attack_data3Serializer, dataSerializer
from django.db.models import Count
from django.http import HttpResponse
from rest_framework.parsers import json
from django.http import JsonResponse
import json

# Create your views here.

def index(request):
    return render(request, 'build/index.html')


def Attack_data_count(request):
    if request.method == 'GET':
    #attacks = Attack_data.objects.all()
    #attacks = list(Attack_data.objects.values('attack_threat_class').annotate(count=Count('id')).order_by('attack_threat_class'))
     #serializer = Attack_dataSerializer(attacks, many=True)
        results = Attack_data.objects.values('attack_threat_class').annotate(count=Count('id')).order_by('attack_threat_class')
        finalresult = {}
        finalresult = {"count":[], "attack_threat_class": []}
        for i in results:
            finalresult['count'].append(i.get('count'))
            finalresult['attack_threat_class'].append(i.get('attack_threat_class'))
        return JsonResponse(finalresult, safe= False)

    #elif request.method == 'GET': 
    #     data = JSONParser().parse(request)
    #     serializer = Attack_dataSerializer(data=data)

    #     if serializer.is_valid():
    #         serializer.save()
    #         return JsonResponse(serializer.data, status=201)
    #         return JsonResponse(serializer.errors, status=400)

#attacker jsnon file view
def attacker_table_list(request):
    if request.method == 'GET':
        results = Attack_data.objects.values('attack_os').annotate(count=Count('id')).order_by('attack_os')
        finalresult = {}
        finalresult = {"count":[], "attack_threat_class": []}
        for i in results:
            finalresult['count'].append(i.get('count'))
            finalresult['attack_threat_class'].append(i.get('attack_threat_class'))
        return JsonResponse(finalresult, safe= False)

    # elif request.method == 'GET':
    #     data = JSONParser().parse(request)
    #     serializer = attacker_tableSerializer(data=data)

    #     if serializer.is_valid():
    #         serializer.save()
    #         return JsonResponse(serializer.data, status=201)
    #     return JsonResponse(serializer.errors, status=400)

#query data view        
def Attack_data2_list(request):
    if request.method == 'GET':
        queryset  = attacker_table.objects.values('attack_city').annotate(dcount=Count('attack_event_id'))
        #queryset = attacker_table.objects.get(attack_event_id = 1)
        serializer = attacker_tableSerializer(queryset, many=True)
        return JsonResponse(serializer.data, safe= False)       

    elif request.method == 'GET':
        data = JSONParser().parse(request)
        serializer = attacker_tableSerializer(data=data)


        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=202)
            return JsonResponse(serializer.error, status=400)


#new view file
def attack_data3_list(request):
    if request.method == 'GET':
        #queryset  = Attack_data3.objects.values('attack_city').annotate(dcount=Count('attack_event_id'))
        queryset = Attack_data3.objects.all()
        serializer = attack_data3Serializer(queryset, many=True)
        return JsonResponse(serializer.data, safe= False)       

    elif request.method == 'GET':
        data = JSONParser().parse(request)
        serializer = attack_data3Serializer(data=data)


        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=202)
            return JsonResponse(serializer.error, status=400)    


def data_count(request):
    if request.method == 'GET':
    #attacks = Attack_data.objects.all()
        attacks = data222.objects.values('attack_threat_class').annotate(count=Count('id')).order_by('attack_threat_class')
        serializer = dataSerializer(attacks, many=True)
        return JsonResponse(serializer.data, safe =False)   