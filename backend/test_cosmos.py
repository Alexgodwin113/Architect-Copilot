from azure.identity import DefaultAzureCredential
from azure.cosmos import CosmosClient, exceptions
import os

# Load environment variables
COSMOS_ENDPOINT = os.getenv("AZURE_COSMOSDB_ACCOUNT", "https://db-architectcopilot.documents.azure.com:443/")
COSMOS_KEY = os.getenv("AZURE_COSMOSDB_ACCOUNT_KEY", "your_primary_key_here")
DATABASE_NAME = os.getenv("AZURE_COSMOSDB_DATABASE", "db_conversation_history")
CONTAINER_NAME = os.getenv("AZURE_COSMOSDB_CONVERSATIONS_CONTAINER", "conversations")

try:
    # Initialize Cosmos client
    client = CosmosClient(COSMOS_ENDPOINT, credential=DefaultAzureCredential())
    database = client.get_database_client(DATABASE_NAME)
    container = database.get_container_client(CONTAINER_NAME)
    print("✅ Successfully connected to Cosmos DB using AAD authentication!")
except exceptions.CosmosHttpResponseError as e:
    print(f"❌ Failed to connect to Cosmos DB: {e}")
finally:
    client.close()