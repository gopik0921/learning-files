
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

ElasticCahe for Redis -- Cahe, data store, message broker
    supports encryption,snapshots,readrelicas,backups

ElasticCahe for Memcached -- simple cache store for dynamic web applications    
    not support encryption,snapshots,readrelicas,backups
    
CloudTrail -- logs changes to aws resources

AWS Config -- For Auditing , Resource History and change tracking, Governance
           -- Inventory and rules

Cloudwatch  -- Monetoring and observability

***AWS Shared Responsity Model***
***Customer***
1)Encryption of Data at rest
2)Data Integrity
3)Server side Encryption
4)Password Policies



AWS Pricing Policy  -- Pay-as-u-go, Pay less by using more

Reserved Instances -- To reduce cost, To reserve capacity

Availability Zone -- One or more Data centers

A company has several AWS accounts, single bill -- Consolidated Billing service

Data stored within an AWS region is not replicated outside of that region automatically. It is up to customers of AWS to determine whether they want to replicate their data to other regions. You must always consider compliance and network latency when making this decision.

The five pillars of the AWS Well-Architected Framework are operational excellence, security, reliability, performance efficiency, and cost optimization.

Amazon CloudFront is a content delivery network (CDN) that caches data in Edge Locations around the world. This improves performance and reduces latency for global users.

A Network Load Balancer functions at the fourth layer of the Open Systems Interconnection (OSI) model. NLBs direct connections based on information at the TCP connection level

AWS Reliability -- Automatically recover from failure,Test recovery procedures.

Business Plan provides a response time of < 1 hour for production system down situations.

S3 Standard-IA is the best storage tier for data that needs to be highly available and immediately available but is not accessed regularly.

AWS Personal Health Dashboard provides alerts and remediation guidance when AWS is experiencing events that may impact you. It gives you a personalized view into the performance and availability of the AWS services underlying your AWS resources.

AWS Trusted Advisor is an online tool that provides you real time guidance to help you provision your resources following AWS best practices.

Cloudwatch log Insights-- system,applicatiobn,custom logs -- Cloudwatch logs agent install in ec2

CloudWatch Alarms -- related metrics

CloudWatch Events -- related resources

Servicelens -- X-ray+Cloud watch

Container insights -- To monitor container services

Which of these EC2 metrics is NOT tracked by CloudWatch by default --> Memory Utilization

By default, Amazon CloudWatch does NOT have access to operating system metrics like memory consumption

Asynchronous Communication
   Pull model -- Queue -- one to one 
   Push model -- Topic -- one to many

SQS -- Simple Queuing service 
  Standard Queue -- high throughput, no order -- Visibilty Timeout, Delay Seconds, Message Retention period,MaxRecieveCount
  FIFO Queue -- 300 messages per second(less  throughput), follows order
  
SNS -- Simple Notification Service

SNS does not need SQS or Queue

SES -- Simple Email Service(for bulk emails)

Amazon MQ -- Managed message broker for Apache ActiveMQ

recommended way to reduce the number of API calls that a consumer makes to SQS -- Use long Polling

CDN -- Content Delivery Network

Cloudfront -- if content is not available at edge location, retreived from original server and chached it.  -- Presigned urls, cookies -- GLobal servicee -- GeoRestriction

200+ edge locations  

Media Streaming -- Http,Rtmp

AWS Shield -- to protect from DDos Attacks

AWS Web Application Firewall -- Sql Injection, Cross site requests

OAI -- Origin Access Identity

AWS services helps you to trace requests across different components and AWS services - X-ray

Amazon GuardDuty - Continuously monitor AWS environment for suspicious activity (Intelligent Threat Detection). Analyzes AWS CloudTrail events, VPC Flow Logs etc.


IAAS
 AWS is responsible for:

- Physical Infrastructure (Hardware, Networking)

- Virtualization Layer (Hypervisor, Host OS)

 Customer is responsible for:

- Guest OS upgrades and patches

- Application Code and Runtime

- Availability, Scalability etc


AWS Shield --Protect Amazon Route 53, CloudFront, EC2 instances and Elastic Load Balancers (ELB) from DDos attacks


DevOps in AWS

** CI/CD Tools:**

- AWS CodeCommit - Private source control (Git)

- AWS CodePipeline - Orchestrate CI/CD pipelines

- AWS CodeBuild - Build and Test Code (packages and containers)

- AWS CodeDeploy - Automate Deployment(ECS, Lambda etc)

**Infrastructure Provisioning**

- AWS CloudFormation: Provision AWS Resources

- AWS SAM (Serverless Application Model):Provision Serverless Resources

**Configuration Management**

- AWS Service: OpsWorks (Chef, Puppet in AWS)

General Purpose (m), Compute Optimized (c), Memory Optimized (r - RAM) etc

Route 53 = Domain Registrar + DNS (Domain Name Server)

Amazon API Gateway - front door to your APIs

**Amazon Cognito:**

Add authentication and authorization to your mobile and web apps

- Integrate with web identity providers (ex: Google, Facebook)

- Add multi-factor authentication (MFA), phone and email verification

- Sync user data across devices, platforms, and applications


AWS Step Functions: Create a serverless workflow in 10 Minutes using a visual approach

**VPC Peering**

- Connect VPCs from same or different AWS accounts (across regions)

- Allows private communication between the connected VPCs

- Peering uses a request/accept protocol (Owner of requesting VPC sends a request)


AWS Snowball: Transfer hundreds of terabytes to petabytes data from onpremises to AWS

Four Plans: Basic (FREE), Developer ($), Business ($$), Enterprise ($$$$$$)

AWS Trusted Advisor: Provides Cost optimization, performance, security & fault tolerance recommendations

CloudHSM: Dedicated single-tenant HSM for regulatory compliance

(Remember) AWS KMS is a multi-tenant service

**Important Cloud Characteristics:**

- Elasticity

- On-demand resource provisioning.

- Trade "capital expense (capex)" for "variable expense (opex)" (Pay-as-you-go)

-  "Go global" in minutes

**Technical Support**

- Basic Plan - 24x7 access to customer service and forums

- Developer Plan - Business hours email access to Cloud Support Associates  Unlimited cases / 1 primary contact

- Business Plan - 24x7 phone, email, and chat access to Cloud Support Engineers Unlimited cases / unlimited contacts (IAM supported)

- Enterprise Plan - Same as Business Plan


Egress-Only Internet Gateways: For IPv6 subnets (NAT Gateway supports IPv4 ONLY)




- On Demand Instances - Request when you want it. Flexible and Most Expensive.   Immediate workloads (web applications/batch programs). Applications that cannot be interrupted.

- Spot Instances - Cheapest (upto 90% off). Quote the maximum price. Terminated with 2 minute notice. Cost sensitive, Fault tolerant, Non immediate workloads.

- Reserved Instances - Reserve ahead of time. Upto 75% off. 1 or 3 years reservation.  Scheduled: Reserve for specific time period in a day. (5% to 10% off)  No Upfront or Partial Upfront or All Upfront Payments

- Savings Plans - Commit spending $X per hour on (EC2 or AWS Fargate or Lambda).  Upto 66% off. Lot of flexibility. 1 or 3 years reservation.  No Upfront or Partial Upfront or All Upfront Payments




**Shared Responsibility Model**

- Security & Compliance - Shared responsibility:

- AWS manages security of the cloud:

- Operates, manages & controls Host OS and virtualization layer down to the physical security.

- YOU are responsible for security in the cloud:

- Guest OS (patches), Application S/W, Security Groups, Integrating AWS Services with IT environments





- Public Subnet: Communication allowed - Internet to Subnet

- An Internet Gateway enables internet communication for public subnets

- Public Subnet: Subnet having a route to an internet gateway

- Private Subnet: Subnet DOES NOT have route to an internet gateway



AWS Artifact - Self-service portal for on-demand access to AWS compliance reports, certifications, accreditations, and other third-party attestations. Review, accept, and manage your agreements with AWS.

Amazon Macie - Fully managed data security and privacy service  Uses machine learning to identify sensitive data in Amazon S3 (Recommendation) When migrating data to AWS use S3 for staging and Run Macie

AWS Security Hub - Consolidated view of your security status in AWS. Automate security checks, manage security findings, and identify the highest priority security issues across your AWS environment.

WAF -- AWS services  used to protect your web applications from web attacks by filtering traffic from a specific geographic location



- AWS Pricing Calculator (NEW) - Estimate cost of your architecture solution

- AWS Simple Monthly Calculator (OLD) - Estimate charges for AWS services

- AWS Billing and Cost Management - Pay your AWS bill, monitor your usage

- Cost Explorer - View your AWS cost data as a graph (Filter by Region, AZ, tags etc. See future cost projection.)

- AWS Budgets - Create a budget (Create alerts (SNS))  Recommendation: Enable Cost allocation tags. Helps you categorize your resource costs in Cost Management.

- AWS Compute Optimizer -  Recommends compute optimizations to reduce costs (Ex: Right-sizing - EC2 instance type,  Auto Scaling group configuration)

AWS Managed VPN: Tunnels from VPC to on premises

AWS Direct Connect (DX): Private dedicated network connection to on premises

AWS Systems Manager - Run commands(operational tasks) on Amazon EC2 instances.  Manage your OS and Database patches.

** AWS Trusted Advisor: **
Provides Cost optimization, performance, security ,fault tolerance ,service limits recommendations

- Cost Optimization: Unused resources, Other opportunities (ex: reserved instances)

- Security : Settings to make your AWS solution more secure (ex: security group)

- Fault Tolerance: Redundancy improvements, over-utilized resources

- Performance: Improve speed and responsiveness of your AWS solutions

- Service Limits: Is your usage is more than 80% of service limits?


AWS Professional Services - Get help from AWS for your cloud migration. Get technical expertise and advise from AWS Teams for Application Migration, Application Modernization etc

AWS Partner Network - Consulting and technology firms that help enterprises make the best use of AWS. Get help with design, architecture, build, connectivity and migration to AWS

Amazon Kinesis:  Handle streaming data (NOT recommended for ETL Batch Jobs)

Route 53 Policies:

simple (no health check)
weighted
latency
Failover
Geolocation
Multivalue (8 records)

Alias records can be created for root(in28minutes.com) and non-root domains(api.in28minutes.com)

CNAME record only for non-root domains

NS,A,AAAA,CNAME,SOA,MX

GeoProximity -- routing policy route to the nearest resource by geographic distance to your user

ETL -- Extract Transform Load

Redshift --Supports Standard SQL -- Automatic replication maintains 3 copies of your data -- Run complex queries against data warehouse

Redshift COPY command to load data from S3 (COPY is parallel)

Amazon Data Pipeline to load data into redshit

RedShift 4tier arcitecture for encryption using KMS
Master Key
Cluster Encryption Key
Database Encryption Key
Data Encryption Key

in redshift exsisting columns cannot be modified

RedShift Spectrum  --- Run Sql queries against datasets in s3
  metadata configured in Redshit (Avro,Parquet etc.,)
  
Amazon EMR -- Elastic Map Reduce -- For Big data frameworks that need high customization
  Managed Hadoop Service
  We can SSH to underlying OS
  
Amazon Athena  -- serverless version of Redshift spectrum -- for infrequent queries it is recommended    


EMR File System -- S3 -- recommended for Transient Clusters running Infrequent big data jobs

Hadoop Distribution File System (HDFS) -- EBS -- recommended for  Clusters running long big data jobs


AWS Data Lake  -- Glue Data Catelog(metadata for unstructered data in S3)
  S3 and Glacier are storage services for Data lake
  S3 Select and Glacier Select for Querying from s3 (simple SQL Queries) along with Red shift Spectrum,Athena  --(presto)
  Analytics -- EMR, Amazon ML, Amazon QuickSight(for visulizations), Amazon Recokgnition(for image regognising)
  
Kinesis Firehose -- for transering streaming data to S3

Snowball -- transfer onpremisis bulk data(petabytes) to AWS 

Parquet -- formatof data to store in S3

GZIP is recommended compression standard 

Amazon ML --create and run models for predictive analytics and machine learning using data from Amazon S3, Amazon Redshift, or Amazon RDS

recommended option for storing data in Data Lakes -- S3

S3 Notifications

DyanamoDb streams 

Kinesis -- for streaming data
  
  Kinesis Data Streams -- process data streams -- alternative fo kafka
  Kinesis Firehose -- save data to s3 or elasticsearch etc  -- serverless
  Kinesis Analytics -- run quries against streaming data  -- Sql quries
  Kinesis Video Streams -- monitor video streams -- AWS AI
  
TCO - Total Cost of Ownership Calculator (OLD) -  Compare Cost of running applications in AWS vs On-Premise

Amazon CloudWatch Events - Act based on events on AWS resources Call a AWS Lambda function or send an email when an EC2 instance starts (ADDITIONAL FEATURE) 

Schedule events - Schedule hourly call to Lambda function

Amazon EventBridge (NEW!) - Extends CloudWatch Events and helps you build event driven architectures


monitor network traffic and troubleshoot network connectivity issues (NACL and/or Security Groups misconfiguration) -- Vpc Flow logs

AWS service can be used to protect your web applications from Common Vulnerabilities and Exposures (CVE) - information-security vulnerabilities and exposures -- AWS WAF

Amazon Lightsail - Pre-configured development stacks in AWS - LAMP, MEAN. Run websites on WordPress.Low, predictable monthly price.

Concierge Support Team--Designated Technical Account Manager (TAM) to pro-actively monitor your environment and assist with optimization and coordinate access to programs and AWS experts

AWS Snowball: Transfer hundreds of terabytes to petabytes data from onpremises to AWS

Use Snowmobile Trucks (100PB per truck) for dozen petabytes to exabytes

Lambda@Edge -- running lambda at edge locations -- supports Node and python -- can call lambda on cloundfront events

S3, EFS -- serverless

Amazon Serverless Application Model -- uses Cloud Formation -- YAML file 
  -- opensource framework to buid serverless applications

Amazon Cognito -- User pools , Identity pools

Amazon AppSync -- for syncing data from multiple devices to databases. -- based on graphql

Amazon Step Functions:  for simple workflow

Amazon Simple Workflow service (SWF) -- For complex orchecstration workflow

VPC Peering: Connec VPCs belonging to same or different AWS accounts irrespective of region of the VPC (request/accept protocol) not transitive

VPC EndPoint : securely connect your VPC to another service
 two resources in AWS want to communicate without internet

i) GatewayEndPoint -- S3, Dynamodb
ii)Interface Endpoint -- Except S3,Dynamodb -- privatelink(traffic within AWS network) --ENI is needed

VPC Flow Logs -- monitor network traffic

Problem with response -- NACL

Problem with request  -- NACL or SG

AWS to On Premises::

i)AWS Managed VPN -- through Internet -- Vpn Gateway , Customer Gateway
ii)AWS Direct Connect -- private connection -- reduced costs -- consistent -- take time to establish (may be a month)

Software VPN-- customer managed vpn on both sides

VPN Cloudhub

S3 Transfer Acceleration -- basic upto few tera bytes -- we can use edge locations

AWS Snowball -- dozens of terrabytes to petabytes -- automatically encrypted -- if direct transfer takes more than a week then choose snowball -- 100TB per device

AWS Snowmobile -- dozens of petabytes to exabytes --  automatically encrypted  -- 100PB per truck

AWS DataSync -- transfer file storage to cloud

AWS DataPipelinec--complex data processing workloads -- not for streaming data

AWS Database Migration Service -- On premises database to AWS  -- syncing is possible

AWS Schema Conversion Tool -- it is part of DMS -- for migration -- redshift -- syncing is not possible

use private ip -- secure,less data transer cost


CI -- continously run tests and packing
CDeployment -- continously deploying to test environments
CDelivery -- continously delivering to production

Infrastructure Provisioning -- Terraform (cloud neutral)  CloudFormation(AWS specific)

Configuration Management -- Chef,Puppet,Ansible(Cloud Neutral)  OpsWork(Aws Specific)

Stack -- A group of resources created when CloudFormation template is executed.

DDos  -- Distribute Denial of service -- millions of requests to slow down the services

AWS shield -- Standard,advanced 

AWS WAF -- OWASP Top 10 -- Open web Application Security Project
           Examples :: Sql Injection,Cross Site Scripting
         CVE -- Common Vulnerbilites and Exposures
         Web Traffic Filtering
         
AWS Organisations  -- SCP --Service Control Policies 
   AWS Resource Access Manager --- Share AWS resources with any AWS account or within organisation
   
            
AWS Service Quotas 

AWS Directory Services -- AWS access to on premises users without IAM users
  1)AWS Directory Service for Microsoft AD -- >5000  trust relationship
  2)Simple AD --<5000  no trust SAMBA4
  3)AD Connector -- on premises  
  
AWS Global Accelerator -- two static IP -- EDGE locations

AWS Elemental Video Convert

AWS Workspaces  -- Desktop as a service -- alternative for VDI(Virtual Desktop Infrastructure)

AWS Systems Parameter Store -- Manage Applications environment Configuration and Secrets

AWS Secrets Manager

AWS Single Sign ON

SAML2 -- Security Assertion Markup Language

AWS ElasticSearch                    


**EBS Storage Types**
Cold HDD - Infrequent access use cases (minimum cost)

Throughput Optimized HDD -  Frequently accessed, large sequential operations with high throughput (cost-sensitive)

General Purpose SSD - System boot volumes and transactional workloads

Provisioned IOPS SSD - Transactional workloads needing very high IOPS (up to 64,000 IOPS per volume)



Geoproximity - Choose the nearest resource (geographic distance) to your user.

Geolocation - Configure the target based on the continent, country or state (within the United States) of the user


Note: Creating a Static Website using Amazon S3 helps in reducing the load on EC2 instances but it does NOT help with improving latency.

Amazon RDS Proxy efficiently manages database connections. It sits between client applications (including lambdas) and RDS.

Important to Note: NAT Gateway has to be set up in the public subnet.

Lambda@Edge can help you block unwanted bots at the edge, and let the authorized traffic go through.

**Elastic Fabric Adapter (EFA)**

to improve Inter-instance communication of your EC2 instances

Ideal for High-Performance Computing (HPC) applications like weather modeling

EFA = ENA + OS-bypass


Multi-AZ creates a standby and improves availability.

Creating Read Replicas does not help with availability.

Migrating the Database to Aurora Serverless is NOT the simplest solution.


IAM database Authentication


**Amazon DynamoDB**

Fast, scalable, distributed for any scale (Automatically partitions data as it grows)

Single-digit millisecond responses for millions of transactions per second

Maintains 3 replicas within the same region


Signed URLs are recommended for

- Individual application or file downloads

- Situations where cookies are not supported



Signed Cookies are recommended for

- Securing multiple files (You have a subscriber website)

- Situations where you do not want to change application URLs


Amazon Data Life cycle Manager -- EBS Snapshots


**Standard Queue**

Unlimited throughput

BUT NO guarantee of ordering (Best-Effort Ordering)

and NO guarantee of exactly-once processing (some messages can be processed twice)



**FIFO (first-in-first-out) Queue**

First-In-First-out Delivery

Exactly-Once Processing

BUT throughput is  a lot lower 



Choose Standard SQS queue if throughput is important

Choose FIFO Queue if the order of events or exactly-once processing is important


Deregistration delay ensures that the Load Balancer gives in-flight requests a chance to complete execution.

It can be 0 to 3600 seconds (default 300 seconds).

Also called Connection Draining.



You can use S3 Lifecycle configuration to perform transition actions (one storage class to another) and expiration actions (delete objects)


**Important things to remember about Hibernating instances**

Only EBS backed instances can be stopped or hibernated upto 60 days

Hibernating preserves RAM in the root EBS volume.

Provides quick restarts for use cases with either long-running processes or slow bootup times.


Security Groups(Defense in Depth) are default denyIf there are no rules configured, no outbound/inbound traffic is allowed.

You can assign multiple (up to five) Security Groups to your EC2 instances


**Some of the important SQS queue configuration:**

Visibility timeout

Other consumers will not receive a message being processed for the configured time period

default - 30 seconds, min - 0, max - 12 hours


DelaySeconds

The time period before a new message is visible on the queue


Message retention period

The maximum period a message can be on the queue

Default - 4 days, Min - 60 seconds, Max - 14 days


Amazon FSx for Lustre is optimized for performance

For high-performance computing (HPC), machine learning, and media processing use cases

Sub-millisecond latencies, up to hundreds of gigabytes per second of throughput, and up to millions of IOPS




DynamoDB Accelerator (DAX) is an in-memory caching solution for DynamoDB providing microsecond response times.

DAX can reduce your costs by saving DynamoDB read capacity units.


AWS CloudTrail tracks events, API calls, changes made to your AWS resources:

- Who made the request?

- What action was performed?

- What are the parameters used?

- What was the result?


ASG Default Termination Policy -- Instances evenly across AZs. Next Priority is old instances


Amazon S3 Object Lock prevents the deletion of objects and allows you to meet regulatory requirements.

It can be enabled only on new buckets. It automatically enables versioning.


The maximum allowed time for lambda execution is 900 seconds (default - 3 seconds).


Creating an IAM role in the PROD AWS Account and adding DEV AWS Account as a trusted account is the recommended approach.


Restrict access to S3 buckets only from cloudfront. Create a special user (Origin Access Identity). Associate OAI with
Cloudfront distribution. Configure S3 Bucket policy to allow access from to OAI.


DynamoDB Streams help you to trigger real-time events from changes to DynamoDB tables (in time-sequenced order)



VPC Flow Logs helps you to monitor network traffic and troubleshoot connectivity issues (NACL and/or Security Groups misconfiguration).  You can capture traffic going in and out of your VPC (network interfaces).



VPC Flow Logs can be created for:

- a VPC

- a subnet

- or a network interface (connecting to ELB, RDS, ElastiCache, Redshift, etc)



VPC Flow Logs can publish logs to Amazon CloudWatch Logs or Amazon S3.


Multi-AZ deployments provide high availability

Read Replicas provide high scalability


**S3 Consistency Model**

READ AFTER WRITE for new objects

Eventual Consistency for Overwrite PUTS and DELETES


S3 Data is highly distributed across multiple AZs and (possibly) multiple regions:

When you create a new object, it is immediately available

You might get a previous version of data immediately after an object update using PUT/DELETE

You will never get partial or inconsistent data



(Remember) Canceling a Spot request might not terminate active Spot instances

To completely close a Spot request:

Step 1. Cancel Spot Request

Step 2. Terminate all Spot Instances


**Redshift Workload Management**

WLM can be configured to prioritize queues

Create multiple queues with different concurrency level for different purposes

One queue for long-running queries with low concurrency

One queue for short running queries with high concurrency (up to 50 concurrent queries)


Installing OS patches and software using user data at the launch of EC2 instances increases boot-up time. Prefer using a Customized AMI with OS patches and software pre-installed.


AWS Security Hub - Consolidated view of your security status in AWS. Automate security checks, manage security findings, and identify the highest priority security issues across your AWS environment.

Amazon S3 and EFS are auto-scaling.

Multiple Geographic Locations => Multiple Regions.

Read Replicas can be created in Multiple Regions

Operational Excellence Pillar - Avoid/Minimize effort and problems with Provisioning servers, Deployment, Monitoring and Support

Recommendations:

- Use Managed Services: No worry about managing servers, availability etc

- Go serverless: Prefer Lambda to EC2!

- Automate with Cloud Formation: Use Infrastructure As Code

- Implement CI/CD to find problems early: CodePipeline, CodeBuild, CodeDeploy

- Perform frequent, small reversible changes


VPC Endpoint - Securely connect your VPC to another service

- Gateway endpoint: Securely connect to Amazon S3 and DynamoDB

- Interface endpoint: Securely connect to AWS services EXCEPT FOR Amazon S3 and DynamoDB



**EC2 Dedicated Hosts**

- Physical servers dedicated to one customer

- You have visibility into the hardware of the underlying host (sockets and physical cores)

- (Use cases) Regulatory needs or server-bound software licenses like Windows Server, SQL Server



Infrastructure Provisioning

- AWS CloudFormation: Provision AWS Resources

- AWS SAM (Serverless Application Model):Provision Serverless Resources




- Personal Health Dashboard - Personalized alerts when AWS is experiencing events that may impact you  Provides troubleshooting guidance



THREE TYPES OF IT CONTROLS

- Inherited Controls (Customer fully inherits from AWS): Physical and Environmental controls

- Shared Controls (Controls shared by AWS and Customer)

>> Patch Management: AWS (Infrastructure Patches), Customer (Guest OS Patches and Software Patches)

>> Configuration Management: AWS (Infrastructure), Customer (Guest OS, databases, and applications)

>> Awareness & Training

- Customer Owned Controls

>> Controls based on the applications deployed to AWS

>> Data Security Requirements


Without cross-zone load balancing enabled, the NLB will distribute traffic 50/50 between AZs. As there are an odd number of instances across the two AZs some instances will not receive any traffic. Therefore enabling cross-zone load balancing will ensure traffic is distributed evenly between available instances in all AZs


AWS Lambda is an ideal solution for running the code from this script. It can also be triggered by Amazon S3. Lambda functions can run for up to 15 minutes so each execution should complete well within this time. This is the most cost-effective solution for batch jobs.


The "fanout" scenario is when an Amazon SNS message is sent to a topic and then replicated and pushed to multiple Amazon SQS queues, HTTP endpoints, or email addresses. This allows for parallel asynchronous processing.


Amazon CloudFront can be used to generate custom error messages

A cluster placement group is the best choice for inter-node performance.

Increasing Capacity of stream --  Increase the number of shards in the Kinesis data stream
The capacity of a stream is the sum of the capacity of its shards. Each shard provides a capacity of 1MB/sec data input and 2MB/sec data output. One shard can support up to 1000 PUT records per second.

Migrating the database to an Amazon RDS multi-AZ deployment creates high availabilty for the database tier.

You can use Amazon S3 and generate pre-signed URLs. These provide time-limited access to the Amazon S3 bucket to allow users to upload photos.

You can copy AMIs for each EC2 instance to the second Region. This is a good way of creating a copy of your EC2 instances in another AWS Region
New EC2 instances that are identical to the source instances can be created by launching from the copied AMIs in the second Region.

The AWS Direct Connect connection will take several weeks to be installed so cannot be used for the initial data migration.

An AWS Direct Connection will off the low-latency, high bandwidth and consistent performance required.

With on-demand capacity mode, DynamoDB charges you for the data reads and writes your application performs on your tables. You do not need to specify how much read and write throughput you expect your application to perform because DynamoDB instantly accommodates your workloads as they ramp up or down.

You cannot enable encryption for an Amazon RDS database instance after it has been created. You can only enable encryption at creation time
Create an encrypted copy of a database snapshot. Create a new database instance from the encrypted snapshot and remove the unencrypted database instance  which will ensure encryption for all future backups (snapshots).

Object versioning is a means of keeping multiple variants of an object in the same Amazon S3 bucket. Versioning provides the ability to recover from both unintended user actions and application failures. You can use versioning to preserve, retrieve, and restore every version of every object stored in your Amazon S3 bucket.

 Amazon S3 cross-Region replication is used to copy objects to different regions. CRR relies on versioning which is the feature that is required for protecting against accidental deletion.
 
 Long Polling will eliminate empty responses by allowing Amazon SQS to wait until a message is available in a queue before sending a response.
 
 
  Amazon EBS is a block storage system. You can store any data on a block storage system including files
  
   For extra security, AWS recommends that you require multi-factor authentication (MFA) for all users in your account.
   
   AWS recommends that you create individual IAM users rather than sharing IAM user accounts.
   
EBS optimization ---
Indicates whether the instance type supports EBS optimization. An EBS-optimized instance provides additional, dedicated throughput for Amazon EBS I/O. This provides improved performance for your Amazon EBS volumes and enables instances to use provisioned IOPs fully.  

100 total rules per application load balancer
5 condition values per rule
5 wildcards per rule
5 weighted target groups per rule

ASG -- Life cycle hook, Termination policies

NLB -- Lambdas not supported

NLB -- Cross Zone Load Balancing and Access logs are disabled by default , Can be assigned static IP/Elastic IP

ALB -- Cross Zone Load Balancing  is enabled by default


max 7 running instances in spread placement group in single AZ

max 7 partitions in single AZ

only one instance type in a launch request and launch all instances together.

Ipv4 -- Internet Protocol Version 4 -- Numeric 32 bit

Ipv6 -- Internet Protocol Version 6 -- AlphaNumeric 128 bit

CIDR block of VPC can be from /16 to /28 addresses

In each subnet 5 IP address(first four,last) are reserved by AWS

Address range of VPC can be extended

Address range of Subnet cannot be changed

Subnets are all default private

NAT Gateway should be from public subnet

Parameter Store -- Centralized configuration in Systems Manager







 
 
 






 









  
  
  















  

    





  



























 
















                              
                                