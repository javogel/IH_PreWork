#asks for source file
puts "what is the source file"
source_file = gets.chomp

#asks for destination file
puts "what is the destination file"
destination_file = gets.chomp

#declares sourcefile content
source_file_contents = IO.read(source_file)

#replaces content
IO.write(destination_file, source_file_contents)  
