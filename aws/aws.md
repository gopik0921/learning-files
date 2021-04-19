
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
Provides Cost optimization, performance, security & fault tolerance recommendations

- Cost Optimization: Unused resources, Other opportunities (ex: reserved instances)

- Security : Settings to make your AWS solution more secure (ex: security group)

- Fault Tolerance: Redundancy improvements, over-utilized resources

- Performance: Improve speed and responsiveness of your AWS solutions

- Service Limits: Is your usage is more than 80% of service limits?


AWS Professional Services - Get help from AWS for your cloud migration. Get technical expertise and advise from AWS Teams for Application Migration, Application Modernization etc

AWS Partner Network - Consulting and technology firms that help enterprises make the best use of AWS. Get help with design, architecture, build, connectivity and migration to AWS

Amazon Kinesis:  Handle streaming data (NOT recommended for ETL Batch Jobs)

Route 53 Policies:

simple
weighted
latency
Failover
Geolocation
Multivalue (8 records)












  

    





  



























 
















                              
                                