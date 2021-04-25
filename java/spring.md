Simply put, the Spring Boot autoconfiguration represents a way to automatically configure a Spring application based on the dependencies that are present on the classpath.

Datasource bean will be created if we put dependency Spring data JPA

To create a custom auto-configuration, we need to create a class annotated as @Configuration and register it.

org.springframework.boot.autoconfigure.EnableAutoConfiguration=\
com.baeldung.autoconfiguration.MySQLAutoconfiguration

If we want our auto-configuration class to have priority over other auto-configuration candidates, we can add the @AutoConfigureOrder(Ordered.HIGHEST_PRECEDENCE) annotation.

@ConditionalOnClass  @ConditionalOnMissingClass

@ConditionalOnBean  @ConditionalOnMissingBean

@ConditionalOnResource

@ConditionalOnProperty(
  name = "usemysql", 
  havingValue = "local")
  
@EnableAutoConfiguration(exclude={MySQLAutoconfiguration.class})  

spring.autoconfigure.exclude=com.baeldung.autoconfiguration.MySQLAutoconfiguration

With Spring, we use the @ComponentScan annotation along with @Configuration annotation to specify the packages that we want to be scanned. @ComponentScan without arguments tells Spring to scan the current package and all of its sub-packages.

 @SpringBootApplication -- 
       @Configuration
       @EnableAutoConfiguration
       @ComponentScan
       
@ComponentScan(excludeFilters = 
  @ComponentScan.Filter(type = FilterType.ASSIGNABLE_TYPE, value = Rose.class))
  
@ComponentScan(excludeFilters = 
  @ComponentScan.Filter(type=FilterType.REGEX,
    pattern="com\\.baeldung\\.componentscan\\.springapp\\.flowers\\..*"))

@ConfigurationProperties(prefix = "database")
public class Database {
    String url;
    String username;
    String password;
}

Configuration annotation indicates that the class has @Bean definition methods. So Spring container can process the class and generate Spring Beans to be used in the application.

Spring Boot Autoconfigures Application Context on itself.


SpringApplication.run(MySpringConfiguration.class, args);

SpringApplication allows an application to be initialized lazily. When lazy initialization is enabled, beans are created as they are needed rather than during application startup. As a result, enabling lazy initialization can reduce the time that it takes your application to start. In a web application, enabling lazy initialization will result in many web-related beans not being initialized until an HTTP request is received.

spring.main.lazy-initialization=true

Tasks expected to run during startup should be executed by CommandLineRunner and ApplicationRunner components instead of using Spring component lifecycle callbacks such as @PostConstruct.

An application is considered ready as soon as application and command-line runners have been called.

The latest version of the Spring framework defines 6 types of scopes:

singleton
prototype
request
session
application
websocket
global session -- portlet applications

The last four scopes mentioned, request, session, application,GLOBAL SESSION and websocket, are only available in a web-aware application.

The request scope creates a bean instance for a single HTTP request, while the session scope creates a bean instance for an HTTP Session.

The application scope creates the bean instance for the lifecycle of a ServletContext, and the websocket scope creates it for a particular WebSocket session.



The following is the ordering for initialization methods:

Methods annotated with @PostConstruct

afterPropertiesSet() as defined by the InitializingBean callback interface

A custom configured init() method

Destroy methods are called in the same order:

Methods annotated with @PreDestroy

destroy() as defined by the DisposableBean callback interface

A custom configured destroy() method



Default properties (specified by setting SpringApplication.setDefaultProperties).

spring.profiles.active=prod

spring.config.import=optional:file:./dev.properties

spring.config.activate.on-profile=dev

For example, the configuration property spring.main.log-startup-info would be an environment variable named SPRING_MAIN_LOGSTARTUPINFO.

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)

Spring Cloud Bus provides two endpoints, /actuator/busrefresh and /actuator/busenv that correspond to individual actuator endpoints in Spring Cloud Commons, /actuator/refresh and /actuator/env respectively.

ClassPathResource cr=new ClassPathResource("filename in resource");

 org.springframework.core.convert.converter.Converter;
 
 
 spring:
  cloud:
    gateway:
      routes:
        - id: userCmdApi-RegisterUser
          uri: http://localhost:8081/api/v1/registerUser
          predicates:
            - Path=/api/v1/registerUser
          filters  
            

Predicates -- Path,Method  

 
    return webClient.get().uri("/v1/items/{id}",id)
                .retrieve()
                .bodyToMono(Item.class)
                .log("Items in Client Project retrieve single Item : ");
                
     return webClient.get().uri("/v1/items/{id}",id)
                .exchange()
                .flatMap(clientResponse -> clientResponse.bodyToMono(Item.class))
                .log("Items in Client Project retrieve single Item : ");     
                
                Mono<Item> itemMono = Mono.just(item);
       return webClient.post().uri("/v1/items")
                .contentType(MediaType.APPLICATION_JSON)
                .body(itemMono, Item.class)
                .retrieve()
                .bodyToMono(Item.class)
                .log("Created item is : ");
                
                                 
 
Prototype scope = A new object is created each time it is injected/looked up. It will use new SomeBean() each time.

Singleton scope = The same object is returned each time it is injected/looked up. Here it will instantiate one instance of SomeBean and then return it each time.

Prototype bean is created at the time of usage. So when you would like to have statefull beans there is strong need sometimes to have prototypes scope or when you don't wont to cache any values in beans. Prototype bean can be associated with one session or some call.


ApplicationContextAware – to inject ApplicationContext object, example usage is to get the array of bean definition names.

BeanFactoryAware – to inject BeanFactory object, example usage is to check scope of a bean.

BeanNameAware – to know the bean name defined in the configuration file.

ResourceLoaderAware – to inject ResourceLoader object, example usage is to get the input stream for a file in the classpath.

ServletContextAware – to inject ServletContext object in MVC application, example usage is to read context parameters and attributes.

ServletConfigAware – to inject ServletConfig object in MVC application, example usage is to get servlet config parameters.


Spring's BeanPostProcessor gives us hooks into the Spring bean lifecycle to modify its configuration.

BeanPostProcessor allows for direct modification of the beans themselves.

I understood that BeanFactoryPostProcessor operates on bean definition i.e. before the bean instance is getting created it gets executed and BeanPostProcessor gets executed after bean is instantiated and lifecycle events are called.

After loading the bean definitions from all styles of configurations, BeanFactoryPostProcessor comes into the picture to modify the definition of some beans, and then the container instantiates the beans. Finally, BeanPostProcessor works on the beans, and it can modify and change the bean object. This is the initialization phase.

postProcessBeforeInitialization

postProcessAfterInitialization

@PropertySource("classpath:foo.properties")

@Autowired
private Environment env;
...
dataSource.setUrl(env.getProperty("jdbc.url"));

@TestPropertySource("/foo.properties")

@TestPropertySource(properties = {"foo=bar"})

@Component is a generic stereotype for any Spring-managed component. 

@Repository One of the main uses of this marker is the automatic translation of exceptions using an implementation of PersistenceExceptionTranslator. DAO throws a subclass of a HibernateException (if we are using Hibernate), which is a RuntimeException. Spring will automatically convert these Hibernate specific Runtime Exceptions to Spring specific exception.








             