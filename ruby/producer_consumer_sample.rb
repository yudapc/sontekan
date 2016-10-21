require 'thread'
require 'logger'

queue = SizedQueue.new(3)
#queue = Queue.new # goes berzerk
logger = Logger.new(STDOUT)

Thread.new do
  item = 0
  loop do
    item += 1
    queue << item
    logger.info "#{item} produced"
  end
end

consumers = 2.times.map do |i|
  Thread.new do
    loop do
      item = queue.pop
      logger.info "consumed #{item}"
      sleep item
    end
  end
end

consumers.each(&:join)
