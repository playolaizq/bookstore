# Bookstore Architecture

Plan and apply AWS infrastructure (S3 and CloudFront).

## Getting Started

### 1. Prerequisites

#### 1.1. Terraform

Install HashiCorp tap:

```bash
brew tap hashicorp/tap
```

Install Terraform:

```bash
brew install hashicorp/tap/terraform
```

#### 1.2. AWS CLI

Follow [AWS CLI getting started install](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) reference.

#### 1.3. AWS Credentials

Set up IAM credentials to authenticate the Terraform AWS provider: `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` as environment variables.

Follow [AWS get access key ID and secret access key](https://docs.aws.amazon.com/powershell/latest/userguide/pstools-appendix-sign-up.html) reference.

### 2. Plan

```bash
terraform plan
```

### 3. Apply

```bash
terraform apply
```

## References

- [AWS CLI getting started install](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
- [AWS get access key ID and secret access key](https://docs.aws.amazon.com/powershell/latest/userguide/pstools-appendix-sign-up.html)
- [Install Terraform](https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli)
- [Terraform S3 bucket](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket)
- [Terraform S3 bucket website configuration](https://registry.terraform.io/providers/hashicorp/aws/4.8.0/docs/resources/s3_bucket_website_configuration)
- [AWS configure credentials - GitHub Action](https://github.com/aws-actions/configure-aws-credentials)
