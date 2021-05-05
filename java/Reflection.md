Reflection is an API which is used to examine or modify the behavior of methods, classes, interfaces at runtime.

The required classes for reflection are provided under java.lang.reflect package.

Reflection gives us information about the class to which an object belongs and also the methods of that class which can be executed by using the object.

Through reflection we can invoke methods at runtime irrespective of the access specifier used with them.


Reflection is used in :::

Junit, Dependency Injection, ORM frameworks, Jackson library, fasterxml librarys etc.,


Accessing class::

i).getClass()  -- Car car=new Car();   Class<Car> carclass=car.getClass();  -- primitives are not supported(compile time exception)

ii).class  -- Class<Car> carclass=Car.class ---  primitives are supported

iii)Class.forName(classname) --- Class<?> carClass=Class.forName(package.Car) 
    least secure way of creating class
    primitives are not supported-- gets runtime exception
    if classname is not present we will get ClassNotFoundException
    we can access inner class using "$" Ex::  Class<?> engineClass=Class.forName(package.Car$Engine)
    
    
? wildcard in Java Genrics


constructor.newInstance(Person.class);  // return persons object

if we created a constructor with parameters, then we ide wont create default constructor

.setAccesible(true) //to access private fields,methods,constructors etc..,


Class.getDeclaredFields() -- Array of fields regardless of access modifiers, Excludes Inherited fields

Class.getFields() -- Array of public fields only, Includes inherited fields

Class.getDeclaredField(fieldName)  Class.getField(fieldName) -- NoSuchFieldException


Synthetic Fields -- Java Compiler generates artificial fields for internal usage. We can cannot see them without Reflection
EX: Values field in Enum

field.get(instance); // to get field value from object

staticField.get(null); //to get static field value 

field.setAccesbile(true) // to access private or package-private fields
 
class.isArray() // boolean

class.getComponentType() // to get type of array		

    
  