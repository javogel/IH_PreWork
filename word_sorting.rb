def unscrambler(str)
  str_words = str.split(" ")

  
  str_words.each_index do |x|
   str_words[x] = str_words[x][/\w+/]
   str_words[x].downcase!
  end
  
  str_words.sort!
  puts str_words.join(" ")
    
end



 unscrambler("Have a nice day.")

 unscrambler("Fools fall for foolish follies.")
