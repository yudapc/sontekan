#########################################
## RECURSIVELY file and folder with:
##   - Type : File / Folder
##   - md5sum for file
##   - Pemission Access number
##   - Size (bytes)
#########################################

require 'digest'

path_folder = '/Users/cogati/Downloads/railscast'
list_file_and_folder = Dir["#{path_folder}/**/*"]
list_file_and_folder.each do |stuff|
  puts "----------------------------------------"
  info_stuff = File.stat(stuff)
  size = info_stuff.size
  permission_stuff = info_stuff.world_readable?
  access_number = sprintf("%o", permission_stuff)

  if File.file?(stuff)
    puts "File: #{stuff}"
    md5sum = Digest::MD5.file(stuff).to_s
    puts "md5sum: #{md5sum}"
  end

  if File.directory?(stuff)
    puts "Folder: #{stuff}"
  end

  puts "Access #{access_number}"
  puts "Size #{size} bytes"
end
