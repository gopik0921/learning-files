
                                Amazon Web Services
Root Account
IAM -- Identity Access Management roles

Regions --> Availability Zones
                                
EC2 -- Elastic Compute Cloud  
 
AMI -- Amazon Machine Image

Instance types--> t2.micro  

Tenancy --> Shared,Dedicated Instance, Dedicated Host

Placement group --> cluster, spread, partition

Enable termination protection -->Protect against accidental termination

User data --> to do actions on instance load time

curl https://169.254.169.254/latest/meta-data --> in instance

curl https://169.254.169.254/latest/dynamic/instance-identity -->  in instance

SG -- Security Group --> Inbound Outbound rules to access instance

ICMP Ipv4 should be enabled to ping

Launch Template -- to make fast instances

Custom AMI -- For better load time

Spot Requests -- for low cost among all

On demand -- highest among all

Reserved Instances 

Scheduled Instances

Key-pairs --> to access instances

Private key --0400 permission

Elastic IPs --> billed when not in use. Constant reserved Ip

Elastic Network Interface --> we can add secondary Network interface to instance. This gives second private IP for instance


Load Balancers: 

1)Classic load balancer -- both Http and Tcp

2)Application load balancer -- Http only layer 7

3)Network load balancer -- Tcp,Udp layer 4 -- high performance

4)Gateway load balancer

Target Groups -- bunch of instances

listeners -- to route traffic based on rules

ASG -- Auto Scaling Group --> Target,Simple,Step

CloudWatch is used in ASG.


Elastic Beanstalk --> Managed service for web and worker deployments.

ECS: Elastic Container Services ECR -- Elastic Container Registry

Fargate: Serverless version of ECS

Lambda -- Lambda functions serverless

ApiGateway -- to develop Apis fast and deploy supports Lambda

X-Ray -- for log tracing

VPC -- Virtual Private Cloud in single region

Subnet -- For Avaliability zone

CIDR block--Classless Inter Domain Routing

Internet Gateway

Route Table -- one route table for subnet

Egress Only Internet Gateway -- IPv6 only

NAT Gateways -- Managed Service -- for private subnets to access internet -- need elastic IP

NAT instance

Network ACL -- to stop traffic reaching subnet

S3 -- Simple Storage Services -- Object Storage

S3 Buckets -- Key-values

S3 Versioning -- At bucket level

S3 Log Access

Web hosting using S3 -- Enable public access and Bucket policies

Obect level Logging

Encryption using AES or Amazon KMS -- Key Managment Service

Requestor Pays

Object lock -- deletion of objects not possible , should enable while creating

Event -- SNS, SQS, Lambda

S3 Prefixes

ACL --> Access Control List at both Bucket and Object level

Storage Classes

1)Amazon S3 Standard (S3 Standard) --frequently accessed data
2)Amazon S3 Intelligent-Tiering (S3 Intelligent-Tiering) --  data with unknown or changing access patterns
3)Amazon S3 Standard-Infrequent Access (S3 Standard-IA)-- long-lived, but less frequently accessed data
4)Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA)-- long-lived, but less frequently accessed data
5)Amazon S3 Glacier (S3 Glacier) -- long-term archive and digital preservation
6)Amazon S3 Glacier Deep Archive (S3 Glacier Deep Archive) --long-term archive and digital preservation
7)Amazon S3 Outposts -- S3 Data on premises

S3 Lifecycle Configuration --> to change storage classes over time (transaction or expiration actions)

S3 Replication --> Same or differnt regions (versioning should be enabled for both source and destination)

Object Lock --> Bucket level only

S3 --> Eventual Consistent

Presigned URLs

Access Points  --> to give access to users or applications

S3 Glacier --> For Archives upto 40TB --> console not supported-->Encrytion is must --> archives in Vault
Expedited -- 1 to 5 minutes
Standard -- 3 to 5 hours
Bulk Retrievals -- upto 12 hours

S3 Glacier Deep Archive
Standard -- upto 12 hours
Bulk Retrievals -- upto 48 hours


IAM User -- IAM Group 

IAM Policies -- AWS Managed or Custom Managed

Inline Policy

IAM Roles -- Ec2 instance talks with S3 or database --> Cross Account access -- doesnt have any credentials

STS(Security Token Service) -- AssumeRole -- Switch role

IAM Corporate Federation -- SAML2.0

IAM Web Identity Federation -- openId like Amazon Cognito,Facebook, Google

IAM Role is not associated with IAM user

MFA -- Multi Factor Authentication

KMS -- Key Management Service

Synchronous -- Single key, Asyncchronous -- two keys pub sub

HSM --> Hardware Security Manager

Envelope Encryption

EBS --> Elastic BlockStore

EBS same AZ

Snapshots --> Incremental

EBS --> SSD,HDD

SSD --> Solid state Drive --> General purpose((Baseline of 3 IOPS per GiB with a minimum of 100 IOPS, burstable to 3000 IOPS), Provisoned IOPS

Min: 3000 IOPS, Max: 16000 IOPS(gp3)

HDD --> Hard Disk Drive --> Throuhput Optimized , Cold HDD

Instance Store

Snashpshot --> AMI

RAID 1 --> higher durability(fault tolerence)

RAID 0 --> higher IOPS,storage

ENA --> Elastic Network Adapter

EFA --> Elastic Fabric Adapter

Amazon Data LifeCycle Manager --> to automate snapshots

Amazon EFS --> Elastic File System

Max I/O Mode -- high throughput

AWS Fsx for lustre  --> for high performance

AWS FSx for Windows

For commands that take binary data as a parameter, specify that the data is binary content by using the fileb:// prefix.
Commands that accept binary data include:
aws ec2 run-instances --user-data parameter.
aws s3api put-object --sse-customer-key parameter.
aws kms decrypt --ciphertext-blob parameter.

What is the name of licensing model in which I can use your existing Oracle Database licenses to run Oracle deployments on Amazon RDS? -- Bring Your Own License

What is the maximum ratio the user should configure between Provisioned IOPS and the volume size? 50:1
Provisioned IOPS SSD (io1) volumes are designed to meet the needs of I/O-intensive workloads, particularly database workloads, that are sensitive to storage performance and consistency.
An io1 volume can range in size from 4 GiB to 16 TiB and you can provision 100 up to 64,000 IOPS per volume. The maximum ratio of provisioned IOPS to requested volume size (in GiB) is
50:1. For example, a 100 GiB volume can be provisioned with up to 5,000 IOPS. Any volume 400 GiB in size or greater allows provisioning up to the 20,000 IOPS maximum
io2 -- Maximum ratio of 500:1 is permitted between IOPS and volume size

A Virtual Private Cloud (VPC) is a virtual network dedicated to the user's AWS account. A user can create a subnet with VPC and launch instances inside that subnet. When an instance is launched it will have a network interface attached with it. The user cannot delete the subnet until he terminates the instance and deletes the network interface. By default, network interfaces that are automatically created and attached to instances using the console are set to terminate when the instance terminates. However, network interfaces created using the command line interface aren't set to terminate when the instance terminates.

The two reasons you would need to edit claims issued in a SAML token are:
The NameIdentifier claim cannot be the same as the username stored in AD, and The app requires a different set of claim URIs.

 streqi is the short version of StringEqualsIgnoreCase -- IAM
 
 Storage Gateway --> for migration of on premises to AWS
 
 1)Storage File Gateway
 2)Storage Tape Gateway
 3)Storage Volume Gateway --> 
       Gateway Cached Volumes(Primary Datasource AWS) 
       Gateway Stored Volumes(Primary Datasource On-premises) -- for disaster recovery
       

RPO - Recovery Point Objective -- Acceptable Time of loosing data
RTO - Recovery Time Objective  -- Acceptable Downtime

OLTP -- Online Transaction Processing -- Amazon RDS

OLAP -- Online Analytics Processing -- Amazon Redshift

Dyanamo DB -- Document DB , Key Value DB

Amazon Neptune -- Graph DB

ElasticCahe -- For caching

Aurora -- Read Replicas -15 others -5

Oracle -- 
  Enterpise Edition or Standard Edition ---> BYOL -- Bring your own license
  Standard Edition One or Standard Edition Two  ----> BYOL or License Included
  
MySql Server  --> Licence Included for All options No BYOL

DynamoDB -- 400kb max document size -- Eventually Consistent

RCU -- Read Capacity Units

WCU -- Write Capacity Units

TTL -- Time To Leave

Partition Key -- Primary Key

Global Secondary Index -- At any time , Different Partition Key Different SortKey

Local Secondary Index -- At table Creation Only, Same Partition Key Differnt Sort Key 

Sort Key

Global Table -- Enable Streams

DynamoDB DAX Accelerator -- inmemory cache






  



























 
















                              
                                