# Create S3 bucket
resource "aws_s3_bucket" "bookstore" {
  bucket = "playolaizq-bookstore-bucket"

  tags = {
    Name        = "Bookstore"
    Environment = "Dev"
  }
}

# Enable Static website hosting
resource "aws_s3_bucket_website_configuration" "bookstore" {
  bucket = "playolaizq-bookstore-bucket"

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "error.html"
  }
}

resource "aws_s3_bucket_public_access_block" "bookstore" {
  bucket = "playolaizq-bookstore-bucket"

  block_public_acls   = true
  block_public_policy = true
}

resource "aws_s3_bucket_policy" "bookstore" {
  bucket = "playolaizq-bookstore-bucket"

  policy = <<POLICY
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::playolaizq-bookstore-bucket/*"
        }
    ]
}
POLICY
}
