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
