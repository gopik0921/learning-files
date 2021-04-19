Simply put, the Spring Boot autoconfiguration represents a way to automatically configure a Spring application based on the dependencies that are present on the classpath.

Datasource bean will be created if we put dependency Spring data JPA

To create a custom auto-configuration, we need to create a class annotated as @Configuration and register it.

org.springframework.boot.autoconfigure.EnableAutoConfiguration=\
com.baeldung.autoconfiguration.MySQLAutoconfiguration

If we want our auto-configuration class to have priority over other auto-configuration candidates, we can add the @AutoConfigureOrder(Ordered.HIGHEST_PRECEDENCE) annotation.

@ConditionalOnClass  @ConditionalOnMissingClass

@ConditionalOnBean  @ConditionalOnMissingBean

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







             