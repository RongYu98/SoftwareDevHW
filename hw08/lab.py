def union( a, b ):
    return [ c
             for c in a
             for d in b
             if c == d ]
#loob at b, whatever's not in b in a, add it into b

setA = {1,5,8,2, 546}
setB = {5,3,8, 13, 2, 23}

def intersect(a, b):
    return [c
            for c in a
            if c not in b]
def intersection( a, b):
    return intersect(a,b) + intersect(b,a)
def setDifference( a, b):
    return intersect(a,b)
def symetricDif( a, b):
    c = setDifference(a,b)
    print c
    d = setDifference(b,a)
    print d
    return union(c,d)
def cartesianProduct(a,b):
    return [ (c,d)
             for c in a
             for d in b]

print cartesianProduct( setA, setB)
#print symetricDif(setA, setB)
#print setDifference(setA, setB )
#print setDifference(setB, setA )
#print intersection(setA, setB)
#print union( setA ,setB )



x = """
def intersection( a b )
set difference
    symetric difference
    cartesian product
    """
