from django.shortcuts import render


def hrm_jobs(request):
    return render(request, 'hrm_app/hrm_jobs.html')
