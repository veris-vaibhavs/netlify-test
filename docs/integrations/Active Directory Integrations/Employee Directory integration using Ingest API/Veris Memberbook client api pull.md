# Memberbook integration using Client API

This document provides the brief introduction of memberbook integration where we use client api to fetch data client API.

## Introduction 

Here we use Client api to pull the data from client server, The process flow will be:

![workflow](/img/workflowclientapi.drawio.png)

Here We need Authentication token Or API token with API endpoints, credentials and access to that api server (IP whitelist).

## Process 

- Step 1: We create a AuthToken using Client API.(Depends on client)
- Step 2: We use Token and credentials to do a Api call.
- Step 3: As a response we receive the employee details (Groups or bulk).

## Employee Detail and Practices to follow

The employee detail should have the following data points:
- Name (First Name & Last Name)
- Designation or Department (Visible in VMS to differentiate Employees of same name)
- Email ID
- Phone Number (Optional)
- Active Status (whether the employee has left the organization)
- Group Name (This should ideally be based on the Office or Location name. Employees
are organized into Groups and these Groups are assigned to VMS Venues for Access
and Permission to Invite. For example: HQ, Mumbai Office or any other nomenclature that
your company follows for office locations).

##  Veris uses a combination of two mechanisms:

- The Web Service should have a way to provide modified results. Veris keeps a track of
timestamp when the employees where last fetched. Eg. Veris should be able to ask the
list of employees added/removed/updated after 12th March. The date provided will be in
ISO format.
- The Web Service should have a way to provide the results in batches. Veris fetches the
employee data in batches. Eg. Veris should be able to ask for the X number of employees
(X ranges from 50 - 5000).

**NOTE: This method is less preferable because it need alot of development.**