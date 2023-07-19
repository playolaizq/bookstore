# AWS provider
terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "5.8.0"
    }
  }
}

# Configuration options
provider "aws" {
  region = "eu-central-1"
}
