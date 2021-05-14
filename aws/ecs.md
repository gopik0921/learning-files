
Container definition
Task definition
Service
Cluster


ecsTaskExecutionRole -- Role to download images from docker hub
This role is required by tasks to pull container images and publish container logs to Amazon CloudWatch on your behalf. If you do not have the ecsTaskExecutionRole already, amaz0n can create one for you.

Task has memory cpu limits.

one task can have multiple containers in it.

Hardlimit -- Kills the container once memory limit exceeds
Softlimit-- memory reservation

hardlimit must be greater than softlimit

Task size allows you to size at the task level and optionally set container-specific CPU and memory sizes. You are billed for the task memory and task CPU allocated.

A service allows you to run and maintain a specified number (the "desired count") of simultaneous instances of a task definition in an ECS cluster.

The infrastructure in a Fargate cluster is fully managed by AWS. Your containers run without you managing and configuring individual Amazon EC2 instances

Task definitions specify the container information for your application, such as how many containers are part of your task, what resources they will use, how they are linked together, and which host ports they will use


An Amazon ECS cluster is a regional grouping of one or more container instances on which you can run task requests. Each account receives a default cluster the first time you use the Amazon ECS service. Clusters may contain more than one Amazon EC2 instance type.

A task placement strategy is an algorithm for selecting instances for task placement or tasks for termination

binpack
Tasks are placed on container instances so as to leave the least amount of unused CPU or memory. This strategy minimizes the number of container instances in use.

random
Tasks are placed randomly.

spread
Tasks are placed evenly based on the specified value. Availability Zones or across all instances.


ECS Instances = Ec2 Instance + Container Instance

Container Instance = EC2 Instance where ECS Agent is running

ECS_CONTAINER_METADATA_URI

X-Ray-Daemon -- Container needed for sending logs to X-Ray (UDP:2000)


    @Aspect
    @Component
    public class XRayInspector extends AbstractXRayInterceptor {
	@Override
	protected Map<String, Map<String, Object>> generateMetadata(ProceedingJoinPoint proceedingJoinPoint,
			Subsegment subsegment) {
		return super.generateMetadata(proceedingJoinPoint, subsegment);
	}

	@Override
	@Pointcut("@within(com.amazonaws.xray.spring.aop.XRayEnabled) && bean(*)")
	public void xrayEnabledClasses() {
	}
    }

    @Bean
	public Filter TracingFilter() {
		return new AWSXRayServletFilter("currency-exchange-service");
	}
	
@XRayEnabled

    @Bean
	public RestTemplate restTemplate() {
		// return new RestTemplate();
		return new RestTemplate(clientHttpRequestFactory());

	}

	private ClientHttpRequestFactory clientHttpRequestFactory() {
		HttpComponentsClientHttpRequestFactory factory = new HttpComponentsClientHttpRequestFactory(
				HttpClientBuilder.create().useSystemProperties().build());
		factory.setReadTimeout(10000);
		factory.setConnectTimeout(2000);
		factory.setConnectionRequestTimeout(2000);
		return factory;
	}	
	
	
App Mesh uses Envoy Proxy	
	
	



