import time
import quicksort

def wrapper( f ):
    def inner( *arg ):
        t1 = time.time()
        funct = f(*arg)
        t2 = time.time()
        print "Time Taken for Function: ["+f.func_name+"] is " + str(t2-t1)
        return funct
    return inner

def foo( num1, num2, string):
    return str(num1)+str(num2)+string
def wait( num ):
    time.sleep(num)
    return num
#foo = 3, in is not callable, foo has to be function?

#print time.time()
#closure = wrapper(foo)
#closure( -2, 3, 'hello' )
#closure2 = wrapper(wait)
#print closure2( 2 )
#closure3 = wrapper( quicksort.


def make_bold(fn):
    return lambda : "<b>" + fn() + "</b>"

def make_italic(fn):
    return lambda : "<i>" + fn() + "</i>"

@make_italic
@make_bold # bold runs on italic of hello(), works backwards
@make_italic
def hello():
    return "hello world"

helloHTML = hello()

print helloHTML

def what_time(fn):
    t1 = time.time()
    t2 = time.time()
    def inner(*arg):
        t = time
        #print "Time Taken for Function: ["+fn.func_name+"] is " + str(t2-t1)
        return str( fn() )#+" Time Taken for function is: "+str(time.time() - t1)

def what_name(fn):
    n = fn.func_name
    args = fn.func_code.co_varnames
    print "The function name is: ["+n+"]. The args are [",
    print args,
    #print "]."
    return "]."#"The function name is: ["+n+"]. The args are ["+args+"]." #fn()

#@what_time
@what_name
def stuff():
    return quicksort.QS(quicksort.c, 0, len(quicksort.c)-1)

#S = stuff()
#print S
