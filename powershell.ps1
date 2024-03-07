# Check if Az module is installed
if (-not (Get-Module -ListAvailable -Name Az)) {
    # Install Az module
    Install-Module -Name Az -AllowClobber -Scope CurrentUser
}

# Login to Azure
$credential = Get-Credential
Connect-AzAccount -Credential $credential

# Set your subscription
Set-AzContext -SubscriptionId 'your-subscription-id'

# Create a resource group
New-AzResourceGroup -Name 'myResourceGroup' -Location 'West Europe'

# Create a storage account
New-AzStorageAccount -ResourceGroupName 'myResourceGroup' -Name 'mystorageaccount' -Location 'West Europe' -SkuName Standard_LRS