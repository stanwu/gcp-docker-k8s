# Build Docker Image to Google Container Registry

### Method 1

Local Build

```
docker build --tag local/ec-api .
```

Local Run

```
docker run -t -p 8080:8080 local/ec-api
```

Get auth (first time)

```
gcloud auth configure-docker
```

Push to Google Container Registry

```
docker tag local/ec-api gcr.io/${DEVSHELL_PROJECT_ID}/ec-api
docker push gcr.io/${DEVSHELL_PROJECT_ID}/ec-api
```

### Method 2

Google Cloud Build (first 120 mins free / build jobs up to 10 concurrent)

```
gcloud builds submit --tag gcr.io/${DEVSHELL_PROJECT_ID}/ec-api .
```

