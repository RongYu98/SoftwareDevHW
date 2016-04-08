def QS( data, START, END ):
	start = START
	end = END
	if ( start >= end ):
		print
		return data
		print
	pivot = data[(start + end) / 2]
	data[(start + end) / 2] = data[end]
	data[end] = pivot
	end -= 1
	print "Pivot is",
	print pivot

	b = end
	while (start < end ):
		#print data
		if ( data[start] > pivot ):
			b = data[end]
			data[end] = data[start]
			data[start] = b
			end -= 1
		else:
			start += 1

	if (data[start] < pivot ):
		data[END] = data[start+1]
		data[start+1] = pivot
	else:
		data[END] = data[start]
		data[start] = pivot

	data[end] = pivot
	print data
	# now end and start are the same, both represent where pivot is
        print "end:",
	print end
	print "start:",
	print start

	QS(data, START, end - 1) 
	QS(data, start+1, END)
	
	#return QS(data, START, end - 1) + QS(data, start+1, END)
	#return QS(data, START, (end-1)/2) + QS(data, (end-start)/2, END)
	return data
#[1, 3, 3, 23, 38, 46, 345, 57, 8654, 233]
#[1, 3, 3, 23, 38, 233, 345, 57, 8654, 46]
# then it returns error...
c = [1,3,57,345,38,233,8654,23,46,3]
#print QS(c,0,len(c)-1)
