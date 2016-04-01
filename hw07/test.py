def inc(x):
    return x + 1

f = inc

#print f(10)


def h(x):
    return lambda y: x + y
"""
print h(1)
print h(2)
print h(1)(3)
print h(2)(5)

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
