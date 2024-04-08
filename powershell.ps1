# Check if the Az module is installed
if (-not (Get-Module -ListAvailable -Name Az)) {
    # Install the Az module
    Install-Module -Name Az -AllowClobber -Scope CurrentUser
}

# Authenticate to Azure
Connect-AzAccount

# Define parameters
$resourceGroupName = "example-resources"
$location = "West Europe"
$storageAccountName = "examplestorageacc"

# Create a resource group
New-AzResourceGroup -Name $resourceGroupName -Location $location

# Create a storage account
New-AzStorageAccount -ResourceGroupName $resourceGroupName `
    -Name $storageAccountName `
    -Location $location `
    -SkuName "Standard_LRS" # LRS = Locally redundant storage