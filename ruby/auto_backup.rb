# require 'thread'
# require 'logger'
#
# queue = SizedQueue.new(3)
# #queue = Queue.new # goes berzerk
# logger = Logger.new(STDOUT)
#
# Thread.new do
#   item = 0
#   loop do
#     item += 1
#     queue << item
#     logger.info "#{item} produced"
#   end
# end
#
# consumers = 2.times.map do |i|
#   Thread.new do
#     loop do
#       item = queue.pop
#       logger.info "consumed #{item}"
#       sleep item
#     end
#   end
# end
#
# consumers.each(&:join)
#
require 'digest'

path_folder = '/Users/cogati/Downloads/railscast'
list_file_and_folder = Dir["#{path_folder}/**/*"]

old_data = []

list_file_and_folder.each do |stuff|
  puts "----------------------------------------"
  info_stuff = File.stat(stuff)
  size = info_stuff.size
  permission_stuff = info_stuff.world_readable?
  access_number = sprintf("%o", permission_stuff)

  if File.file?(stuff)
    # puts "File: #{stuff}"
    # md5sum = Digest::MD5.file(stuff).to_s
    # puts "md5sum: #{md5sum}"

    new_data = {
      file: stuff,
      md5sum: md5sum,
      size: size,
      permission: access_number
    }

    old_data << new_data
  end

  if File.directory?(stuff)
    # puts "Folder: #{stuff}"
    new_data = {
      folder: stuff,
      md5sum: md5sum,
      size: size,
      permission: access_number
    }
    old_data << new_data
  end

  # puts "Access #{access_number}"
  # puts "Size #{size} bytes"
end


puts old_data
