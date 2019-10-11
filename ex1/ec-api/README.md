# Build

Local Build

```
docker build --tag local/ec-api .
```

Local Run

```
docker run -t -p 8080:8080 local/ec-api
```

Google Cloud Build

```
gcloud builds submit --tag gcr.io/${DEVSHELL_PROJECT_ID}/ec-api .
```

