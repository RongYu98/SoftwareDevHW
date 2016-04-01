def inc(x):
    return x + 1

f = inc



#print f(10)

"""
def h(x):
    return lambda y: x + y


Q1: How would you explain to your ducky what this Scheme code does?

(lambda (a b) (+ a b))

Lambda (a b) creates an enviroment, akin to a function, that needs 2 parameters and returns the sum of them.

    
Q2: How would you explain to your ducky what this Scheme code does?

(define foo (lambda (a b) (+ a b)))

I would say that " define foo " creates a function that creates an enviroemnt that requires two parameters, a and b, and returns the sum of those two variables



print h(1)
print h(2)
print h(1)(3)
print h(2)(5)

Q3: Which of the four h() calls above would you say also created closures?
I would say that the third and fourth created closure, because only those two accessed the function within the function, the others just returned references to it, akin to an error report of where the error is 

def f(x):
    def g(y):
        return x + y
    return g

print f(1)(1)
print h(1)
"""

def repeat(str):
    x = ""
    def a(num):
        return (str * num)
    return a

r1 = repeat("hello")
r2 = repeat("goodbye")

print repeat('cool')(3)
print r1(2)
print r2(2)
#print r1 # adress changes each time the test.py is run
#print r1 # adress remains the same when called again
print repeat(10)(10) #100
print repeat(10)("hi") # also works
#print repeat("hi")("10") #nope
