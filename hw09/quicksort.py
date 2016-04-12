def qsort(L):
    if len(L) <= 1:
       return L
    pivot = random.choice(L)
    lh = [x for x in L if x < pivot ]
    uh = [x for x in L if x > pivot ]
    return qsort[lh] + pivot + qsort[uh]
    return qsort(lh) + ([pivot]*L.count(pivot)) + qsort(uh)
    return  qsort(lh) + [x for x in L if x == pivot] + qsort(uh)