#class variable
class SampleClass
  @@count = 0
  def initialize(name)
    @name ||= name
    @@count += 1
  end

  def run
    puts "#{@name} has count: #{@@count}"
  end
end

puts SampleClass.new("Jhon").run
puts SampleClass.new("Dhoe").run
puts SampleClass.new("Tommy").run
