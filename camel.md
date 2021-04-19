//CAMEL   

There are at least four different mechanisms by which one Camel route can directly pass data to another. By "directly" I mean without using a network or some form of intermediate storage (file, database). These mechanisms can be grouped according to whether they can pass data between CamelContext instances or not, and whether they are synchronous or asynchronous.

direct -- single CamelContext, synchronous (blocks producer)
SEDA -- single CamelContext, asynchronous (does not block producer)
VM -- multiple CamelContext, asynchronous (does not block producer)
direct-VM -- multiple CamelContext, synchronous (blocks producer)

use direct: for calling normally between endpoints in a camel context
use seda: when you need parallelisation or queues, but dont want to use jms:
use vm: when calling between applications.

***EI Patterns***
pipeline
multicast
Content based Routing  -- choice()
Splitter (.split(body())) (.split(body(),",")) (.split(method(beanName))) 
Aggregation -- AggregationStrategy
Routing slip (.routingSlip(simple(rotingSlipString)))
Dynamic Routing (.dynamicRouter(method(dynamicRouterBean)))



@Body @Headers @Header("") @ExchangeProperties

choice().when(simple(simple statement)).end();  choice().when(method(beanname)).end();

.unmarshal().json(JasonLibrary.Jackson,ClassName.class)

.unmarshal().JacksonXml(ClassName.class)

.unmarshal().csv()

.to({{property from properties file}});

.log("${body}")