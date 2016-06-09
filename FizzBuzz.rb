



(1..100).each do |x|

  result = ""
	

	if (x % 3 == 0)
		result << "Fizz"
	end

	if (x % 5 == 0)
		result << "Buzz"
	end
 	
 	if x.to_s.start_with?('1')
		result << "Bang"
	end

	if result == ""
		result = x
	end
	puts result

end
