# Parse-server sample for Google App Engine

This sample demonstrates deploying a [Parse-server](https://github.com/ParsePlatform/parse-server)
app to [Google App Engine Flexible Environment](https://cloud.google.com/appengine).

## Setup

1. Create a project in the [Google Cloud Platform Console](https://console.cloud.google.com/).
1. [Enable billing](https://console.cloud.google.com/project/_/settings) for your project.
1. Install the [Google Cloud SDK](https://cloud.google.com/sdk/).
1. Setup a MongoDB server. Here are two possible options:
  1. Create a Google Compute Engine virtual machine with [MongoDB pre-installed](https://cloud.google.com/launcher/?q=mongodb).
  1. Use [MongoLab](https://mongolab.com/google/) to create a free MongoDB deployment on Google Cloud Platform.

## Downloading Files

1. `git clone https://github.com/colin-yeoh/parse-server-dashboard.git parse-server`
1. cd into parse-server

## Running locally

1. `npm install`
1. Set the necessary [parse server variables](https://github.com/colin-yeoh/parse-server-dashboard/blob/master/config.json).
1. Set the necessary [parse dashboard variables](https://github.com/colin-yeoh/parse-server-dashboard/blob/master/parse-dashboard-config.json).
1. `npm start`

## Deploy

1. Set the necessary [parse server variables](https://github.com/colin-yeoh/parse-server-dashboard/blob/master/config.json).
1. Set the necessary [parse dashboard variables](https://github.com/colin-yeoh/parse-server-dashboard/blob/master/parse-dashboard-config.json).
1. `npm run deploy`


## TODO

- [X] Configure Parse Dashboard
- [ ] Push Configuration
- [ ] File Storage Configuration


Refer to the [README.md](./README.md) file for more instructions on
running and deploying.
