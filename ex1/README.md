# Config your local environment

Local

```sh
gcloud projects list
gcloud config set project [project_id]
export DEVSHELL_PROJECT_ID=`gcloud config list --format 'value(core.project)'`
echo $DEVSHELL_PROJECT_ID
```

Cloud Shell

```sh
echo $DEVSHELL_PROJECT_ID
```
