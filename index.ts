import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";

// Create an AWS resource (S3 Bucket)
function davidwengpang() {
    const bucket = new aws.s3.Bucket("my-bucket");
}

module.exports = davidwengpang();
