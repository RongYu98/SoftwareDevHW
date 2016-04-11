setA = {1,5,8,2, 546}
setB = {5,3,8, 13, 2, 23}

def union( a, b ):
    d = []
    [ d.append(x) for x in a ]
    [ d.append(c)
       for c in b
       if c not in a]       
    return d

def intersection( a, b):
    return [c
	    for c in a
	    if c in b]

def setDifference( a, b):
    #print "a is:",
    return [c
            for c in a
            if c not in b]
    
def symetricDif( a, b):
    c = setDifference(a,b)
    #print c
    d = setDifference(b,a)
    #print d
    return union(c,d)

def cartesianProduct(a,b):
    return [ (c,d)
             for c in a
             for d in b]

print "SetA is:",
print setA
print "SetB is:",
print setB
print

print "Union of A and B:",
print union(setA, setB)
print
setA = {1,5,8,2, 546}
setB = {5,3,8, 13, 2, 23}

print "Cartesian Product",
print cartesianProduct( setA, setB)
print

print "Symetric Difference",
print symetricDif(setA, setB)
print

print "Set Difference of A and B", 
print setDifference(setA, setB )
print

print "Set Difference of B and A",
print setDifference(setB, setA )
print

print "Intersection of A and B",
print intersection(setA, setB)
print
