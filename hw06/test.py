## [ EXPRESSION    FOR LOOPs or IF ELSE LOOPS
#p="myNoobPass1234"

#print [x for x in p]

#print [x for x in "1234"]


#UC="ABCDEFGHIJKLMNOPQRSTUVWXYZ"

#print [ x for x in p if x in UC ]

#print [ 1 if x in UC else 0 for x in p ]

#print [ 1 for x in p if x in UC ]

def goodEnough( p ):
    UC="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    LC= UC.lower()
    Nums = "1234567890"
    arr1 = [ 1 for x in p if x in UC ]
    if ( len(arr1) == 0 ):
        return False
    arr2 = [ 1 for x in p if x in LC ]
    if ( len(arr2) == 0 ):
        return False
    arr3 = [ 1 for x in p if x in Nums ]
    if ( len(arr3) == 0 ):
        return False
    return True
     
def howStrong( string ):
    UC="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    LC= UC.lower()
    Nums = "1234567890"
    NoApl = ".?!&#,;:-_*"

    strength = 0
    i = 0
    
    arr1 = [ 1 for x in string if x in UC ]
    strength += sum(arr1)
    arr2 = [ 1 for x in string if x in LC ]
    strength += sum(arr2)
    arr3 = [ 1 for x in string if x in Nums ]
    strength += sum(arr3)
    arr4 = [ 1 for x in string if x in NoApl ]
    strength += sum(arr4)
    if (strength > 20):
	strength = 20
    return strength/2


print goodEnough("h")
print goodEnough("h1")
print goodEnough("h1A")
print howStrong("IamDW!")	
print howStrong("DWisBetterThanBrown")	
print howStrong("ZeZLeft")	
print howStrong("Woah,greatpassword,bro!")