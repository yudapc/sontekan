require 'benchmark'

n = 1_000_000

class User
  def initialize(level, first_name, last_name)
    @level = level
    @first_name = first_name
    @last_name = last_name
  end

  def roles
    {level: get_level, full_name: full_name}
  end

  def full_name
    "#{@first_name} #{@last_name}"
  end

  def get_level
    levels = []
    10.times do
      levels << "level: #{@level}"
    end
  end

  #########################

  def self.roles(level, first_name, last_name)
    {level: get_level(level), full_name: full_name(first_name, last_name)}
  end

  def self.full_name(first_name, last_name)
    "#{first_name} #{last_name}"
  end

  def self.get_level(level)
    levels = []
    10.times do
      levels << "level: #{level}"
    end
  end
end

Benchmark.bm(26) do |x|
  x.report('Class method:') do
    1.upto(n) do
      User.roles("admin", "Budi", "Susanto")
    end
  end

  x.report('Instance method:') do
    1.upto(n) do
      User.new("admin", "Budi", "Susanto").roles
    end
  end

end
