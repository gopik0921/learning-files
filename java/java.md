                           Java Interview Questions
                           
Aggregation and Composition are subsets of association

Aggregation implies a relationship where the child can exist independently of the parent. Example: Class (parent) and Student (child). Delete the Class and the Students still exist.

Composition implies a relationship where the child cannot exist independent of the parent. Example: House (parent) and Room (child). Rooms don't exist separate to a House.

Aggregation is weak association.

Inheritence Is-A relationship

Composition Has-A relationship

Command and Query Responsibility Segregation (CQRS) design pattern for microservices.

Transaction Isolation Problems::

Dirty read: read the uncommitted change of a concurrent transaction

Nonrepeatable read: get different value on re-read of a row if a concurrent transaction updates the same row and commits

Phantom read: get different rows after re-execution of a range query if another transaction adds or removes some rows in the range and commits  


Transaction Isolation Levels::

DEFAULT, READ_UNCOMMITTED, READ_COMMITTED, REPEATABLE_READ, SERIALIZABLE


Get vs Load Hibernate::

Null Object 
:::Get:::
It object not found for the given identifier then it will return null object 
:::Load:::
It will throw object not found exception 


Lazy or Eager loading 
:::Get:::
It returns fully initialized object so this method eager load the object  
:::Load:::
It always returns proxy object so this method is lazy load the object  


Performance 
:::Get:::
It is slower than load() because it return fully initialized object which impact the performance of the application 
:::Load:::
It is slightly faster.


Use Case
:::Get:::
If you are not sure that object exist then use get() method 
:::Load:::
If you are sure that object exist then use load() method 


Autowiring types: (Match by Type, Match by Qualifier, Match by Name) @Autowired, @Resource, @Inject

1)Field Autowiring:::

@Component
public class SomeService {
     @Autowired private SomeOtherService someOtherService;
}

you are allowing anyone (in different class outside/inside the Spring container) to create an instance using default constructor (like new SomeService())

2)Constructor Autowiring::

@Component
public class SomeService {
    private final SomeOtherService someOtherService;
    
    @Autowired
    public SomeService(SomeOtherService someOtherService){
        this.someOtherService = someOtherService;
    }
}

the dependencies are clearly identified. There is no way to forget one when testing, or instantiating the object in any other circumstance (like creating the bean instance explicitly in a config class)

the dependencies can be final, which helps with robustness and thread-safety

you don't need reflection to set the dependencies. InjectMocks is still usable, but not necessary. You can just create mocks by yourself and inject them by simply calling the constructor


3)Setter Autowiring::
@Component
public class SomeService {
   private final SomeOtherService someOtherService;

    @Autowired
    protected void setSomeOtherService(SomeOtherService someOtherService) {
        this.someOtherService = someOtherService;
    }
}
Partial dependency: can be injected using setter injection but it is not possible by constructor. Suppose there are 3 properties in a class, having 3 arg constructor and setters methods. In such case, if you want to pass information for only one property, it is possible by setter method only.

Overriding: Setter injection overrides the constructor injection. If we use both constructor and setter injection, IOC container will use the setter injection.

Changes: We can easily change the value by setter injection. It doesn't create a new bean instance always like constructor. So setter injection is flexible than constructor injection.





In short, IoC is a much broader term that includes, but is not limited to, DI.

Inversion of Control (IoC) means that objects do not create other objects on which they rely to do their work. Instead, they get the objects that they need from an outside source (for example, an xml configuration file). Beans are stored in IoC container.

Dependency Injection (DI) means that this is done without the object intervention, usually by a framework component that passes constructor parameters and set properties. Framework job to create dependencies.




Factory Pattern::

// Factory
static class FruitFactory {
    static Fruit create(name, color, firmness) {
        // Additional logic
        return new Fruit(name, color, firmness);
    }
}

// Usage
Fruit fruit = FruitFactory.create("apple", "red", "crunchy");


Builder Pattern:::

// Builder
class FruitBuilder {
    String name, color, firmness;
    FruitBuilder setName(name)         { this.name     = name;     return this; }
    FruitBuilder setColor(color)       { this.color    = color;    return this; }
    FruitBuilder setFirmness(firmness) { this.firmness = firmness; return this; }
    Fruit build() {
        return new Fruit(this); // Pass in the builder
    }
}

// Usage
Fruit fruit = new FruitBuilder()
        .setName("apple")
        .setColor("red")
        .setFirmness("crunchy")
        .build();



JAVA DEVELOPMENT KIT

The Java Development Kit (JDK) is a software development environment used for developing Java applications and applets. It includes the Java Runtime Environment (JRE), an interpreter/loader (Java), a compiler (javac), an archiver (jar), a documentation generator (Javadoc) and other tools needed in Java development.

JAVA RUNTIME ENVIRONMENT

JRE stands for “Java Runtime Environment” and may also be written as “Java RTE.” The Java Runtime Environment provides the minimum requirements for executing a Java application; it consists of the Java Virtual Machine (JVM), core classes, and supporting files.

JAVA VIRTUAL MACHINE

A specification where working of Java Virtual Machine is specified. But implementation provider is independent to choose the algorithm. Its implementation has been provided by Sun and other companies.
An implementation is a computer program that meets the requirements of the JVM specification
Runtime Instance Whenever you write java command on the command prompt to run the java class, an instance of JVM is created.

 Method area, Heap area, Stack area, PC Registers, Native method stacks
 
 Execution Engine --Interpreter,Just-In-Time Compiler(JIT),Garbage Collector
 
 Java Native Interface (JNI) 
 

AOP Advices::

before--Run advice before the method execution. 

after--Run advice after the method execution, regardless of its outcome.

after-returning--Run advice after the method execution, only if the method completes successfully.

after-throwing--Run advice after the method execution, only if the method exits by throwing an exception

around--Run advice before and after the advised method is invoked.


OAuth Types:

Authorization Code::

The application opens a browser to send the user to the OAuth server
The user sees the authorization prompt and approves the app’s request
The user is redirected back to the application with an authorization code in the query string
The application exchanges the authorization code for an access token


Client Credentials::

The Client Credentials grant is used when applications request an access token to access their own resources, not on behalf of a user.


Device Code::

While the device is waiting for the user to complete the authorization flow on their own computer or phone, the device meanwhile begins polling the token endpoint to request an access token.


Refresh Token::

The Refresh Token grant type is used by clients to exchange a refresh token for an access token when the access token has expired.

BeanFactoryPostProcessor operates on bean definition i.e. before the bean instance is getting created it gets executed.

BeanPostProcessor gets executed after bean is instantiated and lifecycle events are called.


n<<m ==> n*2^m -- left shift  Ex: 10<<3 = 10*2^3 = 10*8 =80

n>>m ==> n/2^m -- right shift Ex: 20>>3 = 20/2^3 = 20/8 = 2

For positive number, >> and >>> works same  

For negative number, >>> changes parity bit (MSB) to 0 

The logical && operator doesn't check second condition if first condition is false. It checks second condition only if first one is true.

The bitwise & operator always checks both conditions whether first condition is true or false.


int a=10;  
int b=5;  
int c=20;  
System.out.println(a<b&&a++<c);//false && true = false  
System.out.println(a);//10 because second condition is not checked  
System.out.println(a<b&a++<c);//false && true = false  
System.out.println(a);//11 because second condition is checked 



The logical || operator doesn't check second condition if first condition is true. It checks second condition only if first one is false.

The bitwise | operator always checks both conditions whether first condition is true or false.

The bitwise exclusive OR operator (^) compares each bit of its first operand to the corresponding bit of its second operand. If the bit in one of the operands is 0 and the bit in the other operand is 1, the corresponding result bit is set to 1. Otherwise, the corresponding result bit is set to 0.

If we take XOR of zero and some bit, it will return that bit -> 8^0=8

If we take XOR of two same bits, it will return 0 -> 8^8=0

Virtual machines and containers differ in several ways, but the primary difference is that containers provide a way to virtualize an OS so that multiple workloads can run on a single OS instance. With VMs, the hardware is being virtualized to run multiple OS instances.

JPA defines three inheritance strategies namely, SINGLE_TABLE, TABLE_PER_CLASS and JOINED.


Single table inheritance is default, and table per class is optional so all JPA vendors may not support it. JPA also defines mapped super class concept defined through the @MappedSuperClass annotation. A Mapped Super Class is not a persistent class, but allows a common persistable mapping to be defined for its subclasses.

@Component is a generic stereotype for any Spring-managed component. 

@Repository One of the main uses of this marker is the automatic translation of exceptions using an implementation of PersistenceExceptionTranslator. DAO throws a subclass of a HibernateException (if we are using Hibernate), which is a RuntimeException. Spring will automatically convert these Hibernate specific Runtime Exceptions to Spring specific exception.

spring.jpa.properties.javax.persistence.sharedCache.mode=ENABLE_SELECTIVE

By having it extend PagingAndSortingRepository, we get findAll(Pageable pageable) and findAll(Sort sort) methods for paging and sorting.

Pageable firstPageWithTwoElements = PageRequest.of(0, 2);

Page<Product> allProducts = productRepository.findAll(firstPageWithTwoElements);

we can choose to return either a Page<T>, a Slice<T>, or a List<T> from any of our custom methods returning paginated data.

Page<Product> allProductsSortedByName = productRepository.findAll(Sort.by("name"));

Pageable sortedByPriceDescNameAsc = 
PageRequest.of(0, 5, Sort.by("price").descending().and(Sort.by("name")));
  
  Default logging level is INFO 
  
  log levels -- INFO,DEBUG,TRACE,ERROR,ERROR
 
 logging.level.com.howtodoinjava=DEBUG
 
String is immutable whereas StringBuffer and StringBuilder are mutable classes. StringBuffer is thread-safe and synchronized whereas StringBuilder is not. That's why StringBuilder is faster than StringBuffer. String concatenation operator (+) internally uses StringBuffer or StringBuilder class.
 
 


Unlike Hashtable and Synchronized Map, it never locks whole Map, instead, it divides the map into segments and locking is done on those. Though it performs better if a number of reader threads are greater than the number of writer threads.

ConcurrentHashMap and CopyOnWriteArrayList implementations provide much higher concurrency while preserving thread safety

ConcurrentHashMap does not allow null keys or null values while synchronized HashMap allows one null key.

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



HashMap Index  = hashCode(key) & (n-1)      where n= bucket size or array size

//If you know a solution is not far from the root of the tree:
BFS

//If the tree is very deep and solutions are rare, 
BFS (DFS will take long time. )

//If the tree is very wide:
DFS (BFS will need too much memory)

//If solutions are frequent but located deep in the tree
DFS

//determining whether a path exists between two nodes
DFS

//Finding the shortest path
BFS

























                         