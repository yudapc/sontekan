#instance variable
class Animal
  def initialize(name)
    @name = name
  end

  def name
    puts "He is #{@name}"
  end
end

puts Animal.new("Cihuy").name
