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

JRE stands for ?Java Runtime Environment? and may also be written as ?Java RTE.? The Java Runtime Environment provides the minimum requirements for executing a Java application; it consists of the Java Virtual Machine (JVM), core classes, and supporting files.

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

int value = 15;
assert value >= 20: " Underweight";
System.out.println("value is "+value);

java ?enableassertions Test

Object a=new Object();  -- possible


    abstract class Abc<T> {
	 void add(T t) {

	}

	abstract <E> void cdf(E e);

	public Abc(T e) { // abstract class can have constructor

	}

	public Abc() { // abstract class can have constructor

    	}
    }
    
 ** default methods are only allowed in interfaces    
 
Checked Exception: The classes which directly inherit Throwable class except RuntimeException and Error are known as checked exceptions e.g. IOException, SQLException etc. Checked exceptions are checked at compile-time

Has-A -- Agreegation

Association -- Aggregation(Weak Association, Has-A,Car has a Driver.) and Composition(Strong Association, Part of relationship,Engine is a part of Car)	

We do not use "final" keyword for Aggregation.

"final" keyword is used to represent Composition.

.class files -- byte code

JVM specification that provides Runtime Environment -- JVM is not platform Independent. JVM help to convert byte code to machine code.


The Just-In-Time (JIT) compiler is a component of the runtime environment that improves the performance of Java applications by compiling bytecodes to native machine code at run time.
 

When a method has been compiled, the JVM calls the compiled code of that method directly instead of interpreting it.


Class Loaders -- Bootstrap(rt.jar), Extensions, System(Classpath)

 JVM is called virtual because it provides an interface that does not depend on the underlying operating system and machine hardware.
 
Abstract Factory patterns work around a super-factory which creates other factories. This factory is also called as factory of factories. This type of design pattern comes under creational pattern as this pattern provides one of the best ways to create an object.

Nested Inner class can access any private instance variable of outer class. Like any other instance variable, we can have access modifier private, protected, public and default modifier.

A subclass is class which inherits a method or methods from a superclass.

Static Class Loading: Creating objects and instance using new keyword is known as static class loading. The retrieval of class definition and instantiation of the object is done at compile time.

Dynamic Class Loading: Loading classes use Class.forName() method. Dynamic class loading is done when the name of the class is not known at compile time.

Volatile: The volatile modifier tells the JVM that writes to the field should always be synchronously flushed to memory, and that reads of the field should always read from memory. This means that fields marked as volatile can be safely accessed and updated in a multi-thread application.

Types of Memory areas allocated by the JVM:

1. Classloader: Classloader is a subsystem of JVM that is used to load class files.
2. Class(Method) Area: Class(Method) Area stores per-class structures such as the runtime constant pool, field and method data, the code for methods.
3. Heap: It is the runtime data area in which objects are allocated.
4. Stack: Java Stack stores frames.It holds local variables and partial results, and plays a part in method invocation and return. Each thread has a private JVM stack, created at the same time as thread.
5. Program Counter Register: PC (program counter) register. It contains the address of the Java virtual machine instruction currently being executed.
6. Native Method Stack: It contains all the native methods used in the application.


Abstract method should be public,protected,default cannot be private or static or final


Static Polymorphism also known as compile time polymorphism -- Method Overloading
Dynamic Polymorphism also known as runtime polymorphism -- Method Overriding

we cannot achieve runtime polymorphism by data members. Method is overridden not the data members, so runtime polymorphism can not be achieved by data members.

In Java, all non-static methods are by default virtual functions. Only methods marked with the keyword final, which cannot be overridden, along with private methods, which are not inherited, are non-virtual.


**Co-Variant Return Type**
It is possible to have different return type for a overriding method in child class, but child?s return type should be sub-type of parent?s return type. Overriding method becomes variant with respect to return type. The covariant return type specifies that the return type may vary in the same direction as the subclass.


    class SuperClass {
      SuperClass get() {
      System.out.println("SuperClass");
      return this;
      }
    }
    public class Tester extends SuperClass {
     Tester get() {
       System.out.println("SubClass");
       return this;
     }
     public static void main(String[] args) {
       SuperClass tester = new Tester();
       tester.get();
      }
    }
    
    
    










 
 





          

























                         